"use client";

import { JobCard, type Job } from "@/components/job/job-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { mockJobs } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FindJobsPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState<string | "all">("all");

  // Simulate already applied jobs
  const [appliedJobIds, setAppliedJobIds] = useState<Set<string>>(new Set(["2"]));


  const handleApply = (jobId: string) => {
    // Simulate application process
    console.log(`Applying for job ${jobId}`);
    setAppliedJobIds(prev => new Set(prev).add(jobId));
    toast({
      title: "Application Submitted!",
      description: `You have successfully applied for job ID: ${jobId}.`,
    });
  };
  
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                job.agencyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                job.descriptionSnippet.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter ? job.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
      const matchesJobType = jobTypeFilter !== "all" ? job.jobType === jobTypeFilter : true;
      return matchesSearchTerm && matchesLocation && matchesJobType;
    });
  }, [searchTerm, locationFilter, jobTypeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 bg-card rounded-lg shadow">
        <div>
          <h1 className="text-3xl font-bold font-headline">Find Your Next Opportunity</h1>
          <p className="text-muted-foreground">Browse through thousands of job openings.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search jobs, companies..." 
            className="w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
        <Input 
          placeholder="Filter by location (e.g., Remote, New York)" 
          className="md:flex-1"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
          <SelectTrigger className="md:w-[180px]">
            <SelectValue placeholder="Filter by Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Job Types</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="md:w-auto w-full">
          <Filter className="mr-2 h-4 w-4" /> More Filters
        </Button>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onApply={handleApply} 
              showApplyButton={!appliedJobIds.has(job.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-xl font-semibold">No Jobs Found</h3>
          <p className="mt-1 text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
