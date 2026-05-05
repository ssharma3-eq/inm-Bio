'use client'

import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import ServicesOverview from '@/components/ServicesOverview'
import TestimonialSection from '@/components/TestimonialSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedProducts />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}
