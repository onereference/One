
"use client";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LayoutDashboard, Search, FileText, Users, UserCircle, Settings, BarChart3, BookOpen } from "lucide-react"; // Added UserCircle, Settings etc.
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const individualNavItems = [
  { href: "/individual/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/individual/dashboard/find-jobs", label: "Find Jobs", icon: Search },
  { href: "/individual/dashboard/applications", label: "My Applications", icon: FileText },
  // TODO: { href: "/individual/dashboard/references", label: "Reference Page", icon: FileHeart }, // Add when page exists
  { href: "/individual/dashboard/analytics", label: "Analytics", icon: BarChart3 }, // Add when page exists
  { href: "/individual/dashboard/templates", label: "Templates", icon: BookOpen }, // Add when page exists
  { href: "/individual/dashboard/community", label: "Community", icon: Users },
  { href: "/individual/dashboard/profile", label: "Profile", icon: UserCircle },
  { href: "/individual/dashboard/settings", label: "Settings", icon: Settings }, // Add when page exists
];

export default function IndividualDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, userType, isLoading, onboardingComplete } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn || userType !== 'individual') {
        router.push('/login');
      } else if (!onboardingComplete) {
        router.push('/onboarding/individual');
      }
    }
  }, [isLoggedIn, userType, isLoading, onboardingComplete, router]);

  if (isLoading || !isLoggedIn || userType !== 'individual' || !onboardingComplete) {
     if (isLoading || (isLoggedIn && userType === 'individual' && !onboardingComplete)) {
        return <div className="flex items-center justify-center h-screen"><p>Loading...</p></div>;
     }
     return null; // Avoid flash of content if redirecting
  }
  
  return (
    <SidebarProvider defaultOpen={true}>
        <DashboardSidebar navItems={individualNavItems} userType="individual" />
        <SidebarInset>
           <div className="p-4 md:p-6">
            {children}
          </div>
        </SidebarInset>
    </SidebarProvider>
  );
}

    