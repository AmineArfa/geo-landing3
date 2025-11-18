import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Use Cases', href: '/use-cases' },
  ];

  const legalLinks = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-white font-bold">LLM Visibility</span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Monitor and optimize how your brand appears in ChatGPT, Gemini, Claude, and other AI assistants. Track rankings, beat competitors, and dominate AI responses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Product</h4>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@llm-visibility.ai"
                  className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                >
                  contact@llm-visibility.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@llm-visibility.ai"
                  className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                >
                  sales@llm-visibility.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@llm-visibility.ai"
                  className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                >
                  support@llm-visibility.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; {currentYear} LLM Visibility Platform. All rights reserved.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
