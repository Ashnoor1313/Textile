import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowRight, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Cotton Fabrics', path: '/products?category=Cotton+Fabrics' },
      { name: 'Linen Fabrics', path: '/products?category=Linen+Fabrics' },
      { name: 'Technical Textiles', path: '/products?category=Technical+%26+Industrial+Textiles' },
      { name: 'Denim Collection', path: '/products?category=Denim+Fabrics' },
      { name: 'Home Furnishings', path: '/products?category=Home+Furnishing' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Certifications', path: '/certifications' },
      { name: 'Global Presence', path: '/exports' },
      { name: 'Contact Head Office', path: '/contact' }
    ],
    legal: [
      { name: 'B2B Trade Terms', path: '#' },
      { name: 'Export Compliance', path: '#' },
      { name: 'Privacy Policy', path: '#' }
    ]
  };

  return (
    <footer className="bg-primary-abyss border-t border-surface-border/60 text-text-muted pt-20 pb-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Company Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group self-start">
            <div className="w-8 h-8 rounded-sm bg-accent-gold flex items-center justify-center font-heading text-primary-abyss font-bold text-lg">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-wider text-text-light">
                TEXTILIA
              </span>
              <span className="text-[8px] font-body tracking-[0.25em] text-accent-gold uppercase leading-none">
                FINE WEAVERS
              </span>
            </div>
          </Link>
          
          <p className="text-xs leading-relaxed max-w-sm">
            A world-class textile manufacturer and fabric exporter. Combining traditional weaving craftsmanship with advanced material engineering to supply apparel brands, industrial clients, and hospitality giants worldwide.
          </p>

          <div className="flex flex-col gap-3.5 text-xs text-text-light font-body mt-2">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
              <span>Block D, Export Promotion Zone, Industrial Area, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent-gold shrink-0" />
              <span>+91 11 4050 9988 / +91 98110 55660</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent-gold shrink-0" />
              <span>trade@textiliaweavers.com</span>
            </div>
          </div>
        </div>

        {/* Navigation Categories */}
        <div>
          <h4 className="font-heading text-xs font-bold text-text-light tracking-widest uppercase mb-6 border-l-2 border-accent-gold pl-3">
            FABRIC PORTFOLIO
          </h4>
          <ul className="flex flex-col gap-3 text-xs">
            {footerLinks.products.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xs font-bold text-text-light tracking-widest uppercase mb-6 border-l-2 border-accent-gold pl-3">
            ENTERPRISE
          </h4>
          <ul className="flex flex-col gap-3 text-xs">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Compliance & Newsletter */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-heading text-xs font-bold text-text-light tracking-widest uppercase mb-6 border-l-2 border-accent-gold pl-3">
              CERTIFIED MILL
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[9px] bg-surface-card border border-surface-border text-text-light px-2 py-1 font-bold">GOTS ORGANIC</span>
              <span className="text-[9px] bg-surface-card border border-surface-border text-text-light px-2 py-1 font-bold">OEKO-TEX 100</span>
              <span className="text-[9px] bg-surface-card border border-surface-border text-text-light px-2 py-1 font-bold">GRS RECYCLED</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-[10px] text-text-muted leading-normal bg-surface-card/40 border border-surface-border/50 p-3">
            <Shield className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
            <span>Regularly audited by GOTS and OEKO-TEX for ecological purity and social compliance.</span>
          </div>
        </div>

      </div>

      {/* Underbar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-surface-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-wider">
        <p>© {currentYear} Textilia Fine Weavers Ltd. All rights reserved. Premium B2B Export Mills.</p>
        <div className="flex items-center gap-6">
          {footerLinks.legal.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-text-light transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
