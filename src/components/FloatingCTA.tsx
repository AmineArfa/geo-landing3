import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after user scrolls 50% of page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !show) {
        setShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show]);

  const handleClick = () => {
    trackEvent('cta_clicked', { source: 'floating_cta' });
    window.location.href = '#';
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 z-40 md:hidden"
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:max-w-sm mx-auto">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Ready to analyze your brand?</p>
            <p className="text-xs text-gray-600 mt-0.5">Get instant insights</p>
          </div>
          <button
            onClick={handleClick}
            className="px-4 py-2.5 sm:py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:shadow-lg transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto"
          >
            Try Free
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

