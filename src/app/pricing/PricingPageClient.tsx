"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPageClient() {
  const [activeTab, setActiveTab] = useState<"individual" | "agency">("individual")

  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-primary/10 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that's right for you or your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex items-center space-x-2 rounded-full bg-muted p-1">
                <button
                  className={`rounded-full px-4 py-2 font-medium transition-all ${
                    activeTab === "individual" ? "bg-background shadow" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("individual")}
                >
                  Individuals
                </button>
                <button
                  className={`rounded-full px-4 py-2 font-medium transition-all ${
                    activeTab === "agency" ? "bg-background shadow" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("agency")}
                >
                  Agencies
                </button>
              </div>

              {/* Individual Plans */}
              {activeTab === "individual" && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                  {/* Free Plan */}
                  <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Free</h3>
                      <p className="text-muted-foreground">Essential features for individuals.</p>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">$0</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Up to 3 references</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic reference management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Email notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Community access</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/sign-up">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                    <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Popular
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Pro</h3>
                      <p className="text-muted-foreground">Advanced features for serious individuals.</p>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">$9.99</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Unlimited references</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom reference templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Reference analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Reference feedback insights</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/sign-up?plan=pro">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Premium Plan */}
                  <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Premium</h3>
                      <p className="text-muted-foreground">Everything you need for career advancement.</p>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">$19.99</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>All Pro features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced analytics dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Agency matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Career coaching session</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Reference optimization</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/sign-up?plan=premium">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Agency Plans */}
              {activeTab === "agency" && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                  {/* Starter Plan */}
                  <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Starter</h3>
                      <p className="text-muted-foreground">Essential tools for small agencies.</p>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">$49</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Up to 50 reference checks/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>3 team members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Email support</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/sign-up?plan=agency-starter">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Professional Plan */}
                  <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                    <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Popular
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Professional</h3>
                      <p className="text-muted-foreground">Advanced features for growing agencies.</p>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">$149</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Up to 200 reference checks/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>10 team members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/sign-up?plan=agency-professional">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
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
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Unlimited reference checks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Unlimited team members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
              )}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Compare Features</h2>
              <p className="max-w-[700px] text-muted-foreground">See which plan is right for your needs.</p>
            </div>

            <div className="overflow-x-auto">
              {activeTab === "individual" && (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-left font-medium">Feature</th>
                      <th className="py-4 px-6 text-center font-medium">Free</th>
                      <th className="py-4 px-6 text-center font-medium">Pro</th>
                      <th className="py-4 px-6 text-center font-medium">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6">Number of References</td>
                      <td className="py-4 px-6 text-center">3</td>
                      <td className="py-4 px-6 text-center">Unlimited</td>
                      <td className="py-4 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Custom Templates</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Reference Analytics</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Priority Support</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Agency Matching</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Career Coaching</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Reference Optimization</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {activeTab === "agency" && (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-left font-medium">Feature</th>
                      <th className="py-4 px-6 text-center font-medium">Starter</th>
                      <th className="py-4 px-6 text-center font-medium">Professional</th>
                      <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6">Monthly Reference Checks</td>
                      <td className="py-4 px-6 text-center">50</td>
                      <td className="py-4 px-6 text-center">200</td>
                      <td className="py-4 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Team Members</td>
                      <td className="py-4 px-6 text-center">3</td>
                      <td className="py-4 px-6 text-center">10</td>
                      <td className="py-4 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Custom Templates</td>
                      <td className="py-4 px-6 text-center">Basic</td>
                      <td className="py-4 px-6 text-center">Advanced</td>
                      <td className="py-4 px-6 text-center">Enterprise-grade</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Analytics Dashboard</td>
                      <td className="py-4 px-6 text-center">Basic</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">API Access</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Custom Integrations</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">Dedicated Account Manager</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Get answers to common questions about our pricing and plans.
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your
                  next billing cycle.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you offer annual billing?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer annual billing with a 20% discount compared to monthly billing. You can select annual
                  billing during signup or switch in your account settings.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Is there a free trial for paid plans?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial for both Pro and Premium plans. No credit card is required to start
                  your trial.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tighter">Enterprise Solutions</h2>
                <p className="text-primary-foreground/90 max-w-[600px]">
                  Need a custom solution for your organization? Our enterprise plans offer advanced features, dedicated
                  support, and custom integrations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Custom integrations with your existing HR systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Advanced security features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Custom reporting and analytics</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" className="w-full min-[400px]:w-auto">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-primary-foreground/10">
                  <img
                    alt="Enterprise Dashboard"
                    className="object-cover w-full h-full opacity-90"
                    height={310}
                    src="/placeholder.svg?key=qpmpv"
                    width={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  )
}
