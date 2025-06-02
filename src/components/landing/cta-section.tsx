
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToActionSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          Ready to Transform Your Reference Process?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Join thousands of individuals and hiring agencies who have streamlined
          their reference management with OneReference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/user-type-selection" passHref>
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 w-full sm:w-auto">
              Get Started for Free
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary/80 hover:text-white w-full sm:w-auto">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
