import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, FileText, Users, Briefcase } from "lucide-react";

export default function IndividualDashboardPage() {
  // Mock data
  const stats = [
    { title: "Active Applications", value: "3", icon: FileText, color: "text-primary" },
    { title: "Recommended Jobs", value: "8", icon: Briefcase, color: "text-green-500" },
    { title: "Community Posts", value: "27", icon: Users, color: "text-blue-500" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Individual Dashboard</h1>
        <Link href="/individual/dashboard/find-jobs">
          <Button>
            <Search className="mr-2 h-4 w-4" /> Find New Jobs
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {/* <p className="text-xs text-muted-foreground">+5 from last week</p> */}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/individual/dashboard/find-jobs" className="block">
            <Button variant="outline" className="w-full h-20 text-lg">
              <Search className="mr-2 h-6 w-6" /> Find Jobs
            </Button>
          </Link>
          <Link href="/individual/dashboard/applications" className="block">
            <Button variant="outline" className="w-full h-20 text-lg">
              <FileText className="mr-2 h-6 w-6" /> My Applications
            </Button>
          </Link>
           <Link href="/individual/dashboard/community" className="block">
            <Button variant="outline" className="w-full h-20 text-lg">
              <Users className="mr-2 h-6 w-6" /> Join Community
            </Button>
          </Link>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Recently Applied Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for recent applications list */}
          <div className="space-y-4">
            {[1,2].map(appId => (
               <div key={appId} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                <div>
                  <h3 className="font-semibold">UX Designer at TechCorp</h3>
                  <p className="text-sm text-muted-foreground">Applied 5 days ago - Status: Under Review</p>
                </div>
                <Link href="/individual/dashboard/applications">
                  <Button variant="outline" size="sm">View Details</Button>
                </Link>
              </div>
            ))}
             <p className="text-sm text-muted-foreground text-center py-4">No recent applications.</p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
