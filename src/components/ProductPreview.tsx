import { motion } from 'framer-motion';
import { useState } from 'react';

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'insights' | 'competitors'>('dashboard');

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-purple-50/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-accent-700">Platform Preview</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Your brand intelligence dashboard
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Real-time insights and actionable intelligence
          </p>
        </motion.div>

        {/* Tab Navigation - Compact */}
        <div className="flex justify-center gap-2 mb-5 sm:mb-8">
          {[
            { id: 'dashboard' as const, label: 'Dashboard', icon: '📊' },
            { id: 'insights' as const, label: 'Insights', icon: '💡' },
            { id: 'competitors' as const, label: 'Competitors', icon: '🎯' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[44px] px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-1 sm:mr-2">{tab.icon}</span>
              <span className="hidden xs:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Mockup - Compact */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Browser Frame */}
          <div className="relative bg-white rounded-lg shadow-xl border border-gray-200/50 overflow-hidden">
            {/* Browser Chrome - Minimal on mobile */}
            <div className="bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-gray-500 truncate">
                llm-visibility.ai
              </div>
            </div>

            {/* Dashboard Content - Compact */}
            <div className="p-2 sm:p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white">
              {activeTab === 'dashboard' && (
                <div className="space-y-3 sm:space-y-4">
                  {/* Header Stats - Compact grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {[
                      { label: 'Score', value: '87', trend: '+12%', color: 'from-green-500 to-emerald-500' },
                      { label: 'Sentiment', value: '4.2', trend: '+0.3', color: 'from-blue-500 to-cyan-500' },
                      { label: 'Mentions', value: '1.2K', trend: '+23%', color: 'from-purple-500 to-pink-500' },
                      { label: 'Competitors', value: '5', trend: '+2', color: 'from-orange-500 to-red-500' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
                        <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">{stat.label}</div>
                        <div className="text-base sm:text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className={`text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.trend}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts - Simplified on mobile */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Sentiment Trend</h3>
                      <div className="h-32 sm:h-48 bg-gradient-to-br from-blue-50 to-cyan-50 rounded flex items-end justify-center gap-1 p-2">
                        {[65, 72, 68, 85, 82, 88, 87].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-accent-500 to-accent-400 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Top Sources</h3>
                      <div className="space-y-1.5 sm:space-y-2">
                        {[
                          { source: 'Twitter', count: '342' },
                          { source: 'Reddit', count: '189' },
                          { source: 'News', count: '156' },
                          { source: 'Reviews', count: '98' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-1">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-bold">
                                {item.source[0]}
                              </div>
                              <span className="text-xs sm:text-sm font-medium text-gray-900">{item.source}</span>
                            </div>
                            <span className="text-xs text-gray-500">{item.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'insights' && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 sm:p-5 border border-purple-200">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-base sm:text-xl flex-shrink-0">
                        💡
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Key Insight</h3>
                        <p className="text-xs sm:text-sm text-gray-700 mb-2">
                          Your brand is increasingly associated with "innovation" and "reliability"
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 bg-white rounded text-[10px] sm:text-xs font-semibold text-purple-700">+23%</span>
                          <span className="px-2 py-0.5 bg-white rounded text-[10px] sm:text-xs font-semibold text-purple-700">30 days</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { title: 'Perception', insights: ['Innovative', 'Trusted', 'Modern'] },
                      { title: 'Themes', insights: ['Quality', 'Service', 'Value'] },
                    ].map((section, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">{section.title}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {section.insights.map((insight, j) => (
                            <span key={j} className="px-2 py-1 bg-gradient-to-r from-accent-50 to-accent-100 rounded text-[10px] sm:text-xs font-medium text-accent-700">
                              {insight}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'competitors' && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-center py-3 sm:py-5">
                    <div className="text-2xl sm:text-3xl mb-2">🎯</div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1">Competitive Landscape</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Compare your performance</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: 'Your Brand', score: 87, color: 'from-accent-500 to-accent-600' },
                      { name: 'Competitor A', score: 82, color: 'from-blue-500 to-cyan-500' },
                      { name: 'Competitor B', score: 79, color: 'from-purple-500 to-pink-500' },
                      { name: 'Competitor C', score: 75, color: 'from-gray-400 to-gray-500' },
                    ].map((competitor, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs sm:text-sm font-semibold text-gray-900">{competitor.name}</span>
                          <span className="text-sm sm:text-base font-bold text-gray-900">{competitor.score}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${competitor.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${competitor.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Glow effect - Hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-accent-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 rounded-2xl" />
        </motion.div>

        {/* CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-5 sm:mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="min-h-[44px] px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Start Your Free Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
