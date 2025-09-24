import React from 'react';
const navigation = [
  {
    label: 'Product',
    items: [
      ['Features', '#features'],
      ['Models', '#models'],
      ['Use Cases', '#use-cases'],
      ['Pricing', '#pricing']
    ]
  },
  {
    label: 'Resources',
    items: [
      ['Documentation', '#'],
      ['API Reference', '#'],
      ['Guides', '#'],
      ['Community', '#']
    ]
  },
  {
    label: 'Company',
    items: [
      ['About', '#'],
      ['Careers', '#'],
      ['Privacy', '#'],
      ['Terms', '#']
    ]
  }
];
const Footer = () => {
  return <footer className="relative border-t border-white/40 bg-white/90 py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-apple-gray-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_rgba(0,119,237,0.6)]"></span>
              <span className="text-lg font-semibold tracking-tight text-apple-gray-900">Viora</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-apple-gray-500">
              The multi-model intelligence platform crafted with a meticulous, human-centred aesthetic.
            </p>
            <div className="flex space-x-4 text-apple-gray-400">
              {['Twitter', 'LinkedIn', 'Instagram'].map(network => <a key={network} href="#" className="transition-colors hover:text-apple-gray-900">
                  <span className="sr-only">{network}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-[0_10px_30px_-25px_rgba(0,0,0,0.8)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5h13M3 12h18M8 19h13" />
                    </svg>
                  </div>
                </a>)}
            </div>
          </div>
          {navigation.map(section => <div key={section.label} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-apple-gray-400">{section.label}</h3>
              <ul className="space-y-3 text-sm text-apple-gray-600">
                {section.items.map(item => <li key={item[0]}>
                    <a href={item[1]} className="transition-colors hover:text-apple-gray-900">
                      {item[0]}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
        <div className="mt-16 flex flex-col gap-6 border-t border-white/60 pt-8 text-sm text-apple-gray-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Viora. Crafted with clarity.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-apple-gray-900">Privacy</a>
            <a href="#" className="hover:text-apple-gray-900">Terms</a>
            <a href="#" className="hover:text-apple-gray-900">Cookies</a>
            <a href="#" className="hover:text-apple-gray-900">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;