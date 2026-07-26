export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-5xl font-black text-white">About MotoFax</h1>
      <p className="mb-8 max-w-3xl text-gray-400 text-lg">
        MotoFax revolutionizes vehicle history reports by making them simple, instant, and trustworthy for dealers and buyers.
      </p>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-gray-400 mb-8">
          We believe every vehicle deserves a complete, accurate history. MotoFax connects service records, ownership data, and market insights into one comprehensive report—in seconds.
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose MotoFax?</h2>
        <ul className="text-gray-400 space-y-3">
          <li>✓ <strong>Instant Reports:</strong> Generate complete histories in seconds, not days</li>
          <li>✓ <strong>Trusted Data:</strong> Aggregated from multiple authoritative sources</li>
          <li>✓ <strong>Easy Integration:</strong> Works seamlessly with your existing systems</li>
          <li>✓ <strong>Security First:</strong> Enterprise-grade encryption protects all data</li>
        </ul>
      </div>
    </section>
  )
}