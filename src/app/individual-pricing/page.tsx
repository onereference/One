
// Placeholder page for /individual-pricing
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Check } from "lucide-react";

export default function IndividualPricingPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">Individual Plans</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Access essential reference management tools to boost your career.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md bg-slate-800 border-slate-700">
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-3xl text-white mb-2">Free Tier</CardTitle>
              <p className="text-4xl font-bold text-primary">
                $0
                <span className="text-base font-normal text-slate-400">/forever</span>
              </p>
              <CardDescription className="text-slate-400 mt-2">
                Get started with core features at no cost.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Manage up to 5 references</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Request reference verification</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Basic profile page</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Community access</span>
                </li>
              </ul>
               <Link href="/user-type-selection" className="w-full block">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Sign Up for Free
                  </Button>
                </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16 text-slate-400">
          <p>More advanced individual plans with premium features coming soon!</p>
           <p>For now, our platform is free for individual users.</p>
        </div>
      </div>
    </div>
  );
}
