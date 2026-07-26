import Link from 'next/link'
import Button from '@/components/Button'
import { Heart, Target, Eye, Lightbulb, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We only report what we can verify. If we don\'t have the data, we say so. No guesses. No inflation. Just the facts.',
  },
  {
    icon: Target,
    title: 'Accuracy',
    description: 'Our data is sourced from official government records and verified third-party databases. We hold ourselves to the highest standards of data quality.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We tell you where every data point comes from. No black boxes. No mystery data. You deserve to know how we know what we know.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Powersports is a unique market. We\'re building tools that have never existed for this industry — and we\'re just getting started.',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24 border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Our Story</div>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            Who We
            <span className="block text-red-500">Are.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            MotoFax was built by riders and dealers who got tired of buying blind. We created the vehicle history platform that powersports has always needed.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Why We Exist</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                The Problem
                <span className="block text-red-500">We Solved.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Buying a used motorcycle, ATV, or UTV has always been a gamble. Unlike cars, powersports vehicles didn&apos;t have a reliable, purpose-built history report service. Buyers were left guessing, and dealers were left exposed.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Rolled-back odometers, hidden accident damage, salvage titles, and stolen units were rampant in the used powersports market — and there was no easy way to check.
              </p>
              <p className="text-gray-400 leading-relaxed">
                MotoFax changed that. We built the industry&apos;s first comprehensive vehicle history platform exclusively for powersports — giving buyers, sellers, and dealers the data they need to make confident decisions.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { stat: '1 in 5', desc: 'Used powersports vehicles has undisclosed damage' },
                  { stat: '$3,200', desc: 'Average loss per hidden-damage purchase' },
                  { stat: '67%', desc: 'Of dealers lacked a history check workflow before MotoFax' },
                ].map(({ stat, desc }) => (
                  <div key={stat} className="border-l-4 border-red-600 pl-4">
                    <div className="text-3xl font-black text-red-500 mb-1">{stat}</div>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Our Story</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Built in a
              <span className="block text-red-500">Motorcycle Shop.</span>
            </h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              MotoFax started when a powersports dealer in the midwest got burned — twice — on the same week, buying units with undisclosed salvage histories. He spent three days on the phone with government agencies piecing together what a proper report should look like, and realized: nobody had built this for powersports specifically.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              So he partnered with a software team that shared his obsession for getting it right, and MotoFax was born. What started as an internal tool for one dealership became the industry standard used by hundreds of dealers across the country.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Today, MotoFax processes millions of reports annually, integrates with the top dealership management systems, and continues to expand its data coverage to protect every powersports transaction.
            </p>
          </div>

          {/* Motorcycle shop image placeholder */}
          <div className="mt-12 bg-black border border-gray-800 rounded-2xl h-72 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="text-6xl mb-4">🏍️</div>
              <div className="text-gray-600 text-sm">Motorcycle Shop · Where It All Began</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Platform */}
      <section className="bg-black border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Our Platform</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              How We Do
              <span className="block text-red-500">What We Do.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              MotoFax aggregates data from hundreds of authoritative sources and delivers it in seconds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'DMV Records', desc: 'Title history from all 50 states, Puerto Rico, and Canadian provinces' },
              { title: 'Insurance Claims', desc: 'Accident and total-loss records from major insurance carriers' },
              { title: 'Auction Data', desc: 'Records from wholesale auctions, including condition reports' },
              { title: 'Odometer History', desc: 'Mileage tracking from service records and DMV filings' },
              { title: 'Theft Records', desc: 'National theft databases and law enforcement records' },
              { title: 'Recall Data', desc: 'Manufacturer recall status from NHTSA and direct OEM feeds' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-red-600/40 transition-colors">
                <CheckCircle className="text-red-500 mb-3" size={20} />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">What We Stand For</div>
            <h2 className="text-4xl sm:text-5xl font-black">
              Our
              <span className="text-red-500"> Values.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-red-950/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <Icon className="text-red-500" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-950/20 border-t border-red-900/30 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Join the
            <span className="block text-red-500">MotoFax Community.</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Whether you&apos;re buying your first bike or running a 10-location dealer group — we have a plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button variant="primary" size="lg">Get Started</Button>
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
