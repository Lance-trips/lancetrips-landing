// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { CalendarDays, Clock } from "lucide-react"
// import { SocialShareButtons } from "./SocialShareButtons"
// import { useState } from "react"
// import { motion } from "framer-motion"

// interface BlogPost {
//   id: number
//   title: string
//   excerpt: string
//   content: string
//   date: string
//   author: string
//   slug: string
//   category: string
//   tags: string[]
//   image: string
// }

// interface BlogPostCardProps {
//   post: BlogPost
// }

// function estimateReadingTime(content: string): number {
//   const wordsPerMinute = 200
//   const wordCount = content.split(/\s+/).length
//   return Math.ceil(wordCount / wordsPerMinute)
// }

// export function BlogPostCard({ post }: BlogPostCardProps) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       transition={{ type: "spring", stiffness: 300 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <Card className="flex flex-col h-full overflow-hidden">
//         <CardHeader className="p-0">
//           <div className="relative">
//             <Image
//               src={post.image || "/placeholder.svg"}
//               alt={post.title}
//               width={600}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             {isHovered && (
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <SocialShareButtons url={`https://lancetrips.com/blog/${post.slug}`} title={post.title} />
//               </div>
//             )}
//           </div>
//         </CardHeader>
//         <CardContent className="flex-grow p-6">
//           <Badge className="mb-2">{post.category}</Badge>
//           <h2 className="text-2xl font-bold mb-2">
//             <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
//               {post.title}
//             </Link>
//           </h2>
//           <p className="text-gray-600 mb-4">{post.excerpt}</p>
//           <div className="flex items-center space-x-4">
//             <Avatar>
//               <AvatarImage src={`/authors/${post.author.toLowerCase().replace(" ", "-")}.jpg`} alt={post.author} />
//               <AvatarFallback>
//                 {post.author
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <p className="font-semibold">{post.author}</p>
//               <div className="flex items-center text-sm text-gray-500">
//                 <CalendarDays className="mr-1 h-4 w-4" />
//                 <time dateTime={post.date}>{post.date}</time>
//                 <span className="mx-2">•</span>
//                 <Clock className="mr-1 h-4 w-4" />
//                 <span>{estimateReadingTime(post.content)} min read</span>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="p-6 pt-0">
//           <Button asChild>
//             <Link href={`/blog/${post.slug}`}>Read More</Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Clock } from "lucide-react"
import { SocialShareButtons } from "./SocialShareButtons"
import { motion } from "framer-motion"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  slug: string
  category: string
  tags: string[]
  image: string
}

interface BlogPostCardProps {
  post: BlogPost
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const [isClient, setIsClient] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading state
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="flex flex-col h-full overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <SocialShareButtons url={`https://lancetrips.com/blog/${post.slug}`} title={post.title} />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <Badge className="mb-2">{post.category}</Badge>
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`/authors/${post.author.toLowerCase().replace(" ", "-")}.jpg`} alt={post.author} />
              <AvatarFallback>
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <Clock className="mr-1 h-4 w-4" />
                <span>{estimateReadingTime(post.content)} min read</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


