import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Layers, Disc, Settings, Paintbrush, ShieldCheck, ClipboardCheck, PackageCheck, Ship } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const scrollSection = scrollRef.current;
    const container = containerRef.current;
    if (!scrollSection || !container) return;

    // Wait a brief tick for contents to fully render, determining exact sizes
    const ctx = gsap.context(() => {
      const scrollWidth = scrollSection.scrollWidth;
      const viewWidth = window.innerWidth;
      const amountToScroll = scrollWidth - viewWidth;

      if (amountToScroll > 0) {
        gsap.fromTo(scrollSection,
          { x: 0 },
          {
            x: -amountToScroll,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 0.5,
              start: 'top top',
              end: () => `+=${amountToScroll * 1.2}`,
              invalidateOnRefresh: true,
              anticipatePin: 1
            }
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [isMobile]);

  const stages = [
    { 
      id: '01', 
      title: 'Raw Material Selection', 
      desc: 'Handpicked organic GOTS cotton bale, clean water-retted flax stems, and synthesized high-tenacity aramid bundles are audited for length, tensile strength, and impurity counts.',
      icon: Layers,
      highlight: 'Sourcing & Integrity'
    },
    { 
      id: '02', 
      title: 'Precision Spinning', 
      desc: 'Fibers pass carding, combing, and drawing lines before ring-spinning spindles twist them into uniform, high-strength yarns with consistent twist-per-inch ratings.',
      icon: Disc,
      highlight: 'Tensile Uniformity'
    },
    { 
      id: '03', 
      title: 'Advanced Weaving', 
      desc: 'Yarns are loaded onto computer-controlled high-speed air-jet looms. High-velocity air pulses insert wefts at up to 1,200 picks per minute with microscopic precision.',
      icon: Settings,
      highlight: 'Structure Weave'
    },
    { 
      id: '04', 
      title: 'Smart Dyeing', 
      desc: 'Fabrics are colored in closed-loop jet dyeing machines. Spectrophotometer scanning ensures dye-lot accuracy within Delta-E < 0.5 tolerances using organic dyes.',
      icon: Paintbrush,
      highlight: 'Chroma Alignment'
    },
    { 
      id: '05', 
      title: 'Luxury Finishing', 
      desc: 'Mechanical calenders and sanforizers heat-press fabrics to set dimensional shrinkage. Performance coatings (stain repellent, FR, antibacterial) are applied.',
      icon: ShieldCheck,
      highlight: 'Texture Finishing'
    },
    { 
      id: '06', 
      title: 'Quality Lab Verification', 
      desc: 'Every roll batch is tested for GSM weight, dry-rub fastness, tensile tear indices, and wash shrinkage under standardized corporate laboratory settings.',
      icon: ClipboardCheck,
      highlight: 'Strict Compliance'
    },
    { 
      id: '07', 
      title: 'Premium Packing', 
      desc: 'Fabrics are rolled onto heavy-duty cardboard cores, wrapped in moisture-proof vacuum poly-bags, labelled with batch tracking barcodes, and stored in racks.',
      icon: PackageCheck,
      highlight: 'Batch Packaging'
    },
    { 
      id: '08', 
      title: 'Global Export Delivery', 
      desc: 'Consolidated containers are cleared through custom logistics gates and shipped via ocean cargo to ports in Hamburg, New York, Tokyo, Sydney, and Shanghai.',
      icon: Ship,
      highlight: 'Customs Logistics'
    }
  ];

  return (
    <div 
      ref={containerRef} 
      className={`bg-primary-abyss relative z-10 ${
        isMobile ? 'overflow-x-auto snap-x snap-mandatory scroll-smooth py-12 scrollbar-thin' : 'overflow-hidden'
      }`}
    >
      
      {/* Horizontal scrolling panel container */}
      <div 
        ref={scrollRef} 
        className={`${
          isMobile 
            ? 'flex items-stretch gap-6 px-6 w-max py-4' 
            : 'h-screen flex items-center justify-start gap-12 px-[10vw] w-fit shrink-0 relative'
        }`}
      >
        
        {/* Intro Slide Panel */}
        <div 
          className={`${
            isMobile 
              ? 'w-[85vw] max-w-[340px] shrink-0 snap-center pr-4 flex flex-col justify-center' 
              : 'w-[80vw] md:w-[45vw] flex flex-col justify-center shrink-0 pr-12'
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            CRAFTSMANSHIP TO SCALE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-tight">
            The Manufacturing Journey
          </h2>
          <p className="text-xs text-text-muted mt-6 leading-relaxed font-body">
            Follow the lifecycle of premium fabrics. From raw agricultural fibers to custom finish treatments and global custom clearances, mapped in 8 synchronized steps.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-12 h-[1px] bg-accent-gold"></div>
            <span className="text-[9px] uppercase tracking-widest text-text-light font-body">
              {isMobile ? 'Swipe horizontally to traverse stages' : 'Scroll down to traverse stages'}
            </span>
          </div>
        </div>

        {/* Dynamic Journey Stages */}
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div 
              key={stage.id} 
              className={`w-[85vw] sm:w-[400px] h-[450px] sm:h-[500px] bg-primary-dark/80 border border-surface-border/50 p-8 flex flex-col justify-between shrink-0 hover:border-accent-gold/40 transition-colors duration-500 relative group ${
                isMobile ? 'snap-center' : ''
              }`}
            >
              {/* Corner markings representing scale sheets */}
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-accent-gold/20"></div>
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-accent-gold/20"></div>

              {/* Header metrics */}
              <div className="flex justify-between items-center">
                <span className="font-heading text-4xl font-normal text-stroke-gold text-accent-gold/20">
                  {stage.id}
                </span>
                <span className="text-[9px] uppercase tracking-widest font-body text-accent-champagne bg-accent-gold/5 px-2.5 py-1 border border-accent-gold/15">
                  {stage.highlight}
                </span>
              </div>

              {/* Main Information */}
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 bg-surface-card/60 border border-surface-border text-accent-gold flex items-center justify-center rounded-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-light mb-4">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-body">
                    {stage.desc}
                  </p>
                </div>
              </div>

              {/* Stage progress ticker */}
              <div className="flex items-center gap-3 pt-6 border-t border-surface-border/30">
                <div className="flex-grow h-[1px] bg-surface-border"></div>
                <span className="text-[9px] font-mono text-text-muted">STAGE {stage.id}/08</span>
              </div>
            </div>
          );
        })}

        {/* End Slide Panel */}
        <div 
          className={`${
            isMobile 
              ? 'w-[85vw] max-w-[340px] shrink-0 snap-center pl-4 flex flex-col justify-center' 
              : 'w-[60vw] flex flex-col justify-center shrink-0 pl-12'
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            ZERO DEFECT COMPLIANCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-light mt-4 leading-tight">
            Ready for Shipping & Export Clearance
          </h2>
          <p className="text-xs text-text-muted mt-4 max-w-sm leading-relaxed font-body">
            All rolls carry traceable QR-code tags mapping the fabric batch back to the initial raw material harvest. Complete GOTS, OEKO-TEX and custom manifest clearance reports are standard.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Journey;
