"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, MapPin, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ganga.jpg"
          alt="Ganga river view at sunset from Kaafe"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 glass-light px-4 py-2 rounded-full mb-8"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm tracking-wider">Rishikesh, Uttarakhand</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-5xl text-balance"
        >
          <span className="block">Experience The</span>
          <span className="block text-gradient font-medium">Widest Ganga View</span>
          <span className="block">In Rishikesh</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light"
        >
          Where the sacred waters meet culinary excellence. A sanctuary for the soul, 
          serving peace with every cup.
        </motion.p>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-2 mt-6"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">4.9 on Google • 2000+ Reviews</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="#menu"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-wider uppercase hover:bg-primary/90 transition-all glow-sunset"
          >
            Explore Menu
          </Link>
          <Link
            href="https://wa.me/919876543210"
            target="_blank"
            className="px-8 py-4 glass-light rounded-full text-sm tracking-wider uppercase hover:bg-foreground/10 transition-all"
          >
            Reserve Table
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
