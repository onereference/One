
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { UserCircle, UploadCloud, Globe, Phone, Tag, Info, Briefcase, FileText, Linkedin, Link as LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";

const individualOnboardingSchema = z.object({
  // Personal Information
  country: z.string().min(1, "Country is required."),
  city: z.string().min(1, "City is required."),
  firstName: z.string().min(1, "First name is required."),
  middleName: z.string().optional(),
  surname: z.string().min(1, "Surname is required."),
  profilePicture: z.any().optional(),
  workEmail: z.string().email("Invalid email address."),
  nhsProfession: z.enum(["", "Doctor", "Nurse"]).optional(),
  gmcNumber: z.string().optional(),
  nmcNumber: z.string().optional(),
  phoneNumber: z.string().min(5, "Phone number is required.").optional(),

  // Professional Details
  linkedinUrl: z.string().url("Invalid LinkedIn URL.").optional().or(z.literal("")),
  portfolioWebsite: z.string().url("Invalid portfolio URL.").optional().or(z.literal("")),
  professionalTitles: z.string().optional(), // Comma-separated tags
  professionalBio: z.string().min(10, "Bio must be at least 10 characters.").max(1000, "Bio too long.").optional(),

  // Document Uploads
  cv: z.any().optional(),
  certifications: z.any().optional(),
  referenceLetters: z.any().optional(),
  criminalRecordChecks: z.any().optional(),
}).superRefine((data, ctx) => {
    if (data.workEmail && data.workEmail.toLowerCase().includes("@nhs")) {
        if (!data.nhsProfession) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select your profession (Doctor or Nurse).",
                path: ["nhsProfession"],
            });
        } else if (data.nhsProfession === "Doctor" && !data.gmcNumber) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "GMC Number is required for Doctors.",
                path: ["gmcNumber"],
            });
        } else if (data.nhsProfession === "Nurse" && !data.nmcNumber) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "NMC Number is required for Nurses.",
                path: ["nmcNumber"],
            });
        }
    }
});


type IndividualOnboardingValues = z.infer<typeof individualOnboardingSchema>;

