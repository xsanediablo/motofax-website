'use client'

import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo
              size="lg"
              textClassName="hidden sm:block"
              className="transition-transform hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">How It Works</Link>
            <Link href="/for-dealers" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">For Dealers</Link>
            <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Integrations</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            <Link href="/amsoil" className="text-red-500 hover:text-red-400 transition-colors text-sm font-bold">AMSOIL</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <button className="text-gray-400 hover:text-white transition-colors font-semibold text-sm">
                Dealer Login
              </button>
            </Link>
            <Link href="/pricing">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <Link href="/how-it-works" className="block text-gray-400 hover:text-white transition-colors py-1">How It Works</Link>
            <Link href="/for-dealers" className="block text-gray-400 hover:text-white transition-colors py-1">For Dealers</Link>
            <Link href="/integrations" className="block text-gray-400 hover:text-white transition-colors py-1">Integrations</Link>
            <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors py-1">Pricing</Link>
            <Link href="/amsoil" className="block text-red-500 hover:text-red-400 transition-colors font-bold py-1">AMSOIL</Link>
            <Link href="/about" className="block text-gray-400 hover:text-white transition-colors py-1">About</Link>
            <Link href="/login" className="block text-gray-400 hover:text-white transition-colors py-1">Dealer Login</Link>
            <div className="pt-2">
              <Link href="/pricing">
                <Button variant="primary" className="w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
