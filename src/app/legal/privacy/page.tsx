import type { Metadata } from "next"
import policies from "../../../data/policies.json"

export const metadata: Metadata = {
  title: "Privacy Policy | Lance",
  description: "Lance Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  const { privacyPolicy } = policies

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: {privacyPolicy.lastUpdated}</p>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            {privacyPolicy.sections.map((section, index) => (
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

