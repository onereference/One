
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Welcome to OneReference
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mt-4 mb-6 !leading-tight">
              Streamline Your <br /> Reference Management
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              OneReference simplifies the reference process for individuals and
              hiring agencies, making it easier to manage, verify, and share
              professional references.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/user-type-selection" passHref>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/how-it-works" passHref>
                <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white w-full sm:w-auto">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0">
            <Image
              src="https://placehold.co/600x450.png/1A202C/FFFFFF?text=Reference+Process"
              alt="Reference management process"
              width={600}
              height={450}
              className="rounded-lg shadow-2xl"
              data-ai-hint="professional reference call"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white p-3 rounded-lg shadow-xl text-slate-800 w-52">
                <p className="text-xs text-slate-500">Notification</p>
                <p className="text-sm font-semibold">Please confirm a reference for Tom Zinner.</p>
            </div>
             <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-white p-3 rounded-lg shadow-xl text-slate-800 w-40">
                <p className="text-sm font-semibold">Good Doctor ⭐⭐⭐⭐⭐</p>
                <p className="text-xs text-slate-500">David H., 1m ago</p>
            </div>
             <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-xl text-center">
                <p className="text-sm font-bold text-white">REFERENCE</p>
                <p className="text-lg font-bold text-primary">CONFIRMATION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
