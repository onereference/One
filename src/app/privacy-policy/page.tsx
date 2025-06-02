import type { Metadata } from "next"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - OneReference",
  description: "Learn about how OneReference collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
   
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Privacy Policy
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Last updated:{" "}
                <span className="font-medium text-foreground">
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">Introduction</h2>
                  <p>
                    OneReference ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our website
                    and use our services.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy
                    Policy, please do not access the site or use our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    Information We Collect
                  </h2>
                  <p className="font-medium text-lg">We collect information in the following ways:</p>

                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <h3 className="text-xl font-bold text-primary/90 mb-3">Personal Information You Provide</h3>
                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-1 my-3">
                      <li className="marker:text-primary">Register for an account</li>
                      <li className="marker:text-primary">Sign up for our newsletter</li>
                      <li className="marker:text-primary">Complete forms on our website</li>
                      <li className="marker:text-primary">Participate in surveys or contests</li>
                      <li className="marker:text-primary">Contact us</li>
                      <li className="marker:text-primary">Add references to your profile</li>
                      <li className="marker:text-primary">Request reference checks</li>
                    </ul>
                    <p>This information may include:</p>
                    <ul className="list-disc pl-6 space-y-1 my-3">
                      <li className="marker:text-primary">Name</li>
                      <li className="marker:text-primary">Email address</li>
                      <li className="marker:text-primary">Phone number</li>
                      <li className="marker:text-primary">Mailing address</li>
                      <li className="marker:text-primary">Professional information</li>
                      <li className="marker:text-primary">Reference contact information</li>
                      <li className="marker:text-primary">Employment history</li>
                      <li className="marker:text-primary">Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <h3 className="text-xl font-bold text-primary/90 mb-3">Information Automatically Collected</h3>
                    <p>
                      When you visit our website, we may automatically collect certain information about your device,
                      including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 my-3">
                      <li className="marker:text-primary">IP address</li>
                      <li className="marker:text-primary">Browser type</li>
                      <li className="marker:text-primary">Operating system</li>
                      <li className="marker:text-primary">Device information</li>
                      <li className="marker:text-primary">Usage data</li>
                      <li className="marker:text-primary">Cookies and similar technologies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    How We Use Your Information
                  </h2>
                  <p>We may use the information we collect for various purposes, including to:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Provide, maintain, and improve our services</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Process transactions and send related information</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Send administrative information, such as updates, security alerts, and support messages</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Respond to your comments, questions, and requests</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Facilitate reference checks and verifications</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Communicate with you about products, services, offers, and events</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Monitor and analyze trends, usage, and activities</div>
                    </li>
                    <li className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Detect, prevent, and address technical issues</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    Sharing Your Information
                  </h2>
                  <p>We may share your information in the following situations:</p>
                  <ul className="space-y-4 my-4">
                    <li className="bg-background p-4 rounded-lg border border-border">
                      <p className="font-bold text-primary">With Your Consent:</p>
                      <p>We may share your information when you have given us permission to do so.</p>
                    </li>
                    <li className="bg-background p-4 rounded-lg border border-border">
                      <p className="font-bold text-primary">With Service Providers:</p>
                      <p>
                        We may share your information with third-party vendors, service providers, contractors, or
                        agents who perform services for us.
                      </p>
                    </li>
                    <li className="bg-background p-4 rounded-lg border border-border">
                      <p className="font-bold text-primary">For Reference Checks:</p>
                      <p>
                        With your explicit consent, we may share your information with potential employers or hiring
                        agencies for reference verification purposes.
                      </p>
                    </li>
                    <li className="bg-background p-4 rounded-lg border border-border">
                      <p className="font-bold text-primary">Business Transfers:</p>
                      <p>
                        We may share your information in connection with a merger, sale of company assets, financing, or
                        acquisition.
                      </p>
                    </li>
                    <li className="bg-background p-4 rounded-lg border border-border">
                      <p className="font-bold text-primary">Legal Requirements:</p>
                      <p>
                        We may disclose your information if required to do so by law or in response to valid requests by
                        public authorities.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect the security of your
                    personal information. However, please be aware that no method of transmission over the Internet or
                    method of electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    Your Data Protection Rights
                  </h2>
                  <p>Depending on your location, you may have the following rights:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to access your personal information
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to rectify inaccurate personal information
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to request the deletion of your personal information
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to restrict the processing of your personal information
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to data portability
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to object to the processing of your personal information
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border">
                      The right to withdraw consent
                    </div>
                  </div>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{" "}
                    <span className="text-primary font-medium">privacy@onereference.com</span>.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <div className="flex items-start space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <p>
                        <span className="font-medium">Email:</span> privacy@onereference.com
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 mb-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <p>
                        <span className="font-medium">Phone:</span> +44 (20) 1234 5678
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <p>
                        <span className="font-medium">Address:</span>
                        <br />
                        OneReference Ltd.
                        <br />
                        123 Reference Way
                        <br />
                        London, EC1A 1BB
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
     
    </>
  )
}
