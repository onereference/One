
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Basic",
    price: "$49",
    frequency: "/month",
    description: "Ideal for small agencies starting out.",
    features: [
      "Up to 10 active job postings",
      "50 reference checks per month",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    frequency: "/month",
    description: "For growing agencies needing more power.",
    features: [
      "Up to 50 active job postings",
      "200 reference checks per month",
      "Advanced analytics & reporting",
      "Customizable templates",
      "Priority email support",
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    description: "Tailored solutions for large-scale operations.",
    features: [
      "Unlimited job postings",
      "Unlimited reference checks",
      "Dedicated account manager",
      "API access & integrations",
      "Custom SLAs & security reviews",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function AgencyPricingPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">Agency Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find the perfect plan to supercharge your agency's reference management and recruitment process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col bg-slate-800 border-slate-700 ${tier.popular ? 'border-primary shadow-primary/30 shadow-lg' : ''}`}>
              {tier.popular && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold py-1 px-4 rounded-t-md text-center -mb-px relative z-10">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-3xl text-white mb-2">{tier.name}</CardTitle>
                <p className="text-4xl font-bold text-primary">
                  {tier.price}
                  {tier.frequency && <span className="text-base font-normal text-slate-400">{tier.frequency}</span>}
                </p>
                <CardDescription className="text-slate-400 mt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-slate-300">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={tier.cta === "Contact Sales" ? "/contact" : "/signup"} className="w-full">
                  <Button size="lg" className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                    {tier.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 text-slate-400">
          <p>Need a custom solution or have more questions? <Link href="/contact" className="text-primary hover:underline">Contact our sales team</Link>.</p>
        </div>
      </div>
    </div>
  );
}
