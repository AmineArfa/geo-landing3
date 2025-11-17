import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { getHeroCopyVariant } from '../lib/abTest';

interface HeroProps {
  onAnalyze: (url: string) => void;
  isLoading?: boolean;
}

export function Hero({ onAnalyze, isLoading = false }: HeroProps) {
  const [domain, setDomain] = useState('');
  const [error, setError] = useState('');
  const variant = getHeroCopyVariant();

  const validateURL = (input: string): boolean => {
    const trimmed = input.trim();

    // Check if it's a full URL
    try {
      const url = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      // If URL parsing fails, check if it's a valid domain
      const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i;
      return domainRegex.test(trimmed);
    }
  };

  const normalizeInput = (input: string): string => {
    const trimmed = input.trim();

    // If it's already a full URL, return it
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    // Otherwise, try to create a URL - if it fails, assume it's a domain
    try {
      const url = new URL(`https://${trimmed}`);
      return url.href;
    } catch {
      // If it's a domain, add https://
      return `https://${trimmed}`;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedInput = domain.trim();

    if (!trimmedInput) {
      setError('Please enter a URL or domain');
      return;
    }

    if (!validateURL(trimmedInput)) {
      setError('Please enter a valid URL or domain (e.g., example.com or https://example.com)');
      return;
    }

    const normalizedUrl = normalizeInput(trimmedInput);
    trackEvent('hero_submit', { url: normalizedUrl });
    onAnalyze(normalizedUrl);
  };

  const headline = variant === 'A'
    ? 'What Do AI Assistants Say About You?'
    : 'Rank #1 in ChatGPT & Gemini';

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 xs:py-28 sm:py-32 md:py-20 overflow-hidden">
      {/* Dynamic background */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: 'url(/landscape-placeholder.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-50/40 to-white" />
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="max-w-5xl w-full text-center space-y-8 xs:space-y-10 sm:space-y-12 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-2 xs:px-4 xs:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
        >
          <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse flex-shrink-0" />
          <span className="text-xs xs:text-sm font-medium text-gray-700 text-center leading-tight">
            AI Visibility Optimization • LLM Ranking
          </span>
        </motion.div>

        {/* Headline - mobile-first, fluid scaling */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-2"
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4"
        >
          Track your ranking. Beat competitors. Dominate AI responses.
        </motion.p>

        {/* Value prop bullets - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto px-4"
        >
          <span className="px-3 py-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full text-xs font-medium text-gray-700">
            ChatGPT • Gemini • Claude
          </span>
          <span className="px-3 py-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full text-xs font-medium text-gray-700">
            LLM Ranking
          </span>
          <span className="hidden xs:inline-block px-3 py-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full text-xs font-medium text-gray-700">
            Competitive Intel
          </span>
        </motion.div>

        {/* Trust line - Simplified for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-3 text-sm text-gray-500 px-4"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-xs xs:text-sm">Trusted by 5,000+ brands</span>
          </div>
        </motion.div>

        {/* Form - Mobile-first optimized */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6 xs:space-y-8"
        >
          {/* Enhanced Input Container */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 rounded-2xl xs:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Main container - stacked on mobile, side-by-side on sm+ */}
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0 bg-white rounded-2xl xs:rounded-3xl shadow-2xl border-2 border-gray-200/80 overflow-hidden backdrop-blur-xl p-2 sm:p-0">
              {/* Input field */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter your website (e.g., example.com)"
                  disabled={isLoading}
                  className="w-full min-h-touch pl-12 xs:pl-14 pr-4 text-base xs:text-lg rounded-xl sm:rounded-l-2xl sm:rounded-r-none border-0 bg-transparent focus:outline-none focus:ring-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400 font-medium"
                  aria-label="Website domain"
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby={error ? 'domain-error' : undefined}
                />
              </div>

              {/* Button - full width on mobile, auto on sm+ */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-h-touch px-6 xs:px-8 sm:px-10 py-3 xs:py-4 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500 text-white font-bold rounded-xl sm:rounded-l-none sm:rounded-r-2xl hover:shadow-2xl hover:shadow-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base uppercase tracking-wider relative overflow-hidden group"
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 50%',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 xs:gap-3">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 xs:h-6 xs:w-6" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span className="hidden xs:inline">Analyzing...</span>
                      <span className="xs:hidden">Analyzing</span>
                    </>
                  ) : (
                    <>
                      Analyze Now
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            {/* Error message - mobile optimized */}
            {error && (
              <p id="domain-error" className="absolute -bottom-6 left-2 xs:left-4 text-xs text-red-600 font-medium" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Value prop - Compact mobile version */}
          <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm text-gray-500 px-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Free analysis</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">No credit card</span>
            </div>
            <div className="hidden xs:flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Instant results</span>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
