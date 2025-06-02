import type { Metadata } from "next"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - OneReference",
  description: "Read the terms and conditions governing the use of OneReference services.",
}

export default function TermsOfServicePage() {
  return (
    <>
   
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 to-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Terms of Service
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
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    1. Agreement to Terms
                  </h2>
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and OneReference
                    ("we," "us," or "our") governing your access to and use of the OneReference website, applications,
                    and services (collectively, the "Services").
                  </p>
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to
                    these Terms, you may not access or use the Services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    2. Changes to Terms
                  </h2>
                  <p>
                    We may modify these Terms at any time. If we make changes, we will provide notice by posting the
                    updated Terms on our website and updating the "Last updated" date. Your continued use of the
                    Services after the posting of modified Terms constitutes your acceptance of the changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">3. Eligibility</h2>
                  <p>
                    You must be at least 18 years old to use our Services. By using our Services, you represent and
                    warrant that you meet this requirement and that you have the right, authority, and capacity to enter
                    into these Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    4. Account Registration
                  </h2>
                  <p>
                    To access certain features of our Services, you may need to register for an account. You agree to
                    provide accurate, current, and complete information during the registration process and to update
                    such information to keep it accurate, current, and complete.
                  </p>
                  <p>
                    You are responsible for safeguarding your account credentials and for all activities that occur
                    under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">5. User Content</h2>
                  <p>
                    Our Services allow you to create, upload, store, and share content, including text, images, and
                    other materials ("User Content"). You retain all rights in your User Content, but you grant us a
                    non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify,
                    create derivative works based on, distribute, publicly display, and publicly perform your User
                    Content in connection with operating and providing our Services.
                  </p>
                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <p className="font-medium">You represent and warrant that:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li className="marker:text-primary">
                        You own or have the necessary rights to your User Content and the right to grant the license
                        above.
                      </li>
                      <li className="marker:text-primary">
                        Your User Content does not violate these Terms, applicable law, or the rights of any third
                        party.
                      </li>
                      <li className="marker:text-primary">Your User Content is accurate and not misleading.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    6. Prohibited Conduct
                  </h2>
                  <p>You agree not to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>
                        Use the Services in any manner that could interfere with, disrupt, negatively affect, or inhibit
                        other users from fully enjoying the Services.
                      </div>
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>
                        Use the Services in any way that could damage, disable, overburden, or impair the functioning of
                        the Services.
                      </div>
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>
                        Attempt to circumvent any filtering, security measures, or other features designed to protect
                        the Services or third parties.
                      </div>
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>
                        Upload or transmit any viruses, malicious code, or other software that might harm the Services
                        or other users.
                      </div>
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Collect or store personal information about other users without their consent.</div>
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>
                        Impersonate any person or entity or falsely state or misrepresent your affiliation with a person
                        or entity.
                      </div>
                    </div>
                    <div className="bg-background p-3 rounded-md border border-border flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <div>Violate any applicable law or regulation.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    7. Reference Information
                  </h2>
                  <p>Our Services allow you to provide and manage reference information. You agree that:</p>
                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                          1
                        </div>
                        <div>You have obtained proper consent from your references to provide their information.</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                          2
                        </div>
                        <div>The reference information you provide is accurate and not misleading.</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                          3
                        </div>
                        <div>You will not use our Services to provide false or fraudulent reference information.</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                          4
                        </div>
                        <div>You will respect the privacy and rights of your references.</div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    8. Intellectual Property Rights
                  </h2>
                  <p>
                    The Services and their contents, features, and functionality are owned by OneReference and are
                    protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce,
                    distribute, modify, create derivative works of, publicly display, or publicly perform any of the
                    content of the Services without our prior written consent.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">9. Termination</h2>
                  <p>
                    We may terminate or suspend your access to the Services immediately, without prior notice or
                    liability, for any reason, including if you breach these Terms. Upon termination, your right to use
                    the Services will immediately cease.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    10. Disclaimer of Warranties
                  </h2>
                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <p className="font-bold uppercase text-center">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
                      EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                      FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    11. Limitation of Liability
                  </h2>
                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <p className="font-bold uppercase text-center">
                      IN NO EVENT SHALL ONEREFERENCE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                      PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                      INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
                      SERVICES.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-10 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-b pb-2">
                    16. Contact Information
                  </h2>
                  <p>If you have any questions about these Terms, please contact us at:</p>
                  <div className="bg-background rounded-lg p-6 my-4 border border-border">
                    <div className="flex items-start space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <p>
                        <span className="font-medium">Email:</span> legal@onereference.com
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
