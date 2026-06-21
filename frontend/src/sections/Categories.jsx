import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Compass, Activity, ShieldCheck, Cpu, Home } from 'lucide-react';
import Button from '../components/Button';

const Categories = () => {
  const categoriesList = [
    { 
      id: 'cotton', 
      name: 'Organic Cotton Fabrics', 
      desc: 'Ring-spun, organic certified GOTS cottons, plain weaves, twills, and custom prints for apparel.', 
      icon: Waves, 
      tag: 'GOTS Certified' 
    },
    { 
      id: 'linen', 
      name: 'Premium Flax Linen', 
      desc: 'Royal Belgian flax fibers. Cool, breathable weaves with rich, organic slub texture.', 
      icon: Compass, 
      tag: 'European Flax' 
    },
    { 
      id: 'denim', 
      name: 'Selvedge Denim twills', 
      desc: 'Heavy indigo-dyed twills woven on authentic vintage looms with self-finished borders.', 
      icon: ShieldCheck, 
      tag: 'Indigo Dyed' 
    },
    { 
      id: 'home', 
      name: 'Luxury Home Furnishing', 
      desc: 'High-density jacquards, draperies, and flame-retardant commercial upholstery fabrics.', 
      icon: Home, 
      tag: 'High Performance' 
    },
    { 
      id: 'technical', 
      name: 'Technical Textiles', 
      desc: 'Aramid reinforced weaves, tear-resistant ripstops, geotextiles, and heat filtration materials.', 
      icon: Cpu, 
      tag: 'ISO Standard' 
    },
    { 
      id: 'custom', 
      name: 'Custom Fabric Engineering', 
      desc: 'Bespoke warp-weft specifications, custom dye-matching, and performance composite formulations.', 
      icon: Activity, 
      tag: 'OEM Development' 
    }
  ];

  return (
    <section className="bg-primary-abyss py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            FABRIC PORTFOLIO
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            Curated Textures for Diverse Applications
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold mx-auto mt-6"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoriesList.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id} 
                className="bg-surface-card/25 border border-surface-border/40 p-8 flex flex-col justify-between card-lift group relative overflow-hidden h-[320px]"
              >
                {/* Glossy gradient shine on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col gap-6">
                  {/* Top line with tag & icon */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-surface-card/60 border border-surface-border/80 text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-abyss transition-colors duration-500 rounded-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-body text-text-muted border border-surface-border px-2.5 py-1">
                      {category.tag}
                    </span>
                  </div>

                  {/* Body description */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text-light mb-3 group-hover:text-accent-gold transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-body">
                      {category.desc}
                    </p>
                  </div>
                </div>

                {/* Card footer CTA link */}
                <Link 
                  to={`/products?category=${encodeURIComponent(category.name)}`} 
                  className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-accent-gold hover:text-text-light font-bold self-start mt-6 transition-colors duration-300"
                >
                  View Catalog
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="text-center mt-16">
          <Link to="/products">
            <Button variant="outline" icon={ArrowRight}>
              Browse Full Inventory Catalog
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Categories;
