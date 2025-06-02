
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long.").max(1000, "Message too long."),
  inquiryType: z.enum(["general", "support", "sales", "partnership"]),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    console.log("Contact Form Data:", values);
    // TODO: Implement Firebase call (e.g., save to a 'contact-messages' collection in Firestore)
    // or send an email via a Firebase Function.
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center"><Send className="mr-2 h-6 w-6 text-primary"/>Send Us a Message</CardTitle>
              <CardDescription className="text-slate-400">Fill out the form and we'll get in touch.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" /></FormControl><FormMessage /></FormItem>
                  )}/>
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" /></FormControl><FormMessage /></FormItem>
                  )}/>
                  <FormField control={form.control} name="inquiryType" render={({ field }) => (
                    <FormItem><FormLabel>Inquiry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger className="bg-slate-700 border-slate-600 text-white"><SelectValue placeholder="Select inquiry type" /></SelectTrigger></FormControl>
                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                          <SelectItem value="general" className="hover:!bg-slate-700 focus:!bg-slate-700">General Inquiry</SelectItem>
                          <SelectItem value="support" className="hover:!bg-slate-700 focus:!bg-slate-700">Technical Support</SelectItem>
                          <SelectItem value="sales" className="hover:!bg-slate-700 focus:!bg-slate-700">Sales & Demo</SelectItem>
                          <SelectItem value="partnership" className="hover:!bg-slate-700 focus:!bg-slate-700">Partnerships</SelectItem>
                        </SelectContent>
                      </Select><FormMessage /></FormItem>
                  )}/>
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Regarding..." {...field} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" /></FormControl><FormMessage /></FormItem>
                  )}/>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message here..." {...field} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]" /></FormControl><FormMessage /></FormItem>
                  )}/>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <CardTitle className="text-xl text-white mb-4">Our Office</CardTitle>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-primary" /> 123 New Kings Road, London, SW6 4LZ, United Kingdom</p>
              </div>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <CardTitle className="text-xl text-white mb-4">Email Us</CardTitle>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-primary" /> General: info@onereference.com</p>
                <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-primary" /> Support: support@onereference.com</p>
                <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-primary" /> Sales: sales@onereference.com</p>
              </div>
            </Card>
             <Card className="bg-slate-800 border-slate-700 p-6">
              <CardTitle className="text-xl text-white mb-4">Call Us</CardTitle>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-primary" /> Main Line: +44 12 3456 7890</p>
                <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-primary" /> Sales: +44 12 3456 7891</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
