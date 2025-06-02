import { CheckCircle } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              OneReference provides a comprehensive solution for managing professional references.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Secure Reference Storage</h3>
                <p className="text-muted-foreground">
                  Store all your professional references in one secure location with easy access and management.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Automated Verification</h3>
                <p className="text-muted-foreground">
                  Streamline the reference checking process with automated verification requests and follow-ups.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Customizable Templates</h3>
                <p className="text-muted-foreground">
                  Create and use custom reference templates tailored to specific roles and industries.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Detailed Analytics</h3>
                <p className="text-muted-foreground">
                  Gain insights into your reference performance with comprehensive analytics and reporting.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Agency Matching</h3>
                <p className="text-muted-foreground">
                  Connect with hiring agencies looking for candidates with your specific skills and references.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Mobile Access</h3>
                <p className="text-muted-foreground">
                  Manage your references on the go with our mobile-friendly platform, accessible from any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
