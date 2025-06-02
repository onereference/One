
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CallToActionSection } from "@/components/landing/cta-section";

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
    <div className="bg-slate-900">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CallToActionSection />
      {/* The PageFooter will be part of RootLayout now */}
    </div>
  );
}
