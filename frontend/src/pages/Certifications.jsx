import React from 'react';
import CertificationsList from '../sections/CertificationsList';
import { ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="bg-primary-abyss min-h-screen pt-28 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            REGULATORY AUDIT REGISTRY
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            Compliance & Audits
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl">
            We are audited annually by organic, recycled, and social compliance bodies. Click on any credential below to verify registry keys and license limits.
          </p>
        </div>

      </div>

      {/* Mount reuse list */}
      <CertificationsList />
    </div>
  );
};

export default Certifications;
