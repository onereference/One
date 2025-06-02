
"use client";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LayoutDashboard, Briefcase, PlusCircle, UserCircle, Settings, BarChart3, FileText } from "lucide-react"; // Added UserCircle, Settings, etc.
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const agencyNavItems = [
  { href: "/agency/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agency/dashboard/jobs", label: "Job Postings", icon: Briefcase },
  { href: "/agency/dashboard/post-job", label: "Post New Job", icon: PlusCircle },
  // TODO: { href: "/agency/dashboard/candidates", label: "Candidates", icon: Users }, // Add when page exists
  { href: "/agency/dashboard/analytics", label: "Analytics", icon: BarChart3 }, // Add when page exists
  { href: "/agency/dashboard/templates", label: "Templates", icon: FileText }, // Add when page exists
  { href: "/agency/dashboard/profile", label: "Profile", icon: UserCircle },
  { href: "/agency/dashboard/settings", label: "Settings", icon: Settings }, // Add when page exists
];

export default function AgencyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, userType, isLoading, onboardingComplete } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn || userType !== 'agency') {
        router.push('/login');
      } else if (!onboardingComplete) {
        router.push('/onboarding/agency');
      }
    }
  }, [isLoggedIn, userType, isLoading, onboardingComplete, router]);

  if (isLoading || !isLoggedIn || userType !== 'agency' || !onboardingComplete) {
    // Show loading only if onboarding is also complete or if it's the initial load
     if (isLoading || (isLoggedIn && userType === 'agency' && !onboardingComplete)) {
        return <div className="flex items-center justify-center h-screen"><p>Loading...</p></div>;
     }
     return null; // Avoid flash of content if redirecting
  }

  return (
    <SidebarProvider defaultOpen={true}>
        <DashboardSidebar navItems={agencyNavItems} userType="agency" />
        <SidebarInset>
          <div className="p-4 md:p-6">
            {children}
          </div>
        </SidebarInset>
    </SidebarProvider>
  );
}

    