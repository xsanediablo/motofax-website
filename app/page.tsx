import Link from 'next/link'
import Button from '@/components/Button'

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">Vehicle History Reports</p>
      <h1 className="mb-6 text-5xl font-black text-white sm:text-6xl">
        Welcome to <span className="text-red-500">MotoFax</span>
      </h1>
      <p className="mb-10 max-w-2xl text-lg text-gray-400">
        Trusted reporting for powersports dealers and riders. Connect your systems, generate reports, and close deals faster.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/pricing">
          <Button size="lg">View Pricing</Button>
        </Link>
        <Link href="/how-it-works">
          <Button size="lg" variant="outline">How It Works</Button>
        </Link>
      </div>
    </section>
  )
}
