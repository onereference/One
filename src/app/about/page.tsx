
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users, Zap, Target, ShieldCheck, Lock, Eye, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold font-headline mb-6 text-primary">About OneReference</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            We are dedicated to revolutionizing the way professional references are managed, making the process transparent, efficient, and secure for everyone.
          </p>
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Diverse team collaborating" 
            width={800} 
            height={400} 
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="diverse team realistic people"
          />
        </section>

        {/* Our Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-headline mb-4 text-white">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-4">
                To empower individuals and organizations by transforming the reference checking process into a seamless, trustworthy, and insightful experience. We believe in fostering connections built on verified credibility.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><Target className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" /><span>Provide a secure and centralized platform for reference management.</span></li>
                <li className="flex items-start"><Target className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" /><span>Automate and streamline verification to save time and reduce bias.</span></li>
                <li className="flex items-start"><Target className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" /><span>Offer actionable insights through data and analytics.</span></li>
              </ul>
            </div>
            <div className="text-center">
              <Image 
                src="https://placehold.co/500x350.png" 
                alt="Abstract image representing mission focus" 
                width={500} 
                height={350} 
                className="rounded-lg shadow-lg mx-auto"
                data-ai-hint="target goal success"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold font-headline mb-10 text-white">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", description: "Upholding the highest standards of honesty and ethical conduct in all our operations." },
              { icon: Zap, title: "Innovation", description: "Continuously improving and innovating to provide the best solutions for our users." },
              { icon: Users, title: "User-Centricity", description: "Putting our users' needs at the heart of everything we design and build." },
              { icon: Lock, title: "Security", description: "Prioritizing data protection and privacy with state-of-the-art security measures." },
              { icon: Eye, title: "Transparency", description: "Fostering open communication and clear processes for all stakeholders." },
              { icon: Handshake, title: "Collaboration", description: "Working together with individuals and agencies to build a better ecosystem." },
            ].map(value => (
              <Card key={value.title} className="bg-slate-800 border-slate-700 p-6">
                <CardHeader className="items-center">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="text-center py-12 bg-primary rounded-lg">
          <h2 className="text-3xl font-bold font-headline mb-4 text-primary-foreground">Join Our Journey</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Whether you're an individual looking to advance your career or an agency seeking top talent, OneReference is here to support you.
          </p>
          <div className="space-x-4">
            <Link href="/user-type-selection" passHref>
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100">Get Started</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary/80 hover:border-primary/80">Contact Us</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
