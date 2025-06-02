
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
        // If no user type is selected, redirect to the selection page
        router.push("/user-type-selection");
      }
    }
  }, [selectedUserType, isLoading, isLoggedIn, userType, onboardingComplete, router]);
  
  if (isLoading || !selectedUserType || isLoggedIn) { 
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] py-12"> {/* Adjusted min-height */}
      <AuthForm mode="login" userType={selectedUserType} />
    </div>
  );
}
