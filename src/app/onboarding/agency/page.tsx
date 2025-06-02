
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
import { db, storage } from '@/lib/firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const agencyOnboardingSchema = z.object({
  agencyName: z.string().min(2, "Agency name is required."),
  agencyLogo: z.any().optional(), 
  agencyWebsite: z.string().url("Invalid URL.").optional().or(z.literal("")),
  location: z.string().min(2, "Location is required."),
  phoneNumber: z.string().min(5, "Phone number is required.").optional(), 
  professionsYouHire: z.string().optional(), 
  aboutYourAgency: z.string().min(10, "Please provide a short description.").max(500, "Description too long."),
});

type AgencyOnboardingValues = z.infer<typeof agencyOnboardingSchema>;

export default function AgencyOnboardingPage() {
  const { currentUser, completeOnboarding, userProfile } = useAuth();
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
    if (!currentUser) {
      toast({ title: "Error", description: "You must be logged in.", variant: "destructive" });
      router.push('/login');
      return;
    }
    form.formState.isSubmitting = true;

    try {
      let logoUrl = "";
      if (values.agencyLogo && values.agencyLogo instanceof File) {
        const logoFile = values.agencyLogo as File;
        const logoRef = ref(storage, `agency_logos/${currentUser.uid}/${logoFile.name}`);
        await uploadBytes(logoRef, logoFile);
        logoUrl = await getDownloadURL(logoRef);
      }

      const agencyData = {
        ...values,
        agencyLogoUrl: logoUrl,
        userId: currentUser.uid,
        // Remove file object from data to be saved in Firestore
        agencyLogo: undefined, 
      };
      
      const agencyDocRef = doc(db, 'agencies', currentUser.uid);
      await setDoc(agencyDocRef, agencyData, { merge: true });
      
      await completeOnboarding(); // This will update userProfile and redirect

      toast({
        title: "Onboarding Complete!",
        description: "Your agency profile has been set up.",
      });
    } catch (error: any) {
      console.error("Agency Onboarding Error:", error);
      toast({ title: "Onboarding Failed", description: error.message || "Could not save agency details.", variant: "destructive" });
    } finally {
        form.formState.isSubmitting = false;
    }
  }

  const handleSkip = async () => {
    if (!currentUser) {
        toast({ title: "Error", description: "You must be logged in to skip.", variant: "destructive" });
        router.push('/login');
        return;
    }
    toast({
      title: "Onboarding Skipped",
      description: "You can complete your profile later from settings.",
      variant: "default"
    });
    await completeOnboarding(); // This updates the user's main profile and redirects
  };
  
  const countries = ["United States", "United Kingdom", "Canada", "Australia", "Germany"];

  if (!userProfile || userProfile.userType !== 'agency') {
    // This check helps prevent individuals from accessing agency onboarding
    // or if profile hasn't loaded yet.
    // Auth context's onAuthStateChanged should also handle redirection if type mismatch.
    if (!currentUser && !useAuth().isLoading) router.push('/login'); // Not logged in and not loading
    // else if (userProfile && userProfile.userType !== 'agency') router.push('/individual/dashboard'); // Wrong type
    return <div className="flex items-center justify-center h-screen"><p>Loading or redirecting...</p></div>;
  }


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
              render={({ field }) => ( // field value will be File object or null
                <FormItem>
                  <FormLabel className="flex items-center"><UploadCloud className="mr-2 h-4 w-4 text-muted-foreground"/>Agency Logo</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} 
                    />
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
              <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={handleSkip} disabled={form.formState.isSubmitting}>
                Skip for Now
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
