'use client'

import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-gray-800 bg-black py-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <img 
                  src="/motofax-logo.png" 
                  alt="MotoFax Logo"
                  className="w-32 h-32 object-contain"
                />
                <span className="text-4xl font-bold leading-tight">
                  <div><span className="text-white">Moto</span><span className="text-red-500">Fax</span></div>
                </span>
              </Link>
              <nav className="flex items-center gap-8">
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition">
                  How It Works
                </Link>
                <Link href="/for-dealers" className="text-gray-300 hover:text-white transition">
                  For Dealers
                </Link>
                <Link href="/integrations" className="text-gray-300 hover:text-white transition">
                  Integrations
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                  Pricing
                </Link>
                <Link href="/amsoil" className="text-red-500 font-bold hover:text-red-400 transition">
                  AMSOIL
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
                <Link href="/login" className="text-gray-300 hover:text-white transition">
                  Dealer Login
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-gray-800 bg-black py-12 mt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-white mb-4">Product</h3>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white block mb-2">
                  How It Works
                </Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white block mb-2">
                  Pricing
                </Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white block">
                  Integrations
                </Link>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">For Dealers</h3>
                <Link href="/for-dealers" className="text-gray-400 hover:text-white block mb-2">
                  Dealer Dashboard
                </Link>
                <Link href="/login" className="text-gray-400 hover:text-white block mb-2">
                  Login
                </Link>
                <a href="#" className="text-gray-400 hover:text-white block">
                  Documentation
                </a>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Company</h3>
                <Link href="/about" className="text-gray-400 hover:text-white block mb-2">
                  About
                </Link>
                <a href="#" className="text-gray-400 hover:text-white block mb-2">
                  Contact
                </a>
                <a href="#" className="text-gray-400 hover:text-white block">
                  Support
                </a>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Partners</h3>
                <Link href="/amsoil" className="text-red-500 hover:text-red-400 block mb-2 font-bold">
                  AMSOIL
                </Link>
                <a href="#" className="text-gray-400 hover:text-white block mb-2">
                  Affiliates
                </a>
                <a href="#" className="text-gray-400 hover:text-white block">
                  Become a Partner
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 MotoFax. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
