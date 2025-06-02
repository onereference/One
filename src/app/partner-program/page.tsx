
// Placeholder page for /partner-program
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Handshake, Zap, Award } from "lucide-react";

export default function PartnerProgramPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">Partner with OneReference</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Collaborate with us to extend the benefits of streamlined reference management to your network and clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-slate-800 border-slate-700 p-6 text-center">
            <CardHeader className="items-center">
              <Handshake className="w-16 h-16 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Referral Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Introduce OneReference to your clients and earn commissions for successful referrals. Ideal for HR consultants and business advisors.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6 text-center">
            <CardHeader className="items-center">
              <Zap className="w-16 h-16 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Integration Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Integrate OneReference with your existing HR tech stack or ATS. Provide seamless experiences for mutual customers.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6 text-center">
            <CardHeader className="items-center">
              <Award className="w-16 h-16 text-primary mb-4" />
              <CardTitle className="text-2xl text-white">Reseller Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Offer OneReference solutions directly to your customer base. Expand your service offerings and generate new revenue streams.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-800 border-slate-700 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 inline-block text-left">
                <li>Generous commission structures and revenue sharing.</li>
                <li>Access to marketing materials and co-marketing opportunities.</li>
                <li>Dedicated partner support and training.</li>
                <li>Early access to new features and product roadmap.</li>
                <li>Opportunity to enhance your value proposition to clients.</li>
            </ul>
            <p className="text-lg text-slate-300 mb-6">
            If you're interested in exploring partnership opportunities, we'd love to chat.
            </p>
            <Link href="/contact" passHref>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Become a Partner
                </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
