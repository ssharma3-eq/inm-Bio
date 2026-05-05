'use client'

import ProductCard from '@/components/ProductCard'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Hybrid Seeds',
      category: 'Seeds',
      price: '₹450-1200/kg',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
      description: 'High-yield hybrid seeds optimized for Indian climates',
      features: ['High yield potential', 'Disease resistant', 'Climate adaptive'],
    },
    {
      id: 2,
      name: 'Bio-Fertilizer Consortium',
      category: 'Bio-Inputs',
      price: '₹280/liter',
      image: 'https://images.unsplash.com/photo-1584830555082-0a7e7c0c0f8e?w=400&h=300&fit=crop',
      description: 'Organic microbial consortium for soil enrichment',
      features: ['100% organic', 'Improves soil health', 'Reduces chemical use'],
    },
    {
      id: 3,
      name: 'Biopesticide Solution',
      category: 'Plant Protection',
      price: '₹350/liter',
      image: 'https://images.unsplash.com/photo-1599599810694-b3fa7c4d7e3f?w=400&h=300&fit=crop',
      description: 'Natural pest control with zero residue',
      features: ['Bio-based', 'No residue', 'Safe for humans'],
    },
    {
      id: 4,
      name: 'Micronutrient Complex',
      category: 'Nutrients',
      price: '₹420/kg',
      image: 'https://images.unsplash.com/photo-1502890158892-a66172af2ad0?w=400&h=300&fit=crop',
      description: 'Complete micronutrient package for crop nutrition',
      features: ['Balanced formula', 'Easy absorption', 'Boost yield'],
    },
    {
      id: 5,
      name: 'Soil Testing Kit',
      category: 'Technology',
      price: '₹5500/kit',
      image: 'https://images.unsplash.com/photo-1576092160559-112ba8d25d1d?w=400&h=300&fit=crop',
      description: 'Professional soil analysis kit for precision farming',
      features: ['Accurate results', 'Easy to use', 'Digital reporting'],
    },
    {
      id: 6,
      name: 'Crop Advisory App',
      category: 'Digital',
      price: 'Free / ₹999/year Premium',
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=400&h=300&fit=crop',
      description: 'AI-powered crop management and advisory system',
      features: ['Real-time alerts', 'Weather integration', 'Yield prediction'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products & Services</h1>
          <p className="text-xl text-green-100">Complete biotech solutions for modern farming</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 text-green-100">
            Contact our expert team to find the perfect solution for your needs
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
