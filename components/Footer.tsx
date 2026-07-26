'use client'

import Link from 'next/link'

export default function Footer() {
  return (
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
  )
}