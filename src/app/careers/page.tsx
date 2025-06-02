
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Users, Zap } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Frontend Engineer (React/Next.js)",
    location: "Remote (Global)",
    department: "Engineering",
    type: "Full-time",
    link: "/careers/frontend-engineer",
  },
  {
    title: "Product Marketing Manager",
    location: "London, UK (Hybrid)",
    department: "Marketing",
    type: "Full-time",
    link: "/careers/product-marketing-manager",
  },
  {
    title: "Customer Success Advocate",
    location: "Remote (US Timezones)",
    department: "Customer Support",
    type: "Full-time",
    link: "/careers/customer-success",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl font-bold font-headline mb-6 text-primary">Join Our Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            We're building the future of reference management and looking for passionate, talented individuals to help us on our mission.
          </p>
          <Image 
            src="https://placehold.co/800x350.png/1A202C/FFA500?text=Team+OneReference" 
            alt="Happy and diverse team working together" 
            width={800} 
            height={350} 
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="diverse team working"
          />
        </section>

        {/* Why Work With Us Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-4xl font-bold font-headline text-center mb-10 text-white">Why OneReference?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-center p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-white mb-2">Impactful Work</CardTitle>
              <CardContent><p className="text-slate-400">Shape a product that helps thousands of individuals and agencies.</p></CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center p-6">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-white mb-2">Growth & Learning</CardTitle>
              <CardContent><p className="text-slate-400">Thrive in a dynamic environment with opportunities for professional development.</p></CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-white mb-2">Flexible Culture</CardTitle>
              <CardContent><p className="text-slate-400">We embrace remote and hybrid work, focusing on results and well-being.</p></CardContent>
            </Card>
          </div>
        </section>

        {/* Current Openings Section */}
        <section>
          <h2 className="text-4xl font-bold font-headline text-center mb-10 text-white">Current Openings</h2>
          {jobOpenings.length > 0 ? (
            <div className="space-y-6 max-w-3xl mx-auto">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{job.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</span>
                      <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />{job.department} - {job.type}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={job.link} passHref>
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">View Details & Apply</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-slate-400">
              We don't have any open positions at the moment, but we're always interested in hearing from talented people. 
              Feel free to <Link href="/contact" className="text-primary hover:underline">get in touch</Link>!
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
