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
  ];

  return (
    <section className={`py-12 sm:py-16 ${variant === 'below-modal' ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-50/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-10"
        >
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by leading brands
            </p>
            
            {/* Logo row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all mb-8 sm:mb-12">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center justify-center w-24 sm:w-28 md:w-32 h-16 sm:h-18 md:h-20 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-gray-400 font-bold text-lg mb-1">{logo.initial}</span>
                  <span className="text-xs text-gray-500 group-hover:text-accent-600 transition-colors">{logo.description}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            {[
              { value: '10,000+', label: 'Brands analyzed', icon: '📊', detail: 'This week' },
              { value: '4.9/5', label: 'Average rating', icon: '⭐', detail: 'From 2,847 reviews' },
              { value: '98%', label: 'Would recommend', icon: '✨', detail: 'Customer satisfaction' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{metric.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-gray-400">{metric.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

