'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About INM-BioNeno</h1>
          <p className="text-xl text-green-100">Leading Innovation in Biotechnology Solutions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              INM-BioNeno is a cutting-edge biotechnology company headquartered in India, dedicated to providing innovative solutions for the agriculture and biotech sectors. With over a decade of experience, we have established ourselves as a trusted partner for farmers and agricultural enterprises across India and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between traditional agricultural practices and modern biotechnology, offering high-quality seeds, bio-inputs, and technology-driven solutions that maximize yield and sustainability.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We maintain the highest standards in all our products and services, ensuring farmer satisfaction and sustainable growth.',
              },
              {
                title: 'Innovation',
                description: 'Continuous research and development to bring cutting-edge biotech solutions to the Indian agricultural sector.',
              },
              {
                title: 'Sustainability',
                description: 'Committed to environmentally responsible practices that benefit both farmers and the planet.',
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-primary text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose INM-BioNeno?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {['Premium Quality', 'Expert Team', 'Best Support', 'Proven Results'].map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl mb-2">✓</div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
