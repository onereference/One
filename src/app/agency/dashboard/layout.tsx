"use client";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LayoutDashboard, Briefcase, PlusCircle, FileText } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const agencyNavItems = [
  { href: "/agency/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agency/dashboard/jobs", label: "My Jobs", icon: Briefcase },
  { href: "/agency/dashboard/post-job", label: "Post New Job", icon: PlusCircle },
  // Example: { href: "/agency/dashboard/applications", label: "All Applications", icon: FileText },
];

export default function AgencyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, userType, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn || userType !== 'agency') {
        router.push('/login');
      }
    }
  }, [isLoggedIn, userType, isLoading, router]);

  if (isLoading || !isLoggedIn || userType !== 'agency') {
    return <div className="flex items-center justify-center h-screen"><p>Loading...</p></div>;
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
