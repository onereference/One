
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BarChartBig, Users2, Smartphone, FileText, GitFork } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Secure Reference Storage",
    description: "Store all your professional references in one secure location with easy access and management.",
  },
  {
    icon: BarChartBig,
    title: "Detailed Analytics",
    description: "Gain insights into your reference performance with comprehensive analytics and reporting.",
  },
  {
    icon: GitFork, // Using GitFork as a stand-in for Automated Verification icon
    title: "Automated Verification",
    description: "Streamline the reference checking process with automated verification requests and follow-ups.",
  },
  {
    icon: Users2,
    title: "Agency Matching",
    description: "Connect with hiring agencies looking for candidates with your specific skills and references.",
  },
  {
    icon: FileText,
    title: "Customizable Templates",
    description: "Create and use custom reference templates tailored to specific roles and industries.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Manage your references on the go with our mobile-friendly platform, accessible from any device.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            OneReference provides a comprehensive solution for managing
            professional references.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:shadow-xl hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
