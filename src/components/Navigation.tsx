import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
          >
            CZR Evolution
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('collections')} className="text-white hover:text-yellow-400 transition-colors">
              Collections
            </button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-yellow-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('collections')} className="block w-full text-left text-white hover:text-yellow-400 transition-colors">
              Collections
            </button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left text-white hover:text-yellow-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-yellow-400 transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
