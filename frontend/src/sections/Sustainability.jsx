import React from 'react';
import { Leaf, Droplets, Sun, Recycle, Wind, Award } from 'lucide-react';

const Sustainability = () => {
  const metrics = [
    { 
      label: 'Water Recycled', 
      value: '94%', 
      desc: 'Our zero-liquid-discharge (ZLD) effluent treatment plant purifies and recycles dyeing water back into processing loops.', 
      icon: Droplets,
      color: 'text-sky-400' 
    },
    { 
      label: 'Solar & Wind Energy', 
      value: '78%', 
      desc: 'Most spinning spindles and water boilers run on rooftop solar cells and dedicated wind farm grids.', 
      icon: Sun,
      color: 'text-amber-400' 
    },
    { 
      label: 'GRS Recycled fibers', 
      value: '1,240 Tons', 
      desc: 'Repurposing post-consumer PET bottles and yarn wastes into Global Recycled Standard polyester filaments.', 
      icon: Recycle,
      color: 'text-emerald-400' 
    },
    { 
      label: 'CO₂ Output Reduction', 
      value: '42.5%', 
      desc: 'Substituting coal steam generators with bio-mass briquettes, cutting greenhouse gas output drastically.', 
      icon: Leaf,
      color: 'text-green-400' 
    }
  ];

  const targets = [
    { label: '100% Organic & Recycled Fiber Sourcing', current: 74, target: 100, year: 2028 },
    { label: 'Zero Carbon Footprint in Spinning Lines', current: 62, target: 100, year: 2030 },
    { label: 'Closed-Loop Water Filtration in Dyeing', current: 94, target: 100, year: 2027 }
  ];

  return (
    <section className="bg-primary-dark py-24 relative z-10 border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8">
            <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
              ECO RESPONSIBILITY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
              The Sustainability Dashboard
            </h2>
            <p className="text-xs text-text-muted mt-4 max-w-xl font-body">
              Transparency in resource metrics. We track and verify our ecological footprint across fuel combustion, water cycles, and organic raw inputs.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right flex items-center lg:justify-end gap-3 bg-surface-card/40 border border-surface-border p-4">
            <Award className="w-8 h-8 text-accent-gold shrink-0" />
            <div className="text-left font-body">
              <span className="text-[9px] uppercase tracking-widest text-accent-champagne block font-bold">LEED CERTIFIED</span>
              <span className="text-[10px] text-text-light">Platinum Rating Factory Floor</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main stats boxes (Left 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="bg-primary-abyss border border-surface-border/60 p-8 flex flex-col gap-6 relative group overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest font-body text-text-muted font-bold">
                      {m.label}
                    </span>
                    <Icon className={`w-5 h-5 ${m.color}`} />
                  </div>
                  
                  <div>
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-text-light">
                      {m.value}
                    </span>
                    <p className="text-[11px] text-text-muted font-body mt-3 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* targets & Progress Meters (Right 4 Cols) */}
          <div className="lg:col-span-4 bg-primary-abyss border border-surface-border/60 p-8 flex flex-col justify-between">
            <div>
              <h4 className="font-heading text-xs font-bold text-text-light tracking-widest uppercase mb-6 border-b border-surface-border/40 pb-3">
                ESG 2030 PATHWAYS
              </h4>
              
              <div className="flex flex-col gap-6">
                {targets.map((t, idx) => (
                  <div key={idx} className="font-body text-xs">
                    <div className="flex justify-between items-center mb-2 font-medium">
                      <span className="text-text-muted max-w-[200px] leading-tight text-[11px]">{t.label}</span>
                      <span className="text-text-light font-bold">{t.current}%</span>
                    </div>
                    {/* Progress slider bar */}
                    <div className="w-full h-1.5 bg-surface-card rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent-gold transition-all duration-1000 ease-out"
                        style={{ width: `${t.current}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-text-muted mt-1.5">
                      <span>Target: {t.target}%</span>
                      <span>By {t.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-surface-border/40 pt-6 flex items-center gap-3 text-[10px] text-text-muted font-body leading-normal">
              <Wind className="w-4 h-4 text-accent-gold shrink-0" />
              <span>We audit and publish our environment manifest annually. Reports verified by Intertek testing labs.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sustainability;
