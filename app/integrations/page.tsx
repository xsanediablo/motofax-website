const integrations = [
  'Tekmetric',
  'Shop Monkey',
  'DXI',
  'Dealer Spike',
  'Traffic Log Pro',
  'Lightspeed DMS',
  'CDK Global',
  'Blackpurl',
  'Custom REST/Webhook',
]

export default function IntegrationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">Integrations</h1>
      <p className="mb-12 max-w-3xl text-gray-400">Connect MotoFax with your existing POS and dealership systems.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <div key={integration} className="rounded-lg border border-gray-800 bg-zinc-950 p-5 text-lg font-semibold text-white">
            <span className="text-red-500">•</span> {integration}
          </div>
        ))}
      </div>
    </section>
  )
}
