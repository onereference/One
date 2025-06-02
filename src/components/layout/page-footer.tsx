
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function PageFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-primary mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <span className="font-bold text-2xl text-white">OneReference</span>
            </Link>
            <p className="text-sm mb-4">
              Simplifying the reference process for individuals and hiring agencies. Our platform makes it easier to manage, verify, and share professional references.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> 123 New Kings Road, London, SW6 4LZ, United Kingdom</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> +44 12 3456 7890</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" /> info@onereference.com</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-slate-400 hover:text-primary"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-primary"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-primary"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-primary"><Instagram className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Column 2: For Individuals */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-lg">For Individuals</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-primary">How It Works</Link></li>
              <li><Link href="/features" className="hover:text-primary">Features</Link></li>
              <li><Link href="/individual-pricing" className="hover:text-primary">Pricing</Link></li> {/* Assuming individual pricing page */}
              <li><Link href="/signup" className="hover:text-primary">Create Account</Link></li>
              <li><Link href="/community" className="hover:text-primary">Community</Link></li>
            </ul>
          </div>

          {/* Column 3: For Agencies */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-lg">For Agencies</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/agency-solutions" className="hover:text-primary">Agency Solutions</Link></li> {/* Placeholder */}
              <li><Link href="/agency-pricing" className="hover:text-primary">Agency Pricing</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Request Demo</Link></li>
              <li><Link href="/partner-program" className="hover:text-primary">Partner Program</Link></li> {/* Placeholder */}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-lg">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/community" className="hover:text-primary">Community</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} OneReference. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
