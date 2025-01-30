"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { joinWaitlist } from "../actions/waitlist-actions"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import confetti from "canvas-confetti"
import Script from "next/script"

declare global {
  interface Window {
    google: typeof google
    initializeAutocomplete: () => void
  }
}

interface JoinWaitlistProps {
  title?: string
  description?: string
  buttonText?: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
        <p className="mb-4 text-black">{description}</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  )
}

export function JoinWaitlist({
  title = "Join Our Waitlist",
  description = "Be among the first to experience Lance when we launch. Sign up for our waitlist to get early access and exclusive updates.",
  buttonText = "Join Waitlist",
}: JoinWaitlistProps) {
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [dreamDestination, setDreamDestination] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false)
  const { toast } = useToast()
  const autocompleteRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.initializeAutocomplete = () => {
        if (autocompleteRef.current) {
          try {
            const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
              types: ["(cities)"],
              fields: ["name", "formatted_address"],
            })

            autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace()
              if (place.formatted_address) {
                setDreamDestination(place.formatted_address)
              } else if (place.name) {
                setDreamDestination(place.name)
              }
            })

            setIsGoogleLoaded(true)
          } catch (error) {
            console.error("Error initializing Google Places Autocomplete:", error)
            toast({
              title: "Warning",
              description: "City autocomplete is temporarily unavailable. You can still type your destination manually.",
              variant: "destructive",
            })
          }
        }
      }
    }
  }, [isGoogleLoaded, toast])

  const handleScriptError = () => {
    console.error("Error loading Google Maps script")
    toast({
      title: "Warning",
      description: "City autocomplete is temporarily unavailable. You can still type your destination manually.",
      variant: "destructive",
    })
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("email", waitlistEmail)
    formData.append("dreamDestination", dreamDestination)
    const result = await joinWaitlist(formData)
    if (result.success) {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email for a personalized trip plan!",
      })
      setWaitlistEmail("")
      setDreamDestination("")
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    } else if (result.error === "You already joined our waitlist") {
      setIsModalOpen(true)
    } else {
      toast({
        title: "Error",
        description: "There was a problem joining the waitlist. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
        <p className="text-xl text-blue-100">{description}</p>
      </div>
      <form onSubmit={handleWaitlistSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={waitlistEmail}
          onChange={(e) => setWaitlistEmail(e.target.value)}
          required
          className="bg-white text-black"
        />
        <Input
          ref={autocompleteRef}
          type="text"
          placeholder="What's your dream destination?"
          value={dreamDestination}
          onChange={(e) => setDreamDestination(e.target.value)}
          required
          className="bg-white text-black"
        />
        <Button type="submit" className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Already Joined"
        description="You are already on our waitlist. Thank you for your interest!"
      />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initializeAutocomplete`}
        strategy="lazyOnload"
        onError={handleScriptError}
      />
    </div>
  )
}

