import type { Metadata } from 'next'
import { Great_Vibes, Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Justin the Adjuster | Public Adjuster PA & NJ',
  description:
    "Trust in Justin. Justin Ginsberg is a licensed public adjuster serving PA & NJ, specializing in roof, siding, water, fire, and storm damage claims. No upfront cost — we work on contingency.",
  keywords: [
    'public adjuster',
    'PA public adjuster',
    'NJ public adjuster',
    'insurance claim',
    'Justin Ginsberg',

    'roof damage claim',
    'water damage claim',
    'storm damage',
    'fire damage claim',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${greatVibes.variable} ${cormorant.variable} ${outfit.variable} bg-[#0a0a0a] text-cream font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
