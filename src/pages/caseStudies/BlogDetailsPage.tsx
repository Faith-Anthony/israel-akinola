import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../../data/blogData'

import { FaArrowLeft } from 'react-icons/fa6'

export const BlogDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <Layout>
        <div className='bg-surface py-20 md:py-32'>
          <div className='container mx-auto px-4 md:px-8 max-w-4xl'>
            <Link
              to='/blog'
              className='inline-flex items-center gap-2 text-primary-container font-semibold hover:gap-3 transition-all duration-300 mb-8'
            >
              <FaArrowLeft size={16} /> Back to Blog
            </Link>
            <h1 className='text-4xl md:text-6xl font-display italic text-on-surface'>
              Post not found
            </h1>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        className='bg-surface-container py-20 md:py-32'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4 md:px-8 max-w-4xl'>
          {/* Back Link */}
          <Link
            to='/blog'
            className='inline-flex items-center gap-2 text-primary-container font-semibold hover:gap-3 transition-all duration-300 mb-8'
          >
            <FaArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Category */}
          {post.category && (
            <div className='inline-block mb-4'>
              <span className='text-xs font-semibold text-primary-container uppercase tracking-wider'>
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <motion.h1
            className='text-4xl md:text-5xl lg:text-6xl font-display italic text-on-surface mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {post.title}
          </motion.h1>

          {/* Date */}
          <motion.p
            className='text-lg text-on-surface-variant'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {post.date}
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        className='bg-surface py-20 md:py-32'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <article className='container mx-auto px-4 md:px-8 max-w-3xl'>
          {/* Article Body */}
          <motion.div
            className='prose prose-invert max-w-none'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {post.content.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className='text-lg text-on-surface-variant leading-relaxed mb-8 last:mb-0'
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </article>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className='bg-surface-container/50 py-16 md:py-24'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className='container mx-auto px-4 md:px-8 max-w-4xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className='text-2xl md:text-3xl font-display italic text-on-surface mb-6'>
              Explore more insights
            </h3>
            <Link
              to='/blog'
              className='inline-block px-8 py-3 bg-on-surface text-surface font-semibold hover:bg-white hover:text-on-surface transition-all duration-300'
            >
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}
