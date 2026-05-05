'use client'

export default function CTASection() {
  return (
    <section className="gradient-secondary text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Yield?</h2>
        <p className="text-xl mb-8 text-orange-100">
          Join thousands of farmers who have transformed their farming with INM-BioNeno's innovative solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition text-lg">
            Shop Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-lg transition text-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
