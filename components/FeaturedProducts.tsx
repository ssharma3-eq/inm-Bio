'use client'

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export default function FeaturedProducts() {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Premium Hybrid Seeds',
      price: '₹450-1200/kg',
      category: 'Seeds',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Bio-Fertilizer Consortium',
      price: '₹280/liter',
      category: 'Bio-Inputs',
      image: 'https://images.unsplash.com/photo-1584830555082-0a7e7c0c0f8e?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Biopesticide Solution',
      price: '₹350/liter',
      category: 'Plant Protection',
      image: 'https://images.unsplash.com/photo-1599599810694-b3fa7c4d7e3f?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Crop Advisory App',
      price: 'Free / ₹999/year',
      category: 'Digital',
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=400&h=300&fit=crop',
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">
            Discover our best-selling biotech solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-primary bg-green-100 px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <button className="bg-primary hover:bg-green-700 text-white px-3 py-1 rounded transition text-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block bg-primary hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
