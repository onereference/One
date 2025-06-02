import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 bg-primary">
      <div className="container max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Reference Process?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Join thousands of individuals and hiring agencies who have streamlined their reference management with
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
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
