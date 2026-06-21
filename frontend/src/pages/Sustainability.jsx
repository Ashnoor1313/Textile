import React, { useState } from 'react';
import { Leaf, Droplets, Sun, Recycle, Sparkles, Scale } from 'lucide-react';
import Button from '../components/Button';

const Sustainability = () => {
  const [fabricVolume, setFabricVolume] = useState('10000');
  const [materialType, setMaterialType] = useState('cotton');
  const [calcResult, setCalcResult] = useState({
    water: 120000,
    carbon: 4500,
    energy: 2500
  });

  const handleCalculate = (e) => {
    e.preventDefault();
    const volume = parseFloat(fabricVolume) || 0;
    
    // Constants representing savings per meter
    const factors = {
      cotton: { water: 12, carbon: 0.45, energy: 0.25 }, // GOTS Organic vs Conventional
      linen: { water: 18, carbon: 0.55, energy: 0.32 },  // Linen vs Conventional cotton
      polyester: { water: 8, carbon: 0.65, energy: 0.42 } // Recycled GRS vs Virgin Polyester
    };

    const factor = factors[materialType] || factors.cotton;

    setCalcResult({
      water: Math.round(volume * factor.water),
      carbon: Math.round(volume * factor.carbon),
      energy: Math.round(volume * factor.energy)
    });
  };

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            ESG & ECOLOGICAL ACCOUNTABILITY
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            Sustainability Commitments
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl">
            We target zero liquid discharge, clean solar fuel transitions and GOTS/GRS traceability. Enter fabric quantities below to calculate your savings.
          </p>
        </div>

        {/* ESG Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-5">
            <Droplets className="w-8 h-8 text-sky-400" />
            <h3 className="font-heading text-lg font-bold text-text-light">Closed Water Loop</h3>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              Our Zero Liquid Discharge (ZLD) plant handles all resizing and dye-bath residuals, purifying and returning 94% of water directly back to production.
            </p>
          </div>

          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-5">
            <Sun className="w-8 h-8 text-amber-400" />
            <h3 className="font-heading text-lg font-bold text-text-light">Carbon Zero Energy</h3>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              Operating 1.2MW of rooftop solar panels combined with wind grids, generating 78% of operating power.
            </p>
          </div>

          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col gap-5">
            <Recycle className="w-8 h-8 text-emerald-400" />
            <h3 className="font-heading text-lg font-bold text-text-light">Recycled Filaments</h3>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              Diverting ocean-bound PET bottles and mill yarn wastes into GRS certified yarns, lowering raw fossil oil extractions.
            </p>
          </div>
        </div>

        {/* ESG Savings Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Calculator Inputs (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-primary-dark border border-surface-border p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-wider mb-6">
                <Scale className="w-4 h-4" />
                ESG Impact Calculator
              </div>

              <form onSubmit={handleCalculate} className="flex flex-col gap-5 text-xs">
                
                {/* Fabric Volume */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                    Fabric Length (Meters)
                  </label>
                  <input
                    type="number"
                    value={fabricVolume}
                    onChange={(e) => setFabricVolume(e.target.value)}
                    required
                    min="1"
                    className="bg-primary-abyss border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold font-body"
                  />
                </div>

                {/* Material Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                    Material Blend
                  </label>
                  <select
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                    className="bg-primary-abyss border border-surface-border p-3 text-xs text-text-light focus:outline-none focus:border-accent-gold font-body cursor-pointer"
                  >
                    <option value="cotton">GOTS Organic Cotton (vs Conventional)</option>
                    <option value="linen">European Flax Linen (vs Conventional Cotton)</option>
                    <option value="polyester">GRS Recycled Polyester (vs Virgin PET)</option>
                  </select>
                </div>

                <Button type="submit" variant="primary" className="w-full mt-2 font-bold py-3.5">
                  Calculate Savings
                </Button>

              </form>
            </div>
            
            <p className="text-[10px] text-text-muted leading-normal mt-8 pt-4 border-t border-surface-border/20">
              Factors compiled using life cycle assessments (LCA) compared with standard conventional manufacturing benchmarks.
            </p>
          </div>

          {/* Calculator Results (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-primary-dark border border-surface-border p-8 flex flex-col justify-between font-body">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold block mb-2">Estimated ESG footprint savings</span>
              <h3 className="font-heading text-xl font-bold text-text-light">Your Supply Chain Impact</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {/* Water saved */}
              <div className="bg-primary-abyss border border-surface-border p-5 flex flex-col gap-2">
                <Droplets className="w-5 h-5 text-sky-400" />
                <span className="text-[9px] text-text-muted uppercase tracking-wider">Water Saved</span>
                <span className="text-lg font-bold text-text-light">{calcResult.water.toLocaleString()} L</span>
              </div>

              {/* Carbon saved */}
              <div className="bg-primary-abyss border border-surface-border p-5 flex flex-col gap-2">
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="text-[9px] text-text-muted uppercase tracking-wider">CO₂ Prevented</span>
                <span className="text-lg font-bold text-text-light">{calcResult.carbon.toLocaleString()} kg</span>
              </div>

              {/* Energy saved */}
              <div className="bg-primary-abyss border border-surface-border p-5 flex flex-col gap-2">
                <Sun className="w-5 h-5 text-amber-400" />
                <span className="text-[9px] text-text-muted uppercase tracking-wider">Energy Saved</span>
                <span className="text-lg font-bold text-text-light">{calcResult.energy.toLocaleString()} kWh</span>
              </div>
            </div>

            <div className="bg-surface-card/35 border border-surface-border/50 p-4 text-[10px] text-text-muted flex items-start gap-2.5 leading-normal">
              <Sparkles className="w-4 h-4 text-accent-gold shrink-0 mt-0.5 animate-pulse" />
              <span>Sourcing certified organic and recycled fabrics directly reduces the chemical and water load of agricultural runs, translating to verifiable green credentials on your garments.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Sustainability;
