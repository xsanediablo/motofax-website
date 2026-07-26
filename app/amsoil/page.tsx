import Button from '@/components/Button'

const products = [
  'Synthetic Motorcycle Oil',
  'ATV/UTV Synthetic Oil',
  'PWC Synthetic Oil',
  'Synthetic Filters',
]

const amsoilLink = 'https://www.syntheticsusa.com/d/30538674/'

export default function AmsoilPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">AMSOIL</h1>
      <p className="mb-10 max-w-3xl text-gray-400">Shop premium synthetic products through our official AMSOIL storefront.</p>

      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article key={product} className="rounded-lg border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">{product}</h2>
            <p className="mb-6 text-gray-400">Built for powersports performance and long-lasting engine protection.</p>
            <a href={amsoilLink} target="_blank" rel="noopener noreferrer">
              <Button>BUY ONLINE</Button>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
