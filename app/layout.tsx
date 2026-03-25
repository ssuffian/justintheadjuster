import type { Metadata } from 'next'
import { Oswald, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  weight: ['300', '400', '500', '600'],
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
        className={`${oswald.variable} ${sourceSans.variable} bg-[#C9A84C] text-[#1a1a1a] font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
