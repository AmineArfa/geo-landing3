import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { getCTAVariant, getModalLayoutVariant } from '../lib/abTest';
import type { AnalysisResponse } from '../types/analysis';

interface ResultsModalProps {
  domain: string;
  results: AnalysisResponse;
  onClose: () => void;
  onRetry: () => void;
  onCTAClick: () => void;
}

export function ResultsModal({
  domain,
  results,
  onClose,
  onRetry,
  onCTAClick,
}: ResultsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const ctaVariant = getCTAVariant();
  // Note: getModalLayoutVariant() is called for A/B test tracking but layout is always compact on mobile
  getModalLayoutVariant();

  useEffect(() => {
    trackEvent('result_shown', { domain });

    // Trap focus in modal
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [domain]);

  const handleCTAClick = () => {
    trackEvent('cta_clicked', { domain, variant: ctaVariant });
    onCTAClick();
  };

  const handleRetry = () => {
    trackEvent('retry_clicked', { domain });
    onRetry();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const ctaText = {
    A: 'Get Full Report',
    B: 'Unlock Insights',
    C: 'Join Waitlist',
  }[ctaVariant];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal - Compact on mobile */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-lg sm:rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
        >
          {/* Close button - Touch-friendly */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 min-h-touch min-w-touch p-2 flex items-center justify-center rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors z-10"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Header - Compact */}
            <div className="space-y-1 sm:space-y-2 pr-8">
              <h2
                id="modal-title"
                className="text-lg sm:text-2xl md:text-3xl font-medium text-gray-900 tracking-tight"
              >
                {domain}
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500 font-light uppercase tracking-wide">Brand Perception Analysis</p>
            </div>

            {/* Brand Summary - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1.5 sm:space-y-2"
            >
              <h3 className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wide">Summary</h3>
              <p className="text-gray-900 leading-relaxed text-sm sm:text-base">{results.summary}</p>
            </motion.div>

            {/* Dominant Adjectives - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1.5 sm:space-y-2"
            >
              <h3 className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wide">Dominant Adjectives</h3>
              <div className="flex flex-wrap gap-1.5">
                {results.adjectives.map((adjective, index) => (
                  <motion.span
                    key={adjective}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.02 }}
                    className="px-2 py-1 bg-gray-100 text-gray-900 text-xs font-medium rounded border border-gray-200"
                  >
                    {adjective}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Competitors - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-1.5 sm:space-y-2"
            >
              <h3 className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wide">Perceived Competitors</h3>
              <div className="space-y-1.5">
                {results.competitors.map((competitor, index) => (
                  <motion.div
                    key={competitor}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.03 }}
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white font-medium text-[10px] flex-shrink-0">
                      {competitor.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-gray-900 text-xs sm:text-sm">{competitor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Value Tease - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-accent-50 to-accent-100/50 rounded-lg p-3 sm:p-4 border border-accent-200/50"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-xs sm:text-sm">Get the Full Report</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-2">
                    Unlock comprehensive insights:
                  </p>
                  <ul className="space-y-1 text-[10px] sm:text-xs text-gray-600">
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Sentiment trends over time
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Detailed competitor analysis
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Actionable recommendations
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Continuous monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Social Proof - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="hidden sm:block text-center py-2 sm:py-3 border-t border-gray-200"
            >
              <p className="text-[10px] sm:text-xs text-gray-400 font-light mb-1">
                1,247 brands analyzed this week
              </p>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9/5
                </span>
                <span>•</span>
                <span>98% satisfaction</span>
              </div>
            </motion.div>

            {/* CTAs - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1"
            >
              <button
                onClick={handleCTAClick}
                className="flex-1 min-h-touch px-4 sm:px-5 py-2.5 sm:py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all"
              >
                {ctaText}
              </button>
              <button
                onClick={handleRetry}
                className="min-h-touch px-4 sm:px-5 py-2.5 sm:py-3 text-gray-600 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              >
                Try Another
              </button>
            </motion.div>

            {/* Disclaimer - Smaller */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] sm:text-xs text-gray-400 text-center"
            >
              AI-generated insights. Results may vary.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
