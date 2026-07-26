import Link from 'next/link'
import Button from '@/components/Button'
import { Plug, Zap, Code, CheckCircle } from 'lucide-react'

const integrations = [
  {
    name: 'Tekmetric',
    category: 'Shop Management',
    description: 'Pull MotoFax reports directly inside Tekmetric during vehicle check-in or appraisal.',
    status: 'Available',
  },
  {
    name: 'Shop Monkey',
    category: 'Shop Management',
    description: 'Seamless integration with Shop Monkey workflows for instant history lookups.',
    status: 'Available',
  },
  {
    name: 'DXI',
    category: 'Dealer Platform',
    description: 'Embedded MotoFax reporting inside the DXI dealer platform.',
    status: 'Available',
  },
  {
    name: 'Dealer Spike',
    category: 'Dealer Website',
    description: 'Add MotoFax vehicle history to your Dealer Spike vehicle listings automatically.',
    status: 'Available',
  },
  {
    name: 'Traffic Log Pro',
    category: 'CRM',
    description: 'Trigger MotoFax reports from Traffic Log Pro deal creation and appraisal workflows.',
    status: 'Available',
  },
  {
    name: 'Lightspeed DMS',
    category: 'DMS',
    description: 'Native integration with Lightspeed dealer management system for automatic VIN lookups.',
    status: 'Available',
  },
  {
    name: 'CDK Global',
    category: 'DMS',
    description: 'Enterprise-grade CDK Global integration for high-volume powersports dealers.',
    status: 'Available',
  },
  {
    name: 'Blackpurl',
    category: 'DMS',
    description: 'Cloud-native integration with Blackpurl for modern powersports dealerships.',
    status: 'Available',
  },
  {
    name: 'Custom REST/Webhook',
    category: 'API',
    description: 'Build your own integration using our RESTful API or configure webhook notifications for any event.',
    status: 'Available',
  },
]

const categoryColors: Record<string, string> = {
  'Shop Management': 'text-blue-400 bg-blue-950/40 border-blue-800/30',
  'Dealer Platform': 'text-purple-400 bg-purple-950/40 border-purple-800/30',
  'Dealer Website': 'text-green-400 bg-green-950/40 border-green-800/30',
  CRM: 'text-yellow-400 bg-yellow-950/40 border-yellow-800/30',
  DMS: 'text-orange-400 bg-orange-950/40 border-orange-800/30',
  API: 'text-red-400 bg-red-950/40 border-red-800/30',
}

export default function Integrations() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24 border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Plug & Play</div>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            Works With
            <span className="block text-red-500">Your Tools.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
            MotoFax integrates with the leading powersports dealer management systems, shop platforms, and CRM tools — so you can run vehicle history reports without leaving your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-dealers">
              <Button variant="primary" size="lg">Get Started</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">View Dealer Plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Cards */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              Supported
              <span className="text-red-500"> Integrations.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              All integrations are available on Dealer and Enterprise plans. New integrations added regularly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-red-950/40 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    {integration.category === 'API' ? (
                      <Code className="text-red-500" size={22} />
                    ) : (
                      <Plug className="text-red-500" size={22} />
                    )}
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${categoryColors[integration.category] ?? 'text-gray-400 bg-gray-900 border-gray-700'}`}>
                    {integration.category}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{integration.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{integration.description}</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
                  <CheckCircle className="text-green-500" size={14} />
                  <span className="text-green-400 text-xs font-semibold">{integration.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="bg-gray-950 border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">Developer-Friendly</div>
              <h2 className="text-4xl font-black mb-6">
                Build Your Own
                <span className="block text-red-500">Integration.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our RESTful API gives you full access to MotoFax data. Webhooks let you trigger reports automatically based on events in your system. Full documentation available for Enterprise customers.
              </p>
              <div className="space-y-3">
                {[
                  'RESTful JSON API',
                  'Webhook event notifications',
                  'Sandbox environment for testing',
                  'Rate limits starting at 10,000 req/month',
                  'Dedicated integration support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Zap className="text-red-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm">
              <div className="text-gray-500 text-xs mb-4">// MotoFax API Example</div>
              <div className="space-y-1">
                <div><span className="text-blue-400">GET</span> <span className="text-gray-300">/v1/report</span></div>
                <div className="text-gray-600 pl-4">?vin=1HD1KHM15HB660123</div>
                <div className="text-gray-600 pl-4">&api_key=YOUR_KEY</div>
                <div className="mt-4 text-gray-500">// Response</div>
                <div className="text-green-400">{'{'}</div>
                <div className="pl-4 text-yellow-300">&quot;status&quot;: <span className="text-green-300">&quot;clean&quot;</span>,</div>
                <div className="pl-4 text-yellow-300">&quot;owners&quot;: <span className="text-blue-300">2</span>,</div>
                <div className="pl-4 text-yellow-300">&quot;accidents&quot;: <span className="text-blue-300">0</span>,</div>
                <div className="pl-4 text-yellow-300">&quot;odometer_verified&quot;: <span className="text-purple-300">true</span></div>
                <div className="text-green-400">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-950/20 border-t border-red-900/30 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Don&apos;t See
            <span className="block text-red-500">Your Platform?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            We&apos;re constantly adding new integrations. Contact us and we&apos;ll prioritize yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button variant="primary" size="lg">Start Integrating</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
