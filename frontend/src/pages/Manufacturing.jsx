import React from 'react';
import { Settings, Shield, Zap, CheckCircle2 } from 'lucide-react';

const Manufacturing = () => {
  const processes = [
    { 
      step: '01', 
      title: 'Bale Combing & Carding', 
      machine: 'Rieter C 80 High-Performance Carder',
      desc: 'Raw cotton fibers are aligned and separated into uniform slivers. This eliminates micro-impurities and trash flakes before drawing.' 
    },
    { 
      step: '02', 
      title: 'Ring Spinning & Drafting', 
      machine: 'Rieter G 38 Ring Spinning Frame',
      desc: 'Slivers are drawn out and twisted to form clean ring-spun yarn cones, establishing a consistent twist-per-inch rating.' 
    },
    { 
      step: '03', 
      title: 'High Speed Warping', 
      machine: 'Karl Mayer warping machinery',
      desc: 'Parallel warp threads are wound under automated tension limits to prepare structural warp beams, ensuring uniform weaving tension.' 
    },
    { 
      step: '04', 
      title: 'Air-Jet Weaving', 
      machine: 'Tsudakoma ZAX9200i / Picanol OmniPlus-i',
      desc: 'High-speed computerized air pulses shoot weft yarns at up to 1,200 insertions per minute, constructing dense GOTS/ISO weaves.' 
    }
  ];

  const standards = [
    'Spectrophotometer Delta-E < 0.5 color calibration',
    'Uster Tester 6 yarn uniformity scanning',
    'ISO 13937 tear strength test guidelines',
    'AATCC shrinkage and wash wash-recovery tests'
  ];

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            TECHNOLOGY STACK & SPECS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            Manufacturing Operations
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl">
            Audit our mechanical capabilities, machinery lists, and quality inspection guidelines. We operate fully automated European and Japanese weaving lines.
          </p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 flex flex-col gap-6 text-xs text-text-muted leading-relaxed">
            <h3 className="font-heading text-2xl font-bold text-text-light">Advanced Weaving Machinery</h3>
            <p>
              By investing in state-of-the-art weaving machines, we ensure a high degree of dimensional stability in all technical, fashion, and home furnishing fabrics. Computerized sensor boards track yarn breakages instantly, halting looms in milliseconds to prevent weaving flaws.
            </p>
            <p>
              Our sizing and sizing-chemical preparation kitchens run on closed-loop sensors. This minimizes raw auxiliary usage while maintaining a stiff warp thread coating, crucial for high-speed projectile and air-jet shuttle operations.
            </p>
          </div>

          <div className="lg:col-span-5 bg-primary-dark border border-surface-border p-8 flex flex-col gap-6 font-body">
            <div className="flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              Weaving Hall Parameters
            </div>
            
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-surface-border/20">
                <span className="text-text-muted">Insertion Speeds</span>
                <span className="text-text-light font-bold">1200 picks/minute</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-border/20">
                <span className="text-text-muted">Maximum Weft Width</span>
                <span className="text-text-light font-bold">340 cm (134 inches)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-border/20">
                <span className="text-text-muted">Total Air Looms</span>
                <span className="text-text-light font-bold">120 Active Sets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">STEP-BY-STEP FLOW</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-light mt-2">Precision Mill Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processes.map((p, idx) => (
              <div key={idx} className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-5 relative group">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-3xl font-bold text-stroke-gold text-accent-gold/20">{p.step}</span>
                  <span className="text-[9px] font-mono text-accent-gold bg-accent-gold/5 px-2.5 py-1 border border-accent-gold/15 uppercase">
                    {p.machine}
                  </span>
                </div>
                
                <div>
                  <h4 className="font-heading text-lg font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    {p.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-3 font-body">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Labs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-gradient-to-br from-accent-gold/15 to-transparent bg-primary-dark border border-surface-border p-8 flex flex-col justify-center min-h-[250px]">
            <Settings className="w-8 h-8 text-accent-gold mb-4" />
            <h4 className="font-heading text-lg font-bold text-text-light">Uster Quality Certification</h4>
            <p className="text-xs text-text-muted leading-relaxed mt-2">
              Every cone and roll is logged under Uster Quality profiles. This tracing keeps variation parameters (CV%) within international tolerances.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 font-body">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent-gold shrink-0" />
              <h3 className="font-heading text-xl font-bold text-text-light">Lab Validation Protocols</h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              We execute physical testing under climate-controlled conditions (65% relative humidity and 20°C) to ensure color properties are stable and textiles meet B2B requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {standards.map((std, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-text-light">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Manufacturing;
