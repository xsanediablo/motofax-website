const steps = [
  { title: 'Connect Data', description: 'MotoFax collects service and usage records from your existing workflow.' },
  { title: 'Normalize History', description: 'Every entry is standardized into one trusted vehicle timeline.' },
  { title: 'Generate Reports', description: 'Dealers and buyers get a complete report in seconds.' },
  { title: 'Share Instantly', description: 'Send secure links by text, email, or from your website checkout flow.' },
]

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">How It Works</h1>
      <p className="mb-12 max-w-3xl text-gray-400">MotoFax delivers vehicle history reports in four simple steps.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-lg border border-gray-800 bg-zinc-950 p-6">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-500">Step {index + 1}</p>
            <h2 className="mb-2 text-2xl font-bold text-white">{step.title}</h2>
            <p className="text-gray-400">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
