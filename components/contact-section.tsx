"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Clock, MessageCircle, Mail, Send } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp redirect with pre-filled message
    const whatsappMessage = `Hi Kaafe! I'd like to make a reservation.\n\nName: ${formData.name}\nDate: ${formData.date}\nGuests: ${formData.guests}\nMessage: ${formData.message}`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/30">
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
            Reserve Your Spot
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Your Table <span className="text-gradient">Awaits</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your sunset experience or simply drop by. We&apos;re here to make your 
            visit unforgettable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Near Ram Jhula, Tapovan
                  <br />
                  Rishikesh, Uttarakhand 249192
                </p>
              </div>
              <div className="glass p-6 rounded-xl">
                <Clock className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-medium mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Open Daily
                  <br />
                  7:00 AM - 10:00 PM
                </p>
              </div>
              <div className="glass p-6 rounded-xl">
                <Phone className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  +91 98765 43210
                  <br />
                  +91 98765 43211
                </p>
              </div>
              <div className="glass p-6 rounded-xl">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  hello@kaafe.in
                  <br />
                  reservations@kaafe.in
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="glass rounded-xl overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d78.3125!3d30.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjIiTiA3OMKwMTgnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaafe Location"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-light mb-6">Make a Reservation</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-input rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-input rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm text-muted-foreground mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-input rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm text-muted-foreground mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-input rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-8">5-8 People</option>
                      <option value="8+">8+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-input rounded-lg border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                    placeholder="Sunset table, birthday celebration, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium tracking-wide uppercase flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors glow-sunset"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
