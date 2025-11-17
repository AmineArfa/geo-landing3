import { motion } from 'framer-motion';

const badges = [
  {
    title: 'SOC 2 Certified',
    description: 'Enterprise-grade security',
    icon: (
      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'GDPR Compliant',
    description: 'Your data is protected',
    icon: (
      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '99.9% Uptime',
    description: 'Always available',
    icon: (
      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'No Data Sharing',
    description: 'Your insights stay private',
    icon: (
      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'ISO 27001',
    description: 'Information security',
    icon: (
      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    description: 'Always here to help',
    icon: (
      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const guarantees = [
  {
    title: 'Instant Results',
    description: 'Get your analysis in seconds, not hours',
  },
  {
    title: 'No Credit Card Required',
    description: 'Try our free analysis with zero commitment',
  },
  {
    title: '100% Free Analysis',
    description: 'Comprehensive insights at no cost',
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-5 sm:px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] xs:w-[500px] sm:w-[600px] h-[400px] xs:h-[500px] sm:h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 xs:mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Security & Trust
              </span>
            </h2>
            <p className="text-sm xs:text-base text-gray-600 max-w-2xl mx-auto px-2 xs:px-4">
              Your data security and privacy are our top priorities
            </p>
          </div>

          {/* Mobile-first badge grid: 2 cols -> 3 cols (xs) -> 4 cols (sm) -> 6 cols (md) */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="min-h-[44px] text-center p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl bg-white border border-gray-200/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-2 xs:p-2.5 sm:p-3 rounded-xl bg-accent-50 text-accent-600 mb-2 xs:mb-3 sm:mb-4">
                  {badge.icon}
                </div>
                <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 xs:w-56 sm:w-64 h-48 xs:h-56 sm:h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 xs:w-56 sm:w-64 h-48 xs:h-56 sm:h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">Our Guarantee</h2>
              <p className="text-sm xs:text-base sm:text-lg text-accent-100 max-w-2xl mx-auto px-2 xs:px-4">
                We stand behind our platform with these commitments
              </p>
            </div>

            {/* Mobile-first: stack on mobile, row on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="min-h-[44px] text-center"
                >
                  <div className="inline-flex p-2.5 xs:p-3 rounded-xl bg-white/20 backdrop-blur-sm mb-3 xs:mb-4">
                    <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-1.5 xs:mb-2">{guarantee.title}</h3>
                  <p className="text-sm xs:text-base text-accent-100">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
