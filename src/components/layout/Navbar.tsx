import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import brandLogo from '@brand-logo'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <header className="fixed inset-x-0 top-0 z-50">


      {/* Glass nav — flows down from the roof on scroll */}
      <div
        className={`transition-[padding,border-radius] duration-300 ease-out sm:px-4 lg:px-8 ${
          scrolled ? 'pt-4 pb-2 px-3' : 'p-0 w-full max-w-none'
        }`}
      >
        <motion.nav
          className={`mx-auto overflow-hidden transition-all duration-300 ease-out ${
            scrolled
              ? 'container-max rounded-2xl border border-on-surface/10 bg-surface/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-xl'
              : 'w-full rounded-none border-b border-on-surface/5 bg-app-background/50 shadow-none backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="flex shrink-0 items-center gap-2"
              data-cursor-hover
            >
              <img
                src={brandLogo}
                alt="Israel Akinola"
                className="h-9 w-auto object-contain sm:h-10 md:h-11"
                loading="eager"
              />
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-on-surface/75 transition-colors hover:bg-white/[0.06] hover:text-on-surface"
                  data-cursor-hover
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/contact" className="hidden lg:block" data-cursor-hover>
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary-container px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-on-primary shadow-md"
              >
                Let&apos;s Talk
              </motion.span>
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface-container/60 lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              data-cursor-hover
            >
              <span className="material-symbols-outlined text-2xl text-on-surface">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-on-surface/10 px-4 py-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wider text-on-surface/85 hover:bg-white/[0.06]"
                    onClick={() => setIsOpen(false)}
                    data-cursor-hover
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 rounded-xl bg-on-surface px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-surface"
                  onClick={() => setIsOpen(false)}
                  data-cursor-hover
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          )}
        </motion.nav>
      </div>
    </header>
  )
}
