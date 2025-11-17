import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { MapLibreMap, type RegionData } from './MapLibreMap';
import { RegionMetricsCard } from './RegionMetricsCard';
import { FlatRegionMetrics } from './FlatRegionMetrics';

interface Region extends RegionData {
  trend: 'up' | 'stable';
  color: string;
  competitors: string[];
}

export function GeographicAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const regions: Region[] = [
    {
      id: 'na',
      name: 'North America',
      sentiment: '+12%',
      sentimentValue: 12,
      trend: 'up',
      color: 'from-green-400 to-emerald-500',
      hexColor: '#34d399',
      coordinates: [-100, 40], // [lng, lat] for North America
      competitors: ['Competitor A', 'Competitor B'],
      insights: 'Ranking #2 in ChatGPT responses. Strong presence in AI assistant queries about tech solutions.',
      llmRanking: '#2',
      aiMentions: '12.4K',
    },
    {
      id: 'eu',
      name: 'Europe',
      sentiment: '+8%',
      sentimentValue: 8,
      trend: 'up',
      color: 'from-blue-400 to-cyan-500',
      hexColor: '#60a5fa',
      coordinates: [10, 50], // [lng, lat] for Europe
      competitors: ['Competitor C', 'Competitor D'],
      insights: 'Ranking #3 in Gemini responses. Premium brand positioning in AI assistant mentions.',
      llmRanking: '#3',
      aiMentions: '8.7K',
    },
    {
      id: 'ap',
      name: 'Asia-Pacific',
      sentiment: '+15%',
      sentimentValue: 15,
      trend: 'up',
      color: 'from-purple-400 to-pink-500',
      hexColor: '#a78bfa',
      coordinates: [120, 30], // [lng, lat] for Asia-Pacific
      competitors: ['Competitor E', 'Competitor F'],
      insights: 'Ranking #1 in Claude responses. Dominant presence in AI queries about SaaS platforms.',
      llmRanking: '#1',
      aiMentions: '18.2K',
    },
    {
      id: 'la',
      name: 'Latin America',
      sentiment: '+5%',
      sentimentValue: 5,
      trend: 'stable',
      color: 'from-orange-400 to-red-500',
      hexColor: '#fb923c',
      coordinates: [-60, -15], // [lng, lat] for Latin America
      competitors: ['Competitor G'],
      insights: 'Ranking #4 in ChatGPT responses. Growing visibility in AI assistant queries.',
      llmRanking: '#4',
      aiMentions: '5.1K',
    },
    {
      id: 'af',
      name: 'Africa',
      sentiment: '+3%',
      sentimentValue: 3,
      trend: 'up',
      color: 'from-yellow-400 to-orange-500',
      hexColor: '#fbbf24',
      coordinates: [20, 0], // [lng, lat] for Africa
      competitors: ['Competitor H'],
      insights: 'Early stage LLM visibility. Ranked #5 in AI responses with growth potential.',
      llmRanking: '#5',
      aiMentions: '2.3K',
    },
  ];

  const handleRegionClick = (regionId: string) => {
    // Toggle selection - if clicking same region, deselect
    if (selectedRegion === regionId) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(regionId);
    }
  };

  const handleRegionHover = (region: RegionData | null) => {
    // Only handle hover on desktop (md and above)
    if (window.innerWidth >= 768) {
      setHoveredRegion(region?.id || null);

      if (region && mapContainerRef.current) {
        const containerRect = mapContainerRef.current.getBoundingClientRect();

        // Position card based on region location (approximate)
        let x = containerRect.width * 0.5;
        let y = containerRect.height * 0.3;

        // Adjust horizontal position based on longitude
        const lng = region.coordinates[0];
        if (lng < -50) { // Left side (Americas)
          x = containerRect.width * 0.3;
        } else if (lng > 80) { // Right side (Asia-Pacific)
          x = containerRect.width * 0.7;
        } else { // Center (Europe, Africa, Middle East)
          x = containerRect.width * 0.5;
        }

        // Adjust vertical position based on latitude
        const lat = region.coordinates[1];
        if (lat < 0) { // Southern hemisphere
          y = containerRect.height * 0.75;
        } else if (lat > 40) { // Northern regions
          y = containerRect.height * 0.2;
        } else {
          y = containerRect.height * 0.3;
        }

        setCardPosition({ x, y });
      } else {
        setCardPosition(null);
      }
    }
  };

  const activeRegion = hoveredRegion || selectedRegion;
  const activeRegionData = activeRegion
    ? regions.find(r => r.id === activeRegion) || null
    : null;

  return (
    <section id="geographic-analysis" className="py-16 xs:py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Mobile-first */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xs:mb-16 sm:mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Geographic Analysis</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 xs:mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              See how rankings vary by region
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Understand how your brand appears in AI responses across different regions. Optimize your LLM visibility for each market.
          </p>
        </motion.div>

        {/* Interactive World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 xs:mb-16 sm:mb-20 relative"
        >
          {/* Map Container - Mobile-first responsive */}
          <div className="relative bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden p-3 xs:p-4 sm:p-6 md:p-8">
            {/* MapLibre Map */}
            <div
              ref={mapContainerRef}
              className="relative h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <MapLibreMap
                regions={regions}
                onRegionClick={(region) => handleRegionClick(region.id)}
                onRegionHover={handleRegionHover}
                selectedRegionId={selectedRegion}
                hoveredRegionId={hoveredRegion}
              />

              {/* Floating Metrics Card on Hover - Hidden on mobile, only show on desktop */}
              <div className="hidden md:block">
                <RegionMetricsCard
                  region={activeRegionData}
                  position={cardPosition || undefined}
                  isVisible={!!activeRegionData && !!hoveredRegion}
                />
              </div>

              {/* Flat Region Metrics Inside Map */}
              <FlatRegionMetrics
                regions={regions}
                selectedRegionId={selectedRegion}
                onRegionClick={handleRegionClick}
              />
            </div>

            {/* Compact Legend - Mobile-first responsive */}
            <div className="mt-3 xs:mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 text-xs text-gray-500 px-2 xs:px-4">
              <span className="font-medium">Sentiment:</span>
              {['+15%', '+12%', '+8%', '+5%', '+3%'].map((sentiment, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${
                    i === 0 ? 'bg-purple-400' :
                    i === 1 ? 'bg-green-400' :
                    i === 2 ? 'bg-blue-400' :
                    i === 3 ? 'bg-orange-400' :
                    'bg-yellow-400'
                  }`} />
                  <span className="text-xs">{sentiment}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid - Mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mb-12 xs:mb-16 sm:mb-20">
          {[
             {
               title: 'Regional LLM Rankings',
               description: 'See how your LLM ranking varies across regions. Understand where you rank higher in ChatGPT, Gemini, and Claude responses by location.',
               icon: '🌍',
               gradient: 'from-blue-500 to-cyan-500',
             },
             {
               title: 'Geographic Competitive Analysis',
               description: 'Compare your LLM presence against competitors by region. See where competitors rank higher in AI responses and identify regional opportunities.',
               icon: '🗺️',
               gradient: 'from-purple-500 to-pink-500',
             },
             {
               title: 'Regional Optimization',
               description: 'Get region-specific recommendations to improve your LLM ranking. Optimize content and messaging for each market\'s AI responses.',
               icon: '📈',
               gradient: 'from-green-500 to-emerald-500',
             },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative min-h-touch p-5 xs:p-6 sm:p-8 bg-white rounded-xl xs:rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl xs:text-3xl sm:text-4xl mb-4 xs:mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-accent-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm xs:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Touch-friendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-h-touch px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-accent-500/50 transition-all text-sm xs:text-base sm:text-lg uppercase tracking-wider flex items-center gap-2 xs:gap-3 mx-auto"
          >
            Explore Geographic Insights
            <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
