import { motion } from 'framer-motion';

export function DashboardPreview() {
  const metrics = [
    { label: 'Avg Ranking', value: '#2.3', change: '+1.2', trend: 'up' },
    { label: 'Mentions', value: '12.4K', change: '+18%', trend: 'up' },
    { label: 'Best Platform', value: 'ChatGPT', change: '#1', trend: 'up' },
    { label: 'Competitors', value: '24', change: '+3', trend: 'up' },
  ];

  return (
    <section id="dashboard" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Tighter spacing, smaller text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-700">Dashboard</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Your LLM visibility dashboard
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Monitor your brand across ChatGPT, Gemini, and Claude in one place
          </p>
        </motion.div>

        {/* Dashboard Mockup - Simplified for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
        >
          {/* Dashboard Header - Simpler on mobile */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 sm:p-4 md:p-5 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">LLM Visibility Dashboard</h3>
                <p className="text-gray-400 text-xs">Last updated: 2 min ago</p>
              </div>
              <button className="hidden sm:inline-flex min-h-[40px] px-4 py-2 bg-accent-500 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-accent-600 transition-colors">
                Export Report
              </button>
            </div>
          </div>

          {/* Metrics Grid - Compact on mobile */}
          <div className="p-3 sm:p-4 md:p-6 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 border-b border-gray-200">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-xs text-gray-600">{metric.label}</span>
                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold bg-green-100 text-green-700">
                    ↑{metric.change}
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{metric.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts - Hidden on mobile, only show on desktop */}
          <div className="hidden lg:grid p-6 grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-sm">Ranking Trend (30 Days)</h4>
              <div className="h-40 bg-gradient-to-t from-accent-50 to-transparent rounded-lg border border-gray-200 flex items-end justify-around p-3">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-gradient-to-t from-accent-500 to-accent-400 rounded-t"
                    style={{ height: `${Math.random() * 60 + 40}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-sm">By Platform</h4>
              <div className="space-y-2">
                {[
                  { platform: 'ChatGPT', ranking: '#2', mentions: '4.2K', color: 'bg-green-500' },
                  { platform: 'Gemini', ranking: '#1', mentions: '3.8K', color: 'bg-blue-500' },
                  { platform: 'Claude', ranking: '#3', mentions: '2.9K', color: 'bg-purple-500' },
                ].map((item) => (
                  <div key={item.platform} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">{item.platform}</span>
                      <span className="font-semibold text-gray-900">{item.ranking}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${parseInt(item.mentions.replace('K', '')) * 2}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitor Comparison - Simpler on mobile */}
          <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">Competitive Position</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                { name: 'Your Brand', score: 8.2, position: 'Leader' },
                { name: 'Competitor A', score: 7.5, position: 'Challenger' },
                { name: 'Competitor B', score: 6.8, position: 'Follower' },
              ].map((competitor) => (
                <div key={competitor.name} className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 text-xs">{competitor.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-accent-50 text-accent-700 font-semibold">
                      {competitor.position}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
                        style={{ width: `${(competitor.score / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-900">{competitor.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features List - Only show 3 most important on mobile */}
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {[
            'Real-time monitoring',
            'Export reports',
            'API access',
            'Custom widgets',
            'White-label',
            'Scheduled reports',
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-white border border-gray-200 ${
                index >= 3 ? 'hidden sm:flex' : ''
              }`}
            >
              <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
