import Link from 'next/link'

const footerLinks = {
  PRODUCT: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'API Docs', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  'FOR DEALERS': [
    { label: 'Dealer Plans', href: '/for-dealers' },
    { label: 'POS Integrations', href: '/integrations' },
    { label: 'White-Label', href: '#' },
    { label: 'Bulk Lookup', href: '#' },
    { label: 'Partner Program', href: '#' },
  ],
  COMPANY: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  LEGAL: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Data Sources', href: '#' },
    { label: 'DPPA Compliance', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-black text-white text-2xl">
                M
              </div>
              <div>
                <div className="text-white font-black text-xl">MOTOFAX</div>
                <div className="text-xs text-red-500 font-bold">Vehicle History</div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Instant vehicle history reports for powersports dealers and consumers.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-xs tracking-widest mb-4 uppercase">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-500 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MotoFax. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built for powersports professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
