import React from 'react';
import ExportPresence from '../sections/ExportPresence';
import { Ship, Package, Landmark, ClipboardList } from 'lucide-react';

const GlobalExports = () => {
  const terms = [
    { label: 'Trade Terms Offered', value: 'FOB (Free on Board), CIF (Cost, Insurance & Freight), EXW' },
    { label: 'Standard Logistics Port', value: 'Nhava Sheva (JNPT) / Mundra Port, India' },
    { label: 'Export Clearing Agents', value: 'In-house customs bonded clearances team' },
    { label: 'Standard Container Loading', value: '20ft FCL (18,000m) / 40ft FCL (38,000m) / LCL' }
  ];

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 font-body">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            GLOBAL ENTERPRISE SUPPLY
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            International Exports
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl">
            Coordinating sea-freight routing, custom clearance manifests and delivery logs to apparel and industrial sites globally.
          </p>
        </div>

      </div>

      {/* Mount map section */}
      <ExportPresence />

      {/* Logistics Guidelines */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-body text-xs text-text-muted leading-relaxed">
          
          {/* Packing Standards */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-accent-gold" />
              <h3 className="font-heading text-xl font-bold text-text-light">Packaging & Labeling</h3>
            </div>
            
            <p>
              To safeguard fabric rolls from damp marine conditions, each roll is wound tightly onto heavy-duty cardboard cores (inner diameter 2 inches or 3 inches) and packed inside a protective moisture-proof vacuum poly-sleeve.
            </p>
            <p>
              Every roll carries a customized shipping barcode containing: SKU number, batch run ID, exact length in meters, GOTS organic compliance status, and destination country tags.
            </p>
          </div>

          {/* Trade Terms List */}
          <div className="bg-primary-dark border border-surface-border p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-accent-champagne text-xs font-bold uppercase tracking-wider mb-6">
              <Landmark className="w-4 h-4 text-accent-gold" />
              Enterprise Trade Terms
            </div>

            <div className="flex flex-col gap-3">
              {terms.map((term, idx) => (
                <div key={idx} className="flex justify-between items-start py-2 border-b border-surface-border/20 last:border-0 text-xs">
                  <span className="text-text-muted font-medium w-1/3">{term.label}</span>
                  <span className="text-text-light font-bold text-right w-2/3">{term.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GlobalExports;
