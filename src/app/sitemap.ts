import type { MetadataRoute } from "next"
import blogPosts from "../data/blog-posts.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lancetrips.com"

  const staticPages = ["", "/for-travelers", "/blog", "/legal", "/legal/terms", "/legal/privacy", "/legal/cookies"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  )

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  return [...staticPages, ...blogPages]
}

