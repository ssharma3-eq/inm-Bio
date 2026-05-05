'use client'

import { Star } from 'lucide-react'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      role: 'Farmer, Maharashtra',
      message: 'INM-BioNeno seeds have transformed my farming. Better yield, lower costs, and sustainable practices. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Priya Singh',
      role: 'Agri-entrepreneur, Punjab',
      message: 'Their bio-fertilizers work wonders. My soil health improved significantly, and my friends are now using them too.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Vikram Kumar',
      role: 'Large Farm Owner, Karnataka',
      message: 'Professional service, quality products, and outstanding support. INM-BioNeno is my trusted partner in agriculture.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Farmers Say</h2>
        <p className="text-xl text-gray-600">
          Real stories from satisfied customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex gap-1 mb-4">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>
            <p className="text-gray-600 mb-6 italic">"{testimonial.message}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
