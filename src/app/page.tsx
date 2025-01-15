'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Plane, Calendar, Bot, ArrowRight, Globe, Users, Sparkles } from 'lucide-react'
import Image from "next/image"
import { joinWaitlist, submitApplication } from './actions'
import { useState, useRef } from 'react'
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import confetti from 'canvas-confetti'

export default function Page() {
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [applicationEmail, setApplicationEmail] = useState('')
  const [about, setAbout] = useState('')
  const [cv, setCv] = useState<File | null>(null)
  const { toast } = useToast()
  const waitlistRef = useRef<HTMLDivElement>(null)

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', waitlistEmail)
    const result = await joinWaitlist(formData)
    if (result.success) {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      })
      setWaitlistEmail('')
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    } else {
      toast({
        title: "Error",
        description: "There was a problem joining the waitlist. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', applicationEmail)
    formData.append('about', about)
    if (cv) formData.append('cv', cv)
    const result = await submitApplication(formData)
    if (result.success) {
      toast({
        title: "Application Received!",
        description: "We'll review your application and get back to you soon.",
      })
      setApplicationEmail('')
      setAbout('')
      setCv(null)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    } else {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-100 to-green-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between w-full px-4">
        <div className="flex items-center space-x-2">
        <Plane className="h-6 w-6 text-blue-500" />
        <span className="text-xl font-bold text-blue-700">Lance</span>
        </div>
        <nav className="hidden md:flex gap-6">
        <a href="#features" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4">
          Features
        </a>
        <a href="#team" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4">
          Team
        </a>
        <a href="#faq" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4">
          FAQ
        </a>
        <a href="#join" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-4">
          Join Us
        </a>
        </nav>
        <Button onClick={scrollToWaitlist} className="bg-blue-500 hover:bg-blue-600 text-white">Get Early Access</Button>
      </div>
      </header>

      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Your Future AI Travel Companion
          </h1>
          <p className="max-w-[600px] text-gray-200 md:text-xl">
            We&apos;re developing a personalized, AI-driven travel planning experience that will understand your preferences and create the perfect itinerary for your next adventure.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-yellow-300" />
            <p>Discover unique destinations tailored to you</p>
            </div>
            <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-yellow-300" />
            <p>Smart itinerary planning and optimization</p>
            </div>
            <div className="flex items-center gap-4">
            <Bot className="h-5 w-5 text-yellow-300" />
            <p>AI-powered recommendations and insights</p>
            </div>
          </div>
          </div>
          <div className="mt-8 lg:mt-0 relative">
          <motion.div
            className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* AI "brain" network */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M32 32 L96 96 L160 32 M32 160 L96 96 L160 160"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </svg>

            {/* Pulsating circles representing data points */}
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  top: `${20 + index * 15}%`,
                  left: `${20 + index * 15}%`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Floating icons */}
            <motion.div
              className="absolute top-1/4 left-1/4 text-white"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plane className="w-8 h-8" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/4 text-white"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <MapPin className="w-8 h-8" />
            </motion.div>

            {/* Central pulsating circle */}
            <motion.div
              className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center text-blue-600"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Bot className="w-8 h-8" />
            </motion.div>
          </motion.div>
          </div>
        </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-800">
          Revolutionize Your Travel Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
          { icon: Globe, title: "Global Destinations", description: "Access a world of possibilities with our extensive database of destinations.", color: "text-green-500" },
          { icon: Users, title: "Personalized Recommendations", description: "Get tailored suggestions based on your preferences and past travels.", color: "text-purple-500" },
          { icon: Calendar, title: "Smart Itinerary Planning", description: "Effortlessly create and optimize your travel schedule.", color: "text-orange-500" },
          { icon: Sparkles, title: "AI-Powered Insights", description: "Benefit from machine learning algorithms that enhance your travel decisions.", color: "text-pink-500" },
          { icon: MapPin, title: "Local Experiences", description: "Discover hidden gems and authentic local experiences.", color: "text-indigo-500" },
          { icon: Plane, title: "Seamless Booking", description: "Book flights, accommodations, and activities all in one place.", color: "text-teal-500" },
          ].map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg border-t-4" style={{ borderColor: feature.color }}>
            <CardHeader>
            <feature.icon className={`h-10 w-10 ${feature.color} mb-2`} />
            <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
          ))}
        </div>
        </div>
      </section>

      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
            {[
            { name: "Anastasiia Fedotova", role: "Co-founder", bio: "Travel enthusiast with a background in product designing.", image: "/founders/anastasiia.jpeg" },
            { name: "Marco Suerz", role: "Co-founder", bio: "Tech enthusiast with a deep passion for overcoming challenges.", image: "/founders/marco.jpeg" },
            { name: "Riccardo Duzzi", role: "Co-founder", bio: "Adventurer with a strong background in operations and sales.", image: "/founders/riccardo.jpeg" },
            ].map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 group">
            <div className={`relative h-40 w-40 overflow-hidden rounded-full transition-transform group-hover:scale-105 bg-gradient-to-br`}>
            <Image
            src={member.image}
            alt={member.name}
            width={160}
            height={160}
            className="object-cover transition-transform group-hover:scale-110"
            />
            </div>
            <h3 className="text-xl font-bold text-purple-900">{member.name}</h3>
            <p className="text-sm font-medium text-purple-700">{member.role}</p>
            <p className="text-sm text-center text-purple-600 max-w-xs">{member.bio}</p>
            </div>
            ))}
        </div>
        </div>
      </section>

      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-800">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {[
          { question: "What stage of development is Lance in?", answer: "Lance is currently in the early stages of development. We're building our core AI algorithms and designing the user interface. We're excited to bring our vision to life and revolutionize the way people plan their travels." },
          { question: "How can I contribute to Lance's development?", answer: "We're always looking for passionate individuals to join our team, either as full-time members or advisors. If you have expertise in AI, travel industry, or app development, we'd love to hear from you. You can apply through our 'Join Our Team' section." },
          { question: "When will Lance be available for testing?", answer: "We're aiming to launch our beta version in the coming months. By joining our waitlist, you'll be among the first to know when we're ready for user testing. Your feedback will be invaluable in shaping the future of Lance." },
          { question: "What makes Lance different from other travel planning apps?", answer: "While we're still in development, our vision for Lance is to create a truly personalized travel experience using advanced AI. We aim to go beyond simple recommendations, offering intelligent itinerary creation that learns and adapts to your preferences over time." },
          ].map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-blue-700 hover:text-blue-800">{item.question}</AccordionTrigger>
            <AccordionContent className="text-blue-600">{item.answer}</AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
        </div>
      </section>

      <section id="join" ref={waitlistRef} className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Waitlist</h2>
            <p className="text-xl text-blue-100">
            Be among the first to experience Lance when we launch. Sign up for our waitlist to get early access and exclusive updates.
            </p>
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
            <Button type="submit" className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300">
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          </div>
          <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
            <p className="text-xl text-blue-100">
            Passionate about travel and technology? We&apos;re looking for talented individuals to help build Lance.
            </p>
          </div>
          <form onSubmit={handleApplicationSubmit} className="space-y-4">
            <Input 
            type="email" 
            placeholder="Your email" 
            value={applicationEmail}
            onChange={(e) => setApplicationEmail(e.target.value)}
            required
            className="bg-white text-black"
            />
            <Textarea 
            placeholder="Tell us about yourself" 
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            className="bg-white text-black"
            />
            <div className="grid w-full items-center gap-1.5">
            <label htmlFor="cv" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Upload your CV
            </label>
            <Input 
              id="cv" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={(e) => setCv(e.target.files?.[0] || null)}
              required
              className="bg-white text-black"
            />
            </div>
            <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800">
            Submit Application
            <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          </div>
        </div>
        </div>
      </section>
      </main>

      <footer className="border-t py-6 md:py-0 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
        <Plane className="h-6 w-6 text-blue-500" />
        <p className="text-sm leading-loose text-blue-700">
          © 2024 Lance. All rights reserved.
        </p>
        </div>
      </div>
      </footer>
    </div>
  )
}

