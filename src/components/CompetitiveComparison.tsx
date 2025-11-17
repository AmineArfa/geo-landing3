import { motion } from 'framer-motion';

const comparisons = [
  {
    feature: 'LLM Visibility Monitoring',
    us: 'ChatGPT, Gemini, Claude & more',
    typofound: 'Not available',
    icon: '🤖',
  },
  {
    feature: 'LLM Ranking Optimization',
    us: 'Actionable recommendations',
    typofound: 'No LLM features',
    icon: '📈',
  },
  {
    feature: 'Real-time LLM Monitoring',
    us: 'Continuous AI response tracking',
    typofound: 'Scheduled reports only',
    icon: '⚡',
  },
  {
    feature: 'Geographic LLM Analysis',
    us: '200+ countries & regions',
    typofound: 'Limited regions',
    icon: '🌍',
  },
  {
    feature: 'Competitive LLM Intelligence',
    us: 'Compare LLM presence',
    typofound: 'Basic competitor tracking',
    icon: '🎯',
  },
  {
    feature: 'API Access',
    us: 'Full REST API',
    typofound: 'Limited API',
    icon: '🔌',
  },
  {
    feature: 'Custom Dashboards',
    us: 'Unlimited dashboards',
    typofound: 'Standard templates',
    icon: '📊',
  },
];

export function CompetitiveComparison() {
  return (
    <section id="comparison" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-accent-700">Comparison</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              The LLM visibility advantage
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            The only platform focused on LLM visibility
          </p>
        </motion.div>

        {/* Compact comparison table */}
        <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200/50 shadow-lg overflow-hidden">
          {/* Header - Hidden on mobile, shown on sm+ */}
          <div className="hidden sm:grid grid-cols-3 gap-3 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Feature</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-xs">
                <span>Our Platform</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-center text-xs font-semibold text-gray-500">Typofound</div>
          </div>

          {/* Rows - Compact on mobile */}
          <div className="divide-y divide-gray-100">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="p-3 sm:p-4 hover:bg-gray-50/50 transition-colors"
              >
                {/* Mobile: Compact card layout */}
                <div className="sm:hidden space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{comparison.icon}</span>
                    <span className="font-semibold text-gray-900 text-xs">{comparison.feature}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center px-2 py-1.5 rounded bg-accent-50 text-accent-700 font-medium text-xs">
                      {comparison.us}
                    </div>
                    <div className="flex items-center px-2 py-1.5 rounded bg-gray-50 text-gray-600 text-xs">
                      {comparison.typofound}
                    </div>
                  </div>
                </div>

                {/* Desktop: Table row layout */}
                <div className="hidden sm:grid grid-cols-3 gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{comparison.icon}</span>
                    <span className="font-semibold text-gray-900 text-sm">{comparison.feature}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="flex items-center px-3 py-1.5 rounded-lg bg-accent-50 text-accent-700 font-semibold text-xs">
                      {comparison.us}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="flex items-center text-gray-600 text-xs">
                      {comparison.typofound}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer - Compact */}
          <div className="p-3 sm:p-5 bg-gradient-to-r from-accent-50 to-accent-100/50 border-t border-gray-200 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3 font-medium">
                Ready to experience the difference?
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 sm:px-7 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
