import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';

interface ExitIntentProps {
  onCTAClick: () => void;
  onClose: () => void;
}

export function ExitIntent({ onCTAClick, onClose }: ExitIntentProps) {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Track exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
        trackEvent('exit_intent_shown');
      }
    };

    // Idle delay trigger (30 seconds)
    const idleTimer = setTimeout(() => {
      if (!hasShown) {
        setShow(true);
        setHasShown(true);
        trackEvent('exit_intent_shown', { trigger: 'idle' });
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(idleTimer);
    };
  }, [hasShown]);

  const handleCTAClick = () => {
    trackEvent('cta_clicked', { source: 'exit_intent' });
    onCTAClick();
    setShow(false);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShow(false);
            onClose();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 sm:p-8 text-center space-y-6 border border-gray-200 mx-4"
        >
          <button
            onClick={() => {
              setShow(false);
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="space-y-4">
            <h2 id="exit-intent-title" className="text-xl sm:text-2xl font-medium text-gray-900">
              Wait! Get your full brand analysis
            </h2>
            <p className="text-gray-600">
              Sign up to unlock detailed insights and competitor tracking
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCTAClick}
              className="flex-1 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all"
            >
              Continue to Sign Up
            </button>
            <button
              onClick={() => {
                setShow(false);
                onClose();
              }}
              className="px-6 py-3 text-gray-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-xs text-gray-400">
            Just want the report? Enter your email to get notified when it's ready.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

