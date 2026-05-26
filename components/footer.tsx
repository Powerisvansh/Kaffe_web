"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/kaafe.rishikesh", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/kaafe.rishikesh", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@kaafe", label: "YouTube" },
]

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-3xl font-semibold text-foreground">Kaafe</span>
            </Link>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The widest Ganga view in Rishikesh. Where sacred waters meet culinary excellence.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Near Ram Jhula, Tapovan, Rishikesh, Uttarakhand 249192</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@kaafe.in"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@kaafe.in</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-medium mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>7 AM - 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>7 AM - 11 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-primary">
              ✦ Sunset viewing: 5 PM - 7 PM
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kaafe Rishikesh. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with ♡ by the riverside
          </p>
        </div>
      </div>
    </footer>
  )
}
