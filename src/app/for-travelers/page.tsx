// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { MapPin, Compass, Lightbulb, PlaneLanding, Globe, Sparkles } from "lucide-react"
// import { JoinWaitlist } from "../../components/JoinWaitlist"
// import { Footer } from "../../components/Footer"
// import { Navbar } from "../../components/Navbar"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { BlogPostCard } from "../../components/BlogPostCard"
// import blogPosts from "../../data/blog-posts.json"

// export default function ForTravelersPage() {
//   const featuredPosts = blogPosts.slice(0, 3)

//   return (
//     <>
//       <div id="top" className="absolute top-0 left-0 w-0 h-0 overflow-hidden" aria-hidden="true"></div>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//             <div className="container mx-auto px-4 md:px-6">
//               <div className="flex flex-col items-center text-center">
//                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
//                   Discover the World with Lance
//                 </h1>
//                 <p className="mt-4 max-w-[700px] text-lg text-blue-100 md:text-xl">
//                   Experience personalized, AI-driven travel planning that understands your preferences and creates the
//                   perfect itinerary for your next adventure.
//                 </p>
//               </div>
//             </div>
//           </section>

//           <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//             <div className="container mx-auto px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
//                 Travel Insights & Stories
//               </h2>
//               <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//                 {featuredPosts.map((post) => (
//                   <BlogPostCard key={post.id} post={post} />
//                 ))}
//               </div>
//               <div className="mt-12 text-center">
//                 <Button asChild>
//                   <Link href="/blog">View All Posts</Link>
//                 </Button>
//               </div>
//             </div>
//           </section>

//           <section
//             id="join-waitlist"
//             className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-400 to-blue-500 text-white"
//           >
//             <div className="container mx-auto px-4 md:px-6">
//               <div className="max-w-2xl mx-auto">
//                 <JoinWaitlist
//                   title="Be the First to Experience Lance"
//                   description="Join our waitlist and be among the first to experience the future of travel planning with Lance. Get early access and exclusive updates!"
//                   buttonText="Join the Waitlist"
//                 />
//               </div>
//             </div>
//           </section>

//           <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//             <div className="container mx-auto px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
//                 Why Travelers Will Choose Lance
//               </h2>
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   {
//                     icon: MapPin,
//                     title: "Personalized Destinations",
//                     description: "Discover unique locations tailored to your interests and travel style.",
//                   },
//                   {
//                     icon: Compass,
//                     title: "Smart Itinerary Planning",
//                     description: "Let our AI create and optimize your travel schedule for maximum enjoyment.",
//                   },
//                   {
//                     icon: Lightbulb,
//                     title: "Local Insights",
//                     description: "Get insider tips and hidden gems recommended by our advanced AI system.",
//                   },
//                   {
//                     icon: PlaneLanding,
//                     title: "Seamless Booking",
//                     description: "Book flights, accommodations, and activities all in one place with ease.",
//                   },
//                   {
//                     icon: Globe,
//                     title: "Cultural Experiences",
//                     description: "Immerse yourself in local cultures with our curated experiences and activities.",
//                   },
//                   {
//                     icon: Sparkles,
//                     title: "Adaptive Travel Plans",
//                     description: "Enjoy flexible itineraries that adapt to your preferences and unexpected changes.",
//                   },
//                 ].map((feature, index) => (
//                   <Card key={index} className="border-t-4 border-blue-500">
//                     <CardHeader>
//                       <feature.icon className="h-10 w-10 mb-2 text-blue-500" />
//                       <CardTitle>{feature.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <CardDescription>{feature.description}</CardDescription>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </main>
//         <Footer />
//       </div>
//     </>
//   )
// }

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Compass, Lightbulb, PlaneLanding, Globe, Sparkles } from "lucide-react"
import { JoinWaitlist } from "../../components/JoinWaitlist"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogPostCard } from "../../components/BlogPostCard"
import blogPosts from "../../data/blog-posts.json"

// Mark the page as a Server Component
export default function ForTravelersPage() {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Discover the World with Lance
                </h1>
                <p className="mt-4 max-w-[700px] text-lg text-blue-100 md:text-xl">
                  Experience personalized, AI-driven travel planning that understands your preferences and creates the
                  perfect itinerary for your next adventure.
                </p>
              </div>
            </div>
          </section>

          <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Travel Insights & Stories
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button asChild>
                  <Link href="/blog">View All Posts</Link>
                </Button>
              </div>
            </div>
          </section>

          <section
            id="join-waitlist"
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-400 to-blue-500 text-white"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <JoinWaitlist
                  title="Be the First to Experience Lance"
                  description="Join our waitlist and be among the first to experience the future of travel planning with Lance. Get early access and exclusive updates!"
                  buttonText="Join the Waitlist"
                />
              </div>
            </div>
          </section>

          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Why Travelers Will Choose Lance
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: MapPin,
                    title: "Personalized Destinations",
                    description: "Discover unique locations tailored to your interests and travel style.",
                  },
                  {
                    icon: Compass,
                    title: "Smart Itinerary Planning",
                    description: "Let our AI create and optimize your travel schedule for maximum enjoyment.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Local Insights",
                    description: "Get insider tips and hidden gems recommended by our advanced AI system.",
                  },
                  {
                    icon: PlaneLanding,
                    title: "Seamless Booking",
                    description: "Book flights, accommodations, and activities all in one place with ease.",
                  },
                  {
                    icon: Globe,
                    title: "Cultural Experiences",
                    description: "Immerse yourself in local cultures with our curated experiences and activities.",
                  },
                  {
                    icon: Sparkles,
                    title: "Adaptive Travel Plans",
                    description: "Enjoy flexible itineraries that adapt to your preferences and unexpected changes.",
                  },
                ].map((feature, index) => (
                  <Card key={index} className="border-t-4 border-blue-500">
                    <CardHeader>
                      <feature.icon className="h-10 w-10 mb-2 text-blue-500" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

