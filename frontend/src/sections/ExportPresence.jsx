import React, { useState } from 'react';
import { 
  Ship, 
  Plane, 
  Compass, 
  FileCheck, 
  Globe, 
  Activity, 
  Container, 
  MapPin, 
  Layers 
} from 'lucide-react';

const ExportPresence = () => {
  const regions = [
    {
      id: 'usa',
      name: 'North America',
      location: 'North America Zone (Customs Bonded Area)',
      description: 'Serving key retail hubs and manufacturing zones across the US and Canada via East & West Coast corridors.',
      seaports: 'Los Angeles (LAX), New York (NYY), Savannah (SAV), Houston (HOU)',
      airports: 'LAX International (Los Angeles), JFK International (New York), ORD International (Chicago)',
      transit: '18 - 22 Days',
      sailings: '3x Weekly Direct Sailings',
      clearance: 'Bonded EPZ filing (48-Hr Clear)',
      share: '35%',
      fabrics: 'Organic Cotton Apparel, Industrial Twills',
      position: { x: '25%', y: '35%' },
      trackingNo: 'TX-US-LAX-9812',
      vessel: 'MAERSK MC-KINNEY MOLLER',
      speed: '19.5 knots',
      heading: 'NW 292°',
      humidity: '48% RH',
      temp: '21.2°C'
    },
    {
      id: 'europe',
      name: 'Western Europe',
      location: 'Western Europe Zone (EUR.1 Corridor)',
      description: 'Seamless distribution to EU fashion houses and industrial hubs through automated transit clearance routes.',
      seaports: 'Rotterdam (NLD), Hamburg (DEU), Genoa (ITA), Antwerp (BEL)',
      airports: 'Schiphol (AMS - Amsterdam), Frankfurt (FRA), Charles de Gaulle (CDG - Paris)',
      transit: '14 - 16 Days',
      sailings: '2x Weekly Direct Sailings',
      clearance: 'EUR.1 Movement Certificate clearing',
      share: '28%',
      fabrics: 'Royal Belgian Linen, GOTS Organic Cotton',
      position: { x: '50%', y: '28%' },
      trackingNo: 'TX-EU-ROT-3321',
      vessel: 'MSC OSCAR',
      speed: '18.2 knots',
      heading: 'W 278°',
      humidity: '52% RH',
      temp: '18.5°C'
    },
    {
      id: 'japan',
      name: 'East Asia',
      location: 'East Asia Zone (Form AI FTA Route)',
      description: 'Accelerated trade corridor connecting technical weavers directly to Japanese apparel finishing facilities.',
      seaports: 'Tokyo (TYO), Osaka (OSA), Yokohama (YOK)',
      airports: 'Narita International (NRT), Haneda International (HND), Kansai (KIX)',
      transit: '7 - 10 Days',
      sailings: '4x Weekly Direct Sailings',
      clearance: 'ASEAN-India FTA (Form AI) filing',
      share: '18%',
      fabrics: 'Selvedge Denim, Technical Ripstops',
      position: { x: '86%', y: '40%' },
      trackingNo: 'TX-JP-TYO-7429',
      vessel: 'ONE APUS',
      speed: '21.0 knots',
      heading: 'NE 54°',
      humidity: '45% RH',
      temp: '20.1°C'
    },
    {
      id: 'australia',
      name: 'Oceania & Australia',
      location: 'Oceania Zone (AQIS Clearance Corridor)',
      description: 'Dedicated logistics routes clearing strict regional biosecurity standards for home furnishings and outdoor canvas.',
      seaports: 'Sydney (SYD), Melbourne (MEL), Brisbane (BNE)',
      airports: 'Sydney Kingsford Smith (SYD), Melbourne Tullamarine (MEL)',
      transit: '12 - 14 Days',
      sailings: '2x Weekly Sailings',
      clearance: 'Strict Biosecurity manifest clearing',
      share: '9%',
      fabrics: 'Lightweight Linen, Outdoor Canvas',
      position: { x: '85%', y: '82%' },
      trackingNo: 'TX-AU-SYD-1182',
      vessel: 'CMA CGM BENJAMIN FRANKLIN',
      speed: '17.6 knots',
      heading: 'SE 135°',
      humidity: '42% RH',
      temp: '23.4°C'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      location: 'Gulf Region Zone (Saber compliance route)',
      description: 'Fast-transit corridors for luxury hotel upholstery and home linens entering Gulf countries.',
      seaports: 'Jebel Ali (DXB - Dubai), Jeddah (JED), Hamad (HMD - Qatar)',
      airports: 'Dubai International (DXB), Hamad International (DOH), Riyadh (RUH)',
      transit: '5 - 7 Days',
      sailings: '5x Weekly Direct Sailings',
      clearance: 'Sabre Certificate of Conformity',
      share: '10%',
      fabrics: 'Upholstery Jacquards, Premium Linens',
      position: { x: '58%', y: '52%' },
      trackingNo: 'TX-ME-DXB-4410',
      vessel: 'OOCL HONG KONG',
      speed: '22.3 knots',
      heading: 'W 262°',
      humidity: '38% RH',
      temp: '25.8°C'
    },
    {
      id: 'south-america',
      name: 'South America',
      location: 'Mercosur Zone (SISCOMEX registered)',
      description: 'Long-range shipping lanes serving heavy denim and apparel manufacturing clusters in Brazil and Argentina.',
      seaports: 'Santos (BRA), Buenos Aires (ARG), Valparaiso (CHL)',
      airports: 'Guarulhos International (GRU - Sao Paulo), Ezeiza International (EZE - Buenos Aires)',
      transit: '25 - 28 Days',
      sailings: '1x Weekly Sailing',
      clearance: 'Mercosur Customs Manifest compliance',
      share: '5%',
      fabrics: 'Indigo Denim twills, Polyester linings',
      position: { x: '28%', y: '76%' },
      trackingNo: 'TX-SA-SAN-2291',
      vessel: 'COSCO SHIPPING UNIVERSE',
      speed: '16.8 knots',
      heading: 'SW 210°',
      humidity: '55% RH',
      temp: '22.0°C'
    },
    {
      id: 'south-africa',
      name: 'Africa',
      location: 'Africa Zone (SADC compliance corridor)',
      description: 'Serving sub-Saharan utility uniform manufacturers and heavy-duty canvas buyers under SADC tariff preferences.',
      seaports: 'Durban (ZAF), Cape Town (CPT), Mombasa (KEN)',
      airports: 'OR Tambo International (JNB - Johannesburg), Cape Town International (CPT)',
      transit: '10 - 12 Days',
      sailings: '1x Weekly Sailing',
      clearance: 'SADC trade agreement clearance logs',
      share: '4%',
      fabrics: 'Technical Uniforms, Utility Canvas',
      position: { x: '53%', y: '72%' },
      trackingNo: 'TX-AF-DUR-8022',
      vessel: 'EVER GIVEN',
      speed: '18.9 knots',
      heading: 'S 178°',
      humidity: '50% RH',
      temp: '24.1°C'
    }
  ];

  // Symmetrical continent paths aligned with primary trade corridor IDs
  const continents = [
    {
      id: 'usa',
      name: 'North America',
      path: 'M70,100 L100,70 L120,60 L160,60 L180,50 L220,55 L250,70 L280,80 L275,100 L270,150 L285,180 L275,210 L265,230 L270,245 L260,245 L250,245 L220,245 L210,250 L195,280 L210,290 L220,285 L210,240 L180,200 L160,180 L135,180 L105,140 L80,135 Z M320,50 L365,45 L355,95 L325,95 Z'
    },
    {
      id: 'south-america',
      name: 'South America',
      path: 'M220,290 L260,295 L290,310 L335,335 L340,360 L305,400 L260,480 L245,485 L240,475 L235,440 L225,400 L210,350 L210,310 Z'
    },
    {
      id: 'europe',
      name: 'Western Europe',
      path: 'M400,205 L420,200 L440,170 L470,175 L480,210 L455,210 L465,230 L470,230 L460,215 L480,215 L490,215 L500,210 L460,160 L460,120 L490,110 L500,130 L475,170 M425,155 L435,150 L440,170 L428,170 Z M415,160 L422,158 L420,170 Z'
    },
    {
      id: 'south-africa',
      name: 'Africa',
      path: 'M420,230 L460,210 L500,210 L520,230 L535,235 L540,240 L570,280 L600,295 L580,320 L560,370 L540,420 L525,430 L515,420 L500,380 L470,330 L465,315 L445,305 L410,295 L405,260 Z M580,370 L595,360 L610,395 L590,410 Z'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      path: 'M535,235 L570,280 L590,280 L590,260 L570,245 Z'
    },
    {
      id: 'japan',
      name: 'East Asia',
      path: 'M590,245 L630,250 L660,290 L685,265 L675,245 L710,260 L740,295 L755,280 L740,260 L790,260 L820,220 L820,180 L790,170 L710,170 L900,95 L920,110 L870,170 L825,195 L835,195 L830,210 L822,205 L810,270 L825,295 L795,325 L760,340 L730,310 Z M850,180 L870,195 L880,220 L875,225 L855,200 Z'
    },
    {
      id: 'australia',
      name: 'Oceania & Australia',
      path: 'M800,380 L880,370 L905,410 L890,440 L810,435 L800,400 Z M920,460 L945,485 L930,450 Z'
    }
  ];

  const [activeRegion, setActiveRegion] = useState(regions[0]);

  // Coordinate-aligned SVG paths terminating precisely at button coordinate values (1000x500 box)
  // Origin: India (x=660, y=250)
  const regionRoutes = {
    usa: "M660,250 Q450,170 250,175",
    europe: "M660,250 Q580,180 500,140",
    japan: "M660,250 Q760,210 860,200",
    australia: "M660,250 Q750,330 850,410",
    'middle-east': "M660,250 Q620,255 580,260",
    'south-america': "M660,250 Q480,340 280,380",
    'south-africa': "M660,250 Q590,320 530,360"
  };

  return (
    <section className="bg-primary-abyss py-24 relative z-10 border-b border-surface-border/30 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
                LOGISTICS CAPABILITY
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3 leading-tight">
              Global Cargo Control
            </h2>
          </div>
          <div>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              Tracking B2B textile ocean shipments and air-freight routes across active corridors. Select any target destination pin to view cargo locations, port descriptions, transit times, and live telemetry data.
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SECTION: Map & Telemetry Progress (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Real World SVG Map Box */}
            <div className="bg-primary-dark/95 border border-surface-border/60 p-4 sm:p-6 rounded-sm relative min-h-[320px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden group copper-glow">
              
              {/* Technical corner grids */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent-gold/45"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent-gold/45"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent-gold/45"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent-gold/45"></div>

              {/* Technical status banner */}
              <div className="flex items-center justify-between z-20 pb-2 border-b border-surface-border/20">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-3.5 h-3.5 text-accent-gold animate-pulse" />
                  <span className="text-[9px] font-bold tracking-widest text-text-muted font-body uppercase">
                    Shipment Route: {activeRegion.name} Corridor
                  </span>
                </div>
                <span className="text-[8px] font-bold tracking-widest bg-accent-gold/10 text-accent-gold border border-accent-gold/20 px-2 py-0.5 rounded-sm">
                  VESSEL STATUS: EN ROUTE
                </span>
              </div>

              {/* Real World Vector Map representation */}
              <div className="relative w-full aspect-[2/1] flex items-center justify-center mt-4 mb-4">
                <svg 
                  viewBox="0 0 1000 500" 
                  className="w-full h-auto opacity-75 transition-opacity duration-500"
                  style={{ fill: 'none' }}
                >
                  <defs>
                    <pattern id="dotPatternMap" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="0.75" fill="rgba(212, 163, 115, 0.04)" />
                    </pattern>
                  </defs>

                  {/* High Tech Dot Mesh Background */}
                  <rect width="1000" height="500" fill="url(#dotPatternMap)" className="pointer-events-none" />

                  {/* Grid Lines */}
                  <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <line x1="0" y1="200" x2="1000" y2="200" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <line x1="0" y1="300" x2="1000" y2="300" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <line x1="0" y1="400" x2="1000" y2="400" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />

                  <line x1="200" y1="0" x2="200" y2="500" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <line x1="400" y1="0" x2="400" y2="500" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <line x1="600" y1="0" x2="600" y2="500" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <line x1="800" y1="0" x2="800" y2="500" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />

                  {/* Concentric rings from source mill in India (660, 250) */}
                  <circle cx="660" cy="250" r="120" stroke="rgba(212, 163, 115, 0.04)" strokeDasharray="4,8" />
                  <circle cx="660" cy="250" r="240" stroke="rgba(212, 163, 115, 0.03)" strokeDasharray="4,8" />
                  <circle cx="660" cy="250" r="380" stroke="rgba(212, 163, 115, 0.015)" strokeDasharray="4,8" />

                  {/* Realistic Continental Paths - highlighting / marking the active area */}
                  {continents.map((cont) => {
                    const isActive = activeRegion.id === cont.id;
                    return (
                      <path 
                        key={cont.id}
                        d={cont.path}
                        className="transition-all duration-500 ease-out"
                        style={{
                          fill: isActive ? 'rgba(212, 163, 115, 0.15)' : 'rgba(71, 85, 105, 0.05)',
                          stroke: isActive ? '#D4A373' : 'rgba(71, 85, 105, 0.35)',
                          strokeWidth: isActive ? 1.5 : 0.6,
                          opacity: isActive ? 1 : 0.7
                        }}
                      />
                    );
                  })}

                  {/* Dynamic routes lines & glowing trails */}
                  {Object.entries(regionRoutes).map(([id, pathD]) => {
                    const isActive = activeRegion.id === id;
                    return (
                      <g key={id}>
                        {/* Underlay glow path */}
                        <path 
                          d={pathD}
                          className="transition-all duration-700 ease-out fill-none"
                          style={{
                            stroke: isActive ? '#D4A373' : 'rgba(212, 163, 115, 0.05)',
                            strokeWidth: isActive ? 2.5 : 0.8,
                            strokeDasharray: isActive ? 'none' : '3,8',
                            opacity: isActive ? 1 : 0.3
                          }}
                        />
                        {/* Glowing backing for active path */}
                        {isActive && (
                          <path 
                            d={pathD}
                            className="fill-none blur-[2px]"
                            style={{
                              stroke: '#D4A373',
                              strokeWidth: 5,
                              opacity: 0.35
                            }}
                          />
                        )}
                        {/* Pulsing Cargo ship representation */}
                        {isActive && (
                          <g>
                            <circle r="7.5" fill="#D4A373" className="opacity-30 animate-ping">
                              <animateMotion dur="5.5s" repeatCount="indefinite" path={pathD} />
                            </circle>
                            <circle r="3.5" fill="#FDF3E7">
                              <animateMotion dur="5.5s" repeatCount="indefinite" path={pathD} />
                            </circle>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Mill Pin (India) */}
                <div 
                  className="absolute w-4 h-4 rounded-full bg-accent-gold shadow-lg shadow-accent-gold/60 flex items-center justify-center z-20 cursor-help"
                  style={{ left: '66%', top: '50%' }}
                  title="TEXTILIA HEADQUARTERS & MILL"
                >
                  <div className="absolute inset-0 rounded-full bg-accent-gold animate-ping opacity-75"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-abyss"></div>
                  <span className="absolute -bottom-6 whitespace-nowrap text-[8px] font-bold tracking-widest text-accent-gold font-body bg-primary-abyss/90 border border-accent-gold/20 px-1 py-0.5 rounded-xs animate-pulse">
                    ORIGIN MILL (JNPT / BOM)
                  </span>
                </div>

                {/* Active Primary Pins for Regions */}
                {regions.map((region) => {
                  const isActive = activeRegion.id === region.id;
                  return (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region)}
                      className={`absolute w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer z-20 ${
                        isActive 
                          ? 'bg-text-light scale-125 border border-accent-gold shadow-lg shadow-accent-gold/40' 
                          : 'bg-accent-gold/75 hover:bg-accent-gold border border-transparent'
                      }`}
                      style={{ left: region.position.x, top: region.position.y }}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-accent-gold animate-ping opacity-60"></div>
                      )}
                      
                      {/* Floating Text Label */}
                      <span className={`absolute -top-7 whitespace-nowrap text-[8px] font-bold tracking-widest font-body px-1.5 py-0.5 rounded-sm transition-all border ${
                        isActive 
                          ? 'bg-accent-gold text-primary-abyss border-accent-gold shadow-md' 
                          : 'bg-primary-abyss/85 text-text-muted border-surface-border'
                      }`}>
                        {region.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Footer Coordinate details */}
              <div className="flex justify-between items-center text-[7px] text-text-muted/60 font-mono tracking-widest border-t border-surface-border/10 pt-2 z-10">
                <span>RADAR CENTER: 20° 35' 37" N, 78° 57' 46" E</span>
                <span>MARINE FEED: ACTIVE CONNECTED</span>
              </div>
            </div>

            {/* Live Voyage Telemetry & Stepper (Live Tracker) */}
            <div className="bg-primary-dark/95 border border-surface-border/60 p-6 rounded-sm copper-glow grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-accent-gold/20"></div>
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-accent-gold/20"></div>
              
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Container className="w-4 h-4 text-accent-gold" />
                  <h4 className="text-[10px] uppercase tracking-widest text-text-light font-bold">
                    Active Voyage Monitor & Pipeline
                  </h4>
                </div>
                
                {/* Stepper Timeline */}
                <div className="relative flex flex-col md:flex-row justify-between w-full mt-6 gap-6 md:gap-4 px-2 md:px-4">
                  {/* Desktop connecting line */}
                  <div className="hidden md:block absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1px] bg-surface-border z-0">
                    <div className="h-full bg-accent-gold transition-all duration-700" style={{ width: '66%' }}></div>
                  </div>
                  {/* Mobile connecting line */}
                  <div className="block md:hidden absolute left-[18px] top-3 bottom-3 w-[1px] bg-surface-border z-0">
                    <div className="w-full bg-accent-gold transition-all duration-700" style={{ height: '66%' }}></div>
                  </div>

                  <div className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0 z-10">
                    <div className="w-5 h-5 rounded-full bg-accent-gold text-primary-abyss flex items-center justify-center text-[9px] font-bold shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col md:items-center md:text-center mt-0 md:mt-2">
                      <span className="text-[8px] font-bold uppercase text-text-light tracking-wider">Mill Dispatch</span>
                      <span className="text-[7px] text-text-muted">Cleared & Packed</span>
                    </div>
                  </div>

                  <div className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0 z-10">
                    <div className="w-5 h-5 rounded-full bg-accent-gold text-primary-abyss flex items-center justify-center text-[9px] font-bold shrink-0">
                      ✓
                    </div>
                    <div className="flex flex-col md:items-center md:text-center mt-0 md:mt-2">
                      <span className="text-[8px] font-bold uppercase text-text-light tracking-wider">Customs Bond</span>
                      <span className="text-[7px] text-text-muted">Origin Port (JNPT)</span>
                    </div>
                  </div>

                  <div className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0 z-10">
                    <div className="w-5 h-5 rounded-full bg-primary-abyss border border-accent-gold text-accent-gold flex items-center justify-center text-[9px] font-bold animate-pulse shrink-0">
                      ➔
                    </div>
                    <div className="flex flex-col md:items-center md:text-center mt-0 md:mt-2">
                      <span className="text-[8px] font-bold uppercase text-accent-gold tracking-wider">In Transit</span>
                      <span className="text-[7px] text-accent-gold/80 font-mono">Ocean Freight</span>
                    </div>
                  </div>

                  <div className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0 z-10">
                    <div className="w-5 h-5 rounded-full bg-primary-abyss border border-surface-border text-text-muted flex items-center justify-center text-[9px] font-bold shrink-0">
                      O
                    </div>
                    <div className="flex flex-col md:items-center md:text-center mt-0 md:mt-2">
                      <span className="text-[8px] font-bold uppercase text-text-muted tracking-wider">Customs Release</span>
                      <span className="text-[7px] text-text-muted">Destination Hub</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vessel Telemetry Info */}
              <div className="border-t md:border-t-0 md:border-l border-surface-border/40 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between text-xs">
                <div>
                  <span className="text-[8px] font-bold text-text-muted uppercase tracking-wider block mb-2">
                    Live Telemetry ({activeRegion.trackingNo})
                  </span>
                  <div className="text-[11px] font-mono text-text-light space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-text-muted">VESSEL:</span>
                      <span className="font-bold text-accent-gold truncate max-w-[125px]" title={activeRegion.vessel}>
                        {activeRegion.vessel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">SPEED:</span>
                      <span className="font-bold">{activeRegion.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">HEADING:</span>
                      <span className="font-bold">{activeRegion.heading}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-surface-border/20 pt-2 mt-3 grid grid-cols-2 gap-2 text-text-light">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                    <div>
                      <span className="text-[7px] text-text-muted block">TEMP</span>
                      <span className="text-[9px] font-mono font-bold">{activeRegion.temp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                    <div>
                      <span className="text-[7px] text-text-muted block">HUMIDITY</span>
                      <span className="text-[9px] font-mono font-bold">{activeRegion.humidity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SECTION: Single, Highly Polished Symmetrical Stats Card (4 columns) */}
          <div className="lg:col-span-4 flex">
            
            <div className="bg-primary-dark/95 border border-surface-border/60 p-8 rounded-sm relative flex flex-col justify-between copper-glow w-full">
              <div className="absolute top-0 right-0 w-4 h-[1px] bg-accent-gold/20"></div>
              <div className="absolute top-0 right-0 w-[1px] h-4 bg-accent-gold/20"></div>
              <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-accent-gold/20"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-accent-gold/20"></div>

              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between border-b border-surface-border/20 pb-4 mb-5">
                  <div className="flex items-center gap-2 text-accent-gold text-[10px] font-bold uppercase tracking-widest font-body">
                    <MapPin className="w-3.5 h-3.5" />
                    Corridor Profile
                  </div>
                  <span className="text-[8px] uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 font-bold rounded-xs">
                    ACTIVE ENTRY
                  </span>
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-text-light mb-1.5 leading-none">
                  {activeRegion.name}
                </h3>
                <span className="text-[9px] font-mono text-accent-gold bg-accent-gold/5 border border-accent-gold/15 px-2 py-0.5 rounded-sm inline-block mt-1">
                  {activeRegion.location}
                </span>

                <p className="text-xs text-text-muted mt-5 leading-relaxed font-body">
                  {activeRegion.description}
                </p>
              </div>

              {/* Transit & Hub Details */}
              <div className="flex flex-col gap-5 text-xs my-8 font-body flex-grow justify-center border-t border-b border-surface-border/10 py-6">
                
                {/* Sea Ports served */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary-abyss border border-surface-border/40 flex items-center justify-center text-accent-gold shrink-0 mt-0.5">
                    <Ship className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[8px] text-text-muted block uppercase tracking-wider font-bold">Sea Ports Served</span>
                    <span className="text-text-light font-bold mt-1 block leading-normal">{activeRegion.seaports}</span>
                  </div>
                </div>

                {/* Air Ports served */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary-abyss border border-surface-border/40 flex items-center justify-center text-accent-gold shrink-0 mt-0.5">
                    <Plane className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[8px] text-text-muted block uppercase tracking-wider font-bold">Air Ports Served</span>
                    <span className="text-text-light font-bold mt-1 block leading-normal">{activeRegion.airports}</span>
                  </div>
                </div>

                {/* Transit duration */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary-abyss border border-surface-border/40 flex items-center justify-center text-accent-gold shrink-0 mt-0.5">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[8px] text-text-muted block uppercase tracking-wider font-bold">Transit Duration</span>
                    <span className="text-text-light font-bold mt-1 block">{activeRegion.transit} ({activeRegion.sailings})</span>
                  </div>
                </div>

                {/* Fabric Type */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary-abyss border border-surface-border/40 flex items-center justify-center text-accent-gold shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[8px] text-text-muted block uppercase tracking-wider font-bold">Dominant Fabric Exports</span>
                    <span className="text-accent-champagne font-bold mt-1 block">{activeRegion.fabrics}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Customs details */}
              <div className="text-[9px] text-text-muted leading-relaxed flex items-start gap-2.5 pt-2">
                <FileCheck className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-text-light block uppercase tracking-widest text-[8px]">Customs Manifest Filing</span>
                  <span className="block mt-0.5 text-[8.5px]">{activeRegion.clearance}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExportPresence;
