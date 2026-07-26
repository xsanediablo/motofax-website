const dealers = [
  { name: 'CarMax', icon: '🏢' },
  { name: 'AutoTrader', icon: '🚗' },
  { name: 'Cars.com', icon: '🛣️' },
]

export default function ForDealersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">For Dealers</h1>
      <p className="mb-12 max-w-3xl text-gray-400">Streamline your inventory management with MotoFax's dealer tools.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {dealers.map((dealer) => (
          <article key={dealer.name} className="rounded-lg border border-gray-800 bg-zinc-950 p-6">
            <div className="text-4xl mb-4">{dealer.icon}</div>
            <h2 className="text-2xl font-bold text-white">{dealer.name}</h2>
            <p className="text-gray-400 mt-2">Integrated dealer platform</p>
          </article>
        ))}
      </div>
    </section>
  )
}
