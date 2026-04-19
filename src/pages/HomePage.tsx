import React from 'react'
import {
  HeroSection,
  AboutPreview,
  ServicesGrid,
  FeaturedCaseStudy,
  ClientsSection,
  FinalCTA,
} from '../components/homepage'

export const HomePage: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface">
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <FeaturedCaseStudy />
      <ClientsSection />
      <FinalCTA />
    </div>
  )
}
