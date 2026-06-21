import React, { useState } from 'react';
import { ShieldCheck, Calendar, FileText, ChevronRight, X } from 'lucide-react';
import { certificationsData } from '../data/fabrics';

const CertificationsList = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const auditDetails = {
    'gots': {
      license: 'GOTS-C-88290',
      body: 'OneCert International Corp.',
      cycle: 'Annual (Last Audited Oct 2025)',
      parameters: ['Organic Fiber Content > 95%', 'Biodegradable Auxiliaries Only', 'Fair Wages & Ethical Working Spaces', 'Zero Toxic Heavy Metal Pigments']
    },
    'oeko': {
      license: 'OEKO-TEX-SHA-12093',
      body: 'TESTEX AG, Swiss Textile Testing Institute',
      cycle: 'Annual (Last Audited Jan 2026)',
      parameters: ['Zero Carcinogenic Azo Dyes', 'Calibrated pH Value Match', 'Tested for formaldehyde & Pesticides', 'Skin-safe for Baby Products (Class I)']
    },
    'grs': {
      license: 'GRS-REG-8821',
      body: 'Control Union Certifications B.V.',
      cycle: 'Annual (Last Audited Dec 2025)',
      parameters: ['Post-Consumer PET Traceability', 'Environmental Processing Rules', 'Recycled Fraction Integrity > 50%', 'Closed-Loop Chemical Management']
    },
    'iso': {
      license: 'ISO-Q-14022',
      body: 'TUV SUD Management Service GmbH',
      cycle: 'Triennial (Last Audited March 2024)',
      parameters: ['Quality Management (ISO 9001:2015)', 'Environmental Stewardship (ISO 14001:2015)', 'Traceable Production Batch Logs', 'Continuous Corrective Action Circles']
    },
    'bsci': {
      license: 'BSCI-ID-38912',
      body: 'SGS India Private Limited',
      cycle: 'Biennial (Last Audited Nov 2025)',
      parameters: ['Zero Child/Forced Labor Practices', 'Safe Working Spaces & Fire Drills', 'Maximum 48-Hour Work Weeks', 'No Harassment & Ethical Remunerations']
    }
  };

  return (
    <section className="bg-primary-abyss py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            COMPLIANCE VERIFICATION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            International Certifications
          </h2>
          <p className="text-xs text-text-muted mt-2 font-body">
            Examine our verified compliance standards. Click on any credential to audit license logs, parameters, and testing bodies.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-surface-card/20 border border-surface-border/60 p-8 flex flex-col justify-between card-lift group cursor-pointer relative"
            >
              <div className="flex flex-col gap-4 font-body">
                <div className="flex justify-between items-start">
                  <ShieldCheck className="w-6 h-6 text-accent-gold" />
                  <span className="text-[9px] font-mono text-text-muted border border-surface-border px-2 py-0.5 uppercase">
                    ID: {cert.code.split('-')[0]}
                  </span>
                </div>
                
                <h3 className="font-heading text-lg font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                  {cert.name.split(' (')[0]}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed font-body mt-2">
                  {cert.desc.substring(0, 100)}...
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-bold text-accent-gold uppercase tracking-wider mt-6 pt-4 border-t border-surface-border/20">
                Audit Registry Logs
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Audit Details Modal/Drawer */}
        {selectedCert && (() => {
          const details = auditDetails[selectedCert.id];
          return (
            <div className="fixed inset-0 z-50 bg-primary-abyss/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
              <div className="bg-primary-dark border border-surface-border/80 max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-fade-in-up font-body">
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-light z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-accent-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">
                    SECURE VERIFICATION DRAWER
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-text-light mb-2">
                  {selectedCert.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {selectedCert.desc}
                </p>

                {/* Audit details content grid */}
                <div className="flex flex-col gap-4 border-t border-surface-border/40 pt-4 text-xs">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-accent-gold" />
                    <div>
                      <span className="text-[9px] text-text-muted block uppercase tracking-wider">License Registration No</span>
                      <span className="text-text-light font-bold mt-0.5 block">{details.license}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-accent-gold" />
                    <div>
                      <span className="text-[9px] text-text-muted block uppercase tracking-wider">Auditing Cycle</span>
                      <span className="text-text-light font-bold mt-0.5 block">{details.cycle}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] text-text-muted block uppercase tracking-wider mb-2">Verified Compliance Parameters</span>
                    <ul className="grid grid-cols-1 gap-1.5 pl-3 list-disc text-text-light text-[11px]">
                      {details.parameters.map((param, idx) => (
                        <li key={idx}>{param}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

export default CertificationsList;
