export default function LoginPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="mb-8 text-4xl font-black text-white">Dealer Login</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-white font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-gray-700 text-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-gray-700 text-white"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}
