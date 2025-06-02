
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Chrome, Linkedin, Facebook, KeyRound, Smartphone } from "lucide-react"; // Assuming icons

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
  userType: UserType;
}

export function AuthForm({ mode, userType }: AuthFormProps) {
  const { login, signup } = useAuth(); // Use new signup method
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
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API

    if (mode === "signup") {
      toast({
        title: "Account Created!",
        description: "You have successfully signed up. Proceeding to onboarding.",
      });
      signup(userType, values.email); // Pass email for potential prefill
      // signup will handle redirection to onboarding
    } else {
      toast({
        title: "Logged In!",
        description: "Welcome back.",
      });
      login(userType, values.email); // login will check onboarding status
    }
  }

  const pageTitle = mode === "login" ? "Login" : "Sign Up";
  const buttonText = mode === "login" ? "Login" : "Create Account";
  const alternativeActionText = mode === "login" ? "Don't have an account?" : "Already have an account?";
  const alternativeActionLink = mode === "login" ? "/signup" : "/login";

  if (!userType) {
    router.push('/');
    return <p>Redirecting...</p>;
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `Login with ${provider}`,
      description: `Attempting to log in with ${provider}... (Not implemented)`,
    });
    // In a real app, call Firebase auth methods here
    // For now, simulate login and redirect
    // login(userType, `${provider.toLowerCase()}@example.com`); 
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-xl">
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
        <Button variant="outline" onClick={() => handleSocialLogin("MagicLink")}>
          <KeyRound className="mr-2 h-4 w-4" /> Magic Link
        </Button>
      </div>
      <Button variant="outline" className="w-full" onClick={() => handleSocialLogin("Phone")}>
        <Smartphone className="mr-2 h-4 w-4" /> Sign in with Phone
      </Button>

      <div className="text-center text-sm">
        {alternativeActionText}{" "}
        <Link href={alternativeActionLink} className="font-medium text-primary hover:underline">
          {mode === "login" ? "Sign up" : "Login"}
        </Link>
      </div>
       <div className="text-center text-sm">
        <Link href="/" className="font-medium text-muted-foreground hover:text-primary hover:underline">
          Change user type
        </Link>
      </div>
    </div>
  );
}

    