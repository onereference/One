"use client";

import { useParams } from "next/navigation";
import { ApplicationListItem, type Applicant } from "@/components/job/application-list-item";
import { mockAgencyJobs, mockApplicants } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Users, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";


export default function JobApplicationsPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  const { toast } = useToast();

  // Find the job details (mock)
  const job = mockAgencyJobs.find(j => j.id === jobId);
  
  // Use a state for applicants to allow status changes
  const [applicants, setApplicants] = useState<Applicant[]>(mockApplicants);
  const [statusFilter, setStatusFilter] = useState<string | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");


  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold">Job Not Found</h2>
        <p className="text-muted-foreground">The requested job could not be found.</p>
        <Link href="/agency/dashboard/jobs" className="mt-4 inline-block">
            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Jobs</Button>
        </Link>
      </div>
    );
  }
  
  const handleStatusChange = (applicantId: string, newStatus: Applicant['status']) => {
    setApplicants(prevApplicants => 
      prevApplicants.map(app => 
        app.id === applicantId ? { ...app, status: newStatus } : app
      )
    );
    toast({
        title: "Status Updated",
        description: `Applicant status changed to ${newStatus}.`
    });
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesStatus = statusFilter === "all" || applicant.status === statusFilter;
    const matchesSearch = searchTerm === "" || applicant.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });


  return (
    <div className="space-y-6">
      <div>
        <Link href="/agency/dashboard/jobs" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Jobs
        </Link>
        <h1 className="text-3xl font-bold font-headline">Applications for: {job.title}</h1>
        <p className="text-muted-foreground">Manage and review candidates for this role.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Applicants ({filteredApplicants.length})</CardTitle>
            <CardDescription>Total of {applicants.length} candidates have applied.</CardDescription>
          </div>
           <div className="flex items-center gap-2">
            <Input 
                placeholder="Search applicants..." 
                className="w-48"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Reviewed">Reviewed</SelectItem>
                    <SelectItem value="Interviewing">Interviewing</SelectItem>
                    <SelectItem value="Offer Extended">Offer Extended</SelectItem>
                    <SelectItem value="Hired">Hired</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
            </Select>
           </div>
        </CardHeader>
        <CardContent>
          {filteredApplicants.length > 0 ? (
            <div className="space-y-4">
              {filteredApplicants.map((applicant) => (
                <ApplicationListItem key={applicant.id} applicant={applicant} onStatusChange={handleStatusChange} />
              ))}
            </div>
          ) : (
             <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-xl font-semibold">No Applicants Found</h3>
                <p className="mt-1 text-muted-foreground">
                  {statusFilter === "all" && searchTerm === "" ? "There are currently no applicants for this job." : "No applicants match your current filters." }
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
