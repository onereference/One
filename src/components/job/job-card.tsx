import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export interface Job {
  id: string;
  title: string;
  agencyName: string;
  agencyLogo?: string;
  location: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship";
  postedDate: string;
  descriptionSnippet: string;
  salaryRange?: string;
}

interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
  showApplyButton?: boolean;
}

export function JobCard({ job, onApply, showApplyButton = true }: JobCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Image 
            src={job.agencyLogo || `https://placehold.co/60x60.png?text=${job.agencyName[0]}`} 
            alt={`${job.agencyName} logo`}
            data-ai-hint="company logo"
            width={60} 
            height={60} 
            className="rounded-md border"
          />
          <div>
            <CardTitle className="text-xl font-headline">{job.title}</CardTitle>
            <CardDescription className="text-sm text-primary">{job.agencyName}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" /> {job.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Briefcase className="mr-2 h-4 w-4" /> {job.jobType}
        </div>
        {job.salaryRange && (
           <div className="flex items-center text-sm text-muted-foreground">
             <span className="font-bold mr-2">$</span> {job.salaryRange}
           </div>
        )}
        <p className="text-sm text-foreground line-clamp-3">
          {job.descriptionSnippet}
        </p>
        <div className="flex items-center text-xs text-muted-foreground pt-2">
          <Clock className="mr-1 h-3 w-3" /> Posted {job.postedDate}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between items-center w-full">
          <div>
            <Badge variant="secondary">{job.jobType}</Badge>
          </div>
          {showApplyButton && onApply && (
            <Button onClick={() => onApply(job.id)} className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
          )}
           {!showApplyButton && (
             <Button variant="outline" disabled>Applied</Button>
           )}
        </div>
      </CardFooter>
    </Card>
  );
}
