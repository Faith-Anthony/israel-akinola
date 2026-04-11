import React from 'react'
import {
  WorkHeroSection,
  FeaturedCaseStudies,
  BrandsGridSection,
  WorkCTA,
} from '../components/work'

export const WorkPage: React.FC = () => {
  return (
    <div>
      <WorkHeroSection />
      <FeaturedCaseStudies />
      <BrandsGridSection />
      <WorkCTA />
    </div>
  )
}
