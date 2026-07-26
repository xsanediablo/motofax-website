'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'

const consumerFeatures = [
  'Single vehicle history report',
  'Title & ownership history',
  'Accident & damage records',
  'Odometer verification',
  'Theft & salvage check',
  'Recall information',
]

const dealerMonthlyFeatures = [
  'Unlimited vehicle reports',
  'DMS & POS integrations',
  'White-label report branding',
  'Bulk inventory lookup',
  'Priority dealer support',
  'Usage analytics dashboard',
  'Multi-location management',
  'API access (10K req/month)',
]

const enterpriseFeatures = [
  'Everything in Dealer plan',
  'Custom API rate limits',
  'Dedicated account manager',
  'Custom contract terms',
  'SLA guarantees',
  'On-site training & onboarding',
  'Custom integrations built for you',
  'White-glove enterprise support',
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const dealerMonthlyPrice = 125
  const dealerAnnualPrice = 99

  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24 border-b border-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Simple Pricing</div>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            Straightforward
            <span className="block text-red-500">Pricing.</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            No hidden fees. No complicated tiers. Just the right plan for the way you work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-red-600' : 'bg-gray-700'}`}
            >
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-red-500 text-xs font-bold ml-1">Save 20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Consumer */}
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 flex flex-col">
              <div className="mb-8">
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Consumer</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-white">$24.99</span>
                </div>
                <div className="text-gray-500 text-sm">per report · one-time</div>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  Perfect for private buyers who want to verify a vehicle before purchasing.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {consumerFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/login">
                <Button variant="outline" size="md" className="w-full">
                  Buy a Report
                </Button>
              </Link>
            </div>

            {/* Dealer - Featured */}
            <div className="bg-gray-950 border-2 border-red-600 rounded-2xl p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
              <div className="mb-8">
                <div className="text-red-400 text-sm font-semibold uppercase tracking-wide mb-4">Dealer</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-white">
                    ${isAnnual ? dealerAnnualPrice : dealerMonthlyPrice}
                  </span>
                  <span className="text-gray-400 pb-2">/month</span>
                </div>
                {isAnnual && (
                  <div className="text-red-500 text-xs font-bold">
                    Billed annually · Save ${(dealerMonthlyPrice - dealerAnnualPrice) * 12}/yr
                  </div>
                )}
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  Unlimited reports plus all the integrations and tools your dealership needs.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {dealerMonthlyFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/login">
                <Button variant="primary" size="md" className="w-full">
                  Get Dealer Access <ArrowRight className="ml-2 inline" size={16} />
                </Button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 flex flex-col">
              <div className="mb-8">
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">Enterprise</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-white">Custom</span>
                </div>
                <div className="text-gray-500 text-sm">contact us for pricing</div>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  For dealer groups, OEMs, and high-volume organizations with custom requirements.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {enterpriseFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="md" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Note */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8">Frequently Asked</h2>
          <div className="space-y-6 text-left">
            {[
              {
                q: 'Is there a setup fee?',
                a: 'No. Dealer accounts activate immediately with no setup or onboarding fees.',
              },
              {
                q: 'Can I cancel my dealer plan anytime?',
                a: 'Yes. Monthly plans can be cancelled at any time. Annual plans are billed upfront but can be cancelled before renewal.',
              },
              {
                q: 'What powersports vehicles are covered?',
                a: 'Motorcycles, ATVs, UTVs, personal watercraft (PWC), snowmobiles, and other off-highway vehicles.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Enterprise prospects can request a demo with sample reports. Reach out to our sales team.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-black border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">{q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
