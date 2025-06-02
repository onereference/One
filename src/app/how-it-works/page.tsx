import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserPlus, FileText, Share2, Building, CheckCircle, BarChart } from "lucide-react"
import Image from "next/image"
import { FAQAccordion, type FAQItem } from "@/components/faq-accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How OneReference Works - Reference Management Made Simple",
  description:
    "Learn how OneReference streamlines the reference process for both individuals and hiring agencies with our easy-to-use platform.",
  keywords: [
    "how OneReference works",
    "reference management",
    "reference process",
    "individual references",
    "hiring process",
  ],
}

export default function HowItWorksPage() {
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
                How OneReference Works
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A simple, powerful platform that transforms how references are managed and verified.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tighter">A Better Way to Handle References</h2>
                <p className="text-muted-foreground">
                  OneReference provides a centralized platform where individuals can manage their professional
                  references and hiring agencies can efficiently verify candidate credentials.
                </p>
                <p className="text-muted-foreground">
                  Our platform eliminates the traditional back-and-forth of reference checking, saving time for everyone
                  involved while ensuring that reference information is accurate, secure, and easily accessible.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-muted/50">
                  <Image
                    alt="OneReference Platform Overview"
                    className="object-cover w-full h-full"
                    height={310}
                    src="/how.png"
                    width={550}
                  />
                </div>
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
                Take control of your professional references and streamline your job application process.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up for OneReference and create your professional profile with your skills, experience, and career
                  information.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Add Your References</h3>
                <p className="text-muted-foreground">
                  Add your professional references to your profile, including their contact information and your
                  relationship with them.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Share With Employers</h3>
                <p className="text-muted-foreground">
                  Share your references with potential employers or agencies with a single click, or let them request
                  access through our platform.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-background rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold mb-4">Benefits for Individuals</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Save Time</p>
                    <p className="text-sm text-muted-foreground">
                      No more repeatedly contacting your references for each job application.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Professional Presentation</p>
                    <p className="text-sm text-muted-foreground">
                      Present your references in a professional, organized format to potential employers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Reference Protection</p>
                    <p className="text-sm text-muted-foreground">
                      Control who can access your references' contact information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Feedback Insights</p>
                    <p className="text-sm text-muted-foreground">
                      Gain insights into how your references are responding (with their permission).
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
                Streamline your reference checking process and make more informed hiring decisions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Create Agency Account</h3>
                <p className="text-muted-foreground">
                  Set up your agency profile with your company details, team members, and hiring needs.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Request References</h3>
                <p className="text-muted-foreground">
                  Request references from candidates or access shared reference profiles with customizable templates.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Analyze & Decide</h3>
                <p className="text-muted-foreground">
                  Review reference feedback, analyze insights, and make informed hiring decisions based on comprehensive
                  data.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-background rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold mb-4">Benefits for Agencies</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Efficiency</p>
                    <p className="text-sm text-muted-foreground">
                      Reduce reference checking time by up to 75% with our streamlined process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Customization</p>
                    <p className="text-sm text-muted-foreground">
                      Create custom reference templates tailored to specific roles and industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Data Insights</p>
                    <p className="text-sm text-muted-foreground">
                      Access analytics and insights to help evaluate candidates more effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Compliance</p>
                    <p className="text-sm text-muted-foreground">
                      Ensure your reference process complies with privacy regulations and best practices.
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
              <h2 className="text-3xl font-serif font-bold tracking-tighter">See OneReference in Action</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Watch a quick demo of how our platform works for both individuals and hiring agencies.
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
