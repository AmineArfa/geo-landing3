import { motion } from 'framer-motion';

export function DashboardPreview() {
  const metrics = [
    { label: 'Avg LLM Ranking', value: '#2.3', change: '+1.2', trend: 'up' },
    { label: 'AI Mentions', value: '12.4K', change: '+18%', trend: 'up' },
    { label: 'Best Platform', value: 'ChatGPT', change: '#1', trend: 'up' },
    { label: 'Competitors Tracked', value: '24', change: '+3', trend: 'up' },
  ];

  return (
    <section id="dashboard" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Your LLM visibility dashboard
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Monitor your brand's presence across ChatGPT, Gemini, Claude, and all major AI assistants in one unified dashboard
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-1">LLM Visibility Dashboard</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Last updated: 2 minutes ago</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <select className="px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none">
                  <option>All LLM Platforms</option>
                  <option>ChatGPT</option>
                  <option>Gemini</option>
                  <option>Claude</option>
                </select>
                <button className="px-3 sm:px-4 py-2 bg-accent-500 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-accent-600 transition-colors">
                  Export Report
                </button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-b border-gray-200">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{metric.label}</span>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                    metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {metric.trend === 'up' ? '↑' : '→'}
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{metric.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts & Visualizations - Simplified on mobile */}
          <div className="hidden md:block p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* LLM Ranking Trend */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">LLM Ranking Trend (Last 30 Days)</h4>
              <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-t from-accent-50 to-transparent rounded-lg sm:rounded-xl border border-gray-200 flex items-end justify-around p-3 sm:p-4">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-gradient-to-t from-accent-500 to-accent-400 rounded-t"
                    style={{ height: `${Math.random() * 60 + 40}%` }}
                  />
                ))}
              </div>
            </div>

            {/* LLM Platform Distribution */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Ranking by LLM Platform</h4>
              <div className="space-y-3">
                {[
                  { platform: 'ChatGPT', ranking: '#2', mentions: '4.2K', color: 'bg-green-500' },
                  { platform: 'Gemini', ranking: '#1', mentions: '3.8K', color: 'bg-blue-500' },
                  { platform: 'Claude', ranking: '#3', mentions: '2.9K', color: 'bg-purple-500' },
                  { platform: 'Perplexity', ranking: '#4', mentions: '1.5K', color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.platform} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{item.platform}</span>
                      <span className="font-semibold text-gray-900">{item.ranking} • {item.mentions}</span>
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

          {/* Competitor Comparison - Simplified on mobile */}
          <div className="p-4 sm:p-6 md:p-8 bg-gray-50 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">Competitive Positioning</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                { name: 'Your Brand', score: 8.2, position: 'Leader' },
                { name: 'Competitor A', score: 7.5, position: 'Challenger' },
                { name: 'Competitor B', score: 6.8, position: 'Follower' },
              ].map((competitor) => (
                <div key={competitor.name} className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 text-sm">{competitor.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-accent-50 text-accent-700 font-semibold">
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
                    <span className="text-xs sm:text-sm font-bold text-gray-900">{competitor.score}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features List */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              'Real-time LLM monitoring',
              'Customizable widgets',
              'Export to PDF/Excel',
              'Scheduled reports',
              'White-label options',
              'API access',
            ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200"
            >
              <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

