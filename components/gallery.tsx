"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/469452027_553637230926024_5540898532904089626_n-KKOTyX7lZQLMa10578CLpjPFBHVTy8.jpg", alt: "Artificial turf front yard with mature tree and natural boulder accent", category: "FRONT YARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o-8-3Xw9gabejGmUQUyeir7Lx7bbibsWP3.jpg", alt: "Backyard pergola and outdoor kitchen with turf and stone pavers", category: "BACKYARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o-5-3ggiTTS9DuAgbziExgNhI9ZHZllZbV.jpg", alt: "Custom two-tier putting green bordered by desert landscaping and pool edge", category: "PUTTING GREEN" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-cCrd6RKGo3ytBSIVt8kbGXrP8c3B3i.png", alt: "Backyard turf lawn with raised planter beds, bench, and paver walkway", category: "BACKYARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488792748_637733669183046_4487357920301944948_n-wtDWAfbP0zco0VdQ6Ew3ecAXIu4cfI.jpg", alt: "Spacious backyard turf lawn with fire pit seating and covered patio", category: "BACKYARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-8ayZIVBKtuFV57vrJSX2ZI7yTODstp.png", alt: "Modern turf and paver checkerboard patio under a black pergola", category: "BACKYARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-XEsFJCdjBjWks35iHMQXkx4QF3mK8b.png", alt: "Side yard paver walkway with turf strip and fresh landscaping", category: "SIDE YARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/487802297_637733782516368_279671218236206106_n-C4dreF6jZfWQPqd42l8ajMpKYHduoa.jpg", alt: "Covered patio outdoor kitchen with tile bar overlooking turf backyard", category: "OUTDOOR KITCHEN" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/800x900-21-FfTpK7IADJEJSWhuiE9O22PUKvhum6.png", alt: "Aerial view of turf and paver checkerboard patio with planter beds", category: "BACKYARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/474800911_587426067547140_2729554535167357505_n-9A3hDcNAF4W6T6f7IBi20GkbsSo9uN.jpg", alt: "Large turf backyard lawn with shed, pool edge, and palm trees", category: "BACKYARD" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/470239363_559659596990454_5964893048914275544_n-GwDBkxCXmEe4ZFFPW3b9f4Ka16zQbr.jpg", alt: "Poolside paver deck with geometric turf inlay at sunset", category: "POOL DECK" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o-6-aUGCiSU6HvDKsvUgXtjbYQ2DNtiwrC.jpg", alt: "Covered patio outdoor kitchen and lounge overlooking turf backyard", category: "OUTDOOR KITCHEN" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/487450983_637733582516388_5672046924229445095_n-t1I1kzZsjRbGuw1cwq3EQ5Z5z9HsDm.jpg", alt: "Backyard pool and paver patio bordered by lush turf", category: "POOL DECK" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/800x600-15-hCcqEVypwsSNessl2OgXFBk9WA30AF.png", alt: "Turf backyard with paver patio, pool, and storage shed", category: "BACKYARD" },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            See Our Work
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Explore Our Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Imagine the possibilities for your own home or business
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#061E11] text-white hover:bg-[#061E11]/90"
            onClick={scrollToQuote}
          >
            Get a Free Quote
          </Button>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-5xl w-[95vw] p-0 bg-foreground/95 border-none" aria-describedby={undefined}>
            <VisuallyHidden>
              <DialogTitle>Project Gallery</DialogTitle>
            </VisuallyHidden>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-background" />
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-background" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-background" />
            </button>

            {selectedIndex !== null && (
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] md:aspect-video">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-primary font-bold text-lg tracking-wider">{galleryImages[selectedIndex].category}</p>
                  <div className="w-16 h-px bg-background/30 mx-auto my-2" />
                  <p className="text-background text-sm md:text-base">{galleryImages[selectedIndex].alt}</p>
                  <p className="text-background/60 text-xs mt-1">{selectedIndex + 1} / {galleryImages.length}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
