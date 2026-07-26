import Link from 'next/link'
import Button from '@/components/Button'
import { TrendingUp, Users, Zap, BarChart3, ArrowRight, CheckCircle, Star } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Instant Lookups at the Point of Sale',
    description: 'Pull a full vehicle history report right from your DMS or service counter. No switching apps. No waiting. Results in under 2 seconds.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Trade-In Confidence',
    description: 'Know exactly what you\'re buying before you make an offer. Protect your margins with verified history on every trade.',
  },
  {
    icon: Users,
    title: 'Build Customer Trust',
    description: 'Show buyers a MotoFax report with every vehicle listing. Transparency builds trust — and trust closes deals.',
  },
  {
    icon: BarChart3,
    title: 'Bulk Lookup for Inventory',
    description: 'Run reports on your entire inventory at once. Keep your listings accurate and your floor plan clean.',
  },
]

const dealerFeatures = [
  'Unlimited reports per month',
  'DMS & POS system integrations',
  'White-label report branding',
  'Bulk inventory lookup tools',
  'API access for custom workflows',
  'Priority dealer support',
  'Usage analytics dashboard',
  'Multi-location account management',
]

export default function ForDealers() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24 border-b border-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Dealer Solutions</div>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
                MotoFax for
                <span className="block text-red-500">Dealerships.</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                The only vehicle history platform built specifically for powersports dealers. Protect your inventory, win more deals, and build lasting customer trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button variant="primary" size="lg">View Dealer Plans</Button>
                </Link>
                <Link href="/integrations">
                  <Button variant="outline" size="lg">See Integrations</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Star className="text-red-500" size={16} />
                <span className="text-gray-300 text-sm font-semibold">Trusted by 500+ Powersports Dealers</span>
              </div>
              <div className="space-y-3">
                {dealerFeatures.slice(0, 5).map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
                <div className="text-gray-500 text-xs mt-2">+ more included in every dealer plan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Built to Help Dealers
              <span className="block text-red-500">Sell More.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              MotoFax integrates into your existing workflow to save time and protect your dealership from costly mistakes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gray-950 border border-gray-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-red-950/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Icon className="text-red-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Features List */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              Everything in Your
              <span className="block text-red-500">Dealer Plan.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {dealerFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-black border border-gray-800 rounded-lg p-4">
                <CheckCircle className="text-red-500 flex-shrink-0" size={18} />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Active Dealer Partners' },
              { value: '2M+', label: 'Reports Run' },
              { value: '40%', label: 'Faster Appraisals' },
              { value: '99.9%', label: 'Platform Uptime' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl font-black text-red-500 mb-2">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-950/20 border-t border-red-900/30 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Start Protecting
            <span className="block text-red-500">Your Dealership.</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Dealer plans start at $99/month. No setup fees. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button variant="primary" size="lg">Get Dealer Access <ArrowRight className="ml-2 inline" size={18} /></Button>
            </Link>
            <Link href="/integrations">
              <Button variant="outline" size="lg">View Integrations</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
