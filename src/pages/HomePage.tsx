import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { HowItWorks } from '../components/HowItWorks';
import { DashboardPreview } from '../components/DashboardPreview';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { TrustBadges } from '../components/TrustBadges';
import { FAQ } from '../components/FAQ';

interface HomePageProps {
  onAnalyze: (url: string) => void;
  isLoading: boolean;
}

export function HomePage({ onAnalyze, isLoading }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <Hero onAnalyze={onAnalyze} isLoading={isLoading} />

      {/* Social Proof - Above Fold */}
      <SocialProof variant="above-fold" />

      {/* How It Works */}
      <HowItWorks />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Benefits */}
      <Benefits />

      {/* Testimonials */}
      <Testimonials />

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ */}
      <FAQ />

      {/* Social Proof Below */}
      <SocialProof variant="below-modal" />
    </>
  );
}
