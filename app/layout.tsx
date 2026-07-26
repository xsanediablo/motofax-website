import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
