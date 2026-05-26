"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Absolutely magical! The view is even more breathtaking than the photos. Spent three sunsets here during my yoga retreat. The chai is divine and the staff treats you like family.",
    avatar: "SM",
  },
  {
    name: "Marco Benedetti",
    location: "Milan, Italy",
    rating: 5,
    text: "Best cafe experience in all of India. The food is fresh, healthy, and delicious. But it's the atmosphere that makes Kaafe special - pure peace by the sacred river.",
    avatar: "MB",
  },
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    rating: 5,
    text: "I've visited many cafes in Rishikesh, but Kaafe stands apart. The panoramic view is unmatched, and their signature latte is my new obsession. A must-visit!",
    avatar: "PS",
  },
  {
    name: "James & Emma",
    location: "Sydney, Australia",
    rating: 5,
    text: "We celebrated our engagement here. The sunset, the food, the music - everything was perfect. Kaafe will always hold a special place in our hearts.",
    avatar: "JE",
  },
  {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Came here for coffee, stayed for hours. The most Instagram-worthy spot in Rishikesh. The acai bowl is incredible and the vibes are unmatched.",
    avatar: "YT",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Guest Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Loved By <span className="text-gradient">Travelers Worldwide</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            
            <div className="min-h-[120px] flex items-center justify-center">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 max-w-3xl"
              >
                {testimonials[currentIndex].text}
              </motion.p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>
              <div className="flex gap-0.5 ml-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 glass-light rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 glass-light rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            <div>
              <p className="text-sm font-medium">Google Reviews</p>
              <div className="flex items-center gap-1">
                <span className="text-primary font-semibold">4.9</span>
                <span className="text-xs text-muted-foreground">(2,000+ reviews)</span>
              </div>
            </div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 48 48">
              <path fill="#E53935" d="M38,6H10c-2.209,0-4,1.791-4,4v28c0,2.209,1.791,4,4,4h28c2.209,0,4-1.791,4-4V10C42,7.791,40.209,6,38,6z"/>
              <path fill="#FFF" d="M34.257,34H13.743L7,25.667L24,7l17,18.667L34.257,34z"/>
              <path fill="#D32F2F" d="M24,7l17,18.667L34.257,34H24V7z"/>
            </svg>
            <div>
              <p className="text-sm font-medium">TripAdvisor</p>
              <div className="flex items-center gap-1">
                <span className="text-primary font-semibold">4.8</span>
                <span className="text-xs text-muted-foreground">(500+ reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
