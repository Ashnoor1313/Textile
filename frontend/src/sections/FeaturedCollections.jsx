import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 'organic-cotton',
      title: 'GOTS Organic Cotton Series',
      tagline: 'Pure. Sustainable. Breathable.',
      desc: 'Sourced from organic farming cooperatives, processed with closed-loop dyeing to deliver exceptional comfort for luxury fashion brands.',
      gsmRange: '120 - 320 GSM',
      finishes: 'Sanforized, Mercerized, Bio-Washed',
      bgGradient: 'from-accent-gold/15 to-transparent'
    },
    {
      id: 'belgian-linen',
      title: 'Belgian Flax Linen Collection',
      tagline: 'Heritage. Breathable. Textured.',
      desc: 'Woven from European linen fibers, offering natural cooling, high thermal insulation, and iconic textured slubs that age gracefully.',
      gsmRange: '140 - 240 GSM',
      finishes: 'Soft-Washed, Enzyme finished',
      bgGradient: 'from-amber-700/10 to-transparent'
    },
    {
      id: 'industrial-performance',
      title: 'Aramid Ballistic Shield Line',
      tagline: 'Extreme Resistance. Heavy Load.',
      desc: 'Reinforced nylon weaves interlaced with high-tensile aramid filament cores to resist punctures, heat, and slashes in extreme settings.',
      gsmRange: '380 - 650 GSM',
      finishes: 'Water Repellent (DWR), Fire-Retardant',
      bgGradient: 'from-stone-700/20 to-transparent'
    },
    {
      id: 'luxury-jacquard',
      title: 'Venetian Silk Brocade Series',
      tagline: 'Opulent. Figured. Refractive.',
      desc: 'Intricate figured damask patterns woven with real silk fibers and gold-wrapped metallic threads, reflecting light under visual settings.',
      gsmRange: '280 - 450 GSM',
      finishes: 'Flame-Retardant coating, Calendared',
      bgGradient: 'from-yellow-700/15 to-transparent'
    }
  ];

  return (
    <section className="bg-primary-dark/40 py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
              CURATED EXCELLENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
              Featured Collections
            </h2>
          </div>
          <div>
            <Link to="/products">
              <Button variant="outline" icon={ArrowRight}>
                View All Collections
              </Button>
            </Link>
          </div>
        </div>

        {/* Collections Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col) => (
            <div 
              key={col.id} 
              className={`bg-gradient-to-br ${col.bgGradient} bg-primary-abyss border border-surface-border/60 p-8 sm:p-10 card-lift flex flex-col justify-between h-[420px] relative group overflow-hidden`}
            >
              {/* Gold light shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none"></div>

              {/* Upper Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-accent-gold fill-accent-gold" />
                  <span className="text-[9px] uppercase tracking-widest font-body text-accent-gold font-bold">
                    {col.tagline}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                  {col.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed font-body mt-2 max-w-md">
                  {col.desc}
                </p>
              </div>

              {/* Technical Specifications Overlay in card */}
              <div className="border-t border-surface-border/55 pt-6 mt-8 font-body">
                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  <div>
                    <span className="text-text-muted block uppercase tracking-wider">WEIGHT DENSITY</span>
                    <span className="text-text-light font-bold mt-0.5 block">{col.gsmRange}</span>
                  </div>
                  <div>
                    <span className="text-text-muted block uppercase tracking-wider">TREATMENTS</span>
                    <span className="text-text-light font-bold mt-0.5 block">{col.finishes}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <Link 
                    to={`/products?category=${encodeURIComponent(col.title.includes('Cotton') ? 'Cotton Fabrics' : col.title.includes('Linen') ? 'Linen Fabrics' : col.title.includes('Industrial') ? 'Technical & Industrial Textiles' : 'Home Furnishing')}`}
                    className="text-[10px] uppercase tracking-widest text-accent-gold group-hover:text-text-light font-bold inline-flex items-center gap-2 transition-colors duration-300"
                  >
                    Examine Specifications
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollections;
