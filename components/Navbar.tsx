'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdAwDb3wE_5h-aVWKEGVd5RI61hHjp3U5zNGBimkxY5KsoAcw/viewform';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className={`font-bebas text-2xl tracking-widest transition-colors duration-300 ${
              scrolled ? 'text-[#2D6A4F]' : 'text-white'
            }`}
          >
            ACES FOR YOUTH
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`font-dm text-sm font-medium transition-colors duration-200 hover:text-[#F4A623] ${
                  scrolled ? 'text-[#1a1a1a]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4A623] text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#e09510] transition-colors duration-200 shadow-sm"
            >
              Register
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#1a1a1a]' : 'bg-white'
                } ${
                  i === 0 && mobileOpen
                    ? 'rotate-45 translate-y-2'
                    : i === 1 && mobileOpen
                    ? 'opacity-0'
                    : i === 2 && mobileOpen
                    ? '-rotate-45 -translate-y-2'
                    : ''
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-dm text-[#1a1a1a] font-medium hover:text-[#F4A623] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="bg-[#F4A623] text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-full w-fit hover:bg-[#e09510] transition-colors"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
