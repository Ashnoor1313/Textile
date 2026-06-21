import React from 'react';
import { Wind, Zap, Droplets, ShieldCheck, Layers, Container, ChevronRight } from 'lucide-react';

const FactoryShowcase = () => {
  const showcaseRooms = [
    {
      id: 'weaving-room',
      title: 'Air-Jet Weaving Hall',
      area: 'Shed Block B',
      desc: 'Housing 120 high-speed air-jet looms, operating continuously under automated hum-temp controls to preserve fiber elasticity.',
      icon: Wind,
      bgTheme: 'from-accent-gold/10 via-primary-abyss to-primary-abyss'
    },
    {
      id: 'spinning-floor',
      title: 'Precision Ring Spinning',
      area: 'Shed Block A',
      desc: 'Advanced roving and combing machinery drawing raw fiber staple into high-tenacity yarns.',
      icon: Zap,
      bgTheme: 'from-accent-gold/10 via-primary-abyss to-primary-abyss'
    },
    {
      id: 'dye-house',
      title: 'Closed-Loop Dye House',
      area: 'Dye Block C',
      desc: 'Closed-circuit pressurized jet-dye autoclaves and automatic kitchens executing zero-discharge colors.',
      icon: Droplets,
      bgTheme: 'from-accent-gold/10 via-primary-abyss to-primary-abyss'
    },
    {
      id: 'quality-lab',
      title: 'Physical Testing Laboratory',
      area: 'Admin Block F',
      desc: 'Equipped with electronic tear testers and spectrometer chambers validating GOTS/ISO protocols.',
      icon: ShieldCheck,
      bgTheme: 'from-accent-gold/10 via-primary-abyss to-primary-abyss'
    },
    {
      id: 'design-studio',
      title: 'CAD & Creative Studio',
      area: 'Creative Block D',
      desc: 'High-end design suite for digital fabric prototyping, dobby/jacquard loom simulations, and custom pattern mapping.',
      icon: Layers,
      bgTheme: 'from-accent-gold/10 via-primary-abyss to-primary-abyss'
    },
    {
      id: 'warehouse',
      title: 'Customs Bonded Warehouse',
      area: 'Logistics Block H',
      desc: 'High-rack rolls inventory tracking direct ocean containers dispatch with automated barcodes.',
      icon: Container,
      bgTheme: 'from-accent-gold/10 via-primary-abyss to-primary-abyss'
    }
  ];

  return (
    <section className="bg-primary-dark py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            INFRASTRUCTURE CREDIBILITY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            Factory Floor & Facilities
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold mx-auto mt-6"></div>
        </div>

        {/* Uniform Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseRooms.map((room) => {
            const Icon = room.icon;
            return (
              <div 
                key={room.id}
                className={`bg-gradient-to-br ${room.bgTheme} bg-primary-abyss border border-surface-border/60 p-8 hover:border-accent-gold/40 transition-all duration-500 flex flex-col justify-between group min-h-[280px] relative overflow-hidden card-lift rounded-sm`}
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-accent-gold/30"></div>
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-accent-gold/30"></div>

                {/* Card Head */}
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase tracking-widest font-body text-accent-gold bg-accent-gold/5 px-2.5 py-1 border border-accent-gold/15">
                    {room.area}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary-dark border border-surface-border/40 flex items-center justify-center text-text-muted group-hover:text-accent-gold transition-colors duration-300 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="mt-6 flex flex-col gap-3 flex-grow">
                  <h3 className="font-heading text-lg font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    {room.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-body">
                    {room.desc}
                  </p>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-surface-border/20 text-[10px] font-body text-text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>Active | Fully Audited</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-gold transition-all duration-300 transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FactoryShowcase;
