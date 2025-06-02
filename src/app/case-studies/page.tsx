import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, CheckCircle, BarChart, FileText, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies - OneReference",
  description: "Discover how organizations have transformed their reference checking process with OneReference.",
}

export default function CaseStudiesPage() {
  return (
    <>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">Case Studies</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover how organizations have transformed their reference checking process with OneReference.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tighter">The OneReference Story</h2>
                <p className="text-muted-foreground">
                  OneReference was born out of frustration with the traditional reference checking process. Our founders
                  experienced firsthand the challenges of managing references during job searches and hiring processes.
                </p>
                <p className="text-muted-foreground">The inspiration came from several pain points:</p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>The need to repeatedly send references for different job applications</li>
                  <li>Reference providers receiving forms that were difficult to fill out</li>
                  <li>The inability to keep references organized for future use</li>
                  <li>Time wasted on manual follow-ups with references</li>
                  <li>Inconsistent reference feedback formats making comparison difficult</li>
                </ul>
                <p className="text-muted-foreground">
                  In 2023, our team set out to create a solution that would benefit both job seekers and hiring agencies
                  by streamlining the entire reference process from start to finish.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-muted/50">
                  <Image
                    alt="OneReference Team"
                    className="object-cover w-full h-full"
                    height={310}
                    src="/modern-office-team-meeting.png"
                    width={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Featured Case Study</h2>
              <p className="max-w-[700px] text-muted-foreground">
                See how Global Recruitment Partners transformed their hiring process with OneReference.
              </p>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-md border">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src="/office-meeting.png" alt="Case Study" fill className="object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">Recruitment Agency</span>
                    <span>•</span>
                    <span>London, UK</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Global Recruitment Partners Reduces Reference Checking Time by 70%
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Learn how this leading recruitment agency streamlined their reference checking process, improved
                    candidate experience, and increased placement rates using OneReference.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">70% Time Saved</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">30% More Placements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">95% Satisfaction</span>
                    </div>
                  </div>
                  <Link href="/case-studies/global-recruitment-partners">
                    <Button className="flex items-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Case Studies */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">More Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Explore how different organizations have benefited from OneReference.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-48">
                  <Image src="/modern-tech-office.png" alt="Case Study" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">Tech Company</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    TechCorp Streamlines Hiring with Automated Reference Checks
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    How a fast-growing tech company reduced time-to-hire by 40% and improved quality of hires.
                  </p>
                  <Link href="/case-studies/techcorp">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-48">
                  <Image src="/healthcare-abstract.png" alt="Case Study" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">Healthcare</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Global Health Improves Reference Verification Compliance</h3>
                  <p className="text-muted-foreground mb-4">
                    How a healthcare provider achieved 100% compliance with reference verification requirements.
                  </p>
                  <Link href="/case-studies/global-health">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?key=dhuyj" alt="Case Study" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">Financial Services</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">FinServe Bank Enhances Reference Quality and Insights</h3>
                  <p className="text-muted-foreground mb-4">
                    How a financial institution improved hiring decisions with better reference data.
                  </p>
                  <Link href="/case-studies/finserve-bank">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Real Results</h2>
              <p className="max-w-[700px] text-muted-foreground">
                See the impact OneReference has had across different organizations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">65%</h3>
                <p className="text-muted-foreground">Average reduction in reference checking time</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">40%</h3>
                <p className="text-muted-foreground">Increase in reference response rate</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">25%</h3>
                <p className="text-muted-foreground">Improvement in quality of hire</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">98%</h3>
                <p className="text-muted-foreground">Customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">What Our Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Hear directly from the organizations that have transformed their reference checking process.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary font-bold text-lg">
                      J
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">James Wilson</p>
                    <p className="text-sm text-muted-foreground">HR Director, TechCorp</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "OneReference has completely transformed our reference checking process. What used to take weeks now
                  takes days, and the quality of information we receive is much better. Our hiring managers love the
                  insights they get from the platform."
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary font-bold text-lg">
                      S
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Talent Acquisition Manager, Global Health</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "In healthcare, thorough reference checking is critical. OneReference has helped us achieve 100%
                  compliance with our verification requirements while making the process much more efficient. The
                  customizable templates are a game-changer."
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary font-bold text-lg">
                      M
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, Recruitment Partners</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a recruitment agency, we've seen a 40% increase in efficiency since implementing OneReference. The
                  analytics and insights have improved our hiring decisions significantly, and our clients are impressed
                  with the thoroughness of our process."
                </p>
              </div>
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
                  Join the organizations that have streamlined their reference checking with OneReference.
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
                    Sign Up Free
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
