import { useState, useEffect } from "react"
import { Link } from "lucide-react"

interface TableOfContentsProps {
  content: string
}

interface TocItem {
  id: string
  title: string
  level: number
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])

  useEffect(() => {
    const headings = content.match(/#{2,3}\s.+/g) || []
    const tocItems = headings.map((heading) => {
      const level = heading.match(/^#{2,3}/)?.[0].length - 1
      const title = heading.replace(/^#{2,3}\s/, "")
      const id = title.toLowerCase().replace(/\s+/g, "-")
      return { id, title, level }
    })
    setToc(tocItems)
  }, [content])

  if (toc.length === 0) return null

  return (
    <nav className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <Link className="mr-2 h-5 w-5" />
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {toc.map((item, index) => (
          <li key={index} className={`${item.level === 2 ? "ml-0" : "ml-4"}`}>
            <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

