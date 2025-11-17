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
    <section id="geographic-analysis" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Compact mobile-first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-accent-700">Geographic Analysis</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              See how rankings vary by region
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Track your brand's AI visibility across different markets
          </p>
        </motion.div>

        {/* Interactive World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-10 md:mb-12 relative"
        >
          {/* Map Container - Compact mobile */}
          <div className="relative bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200/60 overflow-hidden p-2 sm:p-4 md:p-6">
            {/* MapLibre Map */}
            <div
              ref={mapContainerRef}
              className="relative h-[240px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden"
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

            {/* Compact Legend - Hidden on small mobile */}
            <div className="hidden sm:flex mt-3 sm:mt-4 flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-gray-500">
              <span className="font-medium">Sentiment:</span>
              {['+15%', '+12%', '+8%', '+5%', '+3%'].map((sentiment, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${
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

        {/* Features Grid - Compact mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-10">
          {[
             {
               title: 'Regional Rankings',
               description: 'Track LLM rankings across regions in ChatGPT, Gemini, and Claude.',
               icon: '🌍',
               gradient: 'from-blue-500 to-cyan-500',
             },
             {
               title: 'Competitive Analysis',
               description: 'Compare your presence against competitors by region.',
               icon: '🗺️',
               gradient: 'from-purple-500 to-pink-500',
             },
             {
               title: 'Regional Optimization',
               description: 'Get recommendations to improve rankings per market.',
               icon: '📈',
               gradient: 'from-green-500 to-emerald-500',
             },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative p-3 sm:p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-xl sm:text-2xl flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="min-h-touch px-5 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all text-sm sm:text-base flex items-center gap-2 mx-auto"
          >
            Explore Geographic Insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
