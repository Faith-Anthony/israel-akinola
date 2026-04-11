import React from 'react'
import { BlogHeroSection } from '../components/blog/BlogHeroSection'
import { BlogGridSection } from '../components/blog/BlogGridSection'

export const BlogPage: React.FC = () => {
  return (
    <div>
      <BlogHeroSection />
      <BlogGridSection />
    </div>
  )
}
