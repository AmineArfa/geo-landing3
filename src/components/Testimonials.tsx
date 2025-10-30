import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'This tool gave us insights we never had before. Game-changer for our brand strategy.',
    author: 'Sarah Chen',
    role: 'CMO, TechCorp',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote: 'The competitor analysis alone is worth it. We discovered brands we never considered competitors.',
    author: 'Michael Rodriguez',
    role: 'Founder, StartupXYZ',
    avatar: 'MR',
    rating: 5,
  },
  {
    quote: 'Fast, accurate, and incredibly useful. Our team uses it weekly.',
    author: 'Emily Johnson',
    role: 'Brand Manager, GrowthCo',
    avatar: 'EJ',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Trusted by teams worldwide
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            See how teams use our platform to improve their LLM visibility and brand presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-accent-200 group-hover:text-accent-400 transition-colors">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed text-lg relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Join thousands of brands making data-driven decisions
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all"
          >
            Get Your Free Analysis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
