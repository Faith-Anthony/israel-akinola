import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../../data/blogData'
import { FaArrowRight } from 'react-icons/fa6'

export const BlogGridSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      className='bg-surface-container py-20 md:py-32'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto px-4 md:px-8 max-w-6xl'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className='bg-surface border border-surface-container-high/50 p-6 md:p-8 hover:border-primary-container/50 transition-all duration-300'
            >
              {/* Category Badge */}
              {post.category && (
                <div className='inline-block mb-4'>
                  <span className='text-xs font-semibold text-primary-container uppercase tracking-wider'>
                    {post.category}
                  </span>
                </div>
              )}

              {/* Title */}
              <Link to={`/blog/${post.slug}`}>
                <h3 className='text-xl md:text-2xl font-display italic text-on-surface mb-3 leading-tight hover:text-primary-container transition-colors duration-300'>
                  {post.title}
                </h3>
              </Link>

              {/* Date */}
              <p className='text-sm text-on-surface-variant mb-4'>{post.date}</p>

              {/* Excerpt */}
              <p className='text-on-surface-variant leading-relaxed mb-6'>{post.excerpt}</p>

              {/* Read More Link */}
              <Link
                to={`/blog/${post.slug}`}
                className='inline-flex items-center gap-2 text-primary-container font-semibold hover:gap-3 transition-all duration-300'
              >
                Read More <FaArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
