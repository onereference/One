
"use client";
import { AuthForm } from "@/components/auth/auth-form";
import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { selectedUserType, isLoading, isLoggedIn, userType } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn && userType) { // If already logged in (e.g. signed up and page reloaded), redirect
        router.push(userType === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
      } else if (!selectedUserType) {
        router.push("/");
      }
    }
  }, [selectedUserType, isLoading, isLoggedIn, userType, router]);

  if (isLoading || !selectedUserType || isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <AuthForm mode="signup" userType={selectedUserType} />
    </div>
  );
}

    