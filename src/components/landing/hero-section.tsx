import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-radial from-primary/20 to-background dark:from-primary/10 dark:to-background">
      {/* Hero Section */}
      <section className="container max-w-screen-3xl mx-auto px-4 sm:px-6 py-12 md:py-32 h-screen md:h-auto overflow-hidden">
        <div className="relative flex flex-col md:flex-row justify-center items-center h-full">
          {/* Left Content */}
          <div className="md:w-1/2 z-10 flex flex-col justify-center h-full md:h-auto">
            <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-sm text-primary w-fit font-medium mb-4">
              Welcome to OneReference
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Streamline Your
              <br />
              <span className="text-primary">Reference Management</span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md">
              OneReference simplifies the reference process for individuals and hiring agencies, making it easier to
              manage, verify, and share professional references.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-full">
                    <Play size={12} className="text-primary-foreground ml-0.5" />
                  </div>
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content with Illustration and Floating Elements */}
          <div className="md:w-1/2 relative mt-12 md:mt-0 hidden md:block">
            {/* Main Character Illustration */}
            <div className="relative">
              <div className="w-72 h-72 md:w-[450px] md:h-[450px] bg-primary/20 dark:bg-primary/10 rounded-3xl mx-auto"></div>
              <Image
                src="/images/onehero.png"
                alt="Reference Hero Page"
                width={400}
                height={500}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
              />
            </div>

            {/* Floating Elements */}
            {/* Great Designer Tag */}
            <div className="hidden md:block absolute top-0 right-0 md:right-12 bg-background rounded-lg p-2 shadow-md z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Image src="/bman.png" alt="Designer" width={30} height={30} className="rounded-full" />
                </div>
                <div>
                  <p className="text-xs font-medium">Good Doctor</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Tag */}
            <div className="hidden md:block absolute bottom-12 left-0 md:-left-6 bg-background rounded-lg p-3 shadow-md z-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-md flex items-center justify-center">
                <Image src="/nurseman.png" alt="Designer" width={30} height={30} className="rounded-full" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Notification</p>
                  <p className="text-xs font-medium">
                    Please confirm a reference
                    <br />
                    for Tom Zinchenko
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile Tag */}
            <div className="absolute bottom-24 right-4 md:right-0 bg-background rounded-full pl-2 pr-4 py-1 shadow-md flex items-center gap-2 z-10">
              <div className="w-8 h-8 bg-[#ffd280] rounded-full flex items-center justify-center">
                <Image src="/man.png" alt="Gavin" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Gavin Henry</p>
                <p className="text-xs text-gray-500">1m ago</p>
              </div>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-white font-medium ml-1">
                1
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-6 h-6 bg-primary/30 rounded-full opacity-70 z-0"></div>
            <div className="absolute bottom-1/3 right-1/4 w-10 h-12 text-primary opacity-80 z-0">📂</div>
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-primary/20 rounded-full z-0"></div>
            <div className="absolute bottom-0 right-1/3 w-8 h-8 bg-primary/30 rounded-full opacity-60 z-0"></div>
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/20 rounded-full z-0"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
