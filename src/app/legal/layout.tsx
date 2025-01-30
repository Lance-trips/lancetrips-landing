import { Plane } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "../../components/Footer"
import type React from "react" // Added import for React

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Plane className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Lance</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#features">Features</Link>
              <Link href="/#team">Team</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/#join">Join Us</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button className="bg-primary text-primary-foreground" asChild>
                <Link href="/#join">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

