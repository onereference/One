
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Add References",
    description: "Create your reference list by adding contact information for your professional references.",
  },
  {
    number: "2",
    title: "Verify & Collect",
    description: "We contact your references and collect feedback through our secure platform.",
  },
  {
    number: "3",
    title: "Share & Manage",
    description: "Share your verified references with potential employers or connect with hiring agencies.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
            Our simple process makes reference management easy for everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="bg-slate-900 border-slate-700 text-center p-6 transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <CardTitle className="text-2xl text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/how-it-works" passHref>
            <Button variant="link" className="text-primary hover:text-primary/90 text-lg">
              Learn More About Our Process <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
