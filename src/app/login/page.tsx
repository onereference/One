
"use client";
import { AuthForm } from "@/components/auth/auth-form";
import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { selectedUserType, isLoading, currentUser, userProfile } = useAuth(); // Use currentUser and userProfile
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (currentUser && userProfile) { // User is logged in and profile exists
        if (!userProfile.onboardingComplete) {
          router.push(userProfile.userType === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
        } else {
          router.push(userProfile.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
        }
      } else if (!selectedUserType && !currentUser) { // Not logged in and no type selected (for fresh visit to /login)
        router.push("/user-type-selection");
      }
      // If currentUser exists but no userProfile, onAuthStateChanged in AuthContext will handle it (e.g., new social signup)
    }
  }, [selectedUserType, isLoading, currentUser, userProfile, router]);
  
  // Show loading if still loading, or if there's no selected user type for the form, or if already logged in and profile loaded
  if (isLoading || !selectedUserType || (currentUser && userProfile)) { 
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
