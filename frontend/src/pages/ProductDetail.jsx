import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ShieldCheck, Download, ShoppingBag, Info } from 'lucide-react';
import { fabricsData } from '../data/fabrics';
import Button from '../components/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const fabric = fabricsData.find(f => f.id === id);

  if (!fabric) {
    return (
      <div className="bg-primary-abyss min-h-screen flex flex-col items-center justify-center pt-28 font-body">
        <h2 className="text-xl font-bold text-accent-gold uppercase tracking-widest mb-4">Fabric Record Not Found</h2>
        <Link to="/products">
          <Button variant="outline" icon={ArrowLeft}>Back to Catalog</Button>
        </Link>
      </div>
    );
  }

  const [activeColor, setActiveColor] = useState(fabric.colors[0]);
  const [sampleSuccess, setSampleSuccess] = useState(false);

  const handleRequestSample = () => {
    setSampleSuccess(true);
    setTimeout(() => setSampleSuccess(false), 4000);
  };

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent-gold mb-10 transition-colors duration-300 font-bold uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        {/* Product Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Visual Swatch Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-primary-dark border border-surface-border p-6 flex flex-col gap-6">
            {/* Main Swatch Box with real-time dye tinting */}
            <div className="w-full h-[320px] relative overflow-hidden select-none border border-surface-border bg-[#0B0F19]">
              {fabric.image && (
                <img 
                  src={fabric.image} 
                  alt={fabric.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-50"
                />
              )}
              {/* Colored Dye Tint Overlay */}
              <div 
                className="absolute inset-0 opacity-40 transition-all duration-500 mix-blend-color"
                style={{ backgroundColor: activeColor.hex }}
              />
              {/* Radial lighting gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 pointer-events-none"></div>
              
              <div className="absolute bottom-4 left-4 bg-primary-abyss/85 border border-surface-border px-3 py-1 text-[9px] uppercase tracking-widest text-text-light backdrop-blur-md">
                SWATCH DYE: {activeColor.name} ({activeColor.hex})
              </div>
            </div>

            {/* Swatch Selectors */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">
                Available Dye Swatches
              </span>
              <div className="flex flex-wrap gap-3 mt-3">
                {fabric.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveColor(color)}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-300 flex items-center justify-center`}
                    style={{ 
                      backgroundColor: color.hex,
                      borderColor: activeColor.name === color.name ? '#D4A373' : 'rgba(255,255,255,0.1)'
                    }}
                    title={color.name}
                  >
                    {activeColor.name === color.name && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-abyss"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications Badges */}
            <div className="border-t border-surface-border/40 pt-6">
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-3">Audited Mill Compliance</span>
              <div className="flex flex-wrap gap-2">
                {fabric.certifications.map((cert, idx) => (
                  <span key={idx} className="text-[9px] font-body bg-surface-card border border-surface-border text-text-light px-2.5 py-1">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Information (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">
                {fabric.category} | SKU: {fabric.sku}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
                {fabric.name}
              </h1>
              <p className="text-xs text-text-muted mt-4 leading-relaxed font-body">
                {fabric.description}
              </p>
            </div>

            {/* Specs Table */}
            <div className="bg-primary-dark/80 border border-surface-border p-6 sm:p-8">
              <h3 className="font-heading text-xs font-bold text-text-light tracking-widest uppercase mb-4 border-b border-surface-border/40 pb-3">
                Technical Specifications
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs font-body">
                <div className="flex justify-between items-center py-1.5 border-b border-surface-border/20">
                  <span className="text-text-muted">Fiber Blend</span>
                  <span className="text-text-light font-medium">{fabric.material}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-surface-border/20">
                  <span className="text-text-muted">GSM Weight</span>
                  <span className="text-text-light font-medium">{fabric.gsm} g/m²</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-surface-border/20">
                  <span className="text-text-muted">Weave Structure</span>
                  <span className="text-text-light font-medium">{fabric.weaveType}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-surface-border/20">
                  <span className="text-text-muted">Standard Width</span>
                  <span className="text-text-light font-medium">{fabric.width}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-surface-border/20">
                  <span className="text-text-muted">B2B Standard MOQ</span>
                  <span className="text-text-light font-medium">1,000 Meters</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-surface-border/20">
                  <span className="text-text-muted">Roll Packing</span>
                  <span className="text-text-light font-medium">Vacuum poly roll wraps</span>
                </div>
              </div>
            </div>

            {/* Performance Checklist */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">Key Performance Flags</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs text-text-muted font-body">
                {fabric.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-gold shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-surface-border/40 pt-8 mt-4">
              <Button 
                variant="primary" 
                icon={ShoppingBag} 
                className="flex-1"
                onClick={handleRequestSample}
              >
                Request Sample Swatch Hanger
              </Button>
              <a href="/spec-sheet.pdf" download className="w-full sm:w-auto">
                <Button variant="outline" icon={Download} className="w-full sm:w-auto">
                  Download Spec Datasheet PDF
                </Button>
              </a>
            </div>

            {/* Success Alert */}
            {sampleSuccess && (
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-xs font-body flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />
                <p>Sample Swatch Request logged! A logistics coordinator will contact you to verify delivery courier accounts (DHL/FedEx).</p>
              </div>
            )}

          </div>

        </div>

        {/* Dynamic Zoom Details reminder */}
        <div className="bg-primary-dark/40 border border-surface-border/40 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-body mt-12">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-text-light uppercase tracking-widest">Perform microscopic weave inspection</h4>
              <p className="text-[11px] text-text-muted mt-1 leading-normal">
                You can audit GOTS cotton and flax bast nodes of this fabric under the lens on our Home page workspace.
              </p>
            </div>
          </div>
          <Link to="/">
            <Button variant="outline" className="text-[10px] py-2 px-5">Launch Microscope</Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
