'use client'

import { Shield, Zap, Clock, TrendingUp, Droplet, Award, Wrench, Star } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Superior Engine Protection',
    description: "AMSOIL's advanced synthetic formula forms a durable film on engine surfaces, dramatically reducing wear even under extreme heat, heavy loads, and high RPMs common in powersports use.",
  },
  {
    icon: Clock,
    title: 'Extended Drain Intervals',
    description: 'AMSOIL synthetics last up to 3x longer than conventional oils — up to 12,000 miles between changes. Spend less time in the garage and more time on the trail.',
  },
  {
    icon: Zap,
    title: 'Enhanced Performance',
    description: 'Engineered for motorcycles, ATVs, UTVs, and PWC. AMSOIL boosts horsepower, sharpens throttle response, and maximizes fuel efficiency so your machine performs at its peak.',
  },
  {
    icon: TrendingUp,
    title: 'Trusted by Professional Riders',
    description: "From competitive racing teams to factory-backed squads, AMSOIL is the synthetic of choice for professionals who can't afford oil failures. Proven under the most demanding conditions.",
  },
  {
    icon: Droplet,
    title: 'Ideal for Powersports Applications',
    description: 'Purpose-formulated for the unique demands of powersports engines — high temperatures, wet clutches, gear lubrication, and extreme off-road use. One oil engineered for everything.',
  },
  {
    icon: Award,
    title: 'Industry-Leading Purity',
    description: '99.97% synthetic purity means fewer impurities, more consistent viscosity, and better protection at every temperature extreme — from cold winter starts to desert heat.',
  },
  {
    icon: Wrench,
    title: 'Protects Against Wear & Corrosion',
    description: 'AMSOIL synthetic technology resists rust, corrosion, and sludge buildup during storage. Perfect for seasonal powersports machines that sit between rides.',
  },
  {
    icon: Star,
    title: 'OEM-Approved Formulations',
    description: 'AMSOIL meets or exceeds OEM specifications for leading powersports manufacturers. Confidently use AMSOIL without voiding factory warranties.',
  },
]

const products = [
  {
    name: 'Synthetic Motorcycle Oil',
    description: 'Premium protection for street bikes, dirt bikes, and cruisers',
    detail: 'Formulated for engines with integrated transmissions and wet clutches',
    color: 'from-red-900/40 to-black',
  },
  {
    name: 'ATV/UTV Synthetic Oil',
    description: 'Formulated for extreme off-road conditions and heavy loads',
    detail: 'Handles the aggressive duty cycles of recreational and utility ATVs and UTVs',
    color: 'from-gray-800/60 to-black',
  },
  {
    name: 'PWC Synthetic Oil',
    description: 'Marine-grade protection for personal watercraft',
    detail: 'Resists water contamination and protects against rust and corrosion in marine environments',
    color: 'from-blue-900/40 to-black',
  },
  {
    name: 'Snowmobile Synthetic Oil',
    description: 'Cold-weather performance for snowmobiles',
    detail: 'Engineered to flow freely in sub-zero temperatures for instant cold-weather protection',
    color: 'from-gray-700/40 to-black',
  },
]

