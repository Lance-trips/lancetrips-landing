"use client"
import { Plane, Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { scrollToTop } from "@/utils/scrollToTop"
import type React from "react" // Added import for React

export function Footer() {
  const router = useRouter()

  const handleForTravelersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/for-travelers")
    setTimeout(scrollToTop, 100) // Small delay to ensure page transition is complete
  }

  const handleWaitlistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/for-travelers")
    setTimeout(() => {
      const waitlistSection = document.getElementById("join-waitlist")
      waitlistSection?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/blog")
    setTimeout(scrollToTop, 100)
  }

  return (
    <footer className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-3/5">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Lance</span>
            </div>
          </div>
          <div className="w-full md:w-1/5 space-y-4">
            <h4 className="text-sm font-semibold">
              <a href="/for-travelers" onClick={handleForTravelersClick} className="hover:text-foreground">
                for Travelers
              </a>
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/for-travelers#join-waitlist"
                  onClick={handleWaitlistClick}
                  className="hover:text-foreground"
                >
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Take our travel quiz
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={handleBlogClick} className="hover:text-foreground">
                  Travel guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-foreground">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Lance. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0 md:ml-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

