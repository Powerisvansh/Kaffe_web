"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Leaf, Coffee, Star } from "lucide-react"

const dishes = [
  {
    name: "Himalayan Avocado Toast",
    description: "Sourdough, smashed avocado, poached eggs, microgreens, cherry tomatoes",
    price: "₹350",
    image: "/images/dish-1.jpg",
    tag: "Bestseller",
    icon: Leaf,
  },
  {
    name: "Sacred Bowl",
    description: "Açaí smoothie bowl with fresh berries, granola, coconut, and chia seeds",
    price: "₹320",
    image: "/images/dish-2.jpg",
    tag: "Healthy",
    icon: Leaf,
  },
  {
    name: "Ganga Sunrise Latte",
    description: "Signature espresso with oat milk, cardamom, and artisan latte art",
    price: "₹180",
    image: "/images/dish-3.jpg",
    tag: "Signature",
    icon: Coffee,
  },
  {
    name: "Traditional Thali",
    description: "Authentic Uttarakhandi thali with dal, sabzi, roti, rice, and raita",
    price: "₹280",
    image: "/images/dish-4.jpg",
    tag: "Local Favorite",
    icon: Star,
  },
]

export function MenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Signature Dishes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Crafted With <span className="text-gradient">Love & Intention</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our menu celebrates local flavors and global inspirations, using fresh, 
            organic ingredients sourced from the Himalayan foothills.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative glass rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs">
                    <dish.icon className="w-3 h-3" />
                    <span>{dish.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium text-foreground">{dish.name}</h3>
                    <span className="text-primary text-lg font-light">{dish.price}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 glass-light rounded-full text-sm tracking-wider uppercase hover:bg-foreground/10 transition-all"
          >
            <span>View Full Menu</span>
            <span className="text-xs text-muted-foreground">(QR Available)</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
