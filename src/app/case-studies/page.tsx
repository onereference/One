
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const studies = [
  {
    title: "How Innovate Solutions Reduced Hiring Time by 40%",
    companyLogo: "https://placehold.co/100x40.png",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "graph results",
    excerpt: "Innovate Solutions leveraged OneReference to automate their reference checks, resulting in a significant reduction in time-to-hire and improved quality of candidates.",
    link: "/case-studies/innovate-solutions",
  },
  {
    title: "Creative Co. Enhanced Candidate Experience with OneReference",
    companyLogo: "https://placehold.co/100x40.png",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "happy candidate realistic person",
    excerpt: "By implementing OneReference's seamless platform, Creative Co. provided a better experience for candidates and referees, boosting their employer brand.",
    link: "/case-studies/creative-co",
  },
  {
    title: "Global Recruiters Scaled Operations with Our Enterprise Plan",
    companyLogo: "https://placehold.co/100x40.png",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "global team diverse realistic people",
    excerpt: "Global Recruiters adopted OneReference's enterprise solution to manage high-volume reference checking across multiple countries, improving efficiency and compliance.",
    link: "/case-studies/global-recruiters",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-headline mb-4 text-primary">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how OneReference has helped agencies and individuals achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
          {studies.map((study, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    width={600} 
                    height={400} 
                    className="object-cover w-full h-full"
                    data-ai-hint={study.dataAiHint}
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="mb-3">
                       <Image src={study.companyLogo} alt={`${study.title} logo`} width={100} height={40} data-ai-hint="company logo"/>
                    </div>
                    <CardTitle className="text-2xl text-white">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">{study.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={study.link} passHref>
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">Read Full Study</Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16">
            <p className="text-lg text-slate-400">More success stories coming soon!</p>
        </div>
      </div>
    </div>
  );
}
