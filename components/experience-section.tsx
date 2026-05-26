"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sun, Moon, Sparkles } from "lucide-react"

const experiences = [
  {
    icon: Sun,
    title: "Golden Morning",
    time: "6 AM - 10 AM",
    description: "Start your day with sunrise yoga views, fresh juices, and the gentle sound of temple bells echoing across the river.",
  },
  {
    icon: Sparkles,
    title: "Peaceful Afternoon",
    time: "12 PM - 4 PM",
    description: "Savor a leisurely lunch while watching rafters and kayakers navigate the rapids. Perfect for reading, writing, or simply being.",
  },
  {
    icon: Moon,
    title: "Magical Sunset",
    time: "5 PM - 8 PM",
    description: "Witness the legendary Rishikesh sunset as the sky transforms into a canvas of orange, pink, and gold reflected on the sacred waters.",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
          <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Sunset Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Every Hour <span className="text-gradient">Tells A Story</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            From the first light of dawn to the last glow of dusk, every moment at Kaafe 
            offers a unique experience shaped by the rhythm of the river.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass p-8 rounded-2xl text-center group hover:glow-sunset transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full glass-light flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <exp.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs text-primary tracking-widest uppercase">{exp.time}</span>
              <h3 className="text-2xl font-light mt-2 mb-4">{exp.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-light italic text-foreground/80">
            {'"'}The river taught us that the most beautiful moments are the ones 
            we simply sit still and observe.{'"'}
          </p>
          <cite className="block mt-6 text-muted-foreground not-italic">
            — The Kaafe Philosophy
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
