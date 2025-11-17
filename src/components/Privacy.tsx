import { motion } from 'framer-motion';

export function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'We collect information you provide directly to us, including your name, email address, company name, and website URL when you use our LLM visibility analysis service.',
        'We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, and usage data.',
        'We collect data from publicly available sources to provide brand perception analysis across LLM platforms.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our LLM visibility monitoring services',
        'To send you analysis results, reports, and service updates',
        'To respond to your comments, questions, and customer service requests',
        'To monitor and analyze trends, usage, and activities in connection with our services',
        'To detect, prevent, and address technical issues and fraudulent activity',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information to third parties.',
        'We may share your information with service providers who perform services on our behalf.',
        'We may disclose your information if required by law or in response to valid requests by public authorities.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information.',
        'All data transmissions are encrypted using SSL/TLS protocols.',
        'We regularly review and update our security practices to ensure the protection of your data.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, update, or delete your personal information.',
        'You can opt-out of receiving marketing communications at any time.',
        'You may request a copy of the personal data we hold about you.',
        'For EU users: You have rights under GDPR including data portability and the right to be forgotten.',
      ],
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies and similar tracking technologies to track activity on our service and hold certain information.',
        'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
        'However, if you do not accept cookies, you may not be able to use some portions of our service.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update our Privacy Policy from time to time.',
        'We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        'You are advised to review this Privacy Policy periodically for any changes.',
      ],
    },
  ];

  return (
    <section id="privacy" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At LLM Visibility Platform, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
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
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@llm-visibility.ai" className="text-accent-600 hover:text-accent-700 underline">
                privacy@llm-visibility.ai
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
