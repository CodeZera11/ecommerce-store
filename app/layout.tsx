import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'

const SCP = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Ecommerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={SCP.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
