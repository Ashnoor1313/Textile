import React from 'react';

const Marquee = ({ speed = '40s', items = [] }) => {
  const defaultItems = [
    { name: 'GOTS ORGANIC', certification: 'Global Organic Textile Standard' },
    { name: 'OEKO-TEX® 100', certification: 'Tested for Harmful Substances' },
    { name: 'GRS CERTIFIED', certification: 'Global Recycled Standard' },
    { name: 'ISO 9001:2015', certification: 'Quality Management System' },
    { name: 'ISO 14001:2015', certification: 'Environmental Stewardship' },
    { name: 'BCI MEMBER', certification: 'Better Cotton Initiative' },
    { name: 'SEDEX COMPLIANT', certification: 'Ethical Supply Chain Audit' },
    { name: 'BSCI AUDITED', certification: 'Social Compliance Initiative' }
  ];

  const marqueeItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="w-full overflow-hidden border-y border-surface-border bg-primary-abyss/80 py-6 backdrop-blur-md relative flex">
      {/* Gradients to hide edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary-abyss to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary-abyss to-transparent z-10 pointer-events-none"></div>

      <div 
        className="flex min-w-full shrink-0 items-center justify-around gap-12 animate-marquee"
        style={{ animationDuration: speed }}
      >
        {marqueeItems.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-3 shrink-0 mx-6">
            <span className="font-heading text-lg font-bold tracking-wider text-accent-gold">{item.name}</span>
            <span className="text-[10px] font-body tracking-widest text-text-muted border-l border-surface-border pl-3 uppercase">{item.certification}</span>
          </div>
        ))}
      </div>

      <div 
        className="flex min-w-full shrink-0 items-center justify-around gap-12 animate-marquee"
        aria-hidden="true"
        style={{ animationDuration: speed }}
      >
        {marqueeItems.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-3 shrink-0 mx-6">
            <span className="font-heading text-lg font-bold tracking-wider text-accent-gold">{item.name}</span>
            <span className="text-[10px] font-body tracking-widest text-text-muted border-l border-surface-border pl-3 uppercase">{item.certification}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
