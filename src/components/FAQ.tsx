import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How accurate is the AI analysis?',
    answer: 'Our AI uses advanced language models trained on millions of brand mentions and reviews to provide highly accurate perception insights. While results may vary, we consistently achieve high accuracy rates.',
  },
  {
    question: 'How long does an analysis take?',
    answer: 'Analysis typically completes in 2-5 seconds. Our AI processes data in real-time to give you instant insights.',
  },
  {
    question: 'What data sources do you use?',
    answer: 'We analyze publicly available web data, social media mentions, reviews, and other online content to build a comprehensive brand perception profile.',
  },
  {
    question: 'Can I track my brand over time?',
    answer: 'Yes! With a full account, you can set up continuous monitoring and track how your brand perception changes over time.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption and never share your data with third parties. Your privacy is our priority.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-700">FAQ</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Frequently asked questions
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Everything you need to know
          </p>
        </motion.div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full min-h-[52px] sm:min-h-[56px] px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 group"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base pr-4 sm:pr-6 group-hover:text-accent-600 transition-colors leading-snug">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
