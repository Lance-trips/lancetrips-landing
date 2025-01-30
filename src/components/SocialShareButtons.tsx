import { Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialShareButtonsProps {
  url: string
  title: string
}

export function SocialShareButtons({ url, title }: SocialShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "_blank")
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, "_blank")
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" onClick={shareOnTwitter} aria-label="Share on Twitter">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnFacebook} aria-label="Share on Facebook">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  )
}

