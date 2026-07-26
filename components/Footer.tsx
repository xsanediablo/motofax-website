import Link from 'next/link'

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/for-dealers', label: 'For Dealers' },
    ],
  },
  {
    title: 'Product',
    links: [
      { href: '/pricing', label: 'Pricing' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/amsoil', label: 'AMSOIL' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/', label: 'Home' },
      { href: '/login', label: 'Dealer Login' },
      { href: '/pricing', label: 'Plans' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/about', label: 'Contact' },
      { href: '/about', label: 'Terms' },
      { href: '/about', label: 'Privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">{column.title}</h3>
            <ul className="space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-white ${link.label === 'AMSOIL' ? 'text-red-500' : 'text-gray-400'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 px-4 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MotoFax. All rights reserved.
      </div>
    </footer>
  )
}
