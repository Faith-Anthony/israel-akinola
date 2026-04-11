import React from 'react'
import { FaLinkedin, FaInstagram, FaTiktok, FaXTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa6'
import logo from '../../assets/icons/logo2.PNG'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-container-high">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start mb-12">
          {/* Brand Section - Logo */}
          <div>
            <img
              src={logo}
              alt="Israel Akinola"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain brightness-125 contrast-125"
              style={{ mixBlendMode: 'screen' }}
              loading="lazy"
            />
            <p className="text-on-surface-variant text-base font-light mt-4">
              Digital Leadership & Strategic Thinking
            </p>
          </div>

          {/* Empty middle section for spacing */}
          <div></div>

          {/* Social Icons */}
          <div className="flex gap-6 md:justify-end">
            <a
              href="https://linkedin.com/in/israel-akinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://facebook.com/israelakinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300"
              title="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/theking_israel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@israel_akinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300"
              title="TikTok"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://x.com/theking_israel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300"
              title="X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="mailto:theisraelakinola@gmail.com"
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300"
              title="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-container-high pt-8">
          <p className="text-on-surface-variant text-center text-sm font-light">
            Copyright {currentYear} Israel Akinola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
