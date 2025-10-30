import { motion } from 'framer-motion';
import { useState } from 'react';

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'insights' | 'competitors'>('dashboard');

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Dynamic background from Unsplash - Replace with your own if desired */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/landscape-placeholder.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-purple-50/30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Platform Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              See your brand intelligence dashboard
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Real-time insights, beautiful visualizations, and actionable intelligence — all in one place
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'dashboard' as const, label: 'Dashboard', icon: '📊' },
            { id: 'insights' as const, label: 'Insights', icon: '💡' },
            { id: 'competitors' as const, label: 'Competitors', icon: '🎯' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/50'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Browser Frame */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-lg px-4 py-2 mx-4 text-sm text-gray-500">
                llm-visibility.ai/dashboard
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Header Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Brand Score', value: '87', trend: '+12%', color: 'from-green-500 to-emerald-500' },
                      { label: 'Sentiment', value: '4.2/5', trend: '+0.3', color: 'from-blue-500 to-cyan-500' },
                      { label: 'Mentions', value: '1.2K', trend: '+23%', color: 'from-purple-500 to-pink-500' },
                      { label: 'Competitors', value: '5', trend: 'New: 2', color: 'from-orange-500 to-red-500' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                        <div className="flex items-baseline gap-2">
                          <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                          <div className={`text-sm font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.trend}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-4">Sentiment Over Time</h3>
                      <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-end justify-center gap-2 p-4">
                        {[65, 72, 68, 85, 82, 88, 87].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-accent-500 to-accent-400 rounded-t-lg"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-4">Top Mentions</h3>
                      <div className="space-y-4">
                        {[
                          { source: 'Twitter', count: '342', sentiment: 'positive' },
                          { source: 'Reddit', count: '189', sentiment: 'neutral' },
                          { source: 'News', count: '156', sentiment: 'positive' },
                          { source: 'Reviews', count: '98', sentiment: 'positive' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold">
                                {item.source[0]}
                              </div>
                              <span className="font-medium text-gray-900">{item.source}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-500">{item.count}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                item.sentiment === 'positive' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {item.sentiment}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'insights' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                        💡
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Key Insight</h3>
                        <p className="text-gray-700 mb-4">
                          Your brand is increasingly associated with "innovation" and "reliability" across social media platforms. 
                          Consider leveraging this perception in your marketing campaigns.
                        </p>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-purple-700">+23% mentions</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-purple-700">Last 30 days</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'Brand Perception', insights: ['Innovative', 'Trusted', 'Modern'] },
                      { title: 'Key Themes', insights: ['Quality', 'Customer Service', 'Value'] },
                    ].map((section, i) => (
                      <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {section.insights.map((insight, j) => (
                            <span key={j} className="px-4 py-2 bg-gradient-to-r from-accent-50 to-accent-100 rounded-lg text-sm font-medium text-accent-700">
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
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Competitive Landscape</h3>
                    <p className="text-gray-600">See how you compare to competitors</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: 'Your Brand', score: 87, color: 'from-accent-500 to-accent-600' },
                      { name: 'Competitor A', score: 82, color: 'from-blue-500 to-cyan-500' },
                      { name: 'Competitor B', score: 79, color: 'from-purple-500 to-pink-500' },
                      { name: 'Competitor C', score: 75, color: 'from-gray-400 to-gray-500' },
                    ].map((competitor, i) => (
                      <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-gray-900">{competitor.name}</span>
                          <span className="text-lg font-bold text-gray-900">{competitor.score}</span>
                        </div>
                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
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

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 rounded-2xl" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all"
          >
            Start Your Free Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
