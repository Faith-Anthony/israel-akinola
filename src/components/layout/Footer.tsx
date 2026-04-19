import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#000000] text-on-surface/90">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-display text-5xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            NEWSLETTER
          </h2>
          <p className="mb-2 text-sm text-white">Israel also has a newsletter!</p>
          <p className="mb-8 text-sm text-white">
            On the agenda: insights on strategic systems, leadership, and culture delivered to your inbox.
          </p>
          <p className="mb-4 text-sm font-semibold text-white">Sign up for free!</p>
          
          <form className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white placeholder-white/60 focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container"
              required
            />
            <button
              type="submit"
              className="w-full shrink-0 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105 sm:w-auto"
            >
              SUBSCRIBE ME
            </button>
          </form>
          <p className="mt-4 text-[10px] text-white">
            By signing up, you agree to our privacy policy.
          </p>
        </div>

        {/* Links Grid */}
        <div className="mb-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              SERVICES
            </h3>
            <ul className="space-y-4 text-sm text-white">
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Strategy</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Consultation</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Project Management</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Systems Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              SOLUTIONS
            </h3>
            <ul className="space-y-4 text-sm text-white">
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Community Building</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Policy Advising</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Brand Architecture</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Cultural Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              AKINOLA
            </h3>
            <ul className="space-y-4 text-sm text-white">
              <li><Link to="/about" className="hover:text-primary-container transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-container transition-colors">Contact us</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-primary-container transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              CONNECT
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white">
              Join the conversation and stay updated on the latest insights.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/theking_israel" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary-container transition-colors"><FaInstagram /></a>
              <a href="https://linkedin.com/in/israel-akinola" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary-container transition-colors"><FaLinkedin /></a>
              <a href="https://x.com/theking_israel" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary-container transition-colors"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Massive Logo */}
        <div className="mb-8 flex justify-center">
          <h1 className="font-display text-[18vw] font-black leading-none tracking-tighter text-[#fdf6e3]/40 lg:text-[14rem]">
            Akinola
          </h1>
        </div>

        {/* Legal Notices */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] text-white sm:flex-row">
          <div className="max-w-2xl text-center sm:text-left">
            <p>© {currentYear} Israel Akinola. All rights reserved.</p>
            <p className="mt-1 text-white">
              Building systems that shape people, nations, and the future.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right sm:text-left">
            <Link to="#" className="hover:text-primary-container text-white">Legal notices</Link>
            <Link to="#" className="hover:text-primary-container text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
