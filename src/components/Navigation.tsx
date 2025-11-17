import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ];

  // Track scroll for backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo / Brand (mobile-first: always visible) */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-lg font-bold text-gray-900 hover:text-accent-600 transition-colors"
              aria-label="Home"
            >
              LLM Visibility
            </a>
          </div>

          {/* Desktop Navigation Links - hidden on mobile, visible from md up */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="min-h-touch-sm px-4 py-2 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 bg-white/40 hover:bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:border-gray-300/70 transition-all duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right side - CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* CTA Button - always visible, scaled for mobile */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="min-h-touch-sm px-4 py-2 md:px-6 md:py-2.5 bg-black hover:bg-gray-900 text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span className="hidden xs:inline">Get Started</span>
              <span className="xs:hidden">Start</span>
            </motion.button>

            {/* Mobile menu button - visible only on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden min-h-touch min-w-touch p-2 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - full-screen overlay on mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block min-h-touch px-5 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
