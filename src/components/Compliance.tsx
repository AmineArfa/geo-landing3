import { motion } from 'framer-motion';

export function Compliance() {
  const regulations = [
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with the General Data Protection Regulation for EU users',
      icon: '🇪🇺',
      features: [
        'Right to access personal data',
        'Right to be forgotten',
        'Data portability',
        'Consent management',
        'Data processing agreements',
        'Privacy by design',
      ],
    },
    {
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance for California residents',
      icon: '🇺🇸',
      features: [
        'Right to know what data is collected',
        'Right to delete personal information',
        'Right to opt-out of data sales',
        'Non-discrimination for privacy rights',
        'Transparent privacy notices',
      ],
    },
    {
      title: 'SOC 2 Type II',
      description: 'System and Organization Controls for service organizations',
      icon: '🛡️',
      features: [
        'Security controls',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality measures',
        'Privacy protections',
        'Annual audits',
      ],
    },
    {
      title: 'ISO 27001',
      description: 'International standard for information security management',
      icon: '📋',
      features: [
        'Information security policies',
        'Risk assessment procedures',
        'Security incident management',
        'Business continuity planning',
        'Regular security audits',
        'Continuous improvement',
      ],
    },
  ];

  const practices = [
    {
      title: 'Data Retention',
      description: 'We retain customer data only as long as necessary for business purposes or as required by law. Clear data retention and deletion policies are in place.',
    },
    {
      title: 'Third-Party Audits',
      description: 'Regular independent audits verify our compliance with security and privacy standards. Audit reports are available to enterprise customers.',
    },
    {
      title: 'Vendor Management',
      description: 'All third-party vendors are thoroughly vetted for security and compliance. We maintain data processing agreements with all vendors handling customer data.',
    },
    {
      title: 'Incident Reporting',
      description: 'Clear procedures for reporting and handling security incidents. We commit to transparent communication in the event of a data breach.',
    },
    {
      title: 'Data Processing Agreements',
      description: 'DPAs are available for all customers requiring formal data processing agreements under GDPR or other regulations.',
    },
    {
      title: 'Privacy Shield',
      description: 'While Privacy Shield has been invalidated, we maintain Standard Contractual Clauses (SCCs) for EU-US data transfers.',
    },
  ];

  return (
    <section id="compliance" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-700">Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Regulatory compliance you can trust
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            We maintain compliance with major data protection and privacy regulations worldwide
          </p>
        </motion.div>

        {/* Regulations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{regulation.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{regulation.title}</h3>
              <p className="text-gray-600 mb-6">{regulation.description}</p>
              <ul className="space-y-2">
                {regulation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Compliance Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="p-6 bg-white rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Request Documentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Need compliance documentation?</h3>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
            We provide detailed compliance documentation including SOC 2 reports, DPAs, and security questionnaires for enterprise customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:compliance@llm-visibility.ai"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all text-center"
            >
              Request Documentation
            </a>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#privacy')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all text-center"
            >
              View Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
