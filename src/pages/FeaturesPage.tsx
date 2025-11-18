import { Features } from '../components/Features';
import { LLMVisibility } from '../components/LLMVisibility';
import { GeographicAnalysis } from '../components/GeographicAnalysis';
import { Comparison } from '../components/Comparison';

export function FeaturesPage() {
  return (
    <>
      {/* Features */}
      <Features />

      {/* LLM Visibility */}
      <LLMVisibility />

      {/* Geographic Analysis */}
      <GeographicAnalysis />

      {/* Comparison */}
      <Comparison />
    </>
  );
}
