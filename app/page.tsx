'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-red-500">MotoFax</span>
          </h1>
          <p className="text-xl text-gray-400">Vehicle History Reports Made Simple</p>
        </div>
      </section>
    </main>
  )
}