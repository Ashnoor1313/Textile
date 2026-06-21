import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ value, suffix, label, desc }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-surface-card/30 border border-surface-border/50 p-8 flex flex-col justify-between card-lift relative group overflow-hidden">
      {/* Accent corner borders */}
      <div className="absolute top-0 left-0 w-4 h-[1px] bg-accent-gold/30 group-hover:bg-accent-gold transition-colors duration-500"></div>
      <div className="absolute top-0 left-0 w-[1px] h-4 bg-accent-gold/30 group-hover:bg-accent-gold transition-colors duration-500"></div>

      <div className="flex flex-col gap-2">
        <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light flex items-baseline">
          {count.toLocaleString()}
          <span className="text-accent-gold font-normal font-body ml-1 text-2xl sm:text-3xl">{suffix}</span>
        </span>
        <h4 className="font-heading text-xs uppercase tracking-widest text-accent-champagne font-bold mt-2">
          {label}
        </h4>
      </div>
      <p className="text-[11px] text-text-muted mt-4 leading-relaxed font-body">
        {desc}
      </p>
    </div>
  );
};

const Stats = () => {
  const metrics = [
    { value: '42', suffix: '+', label: 'Years Weaving', desc: 'Crafting fine textiles and exporting certified fabrics since 1984, bridging legacy and industrial scale.' },
    { value: '65', suffix: '+', label: 'Countries Exported', desc: 'Direct shipping channels to apparel hubs in Europe, North America, Middle East, and Asia.' },
    { value: '25', suffix: 'M+', label: 'Annual Fabric Output', desc: 'Millions of linear meters woven yearly across spinning lines and advanced air-jet loom sheds.' },
    { value: '500', suffix: '+', label: 'Active B2B Clients', desc: 'Direct mill relationships with fashion houses, industrial uniforms, and hospitality buying networks.' }
  ];

  return (
    <section className="bg-primary-dark/50 py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-end">
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
              MILL SCALE & CREDIBILITY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
              Industrial Capacity Woven with Artisan Standards
            </h2>
          </div>
          <div>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              Operating state-of-the-art spinning, sizing, warping, and air-jet weaving technologies to deliver consistent GSM values, fast dye-lot batches, and zero-defect compliance.
            </p>
          </div>
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <StatCard 
              key={idx}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              desc={item.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
