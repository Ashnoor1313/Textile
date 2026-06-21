import React from 'react';
import { Quote, ArrowRight, ShieldCheck } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      quote: "Textilia has been our primary fabric mill for organic cotton blends. Their Delta-E color consistency across shipments is outstanding, ensuring our garments match perfectly across seasons. Their GOTS transaction certificates are always delivered on schedule.",
      name: "Marcus V.",
      role: "Global Sourcing Director",
      company: "Aura Apparel Group (Germany)",
      volume: "Annual Volume: 450,000 meters"
    },
    {
      quote: "The ballistic Kevlar aramid weaves we source from their mills pass our rigid puncture and flame resistance tests (UL94) without issue. Their production capacity lets us scale up our technical workwear orders during seasonal procurement peaks.",
      name: "Helen R.",
      role: "VP of Product Development",
      company: "Apex Safety Gear (USA)",
      volume: "Annual Volume: 220,000 meters"
    },
    {
      quote: "For our luxury hospitality projects, we require jacquards that can handle high-frequency cleaning without losing structural drape. Textilia’s Venetians and damasks have been durable, retaining their premium luster after dozens of cycles.",
      name: "Faisal Al-M.",
      role: "Purchasing Director",
      company: "Oasis Luxury Resorts (UAE)",
      volume: "Project Scope: 18 Five-Star Properties"
    }
  ];

  return (
    <section className="bg-primary-dark py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            Trusted by Procurement Leaders
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-primary-abyss border border-surface-border/60 p-8 flex flex-col justify-between card-lift relative group"
            >
              {/* Quote Mark Decor */}
              <div className="absolute top-6 right-6 text-accent-gold/10 group-hover:text-accent-gold/25 transition-colors duration-300 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Quote text */}
              <div className="font-body text-xs leading-relaxed text-text-muted mb-8 relative z-10">
                <p className="italic">"{rev.quote}"</p>
              </div>

              {/* Client bio footer */}
              <div className="border-t border-surface-border/40 pt-6 mt-4 font-body">
                <h4 className="text-sm font-bold text-text-light">{rev.name}</h4>
                <p className="text-[10px] text-accent-gold uppercase tracking-wider mt-0.5">{rev.role}</p>
                <p className="text-[10px] text-text-muted font-bold mt-1.5">{rev.company}</p>
                
                <div className="flex items-center gap-1.5 text-[9px] text-accent-champagne bg-accent-gold/5 px-2 py-1 mt-4 border border-accent-gold/10 inline-flex">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {rev.volume}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
