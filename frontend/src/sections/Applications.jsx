import React, { useState } from 'react';
import { Shirt, Sofa, Hotel, Car, Hammer, Stethoscope, CheckCircle, Flame } from 'lucide-react';

const Applications = () => {
  const tabs = [
    { 
      id: 'fashion', 
      label: 'Luxury Fashion', 
      icon: Shirt,
      desc: 'Supplying top fashion houses with breathable organic cottons, drape-fluid linen weaves, and raw loom selvedge denims that stand out in quality and dye consistency.',
      fabrics: ['GOTS Organic Cotton Twill', 'Belgian Flax Linen', 'Selvedge Indigo Denim'],
      specs: [
        { label: 'Color Fastness', value: 'Grade 4-5 (Excellent)' },
        { label: 'Shrinkage Rating', value: 'Sanforized < 2%' },
        { label: 'Weft Slub Ratio', value: 'Calibrated Natural' },
        { label: 'Dye Safety', value: 'OEKO-TEX Approved' }
      ]
    },
    { 
      id: 'furniture', 
      label: 'Upholstery & Decor', 
      icon: Sofa,
      desc: 'Engineered jacquards and heavy cotton ducks carrying high abrasion scores (Martindale > 40,000 rubs) and liquid-repelling layers for architectural layouts.',
      fabrics: ['Venetian Gold Silk Jacquard', 'Heavy Cotton Canvas Duck', 'Flax Linen Blend'],
      specs: [
        { label: 'Martindale Score', value: '45,000+ double rubs' },
        { label: 'Flame Retardancy', value: 'BS 5852 Compliance' },
        { label: 'Pilling Resistance', value: 'Grade 4 (High)' },
        { label: 'Lightfastness', value: 'Grade 6 (UV Stable)' }
      ]
    },
    { 
      id: 'hospitality', 
      label: 'Hotel & Institution', 
      icon: Hotel,
      desc: 'Extremely durable double-twisted yarns crafted for high-frequency industrial washing, providing plush skin-touch feel and long-term weave retention.',
      fabrics: ['High-Thread Egyptian Cotton Sateen', 'Cotton-Linen Damask', 'Water-Resistant Blends'],
      specs: [
        { label: 'Tensile Retention', value: '95% after 150 cycles' },
        { label: 'Thread Count', value: '300 - 600 TC' },
        { label: 'Sanitizer Safe', value: 'Chlorine-resistant dyeing' },
        { label: 'Whiteness Index', value: 'CIE Whiteness > 150' }
      ]
    },
    { 
      id: 'automotive', 
      label: 'Automotive Interiors', 
      icon: Car,
      desc: 'High-density backing fabrics, acoustic isolation non-wovens, and UV-stabilized seating face fabrics crafted under rigid performance guidelines.',
      fabrics: ['Flame-Retardant Polyester', 'Aramid Reinforced Composites', 'Needle-Punched Felt'],
      specs: [
        { label: 'Heat Aging Resistance', value: 'Stable up to 120°C' },
        { label: 'Fogging Factor', value: 'G < 1.0 mg (Zero emissions)' },
        { label: 'UV Resistance', value: 'SAE J2412 Xenon standard' },
        { label: 'Tensile Load', value: 'Warp > 1200 N / Weft > 900 N' }
      ]
    },
    { 
      id: 'industrial', 
      label: 'Industrial & Workwear', 
      icon: Hammer,
      desc: 'Heavy-duty puncture-resistant twills, electrical static discharge (ESD) carbon lattices, and safety high-visibility canvases for heavy industry.',
      fabrics: ['Aramid Ballistic Nylon', 'ESD Carbon Grid Twill', 'PVC Coated Duck Canvas'],
      specs: [
        { label: 'Puncture Rating', value: 'Class 4 (Extreme)' },
        { label: 'Static Discharge', value: 'EN 1149 ESD compliant' },
        { label: 'Tear Propagation', value: 'Warp 80N / Weft 75N' },
        { label: 'Coating Shell', value: 'Fluorocarbon-free DWR' }
      ]
    },
    { 
      id: 'medical', 
      label: 'Healthcare & Protective', 
      icon: Stethoscope,
      desc: 'Anti-microbial silver-ion embedded weaves, barrier gowns, and liquid-proof sterile drapes meeting fluid pressure tests.',
      fabrics: ['Silver-Ion Cotton Blend', 'Micro-Porous Barrier Polyester', 'Sterile Woven Filters'],
      specs: [
        { label: 'Bacterial Filtration', value: 'BFE > 98% efficiency' },
        { label: 'Barrier Rating', value: 'AAMI Level 3 compliance' },
        { label: 'Fluid Resistance', value: 'Withstands water up to 50 cm' },
        { label: 'Dye Safety', value: 'Cytotoxicity certified safe' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ActiveIcon = activeTab.icon;

  return (
    <section className="bg-primary-abyss py-24 relative z-10 border-b border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            MARKET VERSATILITY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            Application Showcase
          </h2>
          <p className="text-xs text-text-muted mt-2 font-body">
            Custom engineered warp and weft structures optimized for specific regulatory environments, stress conditions, and aesthetics.
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2.5 text-xs px-5 py-3 border transition-all duration-300 font-body ${
                  isActive
                    ? 'border-accent-gold text-accent-gold bg-accent-gold/5 font-bold shadow-md shadow-accent-gold/5'
                    : 'border-surface-border text-text-muted hover:border-text-muted hover:text-text-light bg-transparent'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="bg-primary-dark/85 border border-surface-border/60 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Specifications (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-surface-card border border-surface-border text-accent-gold rounded-sm">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-light">
                {activeTab.label} Fabric Standard
              </h3>
            </div>
            
            <p className="text-xs text-text-muted leading-relaxed font-body">
              {activeTab.desc}
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold font-body">
                Recommended Fabric Series:
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {activeTab.fabrics.map((fabric, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-body bg-surface-card border border-surface-border text-text-light px-3 py-1.5"
                  >
                    {fabric}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Data Metrics Table (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-primary-abyss border border-surface-border/50 p-6 font-body">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-accent-champagne border-b border-surface-border/40 pb-3 uppercase tracking-wider">
              <Flame className="w-4 h-4 text-accent-gold" />
              Required Performance Metrics
            </div>
            
            <div className="flex flex-col gap-3">
              {activeTab.specs.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-surface-border/20 last:border-0">
                  <span className="text-text-muted">{spec.label}</span>
                  <span className="text-text-light font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-gold" />
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Applications;
