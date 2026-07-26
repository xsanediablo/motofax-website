const benefits = [
  'Increase customer confidence with transparent report history.',
  'Boost close rates with trusted third-party documentation.',
  'Reduce manual paperwork using automated records sync.',
  'Promote dealer services with integrated AMSOIL recommendations.',
]

export default function ForDealersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">For Dealers</h1>
      <p className="mb-10 max-w-3xl text-gray-400">MotoFax is built for service centers, powersports dealers, and multi-location operations.</p>
      <div className="rounded-xl border border-gray-800 bg-zinc-950 p-8">
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-gray-200">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
