
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BarChartBig, Users2, Smartphone, FileText, GitFork, ShieldCheck, MessageSquare, Search } from "lucide-react";

const featuresList = [
  {
    icon: ShieldCheck,
    title: "Secure Reference Storage",
    description: "Safely store all your professional references in one centralized and encrypted location with robust access controls and management tools.",
    category: "Core Platform"
  },
  {
    icon: GitFork,
    title: "Automated Verification Workflows",
    description: "Streamline the entire reference checking process with automated verification requests, reminders, and follow-ups to save time and effort.",
    category: "Efficiency"
  },
  {
    icon: FileText,
    title: "Customizable Templates",
    description: "Create and utilize custom reference request templates and questionnaires tailored to specific roles, industries, or company requirements.",
    category: "Customization"
  },
  {
    icon: BarChartBig,
    title: "Detailed Analytics & Reporting",
    description: "Gain valuable insights into your reference performance, turnaround times, and feedback trends with comprehensive analytics and visual reports.",
    category: "Insights"
  },
  {
    icon: Users2,
    title: "Agency & Candidate Matching",
    description: "For agencies, find candidates with specific skills and verified references. For individuals, get matched with agencies looking for your profile.",
    category: "Connectivity"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Access",
    description: "Manage, request, and provide references on the go with our fully responsive, mobile-friendly platform, accessible from any device, anywhere.",
    category: "Accessibility"
  },
  {
    icon: MessageSquare,
    title: "Integrated Communication",
    description: "Communicate securely with references and candidates directly through the platform, keeping all interactions organized and logged.",
    category: "Core Platform"
  },
  {
    icon: Search,
    title: "Advanced Search & Filtering",
    description: "Quickly find specific references, candidates, or job postings using powerful search and filtering capabilities within your dashboard.",
    category: "Efficiency"
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">
            Features of OneReference
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the powerful tools and functionalities that make OneReference the leading solution for professional reference management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 flex flex-col hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <feature.icon className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-2xl text-white mb-1">{feature.title}</CardTitle>
                    <span className="text-xs text-primary font-medium uppercase">{feature.category}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
