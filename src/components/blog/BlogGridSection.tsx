import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../../data/blogData'

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
    <section className="py-12 md:py-20 bg-surface-dim/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="glass-panel p-6 md:p-8 rounded-[1.75rem] md:rounded-[2.5rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6">
                  {post.category && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-container">
                      {post.category}
                    </span>
                  )}
                  <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-on-surface-variant">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-on-surface mb-4 leading-tight group-hover:text-primary-container transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-3 group/link mt-auto"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface group-hover/link:text-primary-container transition-colors">
                    Read Article
                  </span>
                  <div className="h-px w-8 bg-on-surface/20 group-hover/link:w-12 group-hover/link:bg-primary-container transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
