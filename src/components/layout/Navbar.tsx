import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo2.PNG'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-surface/20 backdrop-blur-md border-b border-surface-container-high">
      <div className="container-max px-0 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logo}
              alt="Israel Akinola"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain brightness-125 contrast-125"
              style={{ mixBlendMode: 'screen' }}
              loading="lazy"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-on-surface text-sm font-medium rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <Link to="/contact" className="hidden md:block ml-6 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-on-surface text-surface font-semibold rounded-lg transition-all duration-300 hover:bg-primary-container text-sm"
            >
              Let's Talk
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-surface-container transition-smooth"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-surface-container-high space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-on-surface rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 mt-3"
              onClick={() => setIsOpen(false)}
            >
              <button className="w-full px-6 py-2 bg-on-surface text-surface font-semibold rounded-lg transition-all duration-300 hover:bg-primary-container">
                Let's Talk
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
