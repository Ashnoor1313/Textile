import React from 'react';

// Sections Imports
import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import Stats from '../sections/Stats';
import Categories from '../sections/Categories';
import Explorer from '../sections/Explorer';
import Microscope from '../sections/Microscope';
import Journey from '../sections/Journey';
import FeaturedCollections from '../sections/FeaturedCollections';
import Applications from '../sections/Applications';
import Sustainability from '../sections/Sustainability';
import ExportPresence from '../sections/ExportPresence';
import FactoryShowcase from '../sections/FactoryShowcase';
import CertificationsList from '../sections/CertificationsList';
import Testimonials from '../sections/Testimonials';
import InquiryForm from '../sections/InquiryForm';

const Home = () => {
  return (
    <div className="relative w-full">
      {/* 1. Premium Hero experience */}
      <Hero />

      {/* 2. Compliance Badge Marquee */}
      <TrustBar />

      {/* 3. Metrics Overview Counter */}
      <Stats />

      {/* 4. Product Categories selector Grid */}
      <Categories />

      {/* 5. Interactive Fabric Loom & lighting Simulator */}
      <Explorer />

      {/* 6. Fiber Microscope zoom canvas */}
      <Microscope />

      {/* 7. Apple-style GSAP horizontal scrolling timeline */}
      <Journey />

      {/* 8. Curated specifications cards */}
      <FeaturedCollections />

      {/* 9. Segment applications grid */}
      <Applications />

      {/* 10. sustainability dashboards progress sliders */}
      <Sustainability />

      {/* 11. global export routes map */}
      <ExportPresence />

      {/* 12. factory showcase masonry structure */}
      <FactoryShowcase />

      {/* 13. regulatory verification logs */}
      <CertificationsList />

      {/* 14. B2B reviews testimonials cards */}
      <Testimonials />

      {/* 15. Technical RFQ Intake Lead form */}
      <InquiryForm />
    </div>
  );
};

export default Home;
