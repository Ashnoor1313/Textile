// Static Database for Fabrics and Materials

export const fabricCategories = [
  { id: 'cotton', name: 'Cotton Fabrics', count: 18, desc: 'Premium long-staple organic cotton varieties engineered for high breathability and luxury apparel.' },
  { id: 'linen', name: 'Linen Fabrics', count: 12, desc: 'Pure flax fibers woven with traditional sophistication, providing elite texture and cooling properties.' },
  { id: 'polyester', name: 'Polyester Fabrics', count: 15, desc: 'High-durability structural synthetics optimized for heavy commercial and industrial use.' },
  { id: 'denim', name: 'Denim Fabrics', count: 10, desc: 'Authentic heavy-duty indigo-dyed twills for high-fashion and durable workwear.' },
  { id: 'home', name: 'Home Furnishing', count: 22, desc: 'Elite upholstery, drapes, and jacquards carrying flame-retardant and stain-resistant coatings.' },
  { id: 'technical', name: 'Technical & Industrial Textiles', count: 14, desc: 'Aramid blends, reinforced filters, and geotextiles crafted for high thermal and chemical resistance.' },
];

export const fabricsData = [
  {
    id: 'organic-cotton-twill',
    name: 'GOTS Organic Cotton Twill',
    sku: 'TX-OCT-240',
    category: 'Cotton Fabrics',
    material: '100% GOTS Certified Organic Cotton',
    weaveType: '3/1 Right-Hand Twill',
    gsm: 240,
    width: '58/60 inches',
    image: '/images/organic-cotton-twill.png',
    description: 'A heavyweight, highly structured twill fabric crafted from handpicked organic long-staple cotton. Ideal for premium outerwear, trousers, and luxury uniforms.',
    features: ['High Tensile Strength', 'Excellent Drape', 'GOTS Certified Organic', 'Pre-Shrunk (Sanforized)'],
    certifications: ['GOTS', 'OEKO-TEX Standard 100', 'BCI Certified'],
    colors: [
      { name: 'Warm Sand', hex: '#D7C49E', image: 'sand' },
      { name: 'Indigo Deep', hex: '#1D2A44', image: 'indigo' },
      { name: 'Copper Gold', hex: '#D4A373', image: 'copper' },
      { name: 'Slate Gray', hex: '#4A5568', image: 'slate' }
    ],
    microscope: {
      composition: '100% Cotton Fiber (Gossypium hirsutum)',
      structure: 'Flattened, twisted ribbon-like tubes with natural convolutions under polarized light.',
      pattern: 'Diagonal twill lines (ribs) spaced at 45-degree angles, 24 threads/cm warp density.',
      zoomLevel10: 'Visible diagonal twill lines, dense weave, smooth spun yarn fibers.',
      zoomLevel20: 'Individual warp and weft overlaps clear; minor organic cotton fuzz visible on yarn surface.',
      zoomLevel50: 'Cellulose fibril structures visible within the twisted cotton lumen; high-density packing.'
    },
    isFeatured: true
  },
  {
    id: 'belgian-flax-linen',
    name: 'Royal Belgian Flax Linen',
    sku: 'TX-BFL-180',
    category: 'Linen Fabrics',
    material: '100% Natural Belgian Flax Linen',
    weaveType: 'Plain Weave',
    gsm: 180,
    width: '56/58 inches',
    image: '/images/belgian-flax-linen.png',
    description: 'An elegant, airy fabric made from organically grown Belgian flax. Features natural slub textures, remarkable moisture absorption, and a luxury soft-washed finish.',
    features: ['Antibacterial', 'Highly Breathable', 'Biodegradable Flax', 'Natural Slubs'],
    certifications: ['European Flax Certified', 'OEKO-TEX Standard 100'],
    colors: [
      { name: 'Oatmeal', hex: '#EAE0D5', image: 'oatmeal' },
      { name: 'Champagne', hex: '#F3E9DC', image: 'champagne' },
      { name: 'Forest Moss', hex: '#3E4A3D', image: 'forest' },
      { name: 'Sage Gray', hex: '#B8C0B0', image: 'sage' }
    ],
    microscope: {
      composition: '100% Linen (Linum usitatissimum) bast fibers',
      structure: 'Straight, polygonal fibers with characteristic cross-markings (nodes) and thick walls.',
      pattern: 'Simple 1/1 grid basket-style plain weave, uneven yarn thickness creating natural slubs.',
      zoomLevel10: 'Classic grid weave visible with prominent thick-and-thin slub yarns.',
      zoomLevel20: 'Nodes along flax fibers visible under magnification; rough organic texture.',
      zoomLevel50: 'Polygonal fiber cross-sections with narrow central lumen, showing extreme crystalline structure.'
    },
    isFeatured: true
  },
  {
    id: 'technical-ballistic-nylon',
    name: 'Aramid Reinforced Ballistic Nylon',
    sku: 'TX-RBN-420',
    category: 'Technical & Industrial Textiles',
    material: '85% Ballistic Nylon, 15% Kevlar Aramid',
    weaveType: 'Basket Weave 2x2',
    gsm: 420,
    width: '60 inches',
    image: '/images/technical-ballistic-nylon.png',
    description: 'Engineered for extreme environments, this high-performance technical fabric offers unrivaled puncture resistance, flame retardancy, and heavy tensile loading capacity.',
    features: ['Flame Retardant', 'Slash Resistant', 'Water Repellent (DWR)', 'UV Stable'],
    certifications: ['ISO 13934 Puncture Standard', 'UL94 V-0 Flame Certified'],
    colors: [
      { name: 'Tactical Black', hex: '#1A1A1A', image: 'black' },
      { name: 'Industrial Sage', hex: '#4F5E53', image: 'sage' },
      { name: 'Aramid Orange', hex: '#D6682A', image: 'orange' }
    ],
    microscope: {
      composition: 'Synthesized Polyhexamethylene adipamide with Poly-phenylene terephthalamide cores.',
      structure: 'Perfectly round, smooth extruded synthetic filaments with zero surface fuzz.',
      pattern: 'Heavy double-threaded 2x2 basket weave, heat-fused nylon backing.',
      zoomLevel10: 'High-contrast synthetic weave with reflective polymer sheen.',
      zoomLevel20: 'Perfectly aligned parallel synthetic filament bundles showing extreme density.',
      zoomLevel50: 'Individual nylon and aramid filaments clearly distinct; aramid core fibers show micro-crystalline skin.'
    },
    isFeatured: true
  },
  {
    id: 'luxury-jacquard-brocade',
    name: 'Venetian Gold Silk Jacquard',
    sku: 'TX-VGJ-310',
    category: 'Home Furnishing',
    material: '60% Organic Silk, 40% Long-Staple Egyptian Cotton',
    weaveType: 'Intricate Jacquard Figured Weave',
    gsm: 310,
    width: '55 inches',
    image: '/images/luxury-jacquard-brocade.png',
    description: 'An opulent upholstery and drapery fabric featuring damask patterns woven with metallic gold threads. Captures and reflects light with an exquisite premium luster.',
    features: ['Metallic Thread Highlights', 'High Dimensional Stability', 'Dry-Clean Friendly', 'Eco-Friendly Dyeing'],
    certifications: ['OEKO-TEX Standard 100', 'GOTS (Cotton Core)'],
    colors: [
      { name: 'Venetian Gold', hex: '#D4A373', image: 'gold' },
      { name: 'Royal Crimson', hex: '#58111A', image: 'crimson' },
      { name: 'Midnight Gold', hex: '#161F2E', image: 'navy' }
    ],
    microscope: {
      composition: 'Silk Fibroin and Gossypium barbadense core yarn with metallized polymer ribbon wrappers.',
      structure: 'Smooth triangular cross-section silk fibers creating prismatic light refraction.',
      pattern: 'Multi-layered compound jacquard weave raising warp threads to map complex damask curves.',
      zoomLevel10: 'Intricate floral outlines, glossy silk highlights resting on matte cotton foundations.',
      zoomLevel20: 'Prismatic silk threads wrapping around organic cotton core fibers; metallic thin foils visible.',
      zoomLevel50: 'Ultra-fine silk filaments (12 microns) running parallel in high-density luster rows.'
    },
    isFeatured: true
  },
  {
    id: 'ring-spun-indigo-denim',
    name: 'Premium Ring-Spun Indigo Denim',
    sku: 'TX-RSD-380',
    category: 'Denim Fabrics',
    material: '98% Organic Cotton, 2% Lycra Elastane',
    weaveType: '3/1 Right Hand Twill',
    gsm: 380,
    width: '58 inches',
    image: '/images/organic-cotton-twill.png',
    description: 'Genuine raw ring-spun indigo denim woven on vintage shuttle looms. Self-selvedge edge, excellent stretch recovery, and rich blue aging characteristics.',
    features: ['Selvedge Border', 'Indigo Dye Aging', 'Flexible Stretch', 'Vintage Loom Weave'],
    certifications: ['GOTS Organic Denim', 'BCI Certified'],
    colors: [
      { name: 'Raw Indigo', hex: '#102542', image: 'indigo' },
      { name: 'Stone Washed', hex: '#4B6584', image: 'stone' },
      { name: 'Acid Charcoal', hex: '#2F3640', image: 'charcoal' }
    ],
    microscope: {
      composition: 'Indigo-dyed outer cotton warp with undyed core weft yarns.',
      structure: 'Deep blue dyed surface fibers surrounding white core fibers; elastane stretch core.',
      pattern: 'Pronounced diagonal twill weave, 3 warp threads passing over 1 weft thread.',
      zoomLevel10: 'Classic denim twill ribs; indigo-dyed blue threads intersecting white cotton threads.',
      zoomLevel20: 'Blue ring-dyeing clearly visible; indigo pigment crystals lodged in cotton fiber scales.',
      zoomLevel50: 'Elastane core thread visible under bundle separation; dye density fluctuations on cotton walls.'
    },
    isFeatured: false
  },
  {
    id: 'eco-performance-polyester',
    name: 'Recycled Ocean-Bound Polyester',
    sku: 'TX-ROP-190',
    category: 'Polyester Fabrics',
    material: '100% Recycled PET Ocean Plastics',
    weaveType: 'Ripstop Grid',
    gsm: 190,
    width: '60 inches',
    image: '/images/technical-ballistic-nylon.png',
    description: 'High-performance activewear and bag fabric made entirely from recycled ocean plastics. Woven in a grid ripstop structure to prevent tears in active environments.',
    features: ['Waterproof Coating', 'Ripstop Reinforcement', '100% Recycled', 'Ultra-Lightweight'],
    certifications: ['Global Recycled Standard (GRS)', 'OEKO-TEX Standard 100'],
    colors: [
      { name: 'Pacific Blue', hex: '#006266', image: 'pacific' },
      { name: 'Storm Grey', hex: '#3F3F46', image: 'storm' },
      { name: 'Eco Green', hex: '#1B4D3E', image: 'green' }
    ],
    microscope: {
      composition: 'Polyethylene terephthalate (PET) chains derived from post-consumer plastic bottles.',
      structure: 'Sleek, transparent rod-like filaments, uniform thickness, clean reflective surfaces.',
      pattern: 'Plain weave with double thick threads inserted at regular intervals to form reinforcing grids (ripstop).',
      zoomLevel10: 'Woven grid structure visible with raised reinforcing box edges.',
      zoomLevel20: 'Perfect synthetic filament alignments; high-strength ripstop reinforcement crossovers.',
      zoomLevel50: 'Crystalline polyester structure; complete absence of impurities, high smoothness.'
    },
    isFeatured: false
  }
];

