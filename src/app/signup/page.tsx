
"use client";
import { AuthForm } from "@/components/auth/auth-form";
import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { selectedUserType, isLoading, currentUser, userProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (currentUser && userProfile) { // User is logged in and profile exists
        if (!userProfile.onboardingComplete) {
          router.push(userProfile.userType === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
        } else {
          router.push(userProfile.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
        }
      } else if (!selectedUserType && !currentUser) { // Not logged in and no type selected
        router.push("/user-type-selection");
      }
    }
  }, [selectedUserType, isLoading, currentUser, userProfile, router]);

  if (isLoading || !selectedUserType || (currentUser && userProfile)) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
      <AuthForm mode="signup" userType={selectedUserType} />
    </div>
  );
}
