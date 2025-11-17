import { motion } from 'framer-motion';
import { useState } from 'react';

const useCases = [
  {
    title: 'Marketing Teams',
    description: 'Optimize how your brand appears when people ask AI assistants about your industry. Improve your ranking in ChatGPT, Gemini, and Claude responses to increase brand visibility and consideration.',
    benefits: [
      'Improve LLM ranking',
      'Optimize AI visibility',
      'Track competitor presence',
      'Content optimization',
    ],
    icon: '📢',
    gradient: 'from-blue-500 to-cyan-500',
    example: 'Marketing team discovered brand ranked #5 in ChatGPT responses — optimized content and messaging, moved to #2 within 3 months, increasing brand awareness by 40%.',
  },
  {
    title: 'SEO & Content Teams',
    description: 'Understand what influences how AI assistants rank and mention your brand. Optimize content, messaging, and signals to improve your position in LLM responses.',
    benefits: [
      'SEO for AI',
      'Content optimization',
      'LLM ranking factors',
      'Brand mention optimization',
    ],
    icon: '📈',
    gradient: 'from-purple-500 to-pink-500',
    example: 'Content team analyzed LLM responses and found specific keywords improved ranking — updated content strategy and saw 60% improvement in AI mention frequency.',
  },
  {
    title: 'Competitive Intelligence Teams',
    description: 'Monitor how competitors appear in AI responses compared to you. Identify where they rank higher, understand their positioning, and find opportunities to outperform.',
    benefits: [
      'Competitive LLM analysis',
      'Market positioning',
      'Gap identification',
      'Strategic insights',
    ],
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500',
    example: 'Competitive intelligence team found competitor ranked #1 in ChatGPT for key queries — analyzed their approach, implemented similar strategy, moved from #4 to #2.',
  },
  {
    title: 'Brand & Reputation Managers',
    description: 'Monitor how AI assistants describe your brand across different queries and regions. Track sentiment in LLM responses, get alerts when positioning shifts, and respond proactively.',
    benefits: [
      'LLM reputation monitoring',
      'Sentiment tracking',
      'Crisis detection',
      'Brand positioning',
    ],
    icon: '🛡️',
    gradient: 'from-orange-500 to-red-500',
    example: 'Brand manager caught negative description in Gemini responses — addressed issues in content and messaging, improved sentiment from negative to positive in 6 weeks.',
  },
];

export function UseCases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="use-cases" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Tighter spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-700">Use Cases</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Built for teams like yours
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            See how teams use LLM visibility monitoring
          </p>
        </motion.div>

        {/* Card Grid - Cleaner on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {useCases.map((useCase, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full p-4 sm:p-5 md:p-6 rounded-xl bg-white border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient}`} />

                  {/* Decorative glow - only on larger screens */}
                  <div className={`hidden sm:block absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative">
                    {/* Header with Icon - Compact */}
                    <div className="flex items-start gap-3 mb-3 sm:mb-4">
                      <div className={`text-xl sm:text-2xl p-2 sm:p-2.5 rounded-lg bg-gradient-to-br ${useCase.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {useCase.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-accent-600 transition-colors">
                          {useCase.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>

                    {/* Benefits - Simpler on mobile */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        {useCase.benefits.map((benefit, i) => (
                          <div
                            key={benefit}
                            className="flex items-center gap-1.5 text-xs text-gray-700"
                          >
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${useCase.gradient}`} />
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example - Hidden on mobile, shown on tablet+ */}
                    <div className="hidden sm:block pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-gray-600 leading-relaxed flex-1">
                          <span className="font-semibold text-gray-700">Example:</span> {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
