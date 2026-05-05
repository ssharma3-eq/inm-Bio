'use client'

import BlogCard from '@/components/BlogCard'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'The Future of Sustainable Agriculture in India',
      excerpt: 'Discover how biotechnology is revolutionizing farming practices and making agriculture more sustainable and profitable.',
      date: 'May 15, 2026',
      author: 'Dr. Rajesh Kumar',
      category: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Understanding Hybrid Seeds: Benefits and Best Practices',
      excerpt: 'Learn about the advantages of hybrid seeds and how to maximize their potential in your fields.',
      date: 'May 10, 2026',
      author: 'Dr. Priya Sharma',
      category: 'Seeds',
      image: 'https://images.unsplash.com/photo-1599599810694-b3fa7c4d7e3f?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Organic Farming: Transitioning to Bio-fertilizers',
      excerpt: 'A comprehensive guide to shifting from chemical fertilizers to organic bio-fertilizers for better soil health.',
      date: 'May 5, 2026',
      author: 'Amit Patel',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1500382017468-f049863256f0?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Precision Farming: Technology Meets Agriculture',
      excerpt: 'How AI and IoT are transforming traditional farming into data-driven precision agriculture.',
      date: 'April 28, 2026',
      author: 'Dev Sharma',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Managing Pest Resistance with Biopesticides',
      excerpt: 'Effective strategies for pest management using natural and biological solutions.',
      date: 'April 20, 2026',
      author: 'Dr. Meera Singh',
      category: 'Plant Protection',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Soil Health: The Foundation of Profitable Farming',
      excerpt: 'Understanding soil testing and nutrient management for optimal crop production.',
      date: 'April 15, 2026',
      author: 'Vikram Kumar',
      category: 'Soil Science',
      image: 'https://images.unsplash.com/photo-1576092160559-112ba8d25d1d?w=600&h=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">INM-BioNeno Blog</h1>
          <p className="text-xl text-green-100">Insights, tips, and industry updates</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get the latest updates on agriculture, biotech, and sustainable farming practices
          </p>
          <form className="flex gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