export default function Amsoil() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-black px-4 sm:px-6 lg:px-8 py-20 overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,20,60,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,0,30,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-800/40 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Official AMSOIL Dealer</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight">
            The World&apos;s Best
            <span className="block text-red-500">Synthetic Oil.</span>
          </h1>

          <p className="text-gray-300 text-xl sm:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-light">
            Premium AMSOIL synthetic lubricants engineered specifically for powersports engines. Trusted by professional riders, recommended by dealers, proven in competition.
          </p>

          <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-12">
            Superior Protection · Extended Life · Maximum Performance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://www.syntheticsusa.com/d/30538674/" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 hover:bg-red-500 text-white font-black text-xl px-12 py-5 rounded-xl transition-all duration-200 shadow-[0_0_40px_rgba(220,20,60,0.4)] hover:shadow-[0_0_60px_rgba(220,20,60,0.6)] uppercase tracking-wider">
                BUY ONLINE
              </button>
            </a>
          </div>

          <p className="text-gray-600 text-xs mt-4">
            You will be redirected to our authorized AMSOIL dealer store
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3x', label: 'Longer Oil Life' },
              { value: '99.97%', label: 'Synthetic Purity' },
              { value: '500+', label: 'Hours Engine Tested' },
              { value: '#1', label: 'Choice of Pro Racers' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-red-500 mb-1">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Why AMSOIL</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Benefits &amp; Information
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built for extreme performance. Engineered for powersports. Trusted by professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="bg-gray-950 border border-gray-800 p-6 rounded-xl hover:border-red-600/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-red-950/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                    <Icon className="text-red-500" size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Complete Lineup</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              AMSOIL for
              <span className="block text-red-500">Every Ride.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From motorcycles to PWCs, we carry the right AMSOIL product for your machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <div key={product.name} className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center border-b border-gray-800`}>
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">🛢️</div>
                    <div className="text-red-500 font-bold text-xs uppercase tracking-wide">AMSOIL</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{product.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://www.syntheticsusa.com/d/30538674/" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 hover:bg-red-500 text-white font-black text-lg px-10 py-4 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(220,20,60,0.3)] hover:shadow-[0_0_50px_rgba(220,20,60,0.5)] uppercase tracking-wider">
                BUY ONLINE — Shop All Products
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="bg-black border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-950 border border-red-600/30 rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Powersports Deserve the Best</div>
                <h2 className="text-4xl font-black text-white mb-6">
                  Why Settle for
                  <span className="block text-red-500">Conventional Oil?</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Whether you&apos;re riding a high-performance street bike, conquering trails on an ATV, carving waves on a PWC, or hitting the slopes on a snowmobile — AMSOIL&apos;s advanced synthetic formulations deliver the protection and performance your machine demands.
                </p>
                <a href="https://www.syntheticsusa.com/d/30538674/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-red-600 hover:bg-red-500 text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-200 uppercase tracking-wider">
                    BUY ONLINE
                  </button>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '3x Longer', value: 'Oil Life vs Conventional' },
                  { label: '99.97%', value: 'Synthetic Purity' },
                  { label: '500+ Hours', value: 'Engine Testing' },
                  { label: '#1 Choice', value: 'Among Pro Racers' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-black border border-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-red-500 mb-1">{stat.label}</div>
                    <p className="text-gray-500 text-xs">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">
            Trusted by
            <span className="block text-red-500">Powersports Professionals.</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Professional Racers', description: 'Used in competitive powersports racing worldwide by factory-backed and independent teams alike.' },
              { title: 'Powersports Dealers', description: 'Recommended by hundreds of dealerships as their preferred synthetic lubricant for customers.' },
              { title: 'OEM Partners', description: 'AMSOIL formulations meet or exceed specifications from major powersports manufacturers.' },
            ].map((item) => (
              <div key={item.title} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-600/40 transition-colors">
                <Star className="text-red-500 mb-3 mx-auto" size={28} />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-950/20 border-t border-red-900/30 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            Give Your Machine
            <span className="block text-red-500">What It Deserves.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Shop premium AMSOIL synthetic lubricants today. Fast shipping, authorized dealer pricing, and guaranteed quality.
          </p>
          <a href="https://www.syntheticsusa.com/d/30538674/" target="_blank" rel="noopener noreferrer">
            <button className="bg-red-600 hover:bg-red-500 text-white font-black text-2xl px-16 py-6 rounded-xl transition-all duration-200 shadow-[0_0_60px_rgba(220,20,60,0.5)] hover:shadow-[0_0_80px_rgba(220,20,60,0.7)] uppercase tracking-wider">
              BUY ONLINE
            </button>
          </a>
          <p className="text-gray-600 text-xs mt-4">
            Opens our authorized AMSOIL dealer store · syntheticsusa.com
          </p>
        </div>
      </section>
    </div>
  )
}
