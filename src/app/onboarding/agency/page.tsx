
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Briefcase, UploadCloud, Globe, Phone, Tag, Info } from "lucide-react";

const agencyOnboardingSchema = z.object({
  agencyName: z.string().min(2, "Agency name is required."),
  agencyLogo: z.any().optional(), // For file upload
  agencyWebsite: z.string().url("Invalid URL.").optional().or(z.literal("")),
  location: z.string().min(2, "Location is required."),
  phoneNumber: z.string().min(5, "Phone number is required.").optional(), // Simplified
  professionsYouHire: z.string().optional(), // Comma-separated tags
  aboutYourAgency: z.string().min(10, "Please provide a short description.").max(500, "Description too long."),
});

type AgencyOnboardingValues = z.infer<typeof agencyOnboardingSchema>;

export default function AgencyOnboardingPage() {
  const { completeOnboarding, userEmail } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<AgencyOnboardingValues>({
    resolver: zodResolver(agencyOnboardingSchema),
    defaultValues: {
      agencyName: "",
      agencyWebsite: "",
      location: "",
      phoneNumber: "",
      professionsYouHire: "",
      aboutYourAgency: "",
    },
  });

  async function onSubmit(values: AgencyOnboardingValues) {
    console.log("Agency Onboarding Data:", values);
    // TODO: Implement Firebase call to save agency data and upload logo to Firebase Storage.
    // Example:
    // if (values.agencyLogo) {
    //   const logoRef = firebase.storage().ref(`agency_logos/${userEmail}-${values.agencyLogo.name}`);
    //   await logoRef.put(values.agencyLogo);
    //   values.agencyLogoUrl = await logoRef.getDownloadURL();
    // }
    // await firebase.firestore().collection('agencies').doc(userEmail).set(values);
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    toast({
      title: "Onboarding Complete!",
      description: "Your agency profile has been set up.",
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
  
  // Placeholder countries
  const countries = ["United States", "United Kingdom", "Canada", "Australia", "Germany"];


  return (
    <Card className="w-full">
      <CardHeader className="items-center">
        <Briefcase className="w-12 h-12 text-primary mb-2" />
        <CardTitle className="text-2xl font-headline">Agency Onboarding</CardTitle>
        <CardDescription>Tell us about your agency. You can skip and complete this later.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="agencyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><Briefcase className="mr-2 h-4 w-4 text-muted-foreground"/>Agency Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Awesome Agency" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agencyLogo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><UploadCloud className="mr-2 h-4 w-4 text-muted-foreground"/>Agency Logo</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} />
                  </FormControl>
                  <FormDescription>Upload your agency's logo (PNG, JPG).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agencyWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><Globe className="mr-2 h-4 w-4 text-muted-foreground"/>Agency Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://youragency.com" {...field} />
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
                  <FormLabel className="flex items-center"><Globe className="mr-2 h-4 w-4 text-muted-foreground"/>Location (Country)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map(country => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><Phone className="mr-2 h-4 w-4 text-muted-foreground"/>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                   <FormDescription>Include country code.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="professionsYouHire"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><Tag className="mr-2 h-4 w-4 text-muted-foreground"/>Professions You Hire</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Nurse, Doctor, Software Engineer (comma-separated)" {...field} />
                  </FormControl>
                  <FormDescription>Enter tags for professions you typically recruit for.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="aboutYourAgency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center"><Info className="mr-2 h-4 w-4 text-muted-foreground"/>About Your Agency</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about your agency's mission and values."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
