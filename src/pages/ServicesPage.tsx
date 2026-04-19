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
    <div className="bg-surface text-on-surface">
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesBreakdownSection />
      <ApproachSection />
      <FeatureCTASection />
      <ServicesCTA />
    </div>
  )
}
