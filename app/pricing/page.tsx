'use client'

import { useState } from 'react'
import Button from '@/components/Button'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const annual = billingCycle === 'annual'

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">Pricing</h1>
      <p className="mb-8 max-w-3xl text-gray-400">Choose a plan that fits your operation.</p>

      <div className="mb-12 inline-flex rounded-md border border-gray-700 bg-zinc-900 p-1">
        <button
          className={`rounded px-4 py-2 text-sm font-semibold ${billingCycle === 'monthly' ? 'bg-red-600 text-white' : 'text-gray-300'}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={`rounded px-4 py-2 text-sm font-semibold ${annual ? 'bg-red-600 text-white' : 'text-gray-300'}`}
          onClick={() => setBillingCycle('annual')}
        >
          Annual
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-gray-800 bg-zinc-950 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Consumer</h2>
          <p className="mb-4 text-gray-400">Single rider access</p>
          <p className="mb-6 text-4xl font-black text-red-500">${annual ? '19.99' : '24.99'}</p>
          <Button className="w-full">Start Consumer Plan</Button>
        </article>

        <article className="rounded-xl border border-red-600 bg-zinc-950 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Dealer</h2>
          <p className="mb-4 text-gray-400">Multi-unit dealership tools</p>
          <p className="mb-6 text-4xl font-black text-red-500">${annual ? '99' : '125'}</p>
          <Button className="w-full">Start Dealer Plan</Button>
        </article>

        <article className="rounded-xl border border-gray-800 bg-zinc-950 p-6">
          <h2 className="mb-2 text-xl font-bold text-white">Enterprise</h2>
          <p className="mb-4 text-gray-400">Custom integrations and support</p>
          <p className="mb-6 text-4xl font-black text-red-500">Custom</p>
          <Button className="w-full" variant="outline">Contact Sales</Button>
        </article>
      </div>
    </section>
  )
}
