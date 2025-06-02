import type { Metadata } from "next"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Clock, BarChart, Shield, Database, Zap, ArrowRight } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Agency Solutions - OneReference",
  description:
    "Discover how OneReference can streamline your agency's reference checking process and improve hiring outcomes.",
}

interface FAQItem {
  question: string
  answer: string
}

export default function AgencySolutionsPage() {
  const faqItems: FAQItem[] = [
    {
      question: "How quickly can we implement OneReference?",
      answer:
        "Most agencies can be up and running with OneReference in just a few days. Our team will guide you through the setup process and provide training for your team.",
    },
    {
      question: "Can we customize the reference questionnaires?",
      answer:
        "Yes, OneReference allows you to create custom questionnaires tailored to specific roles, industries, and requirements. You can also save templates for future use.",
    },
    {
      question: "How does OneReference integrate with our existing systems?",
      answer:
        "OneReference offers API integration with popular ATS and HRIS platforms. Our team can work with you to set up custom integrations based on your specific needs.",
    },
    {
      question: "Is there a limit to how many reference checks we can run?",
      answer:
        "The number of reference checks depends on your plan. Our Professional plan includes up to 200 checks per month, while our Enterprise plan offers unlimited checks.",
    },
  ]

  return (
    <>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Reference Checking Solutions for Agencies
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Streamline your reference checking process, save time, and make better hiring decisions with
                  OneReference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/request-demo">
                    <Button size="lg">Request a Demo</Button>
                  </Link>
                  <Link href="/pricing#agency">
                    <Button variant="outline" size="lg">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-xl bg-muted/50">
                  <Image src="/placeholder.svg?key=gokse" alt="Agency Dashboard" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Key Benefits</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Discover how OneReference can transform your agency's reference checking process.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Save Time</h3>
                <p className="text-center text-muted-foreground">
                  Reduce reference checking time by up to 70% with automated requests, reminders, and data collection.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Better Insights</h3>
                <p className="text-center text-muted-foreground">
                  Gain deeper insights into candidates with standardized questions and comprehensive analytics.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Team Collaboration</h3>
                <p className="text-center text-muted-foreground">
                  Enable seamless collaboration among your hiring team with shared access to reference data.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Enhanced Security</h3>
                <p className="text-center text-muted-foreground">
                  Protect sensitive reference information with enterprise-grade security and compliance features.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Centralized Storage</h3>
                <p className="text-center text-muted-foreground">
                  Store all reference data in one secure, accessible location for easy retrieval and analysis.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Customization</h3>
                <p className="text-center text-muted-foreground">
                  Create custom templates and workflows tailored to your agency's specific needs and processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our streamlined process makes reference checking simple and efficient.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Request References</h3>
                <p className="text-muted-foreground">
                  Send automated reference requests to candidates or access their existing OneReference profiles with
                  their permission.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Collect Feedback</h3>
                <p className="text-muted-foreground">
                  References complete customized questionnaires through our secure platform, with automated reminders
                  for non-responders.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Analyze Results</h3>
                <p className="text-muted-foreground">
                  Review comprehensive reports and analytics to gain insights into candidates and make informed hiring
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Key Features</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Explore the powerful features designed specifically for recruitment agencies.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Verification Dashboard</h3>
                    <p className="text-muted-foreground">
                      Centralized dashboard to manage and track all reference verification requests and responses in one
                      place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Custom Questionnaires</h3>
                    <p className="text-muted-foreground">
                      Create role-specific reference questionnaires to gather the most relevant information for each
                      position.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Advanced Analytics</h3>
                    <p className="text-muted-foreground">
                      Comprehensive analytics to identify trends, evaluate candidate quality, and improve your hiring
                      process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Team Collaboration</h3>
                    <p className="text-muted-foreground">
                      Collaborate with your hiring team by sharing reference feedback and insights securely within the
                      platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Automated Workflows</h3>
                    <p className="text-muted-foreground">
                      Set up automated reference checking workflows to streamline your process and reduce manual tasks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Integration Capabilities</h3>
                    <p className="text-muted-foreground">
                      Integrate with your existing ATS and HRIS systems for a seamless hiring and onboarding process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Candidate Profiles</h3>
                    <p className="text-muted-foreground">
                      Access comprehensive candidate profiles with verified reference information and feedback
                      summaries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Compliance Tools</h3>
                    <p className="text-muted-foreground">
                      Ensure your reference checking process complies with relevant regulations and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">What Agencies Say</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Hear from recruitment agencies that have transformed their reference checking process with OneReference.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-md border">
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <Image src="/professional-woman-diverse.png" alt="Testimonial" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted">
                      <Image src="/generic-company-logo.png" alt="Company Logo" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Global Recruitment Partners</p>
                      <p className="text-muted-foreground">London, UK</p>
                    </div>
                  </div>
                  <p className="text-xl italic">
                    "OneReference has revolutionized our reference checking process. We've reduced our time spent on
                    references by 70%, improved our placement rates by 30%, and our clients are impressed with the
                    thoroughness of our process."
                  </p>
                  <div className="pt-2">
                    <p className="font-bold">Sarah Thompson</p>
                    <p className="text-muted-foreground">Director of Operations</p>
                  </div>
                  <div className="pt-4">
                    <Link href="/case-studies/global-recruitment-partners">
                      <Button variant="outline" className="flex items-center gap-2">
                        Read Full Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Agency Pricing</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Choose the plan that's right for your agency's size and needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Essential tools for small agencies.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">£49</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Up to 50 reference checks/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>3 team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/sign-up?plan=agency-starter">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-muted-foreground">Advanced features for growing agencies.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">£149</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Up to 200 reference checks/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>10 team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Custom templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/sign-up?plan=agency-professional">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">Custom solutions for large organizations.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Unlimited reference checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>24/7 premium support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact?inquiry=enterprise">
                    <Button className="w-full">Contact Sales</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Get answers to common questions about our agency solutions.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl">
                  Ready to Transform Your Reference Process?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the agencies that have streamlined their reference checking with OneReference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/request-demo">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Get Started
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
