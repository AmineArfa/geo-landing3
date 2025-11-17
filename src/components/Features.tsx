import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    title: 'LLM Visibility Monitoring',
    description: 'Track how your brand appears in ChatGPT, Gemini, Claude, and other AI assistants. See exactly what users see when they ask AI about you.',
    details: 'Real-time monitoring across ChatGPT, Gemini, Claude, Perplexity, and more',
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500',
    metric: '5+ LLMs',
    useCases: ['Monitor AI responses', 'Track mentions', 'Analyze quality'],
  },
  {
    title: 'LLM Ranking Optimization',
    description: 'Improve how your brand ranks in AI responses. Get actionable insights on what content and messaging influence your position.',
    details: 'AI-powered recommendations to improve LLM visibility and ranking',
    icon: '📈',
    gradient: 'from-blue-500 to-cyan-500',
    metric: '+40% boost',
    useCases: ['Content optimization', 'SEO for AI', 'Brand positioning'],
  },
  {
    title: 'Competitive Intelligence',
    description: 'See how competitors appear in AI responses compared to you. Understand competitive positioning and identify opportunities.',
    details: 'Compare your LLM presence vs competitors across all AI platforms',
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500',
    metric: 'Unlimited',
    useCases: ['Competitive analysis', 'Market positioning', 'Gap analysis'],
  },
  {
    title: 'Geographic Analysis',
    description: 'See how your brand appears in AI responses across different regions. Understand regional differences and optimize for each market.',
    details: 'Geographic breakdown of LLM mentions and rankings across 200+ countries',
    icon: '🌍',
    gradient: 'from-orange-500 to-red-500',
    metric: '200+ countries',
    useCases: ['Regional optimization', 'Market entry', 'Localization'],
  },
  {
    title: 'Sentiment Tracking',
    description: 'Monitor sentiment trends in AI responses over time. Track how AI assistants describe your brand and respond proactively.',
    details: 'AI-powered sentiment analysis of LLM responses with trend detection',
    icon: '📊',
    gradient: 'from-indigo-500 to-purple-500',
    metric: 'Real-time',
    useCases: ['Reputation monitoring', 'Crisis detection', 'Trend analysis'],
  },
  {
    title: 'API & Integrations',
    description: 'Access your LLM visibility data via REST API. Integrate with existing tools or build custom dashboards.',
    details: 'RESTful API, webhooks, Zapier integration, and native integrations',
    icon: '🔌',
    gradient: 'from-teal-500 to-cyan-500',
    metric: '100+ integrations',
    useCases: ['Data integration', 'Custom analytics', 'Automation'],
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Simplified background - less distracting on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - More compact on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-700">Features</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Everything you need to optimize your LLM presence
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Monitor, optimize, and improve how your brand appears in ChatGPT, Gemini, Claude, and all major AI assistants
          </p>
        </motion.div>

        {/* Features List - Cleaner mobile layout */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content Side - Simplified for mobile */}
                <motion.div
                  className={`space-y-3 sm:space-y-4 md:space-y-5 ${isEven ? '' : 'lg:col-start-2'}`}
                  animate={isHovered ? { x: isEven ? -10 : 10 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon & Badge - More compact */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-lg transform transition-transform duration-300 flex-shrink-0 ${
                      isHovered ? 'scale-110 rotate-3' : ''
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                      <span className="text-xs sm:text-xs font-bold text-gray-600 uppercase tracking-wider">
                        {feature.metric}
                      </span>
                    </div>
                  </div>

                  {/* Title - Better sizing for mobile */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description - Better line height for mobile */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Details - Only on larger screens, too much info on mobile */}
                  <div className="hidden sm:flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg md:rounded-xl border border-gray-200/50">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs md:text-sm text-gray-600">{feature.details}</p>
                  </div>

                  {/* Use Cases - Only on desktop, removed on mobile for cleaner UX */}
                  <div className="hidden lg:block space-y-2">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.useCases.map((useCase) => (
                        <motion.span
                          key={useCase}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 text-gray-700 rounded-lg text-xs font-medium shadow-sm"
                        >
                          {useCase}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Visual Side - Hidden on mobile, shown on desktop */}
                <motion.div
                  className={`relative hidden lg:block ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Browser Frame with gradient placeholder */}
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded-lg px-4 py-2 mx-4 text-xs text-gray-500 truncate">
                        llm-visibility.ai/{feature.title.toLowerCase().replace(/\s+/g, '-')}
                      </div>
                    </div>

                    {/* Gradient Placeholder */}
                    <div className={`relative h-80 bg-gradient-to-br ${feature.gradient} opacity-20 overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Floating metric */}
                    <div className="absolute top-20 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.metric.split(' ')[0]}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{feature.metric.split(' ').slice(1).join(' ') || 'tracking'}</div>
                    </div>
                  </div>

                  {/* Decorative elements - subtle */}
                  <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-10 blur-2xl`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section - More compact on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center"
        >
          <div className="inline-block p-6 sm:p-8 md:p-10 bg-gradient-to-br from-accent-50 via-purple-50 to-pink-50 rounded-2xl border border-accent-200/50 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Ready to see how you appear in AI responses?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 md:mb-8">
              Start monitoring your LLM visibility today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all text-sm sm:text-base"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
