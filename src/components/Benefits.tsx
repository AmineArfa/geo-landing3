import { motion } from 'framer-motion';

export function Benefits() {

  const metrics = [
    {
      label: 'Ranking Improvement',
      value: '+40%',
      description: 'Average improvement in LLM ranking',
      icon: '📈',
      color: 'from-blue-500 to-cyan-500',
      before: 'Rank #5-10',
      after: 'Rank #1-3',
    },
    {
      label: 'AI Mentions',
      value: '5x',
      description: 'Increase in brand mentions in AI responses',
      icon: '🤖',
      color: 'from-green-500 to-emerald-500',
      before: 'Limited mentions',
      after: 'Frequent mentions',
    },
    {
      label: 'Response Time',
      value: 'Instant',
      description: 'Real-time LLM monitoring vs manual checks',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500',
      before: 'Weekly reports',
      after: 'Real-time alerts',
    },
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Tighter spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-700">Impact</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Measurable improvements in LLM visibility
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            See real results from monitoring your AI presence
          </p>
        </motion.div>

        {/* Key Metrics - Simpler on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-5 sm:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* No decorative elements on mobile - cleaner */}
              <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-400/5 to-purple-400/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                {/* Main Metric Display - Smaller on mobile */}
                <div className="text-center mb-4">
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg sm:text-xl">{metric.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{metric.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>

                {/* Transformation - Simpler on mobile */}
                <div className="relative mt-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gray-300" style={{ width: '60%' }}></div>
                    <div className={`absolute right-0 top-0 h-full bg-gradient-to-r ${metric.color} rounded-r-full`} style={{ width: '40%' }}></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span className="text-gray-500 line-through">{metric.before}</span>
                    <span className={`font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>{metric.after}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
