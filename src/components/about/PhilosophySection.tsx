import React from 'react'
import { motion } from 'framer-motion'

const philosophyStatements = [
  'Leading is first a personal art before a public act.',
  'The only work that matters is work that multiplies beauty on the earth.',
  'Designing systems is about seeing what does not yet exist.',
]

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold italic text-on-surface">
            Philosophy
          </h2>
        </motion.div>

        {/* Philosophy Statements */}
        <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
          {philosophyStatements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`${
                index % 2 === 0 ? 'md:text-left md:pr-12' : 'md:text-right md:pl-12'
              }`}
            >
              <div
                className={`${
                  index === 1 ? 'md:flex md:justify-end' : ''
                }`}
              >
                <div
                  className={`${
                    index === 1 ? 'max-w-2xl' : ''
                  }`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic text-on-surface leading-tight">
                    {statement}
                  </p>
                  {/* Accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-primary-container mt-6 ${
                      index % 2 === 0 ? '' : 'md:ml-auto'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
