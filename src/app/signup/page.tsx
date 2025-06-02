"use client";
import { AuthForm } from "@/components/auth/auth-form";
import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { selectedUserType, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !selectedUserType) {
      router.push("/");
    }
  }, [selectedUserType, isLoading, router]);

  if (isLoading || !selectedUserType) {
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
