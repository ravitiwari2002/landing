import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = ['Features', 'Models', 'Use Cases', 'Pricing', 'FAQ'];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,119,237,0.6)]"></span>
                <span className="text-lg font-semibold tracking-tight text-apple-gray-900">
                  Viora
                </span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-10 text-sm">
              {navItems.map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="group relative text-apple-gray-500 hover:text-apple-gray-900 transition-colors">
                  <span className="tracking-wide uppercase text-[11px]">{item}</span>
                  <span className="absolute left-0 -bottom-2 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-300 group-hover:w-full" />
                </a>)}
              <a href="#get-started" className="group relative overflow-hidden rounded-full bg-apple-gray-900 text-white px-5 py-2 text-[13px] font-medium tracking-wide transition-all duration-500 hover:bg-apple-gray-800">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </a>
            </nav>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-apple-gray-600 hover:text-primary transition-colors">
                {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden backdrop-blur-xl bg-white/80 border-b border-white/40">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block text-sm tracking-wide uppercase text-apple-gray-500 hover:text-apple-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>)}
            <a href="#get-started" className="inline-flex items-center justify-center w-full text-sm font-medium tracking-wide text-white bg-primary hover:bg-primary-dark rounded-full py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>}
    </header>;
};
export default Navbar;