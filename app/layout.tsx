'use client'

import Link from 'next/link'
import './globals.css'
import Image from 'next/image'

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
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23000' width='200' height='200'/%3E%3Cg transform='translate(50,50)'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%23999' stroke-width='3'/%3E%3Cpath d='M30,60 Q50,30 70,60' fill='none' stroke='%23999' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='35' cy='75' r='5' fill='%23999'/%3E%3Ccircle cx='65' cy='75' r='5' fill='%23999'/%3E%3Cpath d='M45,85 L55,85' stroke='%23FF4444' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M60,50 L80,30' stroke='%23FF4444' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M60,50 L80,70' stroke='%23FF4444' stroke-width='4' stroke-linecap='round'/%3E%3C/g%3E%3C/svg%3E"
                  alt="MotoFax"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold">
                  <span className="text-white">Moto</span>
                  <span className="text-red-500">Fax</span>
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
