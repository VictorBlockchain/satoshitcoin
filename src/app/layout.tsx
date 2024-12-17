import './globals.css'
import { Bangers, Permanent_Marker, Indie_Flower, Shadows_Into_Light } from 'next/font/google'

const bangers = Bangers({ subsets: ['latin'], weight: '400', variable: '--font-bangers' })
const marker = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--font-marker' })
const indie = Indie_Flower({ subsets: ['latin'], weight: '400', variable: '--font-indie' })
const shadows = Shadows_Into_Light({ subsets: ['latin'], weight: '400', variable: '--font-shadows' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bangers.variable} ${marker.variable} ${indie.variable} ${shadows.variable}`}>
      <body>{children}</body>
    </html>
  )
}

