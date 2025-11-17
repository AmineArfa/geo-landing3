import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { extractDomain } from '../lib/favicon';

interface CredentialsCTAProps {
  url: string;
  onSubmit: (email: string) => void;
  onSkip?: () => void;
}

export function CredentialsCTA({ url, onSubmit, onSkip }: CredentialsCTAProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const domain = extractDomain(url);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    trackEvent('email_captured', { url, email: trimmedEmail });

    // Small delay for UX
    setTimeout(() => {
      onSubmit(trimmedEmail);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white/95 backdrop-blur-xl rounded-xl xs:rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12 max-w-lg w-full mx-4 border border-white/20 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cta-title"
      >
        <div className="text-center space-y-6 xs:space-y-7 sm:space-y-8">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2 xs:space-y-3"
          >
            <h2 id="cta-title" className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Get Your Full Report
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 px-2">
              Enter your email to receive the complete analysis for <span className="font-semibold text-gray-900">{domain}</span>
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-accent-50/50 rounded-xl p-4 xs:p-5 sm:p-6 border border-accent-200/50 text-left"
          >
            <p className="text-xs xs:text-sm font-semibold text-gray-900 mb-2 xs:mb-3">Your report includes:</p>
            <ul className="space-y-2 text-xs xs:text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Comprehensive brand perception analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Detailed competitor insights</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Actionable recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI visibility score breakdown</span>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email address"
                disabled={isSubmitting}
                className="w-full min-h-touch pl-12 pr-4 py-3 xs:py-4 text-sm xs:text-base rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Email address"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'email-error' : undefined}
              />
              {error && (
                <p id="email-error" className="mt-2 text-xs xs:text-sm text-red-600 font-medium" role="alert">
                  {error}
                </p>
              )}
            </div>

            {/* Buttons - Full width on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 min-h-touch px-5 xs:px-6 py-3 xs:py-4 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Get My Report'
                )}
              </motion.button>
              {onSkip && (
                <button
                  type="button"
                  onClick={onSkip}
                  disabled={isSubmitting}
                  className="min-h-touch px-5 xs:px-6 py-3 xs:py-4 text-gray-600 text-sm xs:text-base font-medium rounded-xl border-2 border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Skip for now
                </button>
              )}
            </div>
          </motion.form>

          {/* Trust indicators - Stacked on small mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-2 xs:gap-4 text-xs text-gray-500 pt-4 border-t border-gray-200"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>We'll never share your email</span>
            </div>
            <span className="hidden xs:inline text-gray-300">•</span>
            <span>No spam, unsubscribe anytime</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
