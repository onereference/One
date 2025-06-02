import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Users, PlusCircle } from "lucide-react";

export default function AgencyDashboardPage() {
  // Mock data
  const stats = [
    { title: "Active Job Postings", value: "12", icon: Briefcase, color: "text-primary" },
    { title: "Total Applications", value: "157", icon: Users, color: "text-green-500" },
    { title: "New Applications (24h)", value: "8", icon: Users, color: "text-blue-500" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Agency Dashboard</h1>
        <Link href="/agency/dashboard/post-job">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Post a New Job
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
              {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Job Postings</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for recent job postings list */}
          <div className="space-y-4">
            {[1,2,3].map(jobId => (
               <div key={jobId} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                <div>
                  <h3 className="font-semibold">Senior Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">Posted 2 days ago - 25 Applicants</p>
                </div>
                <Link href={`/agency/dashboard/jobs/${jobId}/applications`}>
                  <Button variant="outline" size="sm">View Applications</Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
             <Link href="/agency/dashboard/jobs">
                <Button variant="link">View All Job Postings</Button>
             </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
