import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages lazy loading or static imports (using static imports for template reliability)
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Manufacturing from './pages/Manufacturing';
import Sustainability from './pages/Sustainability';
import Certifications from './pages/Certifications';
import GlobalExports from './pages/GlobalExports';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/exports" element={<GlobalExports />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
