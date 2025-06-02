import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Users,
  Search,
  Shield,
  CheckCircle,
  Clock,
  BarChart,
  Mail,
  Smartphone,
  Globe,
  Database,
  Zap,
  Award,
} from "lucide-react"

import { FAQAccordion, type FAQItem } from "@/components/faq-accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - OneReference",
  description: "Explore the powerful features of OneReference for individuals and hiring agencies.",
  keywords: ["OneReference features", "reference management features", "individual tools", "hiring agency tools"],
}

export default function FeaturesPage() {
  const faqItems: FAQItem[] = [
    {
      question: "Is my reference information secure?",
      answer:
        "Yes, we take security seriously. All data is encrypted, and you control who has access to your references' contact information.",
    },
    {
      question: "How do my references provide feedback?",
      answer:
        "References receive a secure link via email where they can complete a questionnaire about your work experience. The process is simple and mobile-friendly.",
    },
    {
      question: "Can I use OneReference for different types of jobs?",
      answer:
        "OneReference is designed to work for all industries and job types. You can create different reference lists for different career paths.",
    },
    {
      question: "How much does OneReference cost?",
      answer:
        "We offer a range of pricing plans to suit different needs. Individuals can start with a free basic plan, while agencies can choose from our professional and enterprise tiers based on their hiring volume and feature requirements. Visit our pricing page for detailed information.",
    },
    {
      question: "Can I integrate OneReference with our existing HR systems?",
      answer:
        "Yes, OneReference offers API integration with popular ATS and HRIS platforms. Our enterprise plan includes dedicated support for custom integrations.",
    },
  ]

  return (
    <>


      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover the tools and capabilities that make OneReference the leading reference management platform.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Core Features</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our platform offers a comprehensive set of tools for both individuals and hiring agencies.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Reference Management</h3>
                <p className="text-center text-muted-foreground">
                  Organize and manage all your professional references in one secure place with easy access and updates.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Agency Verification</h3>
                <p className="text-center text-muted-foreground">
                  Streamlined verification process for agencies to efficiently check and validate candidate references.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Smart Matching</h3>
                <p className="text-center text-muted-foreground">
                  Connect individuals with agencies based on profession, skills, and reference quality for better job
                  opportunities.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Secure Data</h3>
                <p className="text-center text-muted-foreground">
                  Enterprise-grade security and encryption to protect sensitive reference information and personal data.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Custom Templates</h3>
                <p className="text-center text-muted-foreground">
                  Create and use custom reference templates tailored to specific roles, industries, and requirements.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Time-Saving</h3>
                <p className="text-center text-muted-foreground">
                  Automate reference requests and follow-ups to save valuable time in your hiring or job application
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Individuals Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">For Individuals</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Tools designed specifically to help individuals manage their professional references.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Automated Reference Requests</h3>
                    <p className="text-muted-foreground">
                      Send professional reference requests with just a few clicks, including customizable templates and
                      follow-up reminders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Reference Analytics</h3>
                    <p className="text-muted-foreground">
                      Gain insights into your reference performance with detailed analytics on response rates, feedback
                      quality, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mobile Access</h3>
                    <p className="text-muted-foreground">
                      Manage your references on the go with our mobile-friendly platform, accessible from any device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Career Community</h3>
                    <p className="text-muted-foreground">
                      Connect with other professionals in your field, share experiences, and get advice on reference
                      management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Reference Repository</h3>
                    <p className="text-muted-foreground">
                      Store all your reference information in one secure location, organized by job, industry, or
                      relationship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Reference Optimization</h3>
                    <p className="text-muted-foreground">
                      Get recommendations on how to improve your reference selection and presentation to potential
                      employers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Agencies Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">For Hiring Agencies</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Powerful tools to streamline the reference checking process and make better hiring decisions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Verification Dashboard</h3>
                    <p className="text-muted-foreground">
                      Centralized dashboard to manage and track all reference verification requests and responses in one
                      place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Custom Questionnaires</h3>
                    <p className="text-muted-foreground">
                      Create role-specific reference questionnaires to gather the most relevant information for each
                      position.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                    <p className="text-muted-foreground">
                      Comprehensive analytics to identify trends, evaluate candidate quality, and improve your hiring
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Team Collaboration</h3>
                    <p className="text-muted-foreground">
                      Collaborate with your hiring team by sharing reference feedback and insights securely within the
                      platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Automated Workflows</h3>
                    <p className="text-muted-foreground">
                      Set up automated reference checking workflows to streamline your process and reduce manual tasks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Integration Capabilities</h3>
                    <p className="text-muted-foreground">
                      Integrate with your existing ATS and HRIS systems for a seamless hiring and onboarding process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">See Our Features in Action</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Take a closer look at how OneReference can transform your reference process.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl bg-[#d1dbff] max-w-4xl">
                {/* Video Thumbnail with Play Button Overlay */}
                <div className="relative aspect-video">
                  {/* YouTube Embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/wC5JQIaxCUI?rel=0"
                    title="Futuristic part 2 by CYRUS NG YU THANG Moe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Get answers to common questions about using OneReference.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl">
                  Ready to Transform Your Reference Process?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of individuals and agencies who have streamlined their reference management with
                  OneReference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-up">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Get Started for Free
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Schedule a Demo
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
