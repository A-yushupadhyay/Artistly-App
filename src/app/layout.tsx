import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistly – Discover Artists for Your Event',
  description: 'Book singers, dancers, DJs and more with Artistly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-8 mt-4">{children}</main>
      </body>
    </html>
  )
}
