export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Understand how your brand is perceived across regions with geographic brand intelligence. Track competitors, monitor sentiment, and make data-driven decisions across 200+ markets.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Product</h4>
            <ul className="space-y-3 text-sm">
              {['Features', 'Pricing', 'FAQ', 'API'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About', 'Blog', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              {['Privacy', 'Terms', 'Security', 'Compliance'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform">
                    {link}
                  </a>
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
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

