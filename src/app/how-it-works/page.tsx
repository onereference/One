
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, CheckSquare, Share2 } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "1. Add References",
      description: "Easily create your comprehensive reference list by adding contact information for your professional connections. Our intuitive interface makes this step quick and straightforward.",
      icon: Lightbulb,
    },
    {
      title: "2. Verify & Collect Feedback",
      description: "We securely contact your references and gather valuable feedback through our standardized, secure platform, ensuring confidentiality and authenticity.",
      icon: CheckSquare,
    },
    {
      title: "3. Share & Manage",
      description: "Once verified, share your professional references with potential employers or connect directly with hiring agencies. Manage all your references in one place.",
      icon: Share2,
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">
            How OneReference Works
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our streamlined process simplifies reference management for everyone involved, from individuals to large agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 p-6 text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-slate-800 border-slate-700 p-8">
          <CardTitle className="text-3xl text-center text-primary mb-6">More Details</CardTitle>
          <CardContent className="space-y-4 text-slate-300">
            <p>
              <strong>For Individuals:</strong> Take control of your professional narrative. Compile your references, get them verified, and present a polished, credible profile to potential employers. Our platform helps you track requests and manage who sees your information.
            </p>
            <p>
              <strong>For Agencies:</strong> Speed up your hiring process. Request, verify, and manage candidate references efficiently. Reduce administrative overhead and make faster, more informed hiring decisions with our reliable system.
            </p>
            <p>
              Our platform is built with security and privacy at its core, ensuring all data is handled responsibly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
