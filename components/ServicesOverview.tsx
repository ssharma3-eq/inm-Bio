'use client'

import { Droplet, Sprout, Bug, BarChart3 } from 'lucide-react'

export default function ServicesOverview() {
  const services = [
    {
      icon: Sprout,
      title: 'Premium Hybrid Seeds',
      description: 'High-yield, disease-resistant seeds optimized for Indian climate and soil conditions.',
    },
    {
      icon: Droplet,
      title: 'Bio-Fertilizers',
      description: 'Organic microbial consortium that enriches soil and reduces chemical dependency.',
    },
    {
      icon: Bug,
      title: 'Biopesticides',
      description: 'Natural pest control solutions with zero residue and complete safety for humans.',
    },
    {
      icon: BarChart3,
      title: 'Precision Farming',
      description: 'AI-powered advisory and monitoring systems for data-driven agricultural decisions.',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
        <p className="text-xl text-gray-600">
          Complete solutions for modern, sustainable agriculture
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
