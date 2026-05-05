const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bebas text-2xl tracking-widest text-white mb-3">
              ACES FOR YOUTH
            </h3>
            <p className="font-dm text-gray-400 text-sm leading-relaxed max-w-xs">
              Competitive tennis for the next generation, giving back to the community one match
              at a time.
            </p>
          </div>

          <div>
            <h4 className="font-dm text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-dm text-gray-400 text-sm hover:text-[#F4A623] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-dm text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">
              Follow Along
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F4A623] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F4A623] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F4A623] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="font-dm text-gray-600 text-sm">
            A youth-led community tennis initiative.
          </p>
        </div>
      </div>
    </footer>
  );
}
