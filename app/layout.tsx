import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900']
})

export const metadata: Metadata = {
  title: 'Ghaith Mlika Personal Portfolio',
  description: "This is Ghaith Mlika's Personal Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} id="root">{children}</body>
    </html>
  )
}
