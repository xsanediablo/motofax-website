import Link from 'next/link'
import Button from '@/components/Button'
import { Search, FileText, CheckCircle, ArrowRight, Zap, Lock, Globe } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Enter the VIN or Plate',
    description: 'Type in the 17-character VIN number or the vehicle\'s license plate. MotoFax supports all powersports vehicles — motorcycles, ATVs, UTVs, PWC, snowmobiles, and more.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'We Pull the Data',
    description: 'Our platform instantly queries DMV records, insurance claim databases, auction histories, and odometer verification services. All in under two seconds.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Get Your Report',
    description: 'Receive a comprehensive, easy-to-read report covering title status, accident history, previous owners, mileage records, theft checks, and more.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Buy or Sell with Confidence',
    description: 'Use your report to negotiate a fair price, spot red flags before purchase, or prove your vehicle\'s clean history when selling.',
  },
]

const reportIncludes = [
  'Title history & status',
  'Accident & damage records',
  'Odometer rollback detection',
  'Theft & salvage records',
  'Previous owner count',
  'Lien & loan records',
  'Auction history',
  'Registration history',
  'Insurance claims',
  'Recall information',
  'Flood damage checks',
  'Export/import records',
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24 border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Simple & Fast</div>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            How
            <span className="text-red-500"> MotoFax </span>
            Works.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
            Get a complete powersports vehicle history report in seconds. No guesswork. No surprises.
          </p>
          <Link href="/pricing">
            <Button variant="primary" size="lg">Run a Report Now</Button>
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-6xl font-black text-gray-900 mb-2">{step.number}</div>
                    <div className="w-12 h-12 bg-red-950/50 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <Icon className="text-red-500" size={24} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 h-40 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="text-red-500 mx-auto mb-2" size={48} />
                        <div className="text-gray-500 text-sm">{step.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              What&apos;s Inside
              <span className="block text-red-500">Every Report.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One report covers everything you need to evaluate a powersports vehicle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportIncludes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-black border border-gray-800 rounded-lg p-4 hover:border-red-600/40 transition-colors">
                <CheckCircle className="text-red-500 flex-shrink-0" size={18} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-black border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: 'Secure & Private', description: 'All searches are encrypted and compliant with DPPA data regulations.' },
              { icon: Zap, title: 'Instant Results', description: 'Reports are generated in under 2 seconds — no waiting, no delays.' },
              { icon: Globe, title: 'Nationwide Coverage', description: 'Data from all 50 states, Puerto Rico, and Canadian provinces.' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-red-950/40 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-red-500" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
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
            Ready to Run
            <span className="block text-red-500">Your First Report?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">Consumer reports start at just $24.99. No subscription required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button variant="primary" size="lg">Get Started <ArrowRight className="ml-2 inline" size={18} /></Button>
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
