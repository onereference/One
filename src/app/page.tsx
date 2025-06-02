
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import Hero from "@/components/landing/hero-section"; // Corrected import for default export
import { Features } from "@/components/landing/features-section"; // Corrected import
import { HowItWorks } from "@/components/landing/how-it-works-section"; // Corrected import
import { CTA } from "@/components/landing/cta-section"; // Corrected import

export default function LandingPage() {
  const router = useRouter();
  const { isLoggedIn, userType, onboardingComplete, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isLoggedIn && userType) {
      if (!onboardingComplete) {
        router.push(userType === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
      } else {
        router.push(userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
      }
    }
  }, [isLoggedIn, userType, onboardingComplete, isLoading, router]);

  if (isLoading || (isLoggedIn && userType)) {
    // Show loading indicator while checking auth status or redirecting
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  // If not logged in, show the new landing page content
  return (
    <div className="">
      <Hero /> {/* Corrected usage */}
      <Features /> {/* Corrected usage */}
      <HowItWorks /> {/* Corrected usage */}
      <CTA /> {/* Corrected usage */}
      {/* The PageFooter will be part of RootLayout now */}
    </div>
  );
}