export default function IndividualOnboardingPage() {
  const { completeOnboarding, userEmail } = useAuth();
  const { toast } = useToast();
  const [isNhsEmail, setIsNhsEmail] = useState(false);
  
  const form = useForm<IndividualOnboardingValues>({
    resolver: zodResolver(individualOnboardingSchema),
    defaultValues: {
      country: "",
      city: "",
      firstName: "",
      middleName: "",
      surname: "",
      workEmail: userEmail || "",
      phoneNumber: "",
      linkedinUrl: "",
      portfolioWebsite: "",
      professionalTitles: "",
      professionalBio: "",
      nhsProfession: "",
      gmcNumber: "",
      nmcNumber: "",
    },
  });

  const workEmailValue = form.watch("workEmail");
  const nhsProfessionValue = form.watch("nhsProfession");

  useEffect(() => {
    setIsNhsEmail(workEmailValue.toLowerCase().includes("@nhs"));
    if (!workEmailValue.toLowerCase().includes("@nhs")) {
        form.setValue("nhsProfession", "");
        form.setValue("gmcNumber", "");
        form.setValue("nmcNumber", "");
    }
  }, [workEmailValue, form]);


  async function onSubmit(values: IndividualOnboardingValues) {
    console.log("Individual Onboarding Data:", values);
    // TODO: Implement Firebase call to save individual user data and upload files (profile pic, CV, certs) to Firebase Storage.
    // Example:
    // if (values.profilePicture) { /* upload to storage */ }
    // if (values.cv) { /* upload to storage */ }
    // ... etc. for other files
    // await firebase.firestore().collection('individuals').doc(userEmail).set(values);

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    toast({
      title: "Onboarding Complete!",
      description: "Your profile has been set up.",
    });
    completeOnboarding();
  }

  const handleSkip = () => {
    toast({
      title: "Onboarding Skipped",
      description: "You can complete your profile later from settings.",
      variant: "default"
    });
    completeOnboarding();
  };

  const countries = ["United Kingdom", "United States", "Canada", "Australia", "Germany", "India"]; // Placeholder

  return (
    <Card className="w-full">
      <CardHeader className="items-center">
        <UserCircle className="w-12 h-12 text-primary mb-2" />
        <CardTitle className="text-2xl font-headline">Individual Onboarding</CardTitle>
        <CardDescription>Complete your profile to get started. You can skip and fill this in later.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Personal Information Section */}
            <section className="space-y-4 p-4 border rounded-md">
              <h3 className="text-lg font-semibold text-primary flex items-center"><Info className="mr-2 h-5 w-5"/>Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem><FormLabel>First Name</FormLabel><FormControl><Input placeholder="John" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="middleName" render={({ field }) => (
                    <FormItem><FormLabel>Middle Name (Optional)</FormLabel><FormControl><Input placeholder="Michael" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="surname" render={({ field }) => (
                    <FormItem><FormLabel>Surname</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="country" render={({ field }) => (
                    <FormItem><FormLabel className="flex items-center"><Globe className="mr-2 h-4 w-4"/>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select your country" /></SelectTrigger></FormControl>
                        <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="London" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                 <FormField control={form.control} name="profilePicture" render={({ field }) => (
                    <FormItem><FormLabel className="flex items-center"><UploadCloud className="mr-2 h-4 w-4"/>Profile Picture</FormLabel>
                    <FormControl><Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}/></FormControl>
                    <FormDescription>Upload a professional headshot.</FormDescription><FormMessage /></FormItem>
                )}/>
              </div>
              <FormField control={form.control} name="workEmail" render={({ field }) => (
                  <FormItem><FormLabel>Work Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
              {isNhsEmail && (
                <>
                  <FormField control={form.control} name="nhsProfession" render={({ field }) => (
                    <FormItem><FormLabel>NHS Profession</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select NHS Profession" /></SelectTrigger></FormControl>
                        <SelectContent><SelectItem value="Doctor">Doctor</SelectItem><SelectItem value="Nurse">Nurse</SelectItem></SelectContent>
                    </Select><FormMessage /></FormItem>
                  )}/>
                  {nhsProfessionValue === "Doctor" && (
                    <FormField control={form.control} name="gmcNumber" render={({ field }) => (
                        <FormItem><FormLabel>GMC Number</FormLabel><FormControl><Input placeholder="Your GMC Number" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                  )}
                  {nhsProfessionValue === "Nurse" && (
                    <FormField control={form.control} name="nmcNumber" render={({ field }) => (
                        <FormItem><FormLabel>NMC Number</FormLabel><FormControl><Input placeholder="Your NMC Number" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                  )}
                </>
              )}
              <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                <FormItem><FormLabel className="flex items-center"><Phone className="mr-2 h-4 w-4"/>Phone Number (Optional)</FormLabel>
                <FormControl><Input type="tel" placeholder="+44 7700 900000" {...field} /></FormControl>
                <FormDescription>Include country code.</FormDescription><FormMessage /></FormItem>
              )}/>
            </section>

            {/* Professional Details Section */}
            <section className="space-y-4 p-4 border rounded-md">
              <h3 className="text-lg font-semibold text-primary flex items-center"><Briefcase className="mr-2 h-5 w-5"/>Professional Details</h3>
              <FormField control={form.control} name="linkedinUrl" render={({ field }) => (
                <FormItem><FormLabel className="flex items-center"><Linkedin className="mr-2 h-4 w-4"/>LinkedIn URL (Optional)</FormLabel><FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="portfolioWebsite" render={({ field }) => (
                <FormItem><FormLabel className="flex items-center"><LinkIcon className="mr-2 h-4 w-4"/>Portfolio Website (Optional)</FormLabel><FormControl><Input placeholder="https://yourportfolio.com" {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="professionalTitles" render={({ field }) => (
                <FormItem><FormLabel className="flex items-center"><Tag className="mr-2 h-4 w-4"/>Professional Titles</FormLabel>
                <FormControl><Input placeholder="e.g., Senior Developer, Project Manager (comma-separated)" {...field} /></FormControl>
                <FormDescription>Enter your professional titles or roles.</FormDescription><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="professionalBio" render={({ field }) => (
                <FormItem><FormLabel className="flex items-center"><Info className="mr-2 h-4 w-4"/>Professional Bio (Optional)</FormLabel>
                <FormControl><Textarea placeholder="Summarize your experience and skills." className="resize-y min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
              )}/>
            </section>

            {/* Document Uploads Section */}
            <section className="space-y-4 p-4 border rounded-md">
              <h3 className="text-lg font-semibold text-primary flex items-center"><FileText className="mr-2 h-5 w-5"/>Document Uploads</h3>
              <FormField control={form.control} name="cv" render={({ field }) => (
                <FormItem><FormLabel>CV/Resume</FormLabel><FormControl><Input type="file" accept=".pdf,.doc,.docx" onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} /></FormControl><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="certifications" render={({ field }) => (
                <FormItem><FormLabel>Certifications (Optional)</FormLabel><FormControl><Input type="file" multiple accept=".pdf,.jpg,.png" onChange={(e) => field.onChange(e.target.files)} /></FormControl><FormMessage /></FormItem>
              )}/>
               <FormField control={form.control} name="referenceLetters" render={({ field }) => (
                <FormItem><FormLabel>Reference Letters (Optional)</FormLabel><FormControl><Input type="file" multiple accept=".pdf,.doc,.docx" onChange={(e) => field.onChange(e.target.files)} /></FormControl><FormMessage /></FormItem>
              )}/>
              <FormField control={form.control} name="criminalRecordChecks" render={({ field }) => (
                <FormItem><FormLabel>Criminal Record Checks (Optional)</FormLabel><FormControl><Input type="file" accept=".pdf" onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} /></FormControl><FormMessage /></FormItem>
              )}/>
            </section>

            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button type="submit" className="w-full sm:w-auto" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Saving..." : "Save & Continue"}
              </Button>
              <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={handleSkip}>
                Skip for Now
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
