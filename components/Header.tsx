'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              IN
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">
              INM-<span className="text-primary">BioNeno</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg transition font-semibold">
              <ShoppingCart className="w-4 h-4" />
              Shop Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-primary transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded transition"
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-4 bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg transition font-semibold">
              Shop Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
