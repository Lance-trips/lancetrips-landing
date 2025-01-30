// "use client"

// import { Navbar } from "../../../components/Navbar"
// import { Footer } from "../../../components/Footer"
// import { notFound } from "next/navigation"
// import blogPosts from "../../../data/blog-posts.json"
// import Image from "next/image"
// import Link from "next/link"
// import ReactMarkdown from "react-markdown"
// import { CalendarDays, Clock } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { TableOfContents } from "@/components/TableOfContents"
// import { SocialShareButtons } from "../../../components/SocialShareButtons"
// import { usePathname } from "next/navigation"

// function estimateReadingTime(content: string): number {
//   const wordsPerMinute = 200
//   const wordCount = content.split(/\s+/).length
//   return Math.ceil(wordCount / wordsPerMinute)
// }

// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const post = blogPosts.find((post) => post.slug === params.slug)
//   const currentUrl = usePathname()

//   if (!post) {
//     notFound()
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <article className="max-w-4xl mx-auto">
//           <div className="mb-8">
//             <Badge className="mb-4">{post.category}</Badge>
//             <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//             <div className="flex items-center justify-between text-gray-600 mb-4">
//               <div className="flex items-center space-x-4">
//                 <Avatar>
//                   <AvatarImage src={`/authors/${post.author.toLowerCase().replace(" ", "-")}.jpg`} alt={post.author} />
//                   <AvatarFallback>
//                     {post.author
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold">{post.author}</p>
//                   <div className="flex items-center text-sm">
//                     <CalendarDays className="mr-1 h-4 w-4" />
//                     <time dateTime={post.date}>{post.date}</time>
//                     <span className="mx-2">•</span>
//                     <Clock className="mr-1 h-4 w-4" />
//                     <span>{estimateReadingTime(post.content)} min read</span>
//                   </div>
//                 </div>
//               </div>
//               <SocialShareButtons url={currentUrl} title={post.title} />
//             </div>
//           </div>
//           <Image
//             src={post.image || "/placeholder.svg"}
//             alt={post.title}
//             width={1200}
//             height={600}
//             className="w-full aspect-video object-cover rounded-lg mb-8"
//           />
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="md:w-3/4">
//               <div className="prose prose-lg prose-blue max-w-none mb-8">
//                 <ReactMarkdown
//                   components={{
//                     // a: ({ node, ...props }) => (
//                     //   <a
//                     //     {...props}
//                     //     target="_blank"
//                     //     rel="noopener noreferrer"
//                     //     className="text-blue-600 hover:text-blue-800 underline"
//                     //   />
//                     // ),
//                     // h2: ({ node, ...props }) => (
//                     //   <h2 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
//                     // ),
//                     // h3: ({ node, ...props }) => (
//                     //   <h3 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
//                     // ),
//                     a: (props) => (
//                       <a
//                         {...props}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:text-blue-800 underline"
//                       />
//                     ),
//                     h2: (props) => (
//                       <h2 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
//                     ),
//                     h3: (props) => (
//                       <h3 id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")} {...props} />
//                     ),
//                   }}
//                 >
//                   {post.content}
//                 </ReactMarkdown>
//               </div>
//               <div className="mb-8">
//                 <h3 className="text-xl font-semibold mb-2">Tags:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {post.tags.map((tag) => (
//                     <Link
//                       key={tag}
//                       href={`/blog?tag=${encodeURIComponent(tag)}`}
//                       className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm hover:bg-blue-200 transition-colors"
//                     >
//                       {tag}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-semibold mb-4">Share this post:</h3>
//                   <div className="flex items-center gap-4">
//                     <SocialShareButtons url={currentUrl} title={post.title} />
//                     <div className="flex gap-2">
//                       {post.hashtags.map((hashtag) => (
//                         <span key={hashtag} className="text-blue-600">
//                           {hashtag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="md:w-1/4">
//               <div className="sticky top-24">
//                 <TableOfContents content={post.content} />
//               </div>
//             </div>
//           </div>
//         </article>
//       </main>
//       <Footer />
//     </div>
//   )
// }

import { Navbar } from "../../../components/Navbar"
import { Footer } from "../../../components/Footer"
import { notFound } from "next/navigation"
import blogPosts from "../../../data/blog-posts.json"
import { BlogPostContent } from "@/components/BlogPostContent"
import type { Metadata } from "next"

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

interface BlogPostParams {
  slug: string
}

export async function generateMetadata({ params }: { params: BlogPostParams }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Lance Blog`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: BlogPostParams }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const currentUrl = `https://lancetrips.com/blog/${params.slug}`
  const estimatedReadTime = estimateReadingTime(post.content)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <BlogPostContent post={post} currentUrl={currentUrl} estimatedReadTime={estimatedReadTime} />
      </main>
      <Footer />
    </div>
  )
}

