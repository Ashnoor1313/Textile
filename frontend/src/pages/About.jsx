import React from 'react';
import { Target, Compass, Award, Building } from 'lucide-react';

const About = () => {
  const values = [
    { label: 'Vision', desc: 'To bridge ancient weaving heritage with technical material engineering to deliver zero-defect certified fabrics globally.', icon: Compass },
    { label: 'Mission', desc: 'To operate zero-liquid discharge mills fueled by solar grids, ensuring ecological neutrality in high-capacity B2B supply lines.', icon: Target },
    { label: 'Artisan Standards', desc: 'Purity in twist counts, alignment in warp densities, and spectrophotometer verified dyes in every batch.', icon: Award },
    { label: 'Global Sizing', desc: 'Operating massive production plants supplying custom specifications to over 65 countries.', icon: Building }
  ];

  const leaders = [
    { name: 'Ashok Singh', role: 'Chairman & Managing Director', desc: '40 years of textile engineering pioneering closed-loop sustainability mills.' },
    { name: 'Devendra K. S.', role: 'Chief of Production', desc: 'Ex-director at major global spinning mills. Oversees air-jet sizing automation.' },
    { name: 'Amelia Gray', role: 'Head of Global Export Sales', desc: 'Manages international logistics, custom bonded clearances and B2B partnerships.' }
  ];

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            ESTABLISHED 1984
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            Our Story & Legacy
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl">
            Tracing our roots from a traditional family weaving cluster to a modern, automated manufacturing plant shipping container loads of fabric daily.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="flex flex-col gap-6 text-xs text-text-muted leading-relaxed">
            <h3 className="font-heading text-2xl font-bold text-text-light">Weaving Heritage to Industrial Automation</h3>
            <p>
              Founded in 1984 as a small-scale warp-preparation workshop, Textilia has grown alongside the global demand for high-performance and ethical textiles. We realized early on that the future of textiles lies in the intersection of structural engineering and eco-certification.
            </p>
            <p>
              Today, our vertically integrated mills handle raw organic cotton combing, flax retting, ring spinning, automated sizing, air-jet weaving, and specialized custom finish treatments under one centralized physical location. This ensures absolute custody trace and zero-defect quality control.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent-gold/15 to-transparent bg-primary-dark border border-surface-border p-8 sm:p-10 flex flex-col justify-center h-[300px]">
            <span className="text-stroke-gold text-5xl font-heading font-normal">LEED Platinum</span>
            <h4 className="font-heading text-lg font-bold text-text-light mt-4">Platinum Certified Factory Floor</h4>
            <p className="text-xs text-text-muted leading-relaxed mt-2 font-body">
              Our structures and roofs carry massive solar cells generating 78% of operating power, and a zero-liquid discharge filtration loop recycling water back to our sizing machines.
            </p>
          </div>
        </div>

        {/* Vision & Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-primary-dark border border-surface-border p-6 flex flex-col gap-4">
                <div className="p-3 bg-surface-card border border-surface-border text-accent-gold rounded-sm self-start">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-sm font-bold text-text-light uppercase tracking-wider">{v.label}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Leadership board */}
        <div>
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">MANAGEMENT TEAM</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-light mt-2">Executive Leadership</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-primary-dark border border-surface-border p-8 relative flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-6 h-[1px] bg-accent-gold/20"></div>
                <div className="absolute top-0 right-0 w-[1px] h-6 bg-accent-gold/20"></div>
                
                <div>
                  <h4 className="font-heading text-lg font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    {leader.name}
                  </h4>
                  <span className="text-[10px] text-accent-gold uppercase tracking-wider font-bold mt-1 block">
                    {leader.role}
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed mt-4 font-body">
                    {leader.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
