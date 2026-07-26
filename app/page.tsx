'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import { FileSearch, Shield, Zap, Users, ChevronRight, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: FileSearch,
    title: 'Instant Reports',
    description: 'Get complete vehicle history reports in seconds. Title records, accident history, odometer readings, and more.',
  },
  {
    icon: Shield,
    title: 'Verified Data',
    description: 'Sourced from DMV records, insurance databases, and auction data. Reliable information you can trust.',
  },
  {
    icon: Zap,
    title: 'Dealer Integration',
    description: 'Plug directly into your dealership management system. Works with Tekmetric, Lightspeed, CDK Global, and more.',
  },
  {
    icon: Users,
    title: 'Built for Powersports',
    description: 'Motorcycles, ATVs, UTVs, PWC, and snowmobiles. The only history report platform built exclusively for powersports.',
  },
]

const stats = [
  { value: '2M+', label: 'Reports Generated' },
  { value: '500+', label: 'Dealer Partners' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<2s', label: 'Average Response Time' },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,20,60,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-800/40 rounded-full px-4 py-2 mb-8">
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Now Available</span>
            <span className="text-gray-400 text-xs">Powersports History Reports</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight">
            Know Your
            <span className="block text-red-500">Powersports</span>
            History.
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Instant vehicle history reports for motorcycles, ATVs, UTVs, and more.
            Trusted by dealers and consumers across the country.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/how-it-works">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                How It Works <ChevronRight className="ml-2 inline" size={20} />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-red-500 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Everything You Need to
              <span className="block text-red-500">Buy Smarter.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you're a consumer shopping for your next ride or a dealer running a full-service powersports shop — MotoFax has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-red-950/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                    <Icon className="text-red-500" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Simple Process</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Three Steps to
                <span className="block text-red-500">Full Transparency.</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                MotoFax makes it simple to get the full picture on any powersports vehicle before you buy — or before you sell.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Enter the VIN or license plate number',
                  'Receive a complete history report instantly',
                  'Make informed decisions with confidence',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
              <Link href="/how-it-works">
                <Button variant="primary" size="md">
                  Learn More <ChevronRight className="ml-1 inline" size={16} />
                </Button>
              </Link>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-8">
              <div className="bg-gray-900 rounded-xl p-6 mb-4">
                <div className="text-xs text-gray-500 mb-2 font-mono">Enter VIN or Plate</div>
                <div className="bg-black border border-gray-700 rounded-lg p-3 text-gray-400 font-mono text-sm">
                  1HD1KHM15HB660123
                </div>
              </div>
              <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6">
                <div className="text-xs text-red-500 font-bold mb-3 uppercase tracking-wide">Report Ready</div>
                <div className="space-y-2">
                  {['Title: Clean', 'Accidents: None', 'Owners: 2', 'Mileage Verified'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            Ready to Ride
            <span className="block text-red-500">With Confidence?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of consumers and dealers who use MotoFax to make smarter powersports decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button variant="primary" size="lg">Get Started Today</Button>
            </Link>
            <Link href="/for-dealers">
              <Button variant="outline" size="lg">Dealer Solutions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
