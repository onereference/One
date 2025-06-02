import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApplicationStatusBadge } from "./application-status-badge";
import { Briefcase, CalendarDays, Building } from "lucide-react";
import { format } from "date-fns";

export type MyApplicationStatus = "Applied" | "Under Review" | "Interview Scheduled" | "Offer Extended" | "Rejected" | "Withdrawn";

export interface MyApplication {
  id: string;
  jobTitle: string;
  agencyName: string;
  appliedDate: string; // Could be ISO string or pre-formatted
  status: MyApplicationStatus;
  interviewDate?: string; // ISO string
}

interface MyApplicationCardProps {
  application: MyApplication;
}

export function MyApplicationCard({ application }: MyApplicationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-lg font-headline">{application.jobTitle}</CardTitle>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                    <Building className="mr-2 h-4 w-4"/> {application.agencyName}
                </CardDescription>
            </div>
            <ApplicationStatusBadge status={application.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          Applied: {application.appliedDate}
        </div>
        {application.status === "Interview Scheduled" && application.interviewDate && (
          <div className="flex items-center text-sm text-green-600 dark:text-green-400">
            <CalendarDays className="mr-2 h-4 w-4" />
            Interview: {format(new Date(application.interviewDate), "PPP 'at' p")}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          View Details / Withdraw
        </Button>
      </CardFooter>
    </Card>
  );
}
