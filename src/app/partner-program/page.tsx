import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { Handshake, Globe, BarChart, Users, CheckCircle, ArrowRight, Award } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Partner Program - OneReference",
  description:
    "Join the OneReference Partner Program to grow your business and provide enhanced reference management solutions to your clients.",
}

interface FAQItem {
  question: string
  answer: string
}

export default function PartnersPage() {
  const faqItems: FAQItem[] = [
    {
      question: "What are the requirements to become a partner?",
      answer:
        "Requirements vary by partner type, but generally include a proven track record in your industry, alignment with our values, and a commitment to promoting OneReference solutions.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application review process typically takes 1-2 weeks. After your application is approved, we'll schedule an onboarding call to get you started.",
    },
    {
      question: "What kind of support do partners receive?",
      answer:
        "Partners receive dedicated support from our partner success team, access to marketing materials, product training, and regular updates on new features and improvements.",
    },
    {
      question: "How are commissions and payments handled?",
      answer:
        "Commission structures vary by partner type and tier. Payments are typically processed monthly, and partners have access to a dashboard to track referrals and commissions.",
    },
  ]

  return (
    <>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Partner With OneReference
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Join our partner program to grow your business and provide enhanced reference management solutions to
                your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg">Become a Partner</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Partner Types</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Explore the different ways you can partner with OneReference.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Referral Partners</h3>
                <p className="text-muted-foreground mb-4">
                  Refer clients to OneReference and earn commission on successful referrals. Ideal for consultants, HR
                  professionals, and industry influencers.
                </p>
                <Link href="/partners/referral">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integration Partners</h3>
                <p className="text-muted-foreground mb-4">
                  Integrate OneReference with your existing software solutions to provide enhanced functionality to your
                  clients. Perfect for HR tech providers and ATS platforms.
                </p>
                <Link href="/partners/integration">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reseller Partners</h3>
                <p className="text-muted-foreground mb-4">
                  Resell OneReference solutions to your clients and earn recurring revenue. Designed for recruitment
                  agencies, HR consultancies, and business service providers.
                </p>
                <Link href="/partners/reseller">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Partner Benefits</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Discover the advantages of partnering with OneReference.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Revenue Opportunities</h3>
                <p className="text-center text-muted-foreground">
                  Earn competitive commissions and create new revenue streams for your business.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Expanded Offering</h3>
                <p className="text-center text-muted-foreground">
                  Enhance your product or service portfolio with cutting-edge reference management solutions.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Marketing Support</h3>
                <p className="text-center text-muted-foreground">
                  Access co-marketing opportunities, including joint webinars, content, and events.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Dedicated Support</h3>
                <p className="text-center text-muted-foreground">
                  Receive personalized support from our partner success team to help you grow.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Market Expansion</h3>
                <p className="text-center text-muted-foreground">
                  Reach new markets and customer segments through our established platform.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Strategic Relationship</h3>
                <p className="text-center text-muted-foreground">
                  Build a long-term strategic partnership with a leader in reference management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Application Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif font-bold tracking-tighter">Become a Partner</h2>
                  <p className="text-muted-foreground">
                    Join our growing network of partners and start offering innovative reference management solutions to
                    your clients.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Why Partner With Us</h3>
                  <p className="text-muted-foreground">
                    OneReference was founded to address the inefficiencies in the reference checking process. Our team
                    recognized the challenges faced by both job seekers and hiring agencies:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                    <li>Time-consuming manual reference checks</li>
                    <li>Difficulty in collecting and managing reference information</li>
                    <li>Inconsistent reference feedback formats</li>
                    <li>Challenges in verifying reference authenticity</li>
                    <li>Limited ability to reuse references for multiple applications</li>
                  </ul>
                  <p className="text-muted-foreground">
                    By partnering with us, you can help your clients overcome these challenges and streamline their
                    reference management process.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Partner Success Stories</h3>
                  <div className="bg-background rounded-lg p-4 border">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                        <Image src="/diverse-company-team.png" alt="Partner Logo" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold">HR Solutions Ltd</p>
                        <p className="text-sm text-muted-foreground">Integration Partner</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Partnering with OneReference has allowed us to offer a complete HR solution to our clients. Our
                      revenue has increased by 30% since becoming a partner."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Ready to get started?</p>
                      <p className="text-sm text-muted-foreground">Fill out the application form to begin.</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-md border">
                <h3 className="text-xl font-bold mb-6">Partner Application Form</h3>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Work email
                      </label>
                      <Input id="email" type="email" placeholder="name@company.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone number
                      </label>
                      <Input id="phone" type="tel" placeholder="+44 20 1234 5678" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company name
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-medium">
                        Company website
                      </label>
                      <Input id="website" placeholder="https://www.example.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="partner-type" className="text-sm font-medium">
                        Partner type
                      </label>
                      <select
                        id="partner-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select partner type</option>
                        <option value="referral">Referral Partner</option>
                        <option value="integration">Integration Partner</option>
                        <option value="reseller">Reseller Partner</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Why do you want to partner with OneReference?
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business and how you'd like to partner with us"
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        By submitting this form, I agree to OneReference's{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>
                        .
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Partner FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Get answers to common questions about our partner program.
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
                  Ready to Partner With Us?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our partner program today and start growing your business with OneReference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Apply Now
                </Button>
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Contact Partner Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}
