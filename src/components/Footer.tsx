export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration - simplified */}
      <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
        {/* Simplified grid on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
          {/* Brand - Hidden on mobile for cleaner look */}
          <div className="hidden md:block space-y-3">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Understand how your brand is perceived across regions. Track competitors and monitor sentiment.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Features', 'Pricing', 'FAQ', 'API'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['About', 'Blog', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Privacy', 'Terms', 'Security', 'Compliance'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-gray-400 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs text-gray-400 text-center sm:text-left">
              &copy; {currentYear} LLM Visibility Platform. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-5">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
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
