import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lenis from 'lenis';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global scroll event can be added here if needed

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-primary-abyss text-text-light selection:bg-accent-gold selection:text-primary-abyss relative overflow-hidden">
      
      {/* Slow-floating Ambient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10vh] right-[10vw] w-[45vw] h-[45vw] rounded-full bg-accent-gold/10 blur-[120px] float-orb-copper"></div>
        <div className="absolute bottom-[20vh] left-[5vw] w-[50vw] h-[50vw] rounded-full bg-blue-900/15 blur-[130px] float-orb-blue"></div>
      </div>

      <Navbar />
      {/* Dynamic Main Body Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
