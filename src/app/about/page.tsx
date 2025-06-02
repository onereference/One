

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, Shield, Clock, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About OneReference
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our mission is to transform how references are managed and verified in the professional world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  OneReference was born out of the shared experiences of professionals navigating complex reference systems in healthcare and beyond. While transitioning between roles, many individuals found themselves tangled in inefficient processes — unanswered calls, outdated paperwork, and slow-moving procedures that hindered progress for both job seekers and hiring teams alike.

                </p>
                <p className="text-muted-foreground">
                  Recognizing that this was a universal challenge across many industries, the founders envisioned a solution that would be simple, secure, and accessible to everyone. In late 2024, this vision became a reality with the help of a skilled development team who understood both the technical challenges and the human needs behind the idea.

                </p>
                <p className="text-muted-foreground">
                  The result was OneReference — a platform designed to streamline how references are requested, received, and managed. What began as a response to personal frustration evolved into a tool that empowers job seekers, hiring managers, and staffing agencies with clear, trackable, and respectful tools for reference checking.

                </p>
                <p className="text-muted-foreground">
                  Rooted in values of trust, confidentiality, and care, OneReference is built with empathy at its core. Every part of the system, from its intuitive design to robust security features, is crafted to support professionals across various sectors with clarity and confidence.

                </p>
                <p className="text-muted-foreground">
                  Today, OneReference serves a growing global community and continues to evolve in response to the changing job market — always staying true to the vision of making professional transitions smoother, faster, and fairer for everyone.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-muted/50">
                  <Image
                    alt="OneReference Team"
                    className="object-cover w-full h-full"
                    height={550}
                    src="/about.png"
                    width={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Our Mission</h2>
              <p className="max-w-[700px] text-muted-foreground">
                We're on a mission to transform the reference process for job seekers and hiring agencies.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empower Job Seekers</h3>
                <p className="text-muted-foreground">
                  We empower job seekers to take control of their professional references, making it easier to manage,
                  update, and share their credentials with potential employers.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Streamline Hiring</h3>
                <p className="text-muted-foreground">
                  We help hiring agencies streamline their reference checking process, saving time and resources while
                  gaining more valuable insights about candidates.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ensure Security</h3>
                <p className="text-muted-foreground">
                  We prioritize the security and privacy of all users, ensuring that sensitive reference information is
                  protected and shared only with authorized parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground">
                These core principles guide everything we do at OneReference.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Integrity</h3>
                <p className="text-center text-muted-foreground">
                  We believe in honesty, transparency, and ethical practices in all our operations.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">User-Centric</h3>
                <p className="text-center text-muted-foreground">
                  We put our users first, designing our platform to meet their needs and exceed their expectations.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Innovation</h3>
                <p className="text-center text-muted-foreground">
                  We continuously innovate to improve our platform and stay ahead of industry needs.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Security</h3>
                <p className="text-center text-muted-foreground">
                  We prioritize the security and privacy of our users' data above all else.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Excellence</h3>
                <p className="text-center text-muted-foreground">
                  We strive for excellence in everything we do, from product development to customer support.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold">Efficiency</h3>
                <p className="text-center text-muted-foreground">
                  We value efficiency and work to save time and resources for all our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Meet the dedicated professionals behind OneReference.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image alt="Team Member" className="object-cover" fill src="/professional-woman-smiling.png" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-primary font-medium">CEO & Co-Founder</p>
                  <p className="mt-2 text-muted-foreground">
                    Former HR executive with 15+ years of experience in talent acquisition and management.
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image alt="Team Member" className="object-cover" fill src="/professional-businessman.png" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-primary font-medium">CTO & Co-Founder</p>
                  <p className="mt-2 text-muted-foreground">
                    Tech innovator with a background in secure data management and platform development.
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image alt="Team Member" className="object-cover" fill src="/professional-woman-glasses.png" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Aisha Patel</h3>
                  <p className="text-primary font-medium">Head of Product</p>
                  <p className="mt-2 text-muted-foreground">
                    Product strategist focused on creating intuitive user experiences and innovative features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl">Join Our Mission</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the reference revolution. Start using OneReference today or join our growing team.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-up">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    View Careers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
