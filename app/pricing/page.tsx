'use client'

import { useState } from 'react'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">Pricing</h1>
      <p className="mb-12 max-w-3xl text-gray-400">Simple, transparent pricing for every need.</p>

      <div className="flex justify-center mb-12">
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-6 py-2 mr-4 rounded-lg ${!isAnnual ? 'bg-red-500 text-white' : 'text-gray-400'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-6 py-2 rounded-lg ${isAnnual ? 'bg-red-500 text-white' : 'text-gray-400'}`}
        >
          Annual
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="rounded-lg border border-gray-800 bg-zinc-950 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Consumer</h2>
          <div className="text-4xl font-bold text-red-500 mb-6">$24.99{isAnnual ? '' : ''}/report</div>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Single vehicle reports</li>
            <li>✓ Email delivery</li>
            <li>✓ Basic analytics</li>
          </ul>
        </article>

        <article className="rounded-lg border border-red-500 bg-zinc-950 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Dealer</h2>
          <div className="text-4xl font-bold text-red-500 mb-6">${isAnnual ? '99' : '125'}/month</div>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Unlimited reports</li>
            <li>✓ API access</li>
            <li>✓ Priority support</li>
            <li>✓ Advanced analytics</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