export const certificationsData = [
  { id: 'gots', name: 'Global Organic Textile Standard (GOTS)', code: 'GOTS-2026-08', desc: 'The leading global standard for organic fibers, including ecological and social criteria, backed by independent certification of the entire supply chain.' },
  { id: 'oeko', name: 'OEKO-TEX® Standard 100', code: 'OEKO-TEX-SHA-12093', desc: 'One of the world\'s best-known labels for textiles tested for harmful substances. It stands for customer confidence and high product safety.' },
  { id: 'grs', name: 'Global Recycled Standard (GRS)', code: 'GRS-REG-8821', desc: 'An international, voluntary, full product standard that sets requirements for third-party certification of recycled content, chain of custody, social and environmental practices, and chemical restrictions.' },
  { id: 'iso', name: 'ISO 9001:2015 & 14001:2015', code: 'ISO-Q-14022', desc: 'Dual certification verifying our world-class quality management systems and environmental accountability protocols across global production sites.' },
  { id: 'bsci', name: 'Business Social Compliance Initiative (BSCI)', code: 'BSCI-ID-38912', desc: 'Validates that our manufacturing floors adhere to rigid international labor safety, fair wage, and ethical treatment standards.' }
];

export const sustainabilityMetrics = {
  waterSavedLitres: '14,230,500',
  energySavedKwh: '890,400',
  recycledTons: '1,240',
  carbonReducedKg: '540,800',
  organicProductionPercentage: '74%',
};
