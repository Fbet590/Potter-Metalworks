"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Michael Rodriguez",
    location: "Phoenix, AZ",
    text: "Platinum AZ Turf completely transformed our backyard. Mario walked us through the whole design and the turf installation is outstanding. Professional, on time, and the craftsmanship exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    location: "Scottsdale, AZ",
    text: "We had a full backyard remodel done with a new patio and putting green, and it turned out beautiful. Mario and his team were knowledgeable, efficient, and kept us informed every step of the way.",
    rating: 5,
  },
  {
    name: "David Martinez",
    location: "Mesa, AZ",
    text: "Best backyard remodeling company in the Phoenix area! They redid our pavers and turf and the results are stunning. Mario made sure everything was done right. Beautiful work and fair pricing.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    location: "Chandler, AZ",
    text: "We needed our side yard cleaned up and turfed and Platinum AZ Turf delivered exactly what we wanted. Mario's design is both functional and beautiful. Neighbors keep asking who did the work!",
    rating: 5,
  },
  {
    name: "Robert Garcia",
    location: "Gilbert, AZ",
    text: "Absolutely thrilled with our new pool deck and turf border. Safety was our priority and Mario made sure we got a layout that was secure for the kids while still looking elegant. Professional team from start to finish.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    location: "Peoria, AZ",
    text: "Our front yard is now the highlight of the neighborhood. Mario and the Platinum AZ Turf crew installed turf that looks incredible year-round. Worth every penny!",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    location: "Tempe, AZ",
    text: "Had them build out an outdoor kitchen and turf backyard remodel. Everything matches perfectly and looks like it was always meant to be part of our home. Mario paid excellent attention to detail.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    location: "Glendale, AZ",
    text: "From the initial consultation with Mario to the final walkthrough, everything was seamless. Our backyard remodel is stunning and the quality is top-notch. Highly recommend Platinum AZ Turf!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Don&apos;t Just Take Our Word For It
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground text-balance">
            See What Our Customers Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8 bg-card">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg text-center mb-6 leading-relaxed">
              &quot;{currentTestimonial.text}&quot;
            </p>
            <div className="text-center border-t border-border pt-4">
              <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#061E11] text-white hover:bg-[#061E11]/90"
            onClick={scrollToQuote}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
