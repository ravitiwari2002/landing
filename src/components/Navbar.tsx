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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Viora AI
              </span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-apple-gray-600 hover:text-primary transition-colors">
                {item}
              </a>)}
            <a href="#get-started" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">
              Get Started
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-apple-gray-600 hover:text-primary">
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-3 py-2 text-base font-medium text-apple-gray-600 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>)}
            <a href="#get-started" className="block px-3 py-2 text-base font-medium text-primary hover:text-primary-dark" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>}
    </header>;
};
export default Navbar;