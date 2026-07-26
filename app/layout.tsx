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
                <svg 
                  width="100" 
                  height="100" 
                  viewBox="0 0 500 500" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-24 h-24"
                >
                  {/* Shield outline */}
                  <path d="M 150 80 L 350 80 L 350 240 Q 250 340 250 340 Q 250 340 150 240 Z" 
                    fill="none" stroke="#888888" strokeWidth="20" strokeLinejoin="round"/>
                  
                  {/* Red checkmark */}
                  <path d="M 200 260 L 230 290 L 310 180" 
                    fill="none" stroke="#FF3333" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Motorcycle body */}
                  <g transform="translate(250, 180)">
                    {/* Wheels */}
                    <circle cx="-60" cy="80" r="25" fill="none" stroke="#333333" strokeWidth="8"/>
                    <circle cx="60" cy="80" r="25" fill="none" stroke="#333333" strokeWidth="8"/>
                    
                    {/* Bike frame */}
                    <path d="M -50 50 Q 0 20 50 50" 
                      fill="none" stroke="#888888" strokeWidth="12" strokeLinecap="round"/>
                    
                    {/* Handlebars */}
                    <path d="M -50 40 L -50 10" 
                      fill="none" stroke="#888888" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M -70 10 L -30 10" 
                      fill="none" stroke="#888888" strokeWidth="8" strokeLinecap="round"/>
                    
                    {/* Seat */}
                    <path d="M 0 30 Q 20 25 40 35" 
                      fill="none" stroke="#888888" strokeWidth="10" strokeLinecap="round"/>
                  </g>
                  
                  {/* Red accent lines */}
                  <line x1="280" y1="100" x2="340" y2="60" stroke="#FF3333" strokeWidth="16" strokeLinecap="round"/>
                  <line x1="280" y1="140" x2="340" y2="180" stroke="#FF3333" strokeWidth="16" strokeLinecap="round"/>
                </svg>
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
