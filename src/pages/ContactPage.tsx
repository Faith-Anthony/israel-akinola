import React from 'react'
import { ContactHeroSection } from '../components/contact/ContactHeroSection'
import { ContactCardsGrid } from '../components/contact/ContactCardsGrid'

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface">
      <ContactHeroSection />
      <ContactCardsGrid />
    </div>
  )
}
