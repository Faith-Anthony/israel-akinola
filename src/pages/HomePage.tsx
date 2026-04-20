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
    <div>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <FeaturedCaseStudy />
      <ClientsSection />
      <FinalCTA />
    </div>
  )
}
