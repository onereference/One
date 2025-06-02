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

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string().optional(),
}).refine(data => {
  // If confirmPassword exists, it must match password
  if (data.confirmPassword !== undefined) {
    return data.password === data.confirmPassword;
  }
  return true; // No confirmPassword, so no validation needed here
}, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Path to show error on
});


interface AuthFormProps {
  mode: "login" | "signup";
  userType: UserType;
}

export function AuthForm({ mode, userType }: AuthFormProps) {
  const { login } = useAuth();
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (mode === "signup") {
      // Simulate successful signup
      toast({
        title: "Account Created!",
        description: "You have successfully signed up.",
      });
      // For signup, redirect to login or directly log in
      login(userType); 
    } else {
      // Simulate successful login
      toast({
        title: "Logged In!",
        description: "Welcome back.",
      });
      login(userType);
    }
  }

  const pageTitle = mode === "login" ? "Login" : "Sign Up";
  const buttonText = mode === "login" ? "Login" : "Create Account";
  const alternativeActionText = mode === "login" ? "Don't have an account?" : "Already have an account?";
  const alternativeActionLink = mode === "login" ? "/signup" : "/login";

  if (!userType) {
    router.push('/'); // Redirect if userType is not set
    return <p>Redirecting...</p>;
  }

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-xl">
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
