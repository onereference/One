
"use client";
import { AuthForm } from "@/components/auth/auth-form";
import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { selectedUserType, isLoading, isLoggedIn, userType, onboardingComplete } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn && userType) {
        if (!onboardingComplete) {
          router.push(userType === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
        } else {
          router.push(userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
        }
      } else if (!selectedUserType) {
        router.push("/");
      }
    }
  }, [selectedUserType, isLoading, isLoggedIn, userType, onboardingComplete, router]);
  
  if (isLoading || !selectedUserType || isLoggedIn) { // Also check isLoggedIn to avoid showing form while redirecting
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <AuthForm mode="login" userType={selectedUserType} />
    </div>
  );
}

    