'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { Lock, Mail, ArrowRight } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Login logic placeholder
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Logo area */}
        <div className="text-center mb-10">
          <Logo size="lg" showText={false} className="justify-center mb-4" />
          <h1 className="text-3xl font-black text-white mb-2">Dealer Login</h1>
          <p className="text-gray-400">Sign in to your MotoFax dealer account</p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dealer@example.com"
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-black accent-red-600" />
                <span className="text-gray-400 text-sm">Remember me</span>
              </label>
              <button type="button" className="text-red-500 hover:text-red-400 text-sm font-semibold transition-colors">
                Forgot password?
              </button>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Sign In <ArrowRight className="ml-2 inline" size={18} />
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              Don&apos;t have a dealer account?{' '}
              <Link href="/pricing" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                Get dealer access
              </Link>
            </p>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
            ← Back to MotoFax
          </Link>
        </div>
      </div>
    </div>
  )
}
