import PricingPageClient from "./PricingPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - OneReference",
  description: "Explore OneReference's flexible pricing plans for job seekers and hiring agencies.",
  keywords: ["OneReference pricing", "reference management pricing", "job seeker plans", "agency pricing"],
}

export default function PricingPage() {
  return <PricingPageClient />
}
