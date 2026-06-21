import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Fabrics', path: '/products' },
    { name: 'Process', path: '/manufacturing' },
    { name: 'Eco Hub', path: '/sustainability' },
    { name: 'Compliance', path: '/certifications' },
    { name: 'Exports', path: '/exports' }
  ];

  const activeLinkStyle = (path) => {
    return location.pathname === path
      ? 'text-accent-gold border-b-2 border-accent-gold pb-1 font-bold'
      : 'text-text-muted hover:text-text-light transition-colors duration-300 font-medium';
  };

  const handleBrandClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-primary-abyss/85 border-b border-surface-border/60 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={handleBrandClick} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-accent-gold flex items-center justify-center font-heading text-primary-abyss font-bold text-lg shadow-md shadow-accent-gold/20 group-hover:scale-105 transition-transform duration-300">
            T
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-wider text-text-light group-hover:text-accent-gold transition-colors duration-300">
              TEXTILIA
            </span>
            <span className="text-[8px] font-body tracking-[0.25em] text-accent-gold uppercase leading-none">
              FINE WEAVERS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-xs uppercase tracking-widest ${activeLinkStyle(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="outline" icon={ArrowUpRight}>
              Request RFQ
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text-muted hover:text-text-light focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[73px] bg-primary-abyss/98 z-40 backdrop-blur-lg flex flex-col justify-between py-8 px-8 overflow-y-auto animate-fade-in-up lg:hidden">
          <nav className="flex flex-col gap-6 text-center py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base uppercase tracking-widest font-heading ${
                  location.pathname === link.path ? 'text-accent-gold font-bold' : 'text-text-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-6 items-center pt-8 pb-4">
            <Link to="/contact" className="w-full">
              <Button variant="primary" className="w-full" icon={ArrowUpRight}>
                Request Sample Catalog
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-[10px] text-text-muted tracking-wider">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              GOTS & OEKO-TEX GLOBAL EXPORT MILL
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
