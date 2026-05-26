"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/cafe-interior.jpg"
              alt="Kaafe interior with Ganga view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-primary/30 rounded-xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              A Sanctuary By
              <span className="block text-gradient">The Sacred Waters</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Nestled along the serene banks of the Ganga in Rishikesh, Kaafe was born 
                from a simple dream — to create a space where travelers, seekers, and 
                wanderers could pause, breathe, and connect with the eternal flow of life.
              </p>
              <p>
                Our cafe offers the widest panoramic view of the sacred river, where every 
                sunset paints a new masterpiece across the Himalayan sky. Here, time slows 
                down, conversations deepen, and every cup of chai becomes a meditation.
              </p>
              <p>
                We believe in conscious hospitality — serving food that nourishes both body 
                and soul, crafted with locally sourced ingredients and love.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-light text-primary">180°</span>
                <p className="text-sm text-muted-foreground mt-2">Panoramic View</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-light text-primary">2017</span>
                <p className="text-sm text-muted-foreground mt-2">Est. Year</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-light text-primary">50K+</span>
                <p className="text-sm text-muted-foreground mt-2">Happy Guests</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
