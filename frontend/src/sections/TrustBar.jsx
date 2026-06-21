import React from 'react';
import Marquee from '../components/Marquee';

const TrustBar = () => {
  return (
    <section className="bg-primary-abyss py-4 select-none relative z-10 border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <span className="text-[10px] uppercase tracking-[0.25em] font-body text-text-muted font-bold">
          GLOBAL COMPLIANCE & INTERNATIONAL PARTNERSHIPS
        </span>
      </div>
      <Marquee speed="35s" />
    </section>
  );
};

export default TrustBar;
