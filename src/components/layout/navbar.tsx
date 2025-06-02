
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, User, Settings, LogOut } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const auth = useAuth()

  // Ensure component is mounted before accessing auth
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const handleSignOut = async () => {
    // In a real app, you'd call your Firebase logout function here
    // await firebase.auth().signOut();
    auth.logout() // Using context's logout
    router.push("/") // Redirect to landing page after logout
  }

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!auth?.userEmail) return "U"
    return auth.userEmail.charAt(0).toUpperCase()
  }

  // Get profile image URL from cached data (placeholder for now)
  const getProfileImageUrl = () => {
    // Replace with actual logic to get profile image URL
    // For example, from auth.userProfile.profile_pic_path or auth.userProfile.logo_path
    return "" // For now, empty to use fallback
  }

  // Don't render auth-dependent content until mounted and auth state is clear
  const showAuthContent = isMounted && !auth.isLoading

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 md:h-20 items-center justify-between transition-all duration-200">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 md:h-10 md:w-10">
              <Image
                src="/images/logo.png"
                alt="OneReference Logo"
                data-ai-hint="logo abstract"
                fill
                sizes="(max-width: 768px) 32px, 40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold font-headline">OneReference</span>
          </Link>
        </div>

        {/* Navigation links - desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/how-it-works" className="text-base font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link href="/features" className="text-base font-medium transition-colors hover:text-primary">
            Features
          </Link>
      
          <Link href="/about" className="text-base font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-base font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/community" className="text-base font-medium transition-colors hover:text-primary">
            Community
          </Link>
        </nav>

        {/* Right side elements */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          {!showAuthContent ? (
            <div className="h-10 w-20 bg-muted rounded animate-pulse"></div>
          ) : auth.isLoggedIn && auth.userType ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={getProfileImageUrl()} alt={auth.userEmail || "User"} />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={auth.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard'} className="cursor-pointer flex w-full items-center">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={auth.userType === 'agency' ? '/agency/dashboard/profile' : '/individual/dashboard/profile'} className="cursor-pointer flex w-full items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={auth.userType === 'agency' ? '/agency/dashboard/settings' : '/individual/dashboard/settings'} className="cursor-pointer flex w-full items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-base">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="text-base">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile right side controls */}
        <div className="md:hidden flex items-center gap-2">
          {showAuthContent && auth.isLoggedIn && auth.userType && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={getProfileImageUrl()} alt={auth.userEmail || "User"} />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={auth.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard'} className="cursor-pointer flex w-full items-center">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <button className="p-2 z-50 relative" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 ease-in-out" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container max-w-screen-xl mx-auto px-4 h-full flex flex-col bg-background pt-20 pb-8">
          <nav className="flex flex-col bg-background space-y-4 mt-8">
            <Link
              href="/how-it-works"
              className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            
            <Link
              href="/about"
              className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {showAuthContent && !auth.isLoggedIn && (
              <>
                <Link
                  href="/signin"
                  className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}

            {showAuthContent && auth.isLoggedIn && (
              <>
                <Link
                  href={auth.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard'}
                  className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsMenuOpen(false)
                  }}
                  className="text-2xl font-medium py-3 border-b border-muted transition-colors hover:text-primary text-left"
                >
                  Sign Out
                </button>
              </>
            )}
          </nav>

          <div className="mt-auto items-center py-2 bg-background">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
