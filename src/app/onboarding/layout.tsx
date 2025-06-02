
"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, userType, onboardingComplete, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn || !userType) {
        // If not logged in or no user type, redirect to home/login
        router.push("/");
      } else if (onboardingComplete) {
        // If onboarding is already complete, redirect to dashboard
        router.push(userType === "agency" ? "/agency/dashboard" : "/individual/dashboard");
      }
    }
  }, [isLoggedIn, userType, onboardingComplete, isLoading, router]);

  if (isLoading || !isLoggedIn || !userType || onboardingComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading onboarding...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-muted/40">
      <div className="container max-w-3xl">
        {children}
      </div>
    </div>
  );
}

    