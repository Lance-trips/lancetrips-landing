export default function CookiesPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cookie Policy</h1>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p>Last updated: January 29, 2025</p>
            <h2>1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience and allow certain features to work.
            </p>
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for various purposes, including:</p>
            <ul>
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
            {/* Add more cookie policy content as needed */}
          </div>
        </div>
      </div>
    </section>
  )
}

