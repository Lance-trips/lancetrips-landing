import type { Metadata } from "next"
import policies from "../../../data/policies.json"

export const metadata: Metadata = {
  title: "Terms of Service | Lance",
  description: "Lance Terms of Service - Understand the rules and regulations governing the use of our service.",
}

export default function TermsPage() {
  const { termsOfService } = policies

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
          <p className="text-gray-500">Last updated: {termsOfService.lastUpdated}</p>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            {termsOfService.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {index + 1}. {section.title}
                </h2>
                <div className="whitespace-pre-wrap">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

