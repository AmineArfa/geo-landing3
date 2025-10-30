import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { LoadingState } from './components/LoadingState';
import { CredentialsCTA } from './components/CredentialsCTA';
import { ResultsModal } from './components/ResultsModal';
import { SocialProof } from './components/SocialProof';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { LLMVisibility } from './components/LLMVisibility';
import { GeographicAnalysis } from './components/GeographicAnalysis';
import { UseCases } from './components/UseCases';
import { Comparison } from './components/Comparison';
import { DashboardPreview } from './components/DashboardPreview';
import { TrustBadges } from './components/TrustBadges';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ExitIntent } from './components/ExitIntent';
import { FloatingCTA } from './components/FloatingCTA';
import { analyzeDomain } from './lib/api';
import { trackPageView } from './lib/analytics';
import type { AnalysisResponse } from './types/analysis';
import { extractDomain } from './lib/favicon';

type FlowState = 'idle' | 'loading' | 'credentials' | 'results';

function App() {
  const [flowState, setFlowState] = useState<FlowState>('idle');
  const [results, setResults] = useState<AnalysisResponse | null>(null);
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState(''); // Stored for future backend integration
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    trackPageView();
  }, []);

  const handleAnalyze = async (inputUrl: string) => {
    setUrl(inputUrl);
    setFlowState('loading');
    setError(null);
    setShowModal(false);
  };

  const handleLoadingComplete = () => {
    setFlowState('credentials');
  };

  const handleCredentialsSubmit = async (submittedEmail: string) => {
    setEmail(submittedEmail);
    setFlowState('results');
    
    // Extract domain from URL for API call
    const domain = extractDomain(url);
    
    try {
      const analysis = await analyzeDomain(domain);
      setResults(analysis);
      setShowModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze domain');
      setFlowState('idle');
    }
  };

  const handleCredentialsSkip = async () => {
    setFlowState('results');
    
    // Extract domain from URL for API call
    const domain = extractDomain(url);
    
    try {
      const analysis = await analyzeDomain(domain);
      setResults(analysis);
      setShowModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze domain');
      setFlowState('idle');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowExitIntent(true);
  };

  const handleRetry = () => {
    setShowModal(false);
    setResults(null);
    setUrl('');
    setEmail('');
    setError(null);
    setFlowState('idle');
  };

  const handleCTAClick = () => {
    // In a real app, this would redirect to signup/waitlist
    window.location.href = '#signup';
    setShowModal(false);
    setShowExitIntent(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero onAnalyze={handleAnalyze} isLoading={flowState === 'loading'} />

      {/* Social Proof - Above Fold */}
      <SocialProof variant="above-fold" />

      {/* How It Works */}
      <HowItWorks />

      {/* Dashboard Preview - Show the platform early */}
      <DashboardPreview />

      {/* Features */}
      <Features />

      {/* LLM Visibility */}
      <LLMVisibility />

      {/* Geographic Analysis */}
      <GeographicAnalysis />

      {/* Benefits */}
      <Benefits />

      {/* Use Cases */}
      <UseCases />

      {/* Comparison */}
      <Comparison />

      {/* Testimonials */}
      <Testimonials />

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ */}
      <FAQ />

      {/* Social Proof Below */}
      <SocialProof variant="below-modal" />

      {/* Footer */}
      <Footer />

      {/* Loading State */}
      <AnimatePresence>
        {flowState === 'loading' && url && (
          <LoadingState url={url} onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Credentials CTA */}
      <AnimatePresence>
        {flowState === 'credentials' && url && (
          <CredentialsCTA
            url={url}
            onSubmit={handleCredentialsSubmit}
            onSkip={handleCredentialsSkip}
          />
        )}
      </AnimatePresence>

      {/* Results Modal */}
      <AnimatePresence>
        {showModal && results && (
          <ResultsModal
            domain={extractDomain(url)}
            results={results}
            onClose={handleCloseModal}
            onRetry={handleRetry}
            onCTAClick={handleCTAClick}
          />
        )}
      </AnimatePresence>

      {/* Exit Intent */}
      {showExitIntent && (
        <ExitIntent
          onCTAClick={handleCTAClick}
          onClose={() => setShowExitIntent(false)}
        />
      )}

      {/* Floating CTA for mobile */}
      <FloatingCTA />

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl z-50 border border-red-400/50 backdrop-blur-sm"
        >
          <p className="font-medium text-sm sm:text-base">{error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-xs sm:text-sm underline hover:no-underline transition-all"
          >
            Dismiss
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default App;
