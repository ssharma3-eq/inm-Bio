'use client'

import { Leaf, Beaker, TrendingUp, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="gradient-primary text-white py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Agriculture with <span className="text-green-200">Biotech Innovation</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              INM-BioNeno brings cutting-edge biotechnology solutions to Indian farmers. From premium hybrid seeds to organic bio-inputs, we're committed to sustainable, profitable farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition text-lg">
                Explore Products
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-lg transition text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Leaf, label: 'Products', value: '50+' },
              { icon: TrendingUp, label: 'Farm Coverage', value: '10K+' },
              { icon: Beaker, label: 'R&D Hours', value: '5000+' },
              { icon: Zap, label: 'Yield Increase', value: '30%' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-green-200" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-green-100 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
