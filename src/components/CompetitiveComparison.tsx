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
    <section id="comparison" className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-5 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] xs:w-[700px] sm:w-[800px] h-[600px] xs:h-[700px] sm:h-[800px] bg-accent-400/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-4 xs:mb-5 sm:mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs xs:text-sm font-semibold text-accent-700">Comparison</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-2 xs:px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              The LLM visibility advantage
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2 xs:px-4">
            See how we compare to other brand intelligence platforms — we're the only one focused on LLM visibility
          </p>
        </motion.div>

        {/* Mobile-first comparison - cards on mobile, table on desktop */}
        <div className="bg-white rounded-xl xs:rounded-2xl border border-gray-200/50 shadow-xl overflow-hidden">
          {/* Header - Hidden on mobile, shown on sm+ */}
          <div className="hidden sm:grid grid-cols-3 gap-3 xs:gap-4 p-4 xs:p-5 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="text-xs xs:text-sm font-semibold text-gray-500 uppercase tracking-wide">Feature</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-xs xs:text-sm">
                <span>Our Platform</span>
                <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-center text-xs xs:text-sm font-semibold text-gray-500">Typofound</div>
          </div>

          {/* Rows - Stack cards on mobile, table rows on sm+ */}
          <div className="divide-y divide-gray-100">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="p-4 xs:p-5 sm:p-6 hover:bg-gray-50/50 transition-colors"
              >
                {/* Mobile: Stacked card layout */}
                <div className="sm:hidden space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{comparison.icon}</span>
                    <span className="font-semibold text-gray-900 text-sm">{comparison.feature}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-accent-600 uppercase">Us</div>
                      <div className="min-h-[44px] flex items-center px-3 py-2 rounded-lg bg-accent-50 text-accent-700 font-semibold text-xs">
                        {comparison.us}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase">Them</div>
                      <div className="min-h-[44px] flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-600 text-xs">
                        {comparison.typofound}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Table row layout */}
                <div className="hidden sm:grid grid-cols-3 gap-3 xs:gap-4 items-center">
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-xl xs:text-2xl">{comparison.icon}</span>
                    <span className="font-semibold text-gray-900 text-sm xs:text-base">{comparison.feature}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="min-h-[44px] flex items-center px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg bg-accent-50 text-accent-700 font-semibold text-xs xs:text-sm">
                      {comparison.us}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="min-h-[44px] flex items-center text-gray-600 text-xs xs:text-sm">
                      {comparison.typofound}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="p-4 xs:p-5 sm:p-6 md:p-8 bg-gradient-to-r from-accent-50 to-accent-100/50 border-t border-gray-200 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm xs:text-base text-gray-700 mb-3 xs:mb-4 font-medium">
                Ready to experience the difference?
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 xs:px-8 py-2.5 xs:py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm xs:text-base font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all"
              >
                Start Free Trial
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
