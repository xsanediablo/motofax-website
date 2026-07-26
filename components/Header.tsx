'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/for-dealers', label: 'For Dealers' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/amsoil', label: 'AMSOIL', className: 'text-red-500 hover:text-red-400' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-600 text-3xl font-black text-white">M</div>
          <div>
            <p className="text-2xl font-black text-white">MOTOFAX</p>
            <p className="text-xs font-bold uppercase tracking-wider text-red-500">Vehicle History</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.className ?? 'text-gray-300 transition-colors hover:text-white'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">
            Dealer Login
          </Link>
          <Button size="sm">Get Started</Button>
        </div>

        <button
          className="text-gray-300 md:hidden"
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="space-y-3 border-t border-gray-800 px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${link.className ?? 'text-gray-300'} transition-colors hover:text-white`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            Dealer Login
          </Link>
        </nav>
      )}
    </header>
  )
}
