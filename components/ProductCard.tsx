'use client'

import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  description: string
  features: string[]
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
        <span className="absolute top-4 right-4 inline-block text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>

        {/* Features */}
        <ul className="mb-4 space-y-1">
          {product.features.map((feature, i) => (
            <li key={i} className="text-sm text-gray-700">
              <span className="text-primary mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price and Action */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-xl font-bold text-primary">{product.price}</span>
          <button className="bg-primary hover:bg-green-700 text-white p-2 rounded-lg transition flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}
