
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "@/components/icons/logo";
import { useAuth } from "@/contexts/auth-context";
import { User, LogOut, Building, Briefcase, LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const { isLoggedIn, userType, logout, isLoading, userEmail } = useAuth();

  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  if (isLoading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <Logo />
            <span className="font-bold text-xl font-headline">OneReference</span>
          </Link>
          <div className="h-8 w-20 animate-pulse rounded-md bg-muted"></div> {/* Skeleton for buttons */}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900 text-white"> {/* Adjusted for dark theme */}
      <div className="container flex h-16 items-center mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 mr-6 text-primary">
          <Logo className="text-primary" />
          <span className="font-bold text-xl font-headline text-white">OneReference</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-slate-300 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
           <Link href="/community" className="text-slate-300 transition-colors hover:text-white">
            Community
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full hover:bg-slate-700">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://placehold.co/40x40.png" alt="User avatar" data-ai-hint="user avatar realistic person"/>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {userType === 'agency' ? <Building className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-slate-800 border-slate-700 text-white" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userType === 'agency' ? "Agency Account" : "Individual Account"}
                    </p>
                    <p className="text-xs leading-none text-slate-400">
                      {userEmail || "user@example.com"}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-700"/>
                <DropdownMenuItem asChild className="hover:!bg-slate-700 focus:!bg-slate-700 cursor-pointer">
                  <Link href={userType === 'agency' ? "/agency/dashboard" : "/individual/dashboard"}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="hover:!bg-slate-700 focus:!bg-slate-700 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/user-type-selection">
              <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white">Login</Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
