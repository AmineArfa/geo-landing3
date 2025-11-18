import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { LoadingState } from './components/LoadingState';
import { CredentialsCTA } from './components/CredentialsCTA';
import { ResultsModal } from './components/ResultsModal';
import { Footer } from './components/Footer';
import { ExitIntent } from './components/ExitIntent';
import { FloatingCTA } from './components/FloatingCTA';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SecurityPage } from './pages/SecurityPage';
import { CompliancePage } from './pages/CompliancePage';
import { analyzeDomain } from './lib/api';
import { trackPageView } from './lib/analytics';
import type { AnalysisResponse } from './types/analysis';
import { extractDomain } from './lib/favicon';

type FlowState = 'idle' | 'loading' | 'credentials' | 'results';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [flowState, setFlowState] = useState<FlowState>('idle');
  const [results, setResults] = useState<AnalysisResponse | null>(null);
  const [url, setUrl] = useState('');
  const [_email, setEmail] = useState('');
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
    window.location.href = '/';
    setShowModal(false);
    setShowExitIntent(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <ScrollToTop />

      {/* Navigation */}
      <Navigation />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage onAnalyze={handleAnalyze} isLoading={flowState === 'loading'} />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
      </Routes>

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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
