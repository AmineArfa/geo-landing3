import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { getFaviconUrl, extractDomain } from '../lib/favicon';

interface LoadingStateProps {
  url: string;
  onComplete: () => void;
}

const LOADING_DURATION = 30000; // 30 seconds

const progressSteps = [
  { id: 1, label: 'Analyzing website structure...', duration: 6000 },
  { id: 2, label: 'Scanning AI responses...', duration: 6000 },
  { id: 3, label: 'Extracting brand perception...', duration: 6000 },
  { id: 4, label: 'Identifying competitors...', duration: 6000 },
  { id: 5, label: 'Generating insights...', duration: 6000 },
];

export function LoadingState({ url, onComplete }: LoadingStateProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const domain = extractDomain(url);

  useEffect(() => {
    // Track loading started
    trackEvent('loading_started', { url });

    // Fetch favicon
    getFaviconUrl(url).then(setFaviconUrl);

    // Progress through steps
    let stepTimeout: ReturnType<typeof setTimeout>;
    const stepDuration = LOADING_DURATION / progressSteps.length;

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 100;
        if (newTime >= LOADING_DURATION) {
          clearInterval(interval);
          onComplete();
          return LOADING_DURATION;
        }
        return newTime;
      });
    }, 100);

    const advanceStep = () => {
      setCurrentStep((prev) => {
        if (prev < progressSteps.length - 1) {
          stepTimeout = setTimeout(advanceStep, stepDuration);
          return prev + 1;
        }
        return prev;
      });
    };

    stepTimeout = setTimeout(advanceStep, stepDuration);

    return () => {
      clearInterval(interval);
      if (stepTimeout) clearTimeout(stepTimeout);
    };
  }, [url, onComplete]);

  const progress = (elapsedTime / LOADING_DURATION) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white/95 backdrop-blur-xl rounded-xl xs:rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 max-w-2xl w-full mx-4 border border-white/20 shadow-2xl"
        role="status"
        aria-live="polite"
        aria-label="Analyzing website"
      >
        <div className="text-center space-y-6 xs:space-y-7 sm:space-y-8">
          {/* Favicon and Domain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 xs:gap-4"
          >
            {faviconUrl ? (
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                src={faviconUrl}
                alt={`${domain} favicon`}
                className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-xl xs:rounded-2xl shadow-lg border-2 border-gray-200"
                onError={() => setFaviconUrl(null)}
              />
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-xl xs:rounded-2xl bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xl xs:text-2xl sm:text-3xl font-bold">
                  {domain.charAt(0).toUpperCase()}
                </span>
              </motion.div>
            )}
            <div className="px-2">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900">{domain}</h3>
              <p className="text-xs xs:text-sm text-gray-500 mt-1">Analyzing your website...</p>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="space-y-3 xs:space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 xs:h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {Math.round(progress)}% complete
            </p>
          </div>

          {/* Progress Steps - Mobile optimized */}
          <div className="space-y-3 xs:space-y-4">
            <AnimatePresence mode="wait">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: index === currentStep ? 1 : index < currentStep ? 0.5 : 0.3,
                    x: 0
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl transition-all ${
                    index === currentStep
                      ? 'bg-accent-50 border-2 border-accent-200'
                      : index < currentStep
                      ? 'bg-gray-50 border border-gray-200'
                      : 'bg-transparent border border-transparent'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {index < currentStep ? (
                      <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 xs:w-4 xs:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : index === currentStep ? (
                      <motion.div
                        className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-accent-500 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-white" />
                      </motion.div>
                    ) : (
                      <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-gray-300" />
                    )}
                  </div>
                  <span className={`text-xs xs:text-sm sm:text-base font-medium ${
                    index === currentStep ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center pt-2 xs:pt-4">
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-accent-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
