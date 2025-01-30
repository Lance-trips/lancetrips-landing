import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export default function LegalPage() {
  const documents = [
    {
      title: "Terms of Service",
      href: "/legal/terms",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Privacy Policy",
      href: "/legal/privacy",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Cookie Policy",
      href: "/legal/cookies",
      icon: <FileText className="h-5 w-5" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Legal Documents</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            All the legal information, presented in a way that's clear and easy to understand.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 pt-12">
          {documents.map((doc) => (
            <Link key={doc.href} href={doc.href}>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:bg-accent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">{doc.icon}</div>
                    <h2 className="text-xl font-semibold">{doc.title}</h2>
                  </div>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

