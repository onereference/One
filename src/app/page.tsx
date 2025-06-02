
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, User } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import Image from "next/image";
import { useEffect } from "react";

export default function UserTypeSelectionPage() {
  const router = useRouter();
  const { setSelectedUserType, isLoggedIn, userType, onboardingComplete, isLoading } = useAuth();

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
     return <div className="flex items-center justify-center min-h-screen"><p>Loading...</p></div>;
  }


  const handleSelection = (type: "agency" | "individual") => {
    setSelectedUserType(type);
    router.push("/login"); // Or /signup, but login page handles both cases if not logged in.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-headline tracking-tight text-primary">
          Welcome to Onereference
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate platform connecting talented individuals with innovative agencies. Choose your path to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="items-center">
            <Building className="w-16 h-16 text-primary mb-4" />
            <CardTitle className="text-3xl font-headline">I'm an Agency</CardTitle>
            <CardDescription className="text-center">
              Post job openings, find top talent, and manage your recruitment process seamlessly.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image src="https://placehold.co/600x400.png" alt="Agency illustration" data-ai-hint="team collaboration" width={600} height={400} className="rounded-md mb-6" />
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => handleSelection("agency")}
            >
              Proceed as Agency
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="items-center">
            <User className="w-16 h-16 text-primary mb-4" />
            <CardTitle className="text-3xl font-headline">I'm an Individual</CardTitle>
            <CardDescription className="text-center">
              Discover exciting job opportunities, apply with ease, and track your applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image src="https://placehold.co/600x400.png" alt="Individual professional" data-ai-hint="professional working" width={600} height={400} className="rounded-md mb-6" />
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => handleSelection("individual")}
            >
              Proceed as Individual
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    