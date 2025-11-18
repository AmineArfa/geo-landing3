import { motion } from 'framer-motion';

export function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using LLM Visibility Platform, you accept and agree to be bound by the terms and provisions of this agreement.',
        'If you do not agree to these Terms of Service, please do not use our services.',
      ],
    },
    {
      title: 'Use License',
      content: [
        'We grant you a limited, non-exclusive, non-transferable license to access and use our LLM visibility monitoring services for your business purposes.',
        'You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission.',
        'You agree not to use our service for any unlawful purpose or in any way that could damage, disable, or impair the service.',
      ],
    },
    {
      title: 'Account Responsibilities',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to accept responsibility for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account.',
        'We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.',
      ],
    },
    {
      title: 'Service Availability',
      content: [
        'We strive to provide continuous service availability, but we do not guarantee uninterrupted access.',
        'We may modify, suspend, or discontinue any aspect of the service at any time.',
        'We are not liable for any service interruptions or data loss.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'The service and its original content, features, and functionality are owned by LLM Visibility Platform and are protected by international copyright, trademark, and other intellectual property laws.',
        'You retain all rights to the data you provide to our service.',
        'We may use aggregated and anonymized data for research and improvement purposes.',
      ],
    },
    {
      title: 'Payment Terms',
      content: [
        'Subscription fees are billed in advance on a monthly or annual basis.',
        'All fees are non-refundable except as required by law.',
        'We reserve the right to change our pricing with 30 days notice.',
        'Failure to pay may result in suspension or termination of your account.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'LLM Visibility Platform shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability shall not exceed the amount you paid us in the twelve (12) months prior to the event giving rise to the liability.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some limitations may not apply to you.',
      ],
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to indemnify and hold harmless LLM Visibility Platform from any claims, damages, losses, liabilities, and expenses arising from your use of the service or violation of these terms.',
      ],
    },
    {
      title: 'Termination',
      content: [
        'We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms.',
        'Upon termination, your right to use the service will immediately cease.',
        'You may cancel your subscription at any time through your account settings.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to modify these terms at any time.',
        'We will provide notice of significant changes via email or through the service.',
        'Your continued use of the service after changes constitutes acceptance of the new terms.',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of the State of California, United States.',
        'Any disputes shall be resolved in the courts located in San Francisco County, California.',
      ],
    },
  ];

  return (
    <section id="terms" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-200/50 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent-700">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these Terms of Service carefully before using LLM Visibility Platform. These terms govern your use of our service and constitute a legally binding agreement.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-3 pl-11">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:legal@llm-visibility.ai" className="text-accent-600 hover:text-accent-700 underline">
                legal@llm-visibility.ai
              </a>
            </p>
            <p>
              <strong>Address:</strong> LLM Visibility Platform, 123 Tech Street, San Francisco, CA 94105
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
