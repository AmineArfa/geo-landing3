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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-20 overflow-hidden">
      {/* Simplified background - less busy on mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-50/30 to-white" />
        {/* Smaller, subtler gradient orbs on mobile */}
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-400/10 sm:bg-accent-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-600/10 sm:bg-accent-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 relative z-10">
        {/* Simplified badge - only one, cleaner on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse flex-shrink-0" />
          <span className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-700">
            AI Visibility Platform
          </span>
        </motion.div>

        {/* Headline - Better mobile sizing, more readable */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight px-2"
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.h1>

        {/* Subheadline - More concise on mobile */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4"
        >
          Track your ranking. Beat competitors. Dominate AI responses.
        </motion.p>

        {/* Form - Simplified for mobile, no glow on small screens */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-4 sm:space-y-5"
        >
          <div className="relative group">
            {/* Glow effect - only on larger screens */}
            <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Simplified form container */}
            <div className="relative flex flex-col gap-2 sm:flex-row sm:gap-0 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Input field - simpler on mobile */}
              <div className="flex-1 relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  placeholder="example.com"
                  disabled={isLoading}
                  className="w-full min-h-[48px] sm:min-h-[52px] pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base rounded-t-xl sm:rounded-l-2xl sm:rounded-r-none border-0 bg-transparent focus:outline-none focus:ring-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400"
                  aria-label="Website domain"
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby={error ? 'domain-error' : undefined}
                />
              </div>

              {/* Button - full width on mobile */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 md:px-10 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-b-xl sm:rounded-l-none sm:rounded-r-2xl hover:shadow-xl hover:shadow-accent-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base uppercase tracking-wide"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="hidden xs:inline">Analyzing...</span>
                  </span>
                ) : (
                  'Analyze Now'
                )}
              </motion.button>
            </div>

            {/* Error message - better positioned */}
            {error && (
              <p id="domain-error" className="absolute -bottom-5 left-1 text-xs text-red-600 font-medium" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Simplified value props - less clutter on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-500 px-2">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Free analysis</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">No credit card</span>
            </div>
            <span className="hidden xs:inline text-gray-300">•</span>
            <div className="hidden xs:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Instant results</span>
            </div>
          </div>
        </motion.form>

        {/* Compact trust line - only on larger screens or very simplified on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] sm:text-xs text-gray-400 px-4"
        >
          Trusted by 5,000+ brands monitoring AI visibility
        </motion.div>
      </div>
    </section>
  );
}
