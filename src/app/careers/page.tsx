import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Globe, CheckCircle, Clock, FileText, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at OneReference | Join Our Team",
  description:
    "Explore career opportunities at OneReference and be part of a team that is revolutionizing the reference checking process.",
  openGraph: {
    title: "Careers at OneReference | Join Our Team",
    description:
      "Explore career opportunities at OneReference and be part of a team that is revolutionizing the reference checking process.",
    url: "https://onereference.com/careers",
    siteName: "OneReference",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OneReference Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <>
    
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Be part of a company that is transforming the reference checking process for job seekers and agencies.
              </p>
            </div>
          </div>
        </section>

        {/* Why OneReference Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Why OneReference?</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Discover the benefits of working at OneReference and how we support our employees.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Impactful Work</h3>
                <p className="text-center text-muted-foreground">
                  Make a real difference in the lives of job seekers and hiring professionals.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Collaborative Culture</h3>
                <p className="text-center text-muted-foreground">
                  Work with a talented and supportive team that values collaboration and innovation.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Growth Opportunities</h3>
                <p className="text-center text-muted-foreground">
                  Advance your career with opportunities for professional development and growth.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Competitive Benefits</h3>
                <p className="text-center text-muted-foreground">
                  Enjoy a comprehensive benefits package, including health insurance, paid time off, and more.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Flexible Work Environment</h3>
                <p className="text-center text-muted-foreground">
                  Maintain a healthy work-life balance with flexible work arrangements.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Meaningful Mission</h3>
                <p className="text-center text-muted-foreground">
                  Contribute to a mission-driven company that is making a positive impact on the world of work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Open Positions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Explore our current job openings and find the perfect fit for your skills and experience.
              </p>
            </div>

            <div className="flex justify-center items-center py-12">
              <div className="text-center max-w-md">
                <h3 className="text-xl font-bold mb-4">We are not currently hiring</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in joining our team. While we don't have any open positions at the moment,
                  we're always looking for talented individuals.
                </p>
                <p className="mb-6">Please check back later or submit your resume for future consideration.</p>
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Employee Benefits</h2>
              <p className="max-w-[700px] text-muted-foreground">
                We offer a comprehensive benefits package to support our employees' well-being and success.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Health Insurance</h3>
                <p className="text-center text-muted-foreground">
                  Comprehensive health, dental, and vision insurance plans.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Paid Time Off</h3>
                <p className="text-center text-muted-foreground">
                  Generous paid time off policy for vacation, sick leave, and holidays.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Professional Development</h3>
                <p className="text-center text-muted-foreground">
                  Opportunities for professional development, training, and conferences.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Retirement Plan</h3>
                <p className="text-center text-muted-foreground">
                  401(k) retirement plan with company matching contributions.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Employee Assistance Program</h3>
                <p className="text-center text-muted-foreground">
                  Access to confidential counseling and support services.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Performance Bonuses</h3>
                <p className="text-center text-muted-foreground">Performance-based bonuses and recognition programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl">Ready to Join Our Team?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our open positions and take the next step in your career with OneReference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    View Openings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

 
    </>
  )
}
