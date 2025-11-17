import { motion } from 'framer-motion';
import { useState } from 'react';

const llmPlatforms = [
  { name: 'ChatGPT', icon: '🤖', color: 'from-green-500 to-emerald-500', rank: 3, change: '+2' },
  { name: 'Gemini', icon: '✨', color: 'from-blue-500 to-cyan-500', rank: 1, change: '+1' },
  { name: 'Claude', icon: '🧠', color: 'from-purple-500 to-pink-500', rank: 2, change: '+1' },
  { name: 'Perplexity', icon: '🔍', color: 'from-orange-500 to-red-500', rank: 4, change: '+3' },
];

const sampleQueries = [
  { query: 'What is the best CRM software?', yourRank: 2, competitors: [{ name: 'Competitor A', rank: 1 }, { name: 'Your Brand', rank: 2 }, { name: 'Competitor B', rank: 3 }] },
  { query: 'Top SaaS companies for marketing?', yourRank: 1, competitors: [{ name: 'Your Brand', rank: 1 }, { name: 'Competitor A', rank: 2 }, { name: 'Competitor C', rank: 3 }] },
  { query: 'Best tools for brand monitoring?', yourRank: 3, competitors: [{ name: 'Competitor B', rank: 1 }, { name: 'Competitor A', rank: 2 }, { name: 'Your Brand', rank: 3 }] },
];

export function LLMVisibility() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <section id="llm-visibility" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-accent-700">LLM Visibility</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Track your AI response rankings
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Monitor your brand across ChatGPT, Gemini, Claude, and more
          </p>
        </motion.div>

        {/* LLM Platform Rankings - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-10"
        >
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">Your LLM Rankings</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {llmPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedPlatform(platform.name)}
                className={`relative p-3 sm:p-4 bg-white rounded-lg border-2 cursor-pointer transition-all min-h-[110px] sm:min-h-[130px] ${
                  selectedPlatform === platform.name
                    ? 'border-accent-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${platform.color} rounded-bl-lg flex items-center justify-center text-base sm:text-xl opacity-20`}>
                  {platform.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-base sm:text-xl shadow-md`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{platform.name}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-500">Avg Rank</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5">
                    <span className="text-xl sm:text-3xl font-bold text-gray-900">#{platform.rank}</span>
                    <span className="text-green-600 font-semibold text-[10px] sm:text-xs mb-0.5">{platform.change}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Query Responses - Compact Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center justify-between mb-3 xs:mb-4 px-1">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900">
              Your AI Response Rankings
            </h3>
            <span className="text-[10px] xs:text-xs text-gray-500 font-medium">Live monitoring</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-3">
            {sampleQueries.map((query, index) => {
              const isYourBrandFirst = query.yourRank === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-3 xs:p-3.5 bg-white rounded-lg border border-gray-200/60 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer min-h-[88px]"
                >
                  {/* Query Header */}
                  <div className="flex items-start gap-2 mb-2.5 xs:mb-3">
                    <div className="w-4 h-4 xs:w-4 xs:h-4 rounded bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center text-white font-bold text-[9px] flex-shrink-0 mt-0.5">
                      Q
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-xs xs:text-xs leading-tight mb-1.5">
                        {query.query}
                      </p>
                      <span className={`text-[10px] xs:text-[10px] font-medium px-1.5 py-0.5 rounded ${
                        isYourBrandFirst
                          ? 'bg-green-100 text-green-700'
                          : query.yourRank === 2
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        Rank #{query.yourRank}
                      </span>
                    </div>
                  </div>

                  {/* Rankings - Compact */}
                  <div className="flex flex-wrap gap-1.5 ml-6">
                    {query.competitors.map((comp, i) => {
                      const isYourBrand = comp.name === 'Your Brand';

                      return (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + i * 0.02 }}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                            isYourBrand
                              ? 'bg-accent-50 text-accent-700 border border-accent-200/50'
                              : 'bg-gray-50 text-gray-600 border border-gray-200/50'
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                            comp.rank === 1
                              ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white'
                              : comp.rank === 2
                              ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white'
                              : comp.rank === 3
                              ? 'bg-gradient-to-br from-orange-300 to-orange-400 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {comp.rank}
                          </span>
                          <span className="truncate max-w-[80px]">{comp.name}</span>
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Features - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {[
            {
              title: 'Real-time Monitoring',
              description: 'Track your brand in AI responses. Get alerts when rankings shift.',
              icon: '⚡',
            },
            {
              title: 'Optimization Insights',
              description: 'Get recommendations to improve your LLM ranking.',
              icon: '📈',
            },
            {
              title: 'Competitive Analysis',
              description: 'Compare your presence against competitors.',
              icon: '🎯',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl mb-2">{feature.icon}</div>
              <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{feature.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
