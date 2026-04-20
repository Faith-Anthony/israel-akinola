import React from 'react'
import {
  AboutHeroSection,
  ProfileSection,
  PhilosophySection,
  ImpactSection,
  ExperienceSection,
  AboutCTA,
} from '../components/about'

export const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHeroSection />
      <ProfileSection />
      <PhilosophySection />
      <ImpactSection />
      <ExperienceSection />
      <AboutCTA />
    </div>
  )
}
