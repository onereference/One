"use client";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LayoutDashboard, Search, FileText, Users } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const individualNavItems = [
  { href: "/individual/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/individual/dashboard/find-jobs", label: "Find Jobs", icon: Search },
  { href: "/individual/dashboard/applications", label: "My Applications", icon: FileText },
  { href: "/individual/dashboard/community", label: "Community", icon: Users },
];

export default function IndividualDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, userType, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn || userType !== 'individual') {
        router.push('/login');
      }
    }
  }, [isLoggedIn, userType, isLoading, router]);

  if (isLoading || !isLoggedIn || userType !== 'individual') {
     return <div className="flex items-center justify-center h-screen"><p>Loading...</p></div>;
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
