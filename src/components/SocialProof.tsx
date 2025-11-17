import { motion } from 'framer-motion';

interface SocialProofProps {
  variant?: 'above-fold' | 'below-modal';
}

export function SocialProof({ variant = 'above-fold' }: SocialProofProps) {
  // Placeholder logos - replace with actual company logos
  const logos = [
    { name: 'TechCorp', initial: 'TC', description: 'Fortune 500' },
    { name: 'GrowthCo', initial: 'GC', description: 'Series B' },
    { name: 'StartupXYZ', initial: 'SX', description: 'Y Combinator' },
    { name: 'ScaleUp', initial: 'SU', description: 'Unicorn' },
    { name: 'BrandLab', initial: 'BL', description: 'Enterprise' },
    { name: 'InnovateCo', initial: 'IC', description: 'Tech Leader' },
  ];

  return (
    <section className={`py-6 sm:py-10 md:py-12 ${variant === 'below-modal' ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}>
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-accent-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 sm:space-y-8"
        >
          <div>
            <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-6 text-center">
              Trusted by leading brands
            </p>

            {/* Logo grid - Compact */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 opacity-60 grayscale hover:grayscale-0 transition-all mb-4 sm:mb-8">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex flex-col items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="text-gray-400 font-bold text-sm sm:text-base mb-0.5">{logo.initial}</span>
                  <span className="text-[9px] sm:text-xs text-gray-500">{logo.description}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics - Compact */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
            {[
              { value: '10K+', label: 'Brands analyzed', icon: '📊' },
              { value: '4.9/5', label: 'Rating', icon: '⭐' },
              { value: '98%', label: 'Recommend', icon: '✨' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-xl sm:text-3xl mb-1">{metric.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
