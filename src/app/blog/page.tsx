import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import blogPosts from "../../data/blog-posts.json"
import type { Metadata } from "next"
import { BlogPostCard } from "../../components/BlogPostCard"
import { Badge } from "@/components/ui/badge"

const POSTS_PER_PAGE = 6

export const metadata: Metadata = {
  title: "Lance Travel Blog | Inspiring Your Next Adventure",
  description:
    "Discover travel tips, destination guides, and inspiring stories to fuel your wanderlust and plan your next adventure.",
  openGraph: {
    title: "Lance Travel Blog | Inspiring Your Next Adventure",
    description:
      "Discover travel tips, destination guides, and inspiring stories to fuel your wanderlust and plan your next adventure.",
    images: [{ url: "/images/blog/og-image.jpg" }],
  },
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string; tag?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const category = searchParams.category
  const tag = searchParams.tag

  const filteredPosts = blogPosts.filter((post) => {
    if (category && post.category !== category) return false
    if (tag && !post.tags.includes(tag)) return false
    return true
  })

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Lance Travel Blog</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant={category ? "outline" : "default"} asChild>
              <Link href="/blog">All</Link>
            </Button>
            {categories.map((cat) => (
              <Button key={cat} variant={category === cat ? "default" : "outline"} asChild>
                <Link href={`/blog?category=${encodeURIComponent(cat)}`}>{cat}</Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant={tag === t ? "default" : "secondary"} className="cursor-pointer">
                <Link href={`/blog?tag=${encodeURIComponent(t)}`}>{t}</Link>
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <Button disabled={currentPage === 1} asChild>
            <Link
              href={`/blog?page=${currentPage - 1}${category ? `&category=${category}` : ""}${
                tag ? `&tag=${tag}` : ""
              }`}
            >
              Previous
            </Link>
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button disabled={currentPage === totalPages} asChild>
            <Link
              href={`/blog?page=${currentPage + 1}${category ? `&category=${category}` : ""}${
                tag ? `&tag=${tag}` : ""
              }`}
            >
              Next
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

