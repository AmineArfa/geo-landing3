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
    <section className={`py-8 xs:py-10 sm:py-12 md:py-16 ${variant === 'below-modal' ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 xs:space-y-10"
        >
          <div>
            <p className="text-xs xs:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 xs:mb-7 sm:mb-8 text-center">
              Trusted by leading brands
            </p>

            {/* Logo grid - Mobile-first: 2 cols -> 3 cols (xs) -> 4 cols (sm) -> 6 cols (md) */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 xs:gap-4 sm:gap-5 md:gap-6 opacity-60 grayscale hover:grayscale-0 transition-all mb-6 xs:mb-8 sm:mb-10 md:mb-12">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="min-h-[44px] flex flex-col items-center justify-center px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-gray-400 font-bold text-base xs:text-lg mb-1">{logo.initial}</span>
                  <span className="text-xs text-gray-500 group-hover:text-accent-600 transition-colors">{logo.description}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics - Mobile-first: stack on mobile, row on sm+ */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 pt-6 xs:pt-7 sm:pt-8 border-t border-gray-200">
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
                className="min-h-[44px] text-center"
              >
                <div className="text-3xl xs:text-4xl mb-1.5 xs:mb-2">{metric.icon}</div>
                <div className="text-3xl xs:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1.5 xs:mb-2">
                  {metric.value}
                </div>
                <div className="text-xs xs:text-sm text-gray-600 font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-gray-400">{metric.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
