import Button from '@/components/Button'

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full rounded-xl border border-gray-800 bg-zinc-950 p-8">
        <h1 className="mb-2 text-3xl font-black text-white">Dealer Login</h1>
        <p className="mb-8 text-sm text-gray-400">Access your MotoFax dealer dashboard.</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none ring-red-500 focus:ring-2"
              placeholder="dealer@motofax.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-gray-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none ring-red-500 focus:ring-2"
              placeholder="••••••••"
            />
          </div>

          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </section>
  )
}
