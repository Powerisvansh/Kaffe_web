import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Kaafe – Best & Widest Ganga View Cafe in Rishikesh',
  description: 'Experience the widest Ganga view in Rishikesh. A luxury riverside cafe offering breathtaking sunset views, gourmet cuisine, and a peaceful Himalayan atmosphere.',
  keywords: ['Kaafe', 'Rishikesh cafe', 'Ganga view', 'riverside cafe', 'best cafe Rishikesh', 'sunset cafe', 'yoga cafe'],
  openGraph: {
    title: 'Kaafe – Best & Widest Ganga View Cafe in Rishikesh',
    description: 'Experience the widest Ganga view in Rishikesh. A luxury riverside cafe.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
