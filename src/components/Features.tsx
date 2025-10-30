import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    title: 'LLM Visibility Monitoring',
    description: 'Track how your brand appears in ChatGPT, Gemini, Claude, and other AI assistants. See exactly what users see when they ask AI about you, and monitor your ranking across all major LLMs.',
    details: 'Real-time monitoring across ChatGPT, Gemini, Claude, Perplexity, and more',
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500',
    metric: '5+ LLM platforms',
    useCases: ['Monitor AI responses', 'Track brand mentions', 'Analyze response quality'],
    imageUrl: '/landscape-placeholder.svg',
    visualDescription: 'AI assistant showing brand information',
  },
  {
    title: 'LLM Ranking Optimization',
    description: 'Improve how your brand ranks in AI responses. Get actionable insights on what content, messaging, and signals influence your position when people ask AI about your industry.',
    details: 'AI-powered recommendations to improve LLM visibility and ranking',
    icon: '📈',
    gradient: 'from-blue-500 to-cyan-500',
    metric: 'Average +40% ranking improvement',
    useCases: ['Content optimization', 'SEO for AI', 'Brand positioning'],
    imageUrl: '/landscape-placeholder.svg',
    visualDescription: 'Ranking improvement dashboard',
  },
  {
    title: 'Competitive LLM Intelligence',
    description: 'See how competitors appear in AI responses compared to you. Understand competitive positioning in ChatGPT, Gemini, and Claude, and identify opportunities to outperform.',
    details: 'Compare your LLM presence vs competitors across all AI platforms',
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500',
    metric: 'Unlimited competitor tracking',
    useCases: ['Competitive analysis', 'Market positioning', 'Gap identification'],
    imageUrl: '/landscape-placeholder.svg',
    visualDescription: 'Competitive comparison in LLM responses',
  },
  {
    title: 'Geographic LLM Analysis',
    description: 'See how your brand appears in AI responses across different regions. LLM responses vary by location - understand regional differences and optimize for each market.',
    details: 'Geographic breakdown of LLM mentions and rankings across 200+ countries',
    icon: '🌍',
    gradient: 'from-orange-500 to-red-500',
    metric: '200+ countries tracked',
    useCases: ['Regional optimization', 'Market entry strategy', 'Localization insights'],
    imageUrl: '/landscape-placeholder.svg',
    visualDescription: 'World map showing LLM mentions by region',
  },
  {
    title: 'Sentiment & Trend Tracking',
    description: 'Monitor sentiment trends in AI responses over time. Track how AI assistants describe your brand, get alerts when sentiment shifts, and respond proactively.',
    details: 'AI-powered sentiment analysis of LLM responses with trend detection',
    icon: '📊',
    gradient: 'from-indigo-500 to-purple-500',
    metric: 'Real-time sentiment tracking',
    useCases: ['Reputation monitoring', 'Crisis detection', 'Trend analysis'],
    imageUrl: '/landscape-placeholder.svg',
    visualDescription: 'Sentiment trends in AI responses',
  },
  {
    title: 'API & Integrations',
    description: 'Access your LLM visibility data via REST API. Integrate with your existing tools, build custom dashboards, or automate your LLM monitoring workflows.',
    details: 'RESTful API, webhooks, Zapier integration, and native integrations',
    icon: '🔌',
    gradient: 'from-teal-500 to-cyan-500',
    metric: '100+ integrations',
    useCases: ['Data pipeline integration', 'Custom analytics', 'Workflow automation'],
    imageUrl: '/landscape-placeholder.svg',
    visualDescription: 'API integration connectors',
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Dynamic background placeholder */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url(/landscape-placeholder.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/20 to-transparent" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Everything you need to optimize your LLM presence
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Monitor, optimize, and improve how your brand appears in ChatGPT, Gemini, Claude, and all major AI assistants
          </p>
        </motion.div>

        {/* Features List - Alternating Layout */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content Side */}
                <motion.div
                  className={`space-y-6 sm:space-y-8 ${isEven ? 'lg:col-start-2' : ''}`}
                  animate={isHovered ? { x: isEven ? -10 : 10 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-4">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-4xl shadow-lg transform transition-transform duration-300 ${
                      isHovered ? 'scale-110 rotate-3' : ''
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                        {feature.metric}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-gray-600">{feature.details}</p>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {feature.useCases.map((useCase) => (
                        <motion.span
                          key={useCase}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                        >
                          {useCase}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Visual Side - Hidden on mobile, shown on desktop */}
                <motion.div
                  className={`relative hidden lg:block ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
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
                      <div className="flex-1 bg-white rounded-lg px-4 py-2 mx-4 text-xs text-gray-500">
                        llm-visibility.ai/{feature.title.toLowerCase().replace(/\s+/g, '-')}
                      </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group">
                      <img
                        src={feature.imageUrl}
                        alt={feature.visualDescription}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Floating metrics */}
                    <div className="absolute top-20 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200">
                      <div className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-purple-600 bg-clip-text text-transparent">
                        {feature.metric.split(' ')[0]}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{feature.metric.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-20 blur-2xl`} />
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 blur-3xl`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-12 bg-gradient-to-br from-accent-50 via-purple-50 to-pink-50 rounded-3xl border border-accent-200/50 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to see how you appear in AI responses?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Start monitoring your LLM visibility and improve your ranking today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
