import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  const canvasRef = useRef(null);

  // Background wave animation using plain JS Canvas for smooth, high-fidelity luxury satin rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Satin wave variables
    let phase = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Ambient dark background glow
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create glowing gradient hubs
      const radialGlow = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.3, 50,
        canvas.width * 0.7, canvas.height * 0.3, canvas.width * 0.6
      );
      radialGlow.addColorStop(0, 'rgba(212, 163, 115, 0.22)'); // Copper Gold
      radialGlow.addColorStop(0.5, 'rgba(15, 23, 42, 0.35)');
      radialGlow.addColorStop(1, '#0B0F19');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing silk threads / curves
      ctx.lineWidth = 1.5;
      const lines = 6;
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        const opacity = (1 - (i / lines)) * 0.38;
        grad.addColorStop(0, `rgba(212, 163, 115, 0)`);
        grad.addColorStop(0.5, `rgba(212, 163, 115, ${opacity})`);
        grad.addColorStop(1, `rgba(212, 163, 115, 0)`);
        ctx.strokeStyle = grad;

        const amplitude = 40 + i * 15;
        const frequency = 0.001 + i * 0.0002;
        const speed = 0.004 - i * 0.0005;

        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height * 0.5 + 
                    Math.sin(x * frequency + phase + i) * amplitude * 
                    Math.cos(x * 0.0003 + phase * 0.5);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      phase += 0.005;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-primary-abyss">
      {/* Dynamic satin canvas backdrop */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Decorative vertical lines representing threads */}
      <div className="absolute inset-0 flex justify-between px-12 md:px-24 pointer-events-none z-0 opacity-10">
        <div className="w-[1px] h-full bg-accent-gold/40"></div>
        <div className="w-[1px] h-full bg-accent-gold/20 hidden md:block"></div>
        <div className="w-[1px] h-full bg-accent-gold/20 hidden md:block"></div>
        <div className="w-[1px] h-full bg-accent-gold/40"></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Fine Weavers Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center gap-2 mb-6 bg-surface-card/40 border border-accent-gold/20 px-4 py-1.5 rounded-full backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-body text-accent-gold font-bold">
            EST. 1982 | Premium Exports Worldwide
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-light leading-[1.1] mb-6 max-w-4xl"
        >
          Engineering Premium Fabrics For <span className="italic font-normal text-accent-gold">Global Industries</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="font-body text-sm sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-10"
        >
          Delivering custom weaving solutions, certified organic raw materials, and high-performance technical textiles trusted by apparel brands and global enterprises in over 65 countries.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <Link to="/products" className="w-full sm:w-auto">
            <Button variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
              Explore Collection
            </Button>
          </Link>
          <a href="/catalog.pdf" download className="w-full sm:w-auto">
            <Button variant="outline" icon={Download} className="w-full sm:w-auto">
              Request Catalogue
            </Button>
          </a>
        </motion.div>

      </div>

      {/* Slide down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.2em] font-body text-text-muted">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent-gold to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
