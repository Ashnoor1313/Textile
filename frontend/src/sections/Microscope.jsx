import React, { useState, useEffect, useRef } from 'react';
import { ZoomIn, Info, Settings2 } from 'lucide-react';
import { fabricsData } from '../data/fabrics';

const Microscope = () => {
  // Let user pick which fabric to check under microscope
  const microscopeFabrics = fabricsData.slice(0, 4); // Cotton, Linen, Nylon, Jacquard
  const [selectedFabric, setSelectedFabric] = useState(microscopeFabrics[0]);
  const [zoom, setZoom] = useState(10); // 10, 20, 50
  const [focus, setFocus] = useState(0.85); // focus slider value
  const [focusing, setFocusing] = useState(false);
  const canvasRef = useRef(null);

  // Trigger blur animation when zoom/fabric changes, simulating focus adjustment
  useEffect(() => {
    setFocusing(true);
    const timer = setTimeout(() => setFocusing(false), 500);
    return () => clearTimeout(timer);
  }, [zoom, selectedFabric]);

  // Render the micro-structures inside the lens
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fixed lens dimensions (circular viewport)
    const size = 300;
    canvas.width = size;
    canvas.height = size;
    
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 2;

    ctx.clearRect(0, 0, size, size);

    // Create circular clip path for lens
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    // Define lens rendering routines based on zoom level and fabric type
    const drawMicrostructure = () => {
      const baseColor = selectedFabric.colors[0].hex;
      
      // Focus impact (renders blur directly in canvas if slider isn't aligned)
      const blurAmount = Math.abs(focus - 0.8) * 35;
      ctx.filter = `blur(${blurAmount}px)`;

      // Background fibers shading
      ctx.fillStyle = '#0F1522';
      ctx.fillRect(0, 0, size, size);

      if (zoom === 10) {
        // --- 10x Zoom: Close weave structure view ---
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.lineWidth = 1;

        const gap = 16;
        for (let i = 0; i < size; i += gap) {
          // Warp threads
          ctx.beginPath();
          ctx.fillStyle = i % (gap * 2) === 0 ? baseColor : adjustColor(baseColor, -20);
          ctx.fillRect(i, 0, gap - 2, size);
          
          // Weft threads (layered overlapping)
          ctx.fillStyle = i % (gap * 2) === 0 ? adjustColor(baseColor, -10) : baseColor;
          ctx.fillRect(0, i, size, gap - 2);

          // Weave highlight lines
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255,255,255,0.15)';
          ctx.moveTo(i, 0);
          ctx.lineTo(i, size);
          ctx.moveTo(0, i);
          ctx.lineTo(size, i);
          ctx.stroke();
        }

        // Draw slubs for linen
        if (selectedFabric.id === 'belgian-flax-linen') {
          ctx.fillStyle = 'rgba(255,255,255,0.2)';
          for (let s = 0; s < 12; s++) {
            const rx = Math.random() * size;
            const ry = Math.random() * size;
            ctx.beginPath();
            ctx.arc(rx, ry, 6 + Math.random() * 5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (zoom === 20) {
        // --- 20x Zoom: Individual yarn twisted fibers ---
        const threadWidth = 70;
        
        ctx.fillStyle = adjustColor(baseColor, -30);
        ctx.fillRect(0, 0, size, size);

        // Render main vertical thread bundle
        const grad = ctx.createLinearGradient(cx - threadWidth/2, 0, cx + threadWidth/2, 0);
        grad.addColorStop(0, adjustColor(baseColor, -40));
        grad.addColorStop(0.5, baseColor);
        grad.addColorStop(1, adjustColor(baseColor, -55));
        ctx.fillStyle = grad;
        ctx.fillRect(cx - threadWidth/2, 0, threadWidth, size);

        // Twisted fibers wrapping details
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 2.5;
        for (let y = 0; y < size; y += 12) {
          ctx.beginPath();
          ctx.ellipse(cx, y, threadWidth/2, 6, Math.PI / 6, 0, Math.PI);
          ctx.stroke();
        }

        // Fuzz and organic scales
        if (selectedFabric.id === 'organic-cotton-twill') {
          ctx.strokeStyle = 'rgba(255,255,255,0.25)';
          ctx.lineWidth = 1;
          for (let f = 0; f < 30; f++) {
            ctx.beginPath();
            const fx = cx + (Math.random() - 0.5) * threadWidth;
            const fy = Math.random() * size;
            ctx.moveTo(fx, fy);
            ctx.quadraticCurveTo(fx + 10, fy - 10, fx + 15, fy + 5);
            ctx.stroke();
          }
        }
      } else {
        // --- 50x Zoom: Microscopic crystalline cellulose structure ---
        ctx.fillStyle = '#060B13';
        ctx.fillRect(0, 0, size, size);

        if (selectedFabric.id === 'technical-ballistic-nylon') {
          // Perfectly smooth synthetic cylinders
          ctx.strokeStyle = 'rgba(255,255,255,0.06)';
          for (let x = 20; x < size; x += 60) {
            const cylinder = ctx.createLinearGradient(x - 20, 0, x + 20, 0);
            cylinder.addColorStop(0, 'rgba(255,255,255,0.02)');
            cylinder.addColorStop(0.5, 'rgba(255,255,255,0.25)');
            cylinder.addColorStop(1, 'rgba(255,255,255,0.01)');
            ctx.fillStyle = cylinder;
            ctx.fillRect(x - 20, 0, 40, size);
            
            // Outer casing lines
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 1;
            ctx.strokeRect(x - 20, -10, 40, size + 20);
          }
        } else {
          // Twisted organic ribbon structure (Cotton / Linen / Silk)
          ctx.strokeStyle = 'rgba(255,255,255,0.15)';
          ctx.lineWidth = 4;
          
          for (let line = 0; line < 3; line++) {
            ctx.beginPath();
            const lx = cx - 60 + line * 60;
            ctx.moveTo(lx, 0);
            
            for (let y = 0; y <= size; y += 20) {
              const dx = Math.sin(y * 0.05 + line) * 12;
              ctx.lineTo(lx + dx, y);
            }
            const gradTube = ctx.createLinearGradient(lx - 20, 0, lx + 20, 0);
            gradTube.addColorStop(0, adjustColor(baseColor, -40));
            gradTube.addColorStop(0.5, baseColor);
            gradTube.addColorStop(1, adjustColor(baseColor, -60));
            ctx.strokeStyle = gradTube;
            ctx.lineWidth = 22;
            ctx.stroke();

            // Inner cell structure lumen line
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            for (let y = 0; y <= size; y += 20) {
              const dx = Math.sin(y * 0.05 + line) * 12;
              if (y === 0) ctx.moveTo(lx + dx, y);
              else ctx.lineTo(lx + dx, y);
            }
            ctx.stroke();
          }
        }
      }

      // Draw light particles reflecting inside microscope
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      for (let p = 0; p < 8; p++) {
        ctx.beginPath();
        const px = Math.random() * size;
        const py = Math.random() * size;
        ctx.arc(px, py, Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    drawMicrostructure();
    ctx.restore();

    // Draw viewport reflection ring (glass effect on top)
    const glassGrad = ctx.createLinearGradient(0, 0, size, size);
    glassGrad.addColorStop(0, 'rgba(255,255,255,0.12)');
    glassGrad.addColorStop(0.5, 'rgba(255,255,255,0)');
    glassGrad.addColorStop(1, 'rgba(255,255,255,0.03)');
    ctx.fillStyle = glassGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    // Viewport outer black boundary ring
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

  }, [zoom, selectedFabric, focus]);

  // Utility color modifier
  const adjustColor = (hex, amount) => {
    let usePound = false;
    if (hex[0] === "#") {
      hex = hex.slice(1);
      usePound = true;
    }
    const num = parseInt(hex, 16);
    let r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
  };

  return (
    <section className="bg-primary-abyss py-24 relative z-10 border-b border-surface-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            SPECIFICATION INTELLIGENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
            The Fabric Microscope
          </h2>
          <p className="text-xs text-text-muted mt-2 font-body">
            Examine our high-performance fibers up to 50x magnification. Evaluate cellular shapes and weaving alignments.
          </p>
        </div>

        {/* Microscope Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Readout logs (Left 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold font-body">
                Fabric Material Under Lens
              </span>
              <div className="flex flex-wrap lg:flex-col gap-2 mt-2">
                {microscopeFabrics.map((fab) => (
                  <button
                    key={fab.id}
                    onClick={() => setSelectedFabric(fab)}
                    className={`text-left text-xs px-4 py-3 border font-body transition-all duration-300 w-full md:w-auto lg:w-full ${
                      selectedFabric.id === fab.id
                        ? 'border-accent-gold text-accent-gold bg-accent-gold/5 font-bold'
                        : 'border-surface-border text-text-muted hover:border-text-muted/50 hover:text-text-light bg-transparent'
                    }`}
                  >
                    {fab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Magnification controls */}
            <div className="bg-surface-card/20 border border-surface-border/50 p-6 font-body">
              <div className="flex items-center gap-2 text-text-light font-bold text-xs uppercase tracking-wider mb-4">
                <ZoomIn className="w-4 h-4 text-accent-gold" />
                Lens Zoom Magnifier
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[10, 20, 50].map((level) => (
                  <button
                    key={level}
                    onClick={() => setZoom(level)}
                    className={`py-2 px-3 text-xs border font-bold transition-all duration-300 ${
                      zoom === level
                        ? 'bg-accent-gold text-primary-abyss border-accent-gold'
                        : 'bg-transparent text-text-muted border-surface-border hover:border-text-muted'
                    }`}
                  >
                    {level}x
                  </button>
                ))}
              </div>
              
              {/* Focus adjuster */}
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                  <span>Lens Focus Calibration</span>
                  <span>{Math.round(focus * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.1"
                  step="0.01"
                  value={focus}
                  onChange={(e) => setFocus(parseFloat(e.target.value))}
                  className="w-full h-1 bg-surface-border rounded-lg appearance-none cursor-pointer accent-accent-gold"
                />
                <span className="text-[9px] text-text-muted mt-1 leading-normal">Adjust slider until structure is sharp (optimal around 80%)</span>
              </div>
            </div>
          </div>

          {/* Viewfinder Circle (Center 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative p-6 bg-gradient-to-b from-surface-border/50 to-primary-abyss border border-surface-border rounded-full shadow-2xl shadow-black/50">
              
              {/* Microscope circle */}
              <div className={`relative overflow-hidden rounded-full w-[300px] h-[300px] transition-all duration-300 ${
                focusing ? 'scale-[0.98] brightness-50' : 'scale-100 brightness-100'
              }`}>
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
              </div>

              {/* Scope HUD overlay */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none z-20">
                <span className="text-[9px] font-mono tracking-widest text-white/50 bg-black/40 px-2 py-0.5 rounded-full">
                  MAG: {zoom}X | CAL: OK
                </span>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none select-none z-20">
                <span className="text-[8px] font-mono tracking-widest text-accent-gold/80 bg-black/50 px-2.5 py-0.5 rounded-full">
                  FOCUS: {Math.abs(focus - 0.8) < 0.03 ? 'SHARP' : 'DISTORTED'}
                </span>
              </div>

              {/* External dials decor */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-10 bg-surface-card border border-surface-border flex items-center justify-center rounded-l-sm shadow-md">
                <Settings2 className="w-3.5 h-3.5 text-text-muted animate-spin-slow" />
              </div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-10 bg-surface-card border border-surface-border flex items-center justify-center rounded-r-sm shadow-md">
                <div className="w-1.5 h-6 bg-accent-gold/40 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Details log readout (Right 4 Cols) */}
          <div className="lg:col-span-4 bg-primary-dark/80 border border-surface-border/50 p-8 flex flex-col gap-6 order-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading text-xs font-bold text-text-light uppercase tracking-widest">
                  LENS OBSERVATION LOG
                </h4>
                <p className="text-[10px] text-text-muted font-body mt-1">
                  Automated analysis report of current magnification matrix.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-body border-t border-surface-border/50 pt-4 text-xs">
              <div>
                <span className="text-text-muted block text-[9px] uppercase tracking-wider">Fiber Core Chemical composition</span>
                <span className="text-text-light leading-relaxed mt-1 block font-medium">
                  {selectedFabric.microscope.composition}
                </span>
              </div>
              <div>
                <span className="text-text-muted block text-[9px] uppercase tracking-wider">Filament / Node structures</span>
                <span className="text-text-light leading-relaxed mt-1 block">
                  {selectedFabric.microscope.structure}
                </span>
              </div>
              <div>
                <span className="text-text-muted block text-[9px] uppercase tracking-wider">Analysis ({zoom}x level)</span>
                <span className="text-accent-gold leading-relaxed mt-1 block italic">
                  {zoom === 10 ? selectedFabric.microscope.zoomLevel10 : zoom === 20 ? selectedFabric.microscope.zoomLevel20 : selectedFabric.microscope.zoomLevel50}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Microscope;
