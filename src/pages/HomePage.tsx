import React from 'react'
import {
  HeroSection,
  AboutPreview,
  ServicesGrid,
  FeaturedCaseStudy,
  ClientsSection,
  BlogPreview,
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
      <BlogPreview />
      <FinalCTA />
    </div>
  )
}
