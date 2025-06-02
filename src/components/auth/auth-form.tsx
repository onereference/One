
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth, type UserType } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Chrome, Linkedin, Facebook, KeyRound, Smartphone } from "lucide-react";
import { auth, db } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider, // For LinkedIn, though it's more complex and often needs custom setup
  signInWithPopup,
  sendPasswordResetEmail, // For Magic Link (passwordless) or password reset
  RecaptchaVerifier, 
  signInWithPhoneNumber 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string().optional(),
}).refine(data => {
  if (data.confirmPassword !== undefined) {
    return data.password === data.confirmPassword;
  }
  return true;
}, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

interface AuthFormProps {
  mode: "login" | "signup";
  userType: UserType; // This is the selectedUserType from AuthContext passed as a prop
}

export function AuthForm({ mode, userType }: AuthFormProps) {
  const authContext = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: mode === "signup" ? "" : undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.formState.isSubmitting = true;
    try {
      if (mode === "signup") {
        if (!userType) {
          toast({ title: "Error", description: "User type not selected. Please select a user type first.", variant: "destructive" });
          router.push("/user-type-selection");
          form.formState.isSubmitting = false;
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const firebaseUser = userCredential.user;
        
        // Create user profile document in Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        await setDoc(userDocRef, {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          userType: userType,
          onboardingComplete: false,
          createdAt: serverTimestamp(),
        });
        // The onAuthStateChanged listener in AuthContext will pick this up and redirect to onboarding.
        toast({
          title: "Account Created!",
          description: "You have successfully signed up. Proceeding to onboarding.",
        });

      } else { // Login mode
        await signInWithEmailAndPassword(auth, values.email, values.password);
        // The onAuthStateChanged listener in AuthContext will handle fetching profile and redirection.
        toast({
          title: "Logged In!",
          description: "Welcome back.",
        });
      }
    } catch (error: any) {
      console.error("Firebase Auth Error:", error);
      toast({
        title: "Authentication Failed",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
        form.formState.isSubmitting = false;
    }
  }

  const pageTitle = mode === "login" ? "Login" : "Sign Up";
  const buttonText = mode === "login" ? "Login" : "Create Account";
  const alternativeActionText = mode === "login" ? "Don't have an account?" : "Already have an account?";
  const alternativeActionLink = mode === "login" ? "/signup" : "/login";

  if (!userType && !authContext.isLoading) { // Ensure not to redirect during initial load
    router.push('/user-type-selection');
    return <p>Redirecting to user type selection...</p>;
  }
  
  const handleSocialLogin = async (providerName: string) => {
    let provider;
    switch (providerName) {
      case "Google":
        provider = new GoogleAuthProvider();
        break;
      case "Facebook":
        provider = new FacebookAuthProvider();
        break;
      // LinkedIn with Firebase is tricky and often requires a custom solution or Cloud Functions.
      // This is a simplified stub.
      case "LinkedIn":
        toast({ title: "LinkedIn Login", description: "LinkedIn login is complex with Firebase direct SDK. Placeholder.", variant: "default" });
        // provider = new OAuthProvider('linkedin.com'); // This often requires more setup
        return; 
      default:
        toast({ title: "Error", description: "Unknown provider", variant: "destructive" });
        return;
    }

    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      
      // Check if user exists in Firestore, if not, create profile (especially for first-time social login)
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        if (!userType) {
            toast({ title: "User Type Needed", description: "Please select a user type before completing social sign-up.", variant: "destructive" });
            // Potentially sign out the Firebase user and redirect
            await firebaseSignOut(auth);
            router.push('/user-type-selection');
            return;
        }
        await setDoc(userDocRef, {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          userType: userType, // Use the prop `userType` which is the selectedUserType
          onboardingComplete: false,
          createdAt: serverTimestamp(),
        });
         toast({ title: "Social Sign-up Complete!", description: "Proceeding to onboarding."});
      } else {
         toast({ title: "Social Login Successful!", description: "Welcome back." });
      }
      // onAuthStateChanged will handle redirection
    } catch (error: any) {
      console.error("Social Login Error:", error);
      toast({ title: "Social Login Failed", description: error.message, variant: "destructive" });
    }
  };
  
  const handleMagicLink = async () => {
    const email = form.getValues("email");
    if (!email) {
      toast({ title: "Email Required", description: "Please enter your email to receive a magic link.", variant: "destructive" });
      return;
    }
    try {
      // For a true magic link, you'd use sendSignInLinkToEmail
      // For password reset as "magic link":
      await sendPasswordResetEmail(auth, email);
      toast({ title: "Password Reset Email Sent", description: "If an account exists for this email, a password reset link has been sent." });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handlePhoneSignIn = () => {
    // Phone Sign-In requires more setup (RecaptchaVerifier, UI for code input)
    // This is a placeholder.
    toast({ title: "Phone Sign-In", description: "Phone Sign-In is not fully implemented in this prototype." });
    // Example structure (incomplete):
    // const phoneNumber = prompt("Enter phone number with country code:");
    // if (phoneNumber) {
    //   const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' });
    //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //     .then((confirmationResult) => { /* ... */ })
    //     .catch((error) => { /* ... */ });
    // }
  };


  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-xl">
      <div id="recaptcha-container" /> {/* For phone auth if implemented */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary font-headline">
          {pageTitle} as {userType === "agency" ? "an Agency" : "an Individual"}
        </h1>
        <p className="text-muted-foreground">
          {mode === "login" ? "Welcome back!" : "Create your account to get started."}
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {mode === "signup" && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Processing..." : buttonText}
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={() => handleSocialLogin("Google")}>
          <Chrome className="mr-2 h-4 w-4" /> Google
        </Button>
        <Button variant="outline" onClick={() => handleSocialLogin("LinkedIn")}>
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Button>
        <Button variant="outline" onClick={() => handleSocialLogin("Facebook")}>
          <Facebook className="mr-2 h-4 w-4" /> Facebook
        </Button>
        <Button variant="outline" onClick={handleMagicLink}>
          <KeyRound className="mr-2 h-4 w-4" /> Magic Link
        </Button>
      </div>
      <Button variant="outline" className="w-full" onClick={handlePhoneSignIn}>
        <Smartphone className="mr-2 h-4 w-4" /> Sign in with Phone
      </Button>

      <div className="text-center text-sm">
        {alternativeActionText}{" "}
        <Link href={alternativeActionLink} className="font-medium text-primary hover:underline">
          {mode === "login" ? "Sign up" : "Login"}
        </Link>
      </div>
       <div className="text-center text-sm">
        <Link href="/user-type-selection" className="font-medium text-muted-foreground hover:text-primary hover:underline">
          Change user type
        </Link>
      </div>
    </div>
  );
}
