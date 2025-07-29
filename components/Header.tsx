import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#packages', label: 'Packages' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const renderNavLinks = (isMobile: boolean) => (
    <ul className={`flex ${isMobile ? 'flex-col items-center gap-y-6 text-lg' : 'flex-row items-center gap-x-8'}`}>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            className={`font-medium hover:text-brand-orange-600 transition-colors duration-300 ${isMobile ? 'text-gray-700' : isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Ride <span className="text-brand-orange-600">à la Pondy</span>
          </a>

          <nav className="hidden lg:flex">
            {renderNavLinks(false)}
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <MenuIcon className={`h-7 w-7 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <CloseIcon className="h-8 w-8 text-gray-800" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          {renderNavLinks(true)}
        </div>
      </div>
    </header>
  );
};

export default Header;