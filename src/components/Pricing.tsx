import { motion } from 'framer-motion';
import { useState } from 'react';

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 49,
      annualPrice: 470,
      features: [
        '5 brand analyses per month',
        'Monitor 3 LLM platforms',
        'Basic competitor tracking (3 competitors)',
        'Monthly reports',
        'Email support',
        '7-day data retention',
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Professional',
      description: 'For growing businesses that need deeper insights',
      monthlyPrice: 149,
      annualPrice: 1430,
      features: [
        'Unlimited brand analyses',
        'Monitor all major LLM platforms',
        'Advanced competitor tracking (10 competitors)',
        'Weekly reports + Real-time alerts',
        'Priority email & chat support',
        '90-day data retention',
        'API access',
        'Custom dashboards',
        'Geographic analysis (50+ countries)',
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      monthlyPrice: 499,
      annualPrice: 4790,
      features: [
        'Everything in Professional',
        'Unlimited competitor tracking',
        'Daily reports + Custom alerts',
        'Dedicated account manager',
        'Phone & priority support',
        'Unlimited data retention',
        'Advanced API access',
        'White-label options',
        'Geographic analysis (200+ countries)',
        'Custom integrations',
        'SSO & advanced security',
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
              style={{ backgroundColor: billingPeriod === 'annual' ? '#6366f1' : '#e5e7eb' }}
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform"
                style={{ transform: billingPeriod === 'annual' ? 'translateX(28px)' : 'translateX(0)' }}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div
                className={`h-full p-8 rounded-2xl bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-accent-500 scale-105' : 'border-gray-200'
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingPeriod === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {billingPeriod === 'annual' && (
                    <p className="text-sm text-gray-500 mt-1">Billed annually at ${plan.annualPrice}</p>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const heroSection = document.querySelector('section');
                    heroSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-xl hover:shadow-accent-500/50'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Contact our sales team for custom enterprise solutions or visit our FAQ section.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@llm-visibility.ai"
              className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/50 transition-all"
            >
              Contact Sales
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all"
            >
              View FAQ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
