
// Placeholder page for /agency-solutions
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

export default function AgencySolutionsPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">Solutions for Agencies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Streamline your recruitment process, save time, and make better hiring decisions with OneReference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <CardHeader>
              <Zap className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Automated Reference Checking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Reduce manual work with automated requests, reminders, and collection of references.
                Focus on qualified candidates, not administrative tasks.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Centralized Candidate Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Manage all candidate references and related data in one secure, easily accessible platform.
                Improve collaboration within your hiring team.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Enhanced Verification & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Standardize your reference collection process for consistency and improved compliance.
                Gain trustworthy insights into candidate backgrounds.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Data-Driven Hiring Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Utilize analytics and reporting features to understand reference trends and make more informed hiring choices.
                Optimize your recruitment strategy.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/agency-pricing" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Agency Pricing
            </Button>
          </Link>
           <Link href="/contact" passHref className="ml-4">
            <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white">
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
