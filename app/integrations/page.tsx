const integrations = [
  'Square', 'Toast', 'Shopify', 'Clover', 'PayPal', 'Stripe', 'QuickBooks', 'Xero', 'FreshBooks'
]

export default function IntegrationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">Integrations</h1>
      <p className="mb-12 max-w-3xl text-gray-400">MotoFax integrates with all major POS and business systems.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {integrations.map((integration) => (
          <div key={integration} className="rounded-lg border border-gray-800 bg-zinc-950 p-6 text-center">
            <h3 className="font-bold text-white">{integration}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}