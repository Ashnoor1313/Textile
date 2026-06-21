import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Explorer = () => {
  const materials = [
    { id: 'cotton', name: 'Organic Cotton Twill', gsm: 240, compost: '100% Cotton', weave: '3/1 Twill', description: 'Structured diagonal twill structure, high breathability, luxury matte feel.' },
    { id: 'linen', name: 'Belgian Flax Linen', gsm: 180, compost: '100% Flax Linen', weave: 'Plain 1/1 Weave', description: 'Open, breathable grid with natural slubs and textured cooling feel.' },
    { id: 'denim', name: 'Selvedge Indigo Denim', gsm: 380, compost: '98% Cotton / 2% Lycra', weave: 'Heavy Twill', description: 'Raw Indigo warp and white weft threads, premium stiff weight.' },
    { id: 'jacquard', name: 'Venetian Gold Silk Jacquard', gsm: 310, compost: '60% Silk / 40% Cotton', weave: 'Figured Jacquard', description: 'Intricate floral silk raise with metallic gold-wrapped threads.' },
    { id: 'technical', name: 'Ballistic Nylon Ripstop', gsm: 420, compost: '85% Nylon / 15% Kevlar', weave: 'Ripstop Grid', description: 'Tear-resistant nylon weave reinforced by high-tensile aramid square grids.' }
  ];

  const colors = [
    { name: 'Copper Gold', hex: '#D4A373' },
    { name: 'Indigo Deep', hex: '#1D2A44' },
    { name: 'Venetian Crimson', hex: '#58111A' },
    { name: 'Sage Green', hex: '#606C38' },
    { name: 'Champagne Ivory', hex: '#F5EBE0' },
    { name: 'Slate Charcoal', hex: '#2F3542' }
  ];

  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [tension, setTension] = useState(0.5); // slider controls cloth flex
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isHover: false });

  // Draw interactive fabric texture on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let waveTime = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = Math.max(400, rect.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Base background fill (secondary/shade color)
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, w, h);

      // Draw dynamic waving ripples of fabric
      const step = 8;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const isHover = mouseRef.current.isHover;

      // Draw high fidelity weave threads
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.lineWidth = 1.5;

        // Calculate dynamic wave warping based on time and mouse location
        let strokeColor = selectedColor.hex;
        
        // Define diagonal coordinates
        for (let y = 0; y < h; y += step) {
          // Cloth waves calculation
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseWarp = isHover ? (Math.max(0, 100 - dist) / 100) * 15 * Math.sin(dist * 0.05 - waveTime * 4) : 0;
          
          // Fabric flow calculation
          const windWarp = Math.sin(y * 0.01 + waveTime + x * 0.005) * (15 * (1 - tension));
          const finalX = x + windWarp + mouseWarp;

          // Perform specific weave type rendering
          if (selectedMaterial.id === 'linen') {
            // Plain basket weave rendering (basket lines)
            if ((x + y) / step % 2 === 0) {
              ctx.lineTo(finalX, y);
            }
          } else if (selectedMaterial.id === 'denim') {
            // Indigo denim diagonal lines
            if ((x - y) / step % 3 === 0) {
              ctx.lineTo(finalX, y);
            }
          } else if (selectedMaterial.id === 'technical') {
            // Ripstop box grids
            if (x % (step * 4) === 0 || y % (step * 4) === 0) {
              ctx.lineWidth = 2.5;
              ctx.lineTo(finalX, y);
            } else {
              ctx.lineWidth = 1;
              ctx.lineTo(finalX, y);
            }
          } else if (selectedMaterial.id === 'jacquard') {
            // Patterned curves
            const curve = Math.sin(x * 0.04) * 8 + Math.cos(y * 0.04) * 8;
            ctx.lineTo(finalX + curve, y);
          } else {
            // standard Twill weaves
            if ((x - y) / step % 2 === 0) {
              ctx.lineTo(finalX, y);
            }
          }
        }

        // Lighting calculation based on hover spotlight
        const midX = w / 2;
        const midY = h / 2;
        let dX = x - (isHover ? mouseX : midX);
        let dY = h/2 - (isHover ? mouseY : midY);
        let distCenter = Math.sqrt(dX * dX + dY * dY);
        let brightness = Math.max(0, 1 - (distCenter / (w * 0.8)));

        // Create specular shading
        ctx.strokeStyle = adjustColorBrightness(selectedColor.hex, brightness * 50 - 25);
        ctx.stroke();
      }

      // Draw satin surface highlights
      ctx.globalCompositeOperation = 'screen';
      const highlightX = isHover ? mouseX : w * 0.5;
      const highlightY = isHover ? mouseY : h * 0.5;
      const radGrad = ctx.createRadialGradient(
        highlightX, highlightY, 10,
        highlightX, highlightY, w * 0.6
      );
      radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      radGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.05)');
      radGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      // Draw subtle micro fuzz overlay for natural cotton/linen
      if (selectedMaterial.id === 'cotton' || selectedMaterial.id === 'linen') {
        ctx.fillStyle = 'rgba(255,255,255,0.015)';
        for (let i = 0; i < 300; i++) {
          const fx = Math.random() * w;
          const fy = Math.random() * h;
          ctx.fillRect(fx, fy, 1.5, 1.5);
        }
      }

      waveTime += 0.015;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [selectedMaterial, selectedColor, tension]);

  // Utility function to darken/brighten hex color for weave shadows
  const adjustColorBrightness = (hex, percent) => {
    let R = parseInt(hex.substring(1, 3), 16);
    let G = parseInt(hex.substring(3, 5), 16);
    let B = parseInt(hex.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    R = R > 0 ? R : 0;
    G = G > 0 ? G : 0;
    B = B > 0 ? B : 0;

    const rHex = R.toString(16).padStart(2, '0');
    const gHex = G.toString(16).padStart(2, '0');
    const bHex = B.toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHover: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHover = false;
  };

  return (
    <section className="bg-primary-dark py-24 relative z-10 border-b border-surface-border/30 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            INTERACTIVE EXPERIENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            Digital Fabric Explorer
          </h2>
          <p className="text-xs text-text-muted mt-2 max-w-xl font-body">
            Interact with our virtual loom simulator. Toggle material parameters, weave profiles, and dyes to preview technical composite builds in real-time.
          </p>
        </div>

        {/* Explorer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-primary-abyss border border-surface-border/50 p-8 flex flex-col justify-between">
            <div>
              {/* Material select */}
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold font-body">
                  Select Fabric Base
                </span>
                <div className="flex flex-col gap-2 mt-3">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`text-left text-xs px-4 py-3 border transition-all duration-300 font-body flex justify-between items-center ${
                        selectedMaterial.id === mat.id
                          ? 'border-accent-gold text-accent-gold bg-accent-gold/5 font-bold'
                          : 'border-surface-border text-text-muted hover:border-text-muted/50 hover:text-text-light bg-transparent'
                      }`}
                    >
                      <span>{mat.name}</span>
                      <span className="text-[10px] opacity-75 font-normal tracking-wide">{mat.weave}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color swatch select */}
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold font-body">
                  Select Dye Profile
                </span>
                <div className="flex flex-wrap gap-3 mt-3">
                  {colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-9 h-9 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center`}
                      style={{ 
                        backgroundColor: color.hex,
                        borderColor: selectedColor.name === color.name ? '#D4A373' : 'rgba(255,255,255,0.1)'
                      }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-abyss"></div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-text-muted font-body mt-2 flex items-center gap-1.5">
                  Active tone: <span className="text-text-light font-bold">{selectedColor.name}</span> ({selectedColor.hex})
                </div>
              </div>

              {/* Flex Tension slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold font-body">
                    Weaving Tension
                  </span>
                  <span className="text-xs text-text-light font-bold font-body">{Math.floor(tension * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={tension}
                  onChange={(e) => setTension(parseFloat(e.target.value))}
                  className="w-full h-1 bg-surface-border rounded-lg appearance-none cursor-pointer accent-accent-gold"
                />
              </div>
            </div>

            {/* Technical Readout */}
            <div className="border-t border-surface-border/55 pt-6 mt-8">
              <div className="bg-surface-card/40 border border-surface-border/30 p-4 font-body">
                <div className="flex items-center gap-2 mb-2 text-accent-champagne font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  TECHNICAL COMPOSITION
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] mt-2">
                  <div>
                    <span className="text-text-muted block">COMPOSITION</span>
                    <span className="text-text-light font-bold">{selectedMaterial.compost}</span>
                  </div>
                  <div>
                    <span className="text-text-muted block">GSM WEIGHT</span>
                    <span className="text-text-light font-bold">{selectedMaterial.gsm} g/m²</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-text-muted block">FABRIC DESCRIPTION</span>
                    <span className="text-text-light leading-relaxed">{selectedMaterial.description}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-6">
                <Button variant="primary" icon={ShoppingBag} className="flex-1 text-center text-xs">
                  Request Sample Hanger
                </Button>
              </div>
            </div>

          </div>

          {/* Interactive Fabric Canvas (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-surface-card/10 border border-surface-border/50 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            {/* Absolute badge */}
            <div className="absolute top-4 left-4 z-20 bg-primary-abyss/80 border border-surface-border px-3 py-1 text-[9px] uppercase tracking-widest font-body text-text-light backdrop-blur-md">
              Loom Shader: Active Rendering
            </div>
            <div className="absolute bottom-4 right-4 z-20 text-[9px] font-body text-text-muted pointer-events-none">
              Hover & Drag cursor to ripple fabric
            </div>

            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Explorer;
