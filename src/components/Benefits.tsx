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
    <section id="benefits" className="py-16 xs:py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Mobile-first typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xs:mb-16 sm:mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Impact</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 xs:mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Measurable improvements in LLM visibility
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            See how LLM visibility monitoring improves brand ranking, AI mentions, and competitive positioning
          </p>
        </motion.div>

        {/* Key Metrics - Modern Unified Display - Mobile-first */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 xs:mb-16 sm:mb-20 md:mb-24"
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl xs:rounded-3xl border border-gray-200/60 p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 xs:w-64 xs:h-64 bg-gradient-to-br from-accent-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 xs:w-48 xs:h-48 bg-gradient-to-tr from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Header - Mobile-first */}
              <div className="text-center mb-6 xs:mb-8 sm:mb-10">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2">By The Numbers</h3>
                <p className="text-xs xs:text-sm text-gray-600">Measurable improvements in LLM visibility</p>
              </div>

              {/* Metrics Grid - Mobile-first */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Main Metric Display - Mobile-first sizing */}
                    <div className="text-center mb-4 xs:mb-5">
                      <div className={`text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                        {metric.value}
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-xl xs:text-2xl">{metric.icon}</span>
                        <span className="text-xs xs:text-sm font-semibold text-gray-700">{metric.label}</span>
                      </div>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>

                    {/* Transformation Bar - Mobile optimized */}
                    <div className="relative mt-4 xs:mt-6">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span className="font-medium">Before</span>
                        <span className="font-medium">After</span>
                      </div>
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        {/* Before portion */}
                        <div className="absolute left-0 top-0 h-full bg-gray-300" style={{ width: '60%' }}></div>
                        {/* After portion */}
                        <div className={`absolute right-0 top-0 h-full bg-gradient-to-r ${metric.color} rounded-r-full`} style={{ width: '40%' }}></div>
                        {/* Arrow indicator */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <svg className="w-3 h-3 xs:w-4 xs:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-2">
                        <span className="text-gray-500 line-through">{metric.before}</span>
                        <span className={`font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>{metric.after}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
