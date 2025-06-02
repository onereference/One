"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockAgencyJobs } from "@/lib/mock-data";
import { Eye, Edit3, Trash2, PlusCircle, BarChart3 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";


export default function AgencyJobsPage() {
  const { toast } = useToast();

  const handleDeleteJob = (jobId: string, jobTitle: string) => {
    // Simulate delete
    console.log("Deleting job", jobId);
    toast({
        title: "Job Deleted",
        description: `Job "${jobTitle}" has been deleted.`,
        variant: "destructive"
    });
    // In a real app, update state or refetch jobs
  };


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">My Job Postings</h1>
        <Link href="/agency/dashboard/post-job">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Post New Job
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Your Jobs</CardTitle>
          <CardDescription>View, edit, or delete your job postings. Track applicants for each role.</CardDescription>
        </CardHeader>
        <CardContent>
          {mockAgencyJobs.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Posted Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAgencyJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{new Date(job.postedDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={job.status === 'Active' ? 'default' : job.status === 'Paused' ? 'secondary' : 'outline'}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.applicantCount}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Link href={`/agency/dashboard/jobs/${job.id}/applications`}>
                        <Button variant="ghost" size="icon" title="View Applicants">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                       <Button variant="ghost" size="icon" title="Analytics (Placeholder)">
                          <BarChart3 className="h-4 w-4" />
                       </Button>
                      <Button variant="ghost" size="icon" title="Edit Job (Placeholder)">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" title="Delete Job">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the job posting "{job.title}" and all related applications.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteJob(job.id, job.title)} className="bg-destructive hover:bg-destructive/90">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12">
                <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-xl font-semibold">No Jobs Posted Yet</h3>
                <p className="mt-1 text-muted-foreground">Get started by posting your first job opening.</p>
                 <Link href="/agency/dashboard/post-job" className="mt-4 inline-block">
                    <Button>Post a Job</Button>
                 </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
