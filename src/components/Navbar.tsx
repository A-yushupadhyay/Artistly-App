'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Artists', href: '/artists' },
  { name: 'Onboard Artist', href: '/onboard' },
  { name: 'Dashboard', href: '/dashboard' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-indigo-600">🎤 Artistly</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:text-indigo-600 ${
                  pathname === item.href ? 'text-indigo-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
