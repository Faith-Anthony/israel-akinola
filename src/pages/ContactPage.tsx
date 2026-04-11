import React from 'react'
import { ContactHeroSection } from '../components/contact/ContactHeroSection'
import { ContactCardsGrid } from '../components/contact/ContactCardsGrid'

export const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactHeroSection />
      <ContactCardsGrid />
    </div>
  )
}
