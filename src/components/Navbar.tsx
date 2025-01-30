import Link from "next/link"
import { Plane } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between w-full px-4">
        <div className="flex items-center space-x-2">
          <Plane className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold text-blue-700">Lance</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/for-travelers"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
          >
            For Travelers
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/#team"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
          >
            Team
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
          >
            FAQ
          </Link>
          <Link
            href="/#join"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

