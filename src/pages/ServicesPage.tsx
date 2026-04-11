import React from 'react'
import {
  ServicesHeroSection,
  ServicesGridSection,
  ServicesBreakdownSection,
  ApproachSection,
  FeatureCTASection,
  ServicesCTA,
} from '../components/services'

export const ServicesPage: React.FC = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesBreakdownSection />
      <ApproachSection />
      <FeatureCTASection />
      <ServicesCTA />
    </div>
  )
}
