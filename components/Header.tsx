'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">Moto</span>
            <span className="text-red-500">Fax</span>
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
  )
}