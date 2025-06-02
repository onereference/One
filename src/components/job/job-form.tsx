
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


const jobFormSchema = z.object({
  title: z.string().min(5, "Job title must be at least 5 characters."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  requirements: z.string().min(10, "Requirements must be at least 10 characters."),
  qualifications: z.string().min(10, "Qualifications must be at least 10 characters."),
  location: z.string().min(2, "Location must be at least 2 characters."),
  jobType: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

// This can be passed as a prop or fetched from a server
const defaultValues: Partial<JobFormValues> = {
  title: "",
  description: "",
  requirements: "",
  qualifications: "",
  location: "",
  jobType: "Full-time",
};

export function JobForm() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: JobFormValues) {
    // TODO: Implement Firebase call to save job posting data to Firestore
    // Example: await firebase.firestore().collection('jobs').add(data);
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    console.log(data);
    toast({
      title: "Job Posted!",
      description: `The job "${data.title}" has been successfully posted.`,
    });
    router.push("/agency/dashboard/jobs"); // Redirect to jobs list or dashboard
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Post a New Job</CardTitle>
        <CardDescription>Fill in the details below to create a new job posting.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., New York, NY or Remote" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <FormControl>
                     <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                     </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a detailed description of the job role, responsibilities, and what makes your company a great place to work."
                      className="resize-y min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List the essential skills, experience, and qualifications required for this role. Use bullet points for clarity."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qualifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Qualifications</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List any desirable but not essential qualifications, skills, or experience."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Posting Job..." : "Post Job"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
