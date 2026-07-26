import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MotoFax - Vehicle History Reports',
  description: 'Get comprehensive vehicle history reports instantly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}