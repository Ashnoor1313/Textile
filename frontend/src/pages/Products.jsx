import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight, ShieldCheck } from 'lucide-react';
import { fabricsData, fabricCategories } from '../data/fabrics';
import Button from '../components/Button';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'gsm-asc', 'gsm-desc'
  const [filteredProducts, setFilteredProducts] = useState(fabricsData);

  // Sync category state with search query parameter changes
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  // Handle live filtering and sorting
  useEffect(() => {
    let result = fabricsData;

    // 1. Search Query Filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // 2. Category Selector Filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 3. Sort logic
    if (sortBy === 'gsm-asc') {
      result = [...result].sort((a, b) => a.gsm - b.gsm);
    } else if (sortBy === 'gsm-desc') {
      result = [...result].sort((a, b) => b.gsm - a.gsm);
    }

    setFilteredProducts(result);
  }, [search, selectedCategory, sortBy]);

  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    if (catName === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catName);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-primary-abyss min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-surface-border/40 pb-10 mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] font-body text-accent-gold font-bold">
            PRODUCT PORTFOLIO
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 leading-none">
            Fabric Catalog
          </h1>
          <p className="text-xs text-text-muted mt-3 max-w-xl font-body">
            Examine our high-density weavings, GOTS organic cottons, and aramid reinforced industrial materials. All rolls are certified and trade-ready.
          </p>
        </div>

        {/* Filter bar controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start font-body">
          
          {/* Category Tabs list (Left 8 Cols) */}
          <div className="lg:col-span-8 flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`text-xs px-4 py-2.5 border transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'border-accent-gold text-accent-gold bg-accent-gold/5 font-bold'
                  : 'border-surface-border text-text-muted hover:border-text-muted hover:text-text-light'
              }`}
            >
              All Materials
            </button>
            {fabricCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.name)}
                className={`text-xs px-4 py-2.5 border transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? 'border-accent-gold text-accent-gold bg-accent-gold/5 font-bold'
                    : 'border-surface-border text-text-muted hover:border-text-muted hover:text-text-light'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Sort Panel (Right 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 w-full">
            {/* Search Input */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search SKU, weave..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-primary-dark border border-surface-border p-2.5 pl-9 text-xs text-text-light focus:outline-none focus:border-accent-gold font-body"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-primary-dark border border-surface-border p-2.5 text-xs text-text-light focus:outline-none focus:border-accent-gold font-body cursor-pointer shrink-0"
            >
              <option value="default">Sort by Density</option>
              <option value="gsm-asc">GSM (Light to Heavy)</option>
              <option value="gsm-desc">GSM (Heavy to Light)</option>
            </select>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div 
                key={p.id}
                className="bg-primary-dark/85 border border-surface-border/60 hover:border-accent-gold/50 transition-all duration-500 flex flex-col justify-between group min-h-[520px] relative overflow-hidden"
              >
                {/* Shiny gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Fabric Macro Image Header */}
                {p.image && (
                  <div className="w-full h-[180px] overflow-hidden border-b border-surface-border/40 relative">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
                  </div>
                )}

                <div className="p-8 flex flex-col gap-4 font-body flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-widest text-accent-gold font-bold bg-accent-gold/5 border border-accent-gold/15 px-2 py-0.5">
                      {p.sku}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-text-muted">
                      {p.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-text-light group-hover:text-accent-gold transition-colors duration-300">
                      {p.name}
                    </h3>
                    <span className="text-[10px] text-text-muted mt-1 block leading-normal italic font-medium">
                      {p.material}
                    </span>
                    <p className="text-[11px] text-text-muted leading-relaxed mt-3">
                      {p.description.substring(0, 110)}...
                    </p>
                  </div>
                </div>

                {/* Specs footer */}
                <div className="border-t border-surface-border/40 p-8 font-body mt-auto">
                  <div className="grid grid-cols-2 gap-4 text-[10px] mb-6">
                    <div>
                      <span className="text-text-muted block uppercase tracking-wider">WEIGHT DENSITY</span>
                      <span className="text-text-light font-bold mt-0.5 block">{p.gsm} GSM</span>
                    </div>
                    <div>
                      <span className="text-text-muted block uppercase tracking-wider">WEAVE TYPE</span>
                      <span className="text-text-light font-bold mt-0.5 block">{p.weaveType}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Audited Mill Certified
                    </div>
                    
                    <Link 
                      to={`/products/${p.id}`}
                      className="text-[10px] uppercase tracking-widest text-accent-gold group-hover:text-text-light font-bold inline-flex items-center gap-1.5 transition-colors duration-300"
                    >
                      Specifications
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-surface-border/40 bg-primary-dark/40 font-body">
            <span className="text-accent-gold font-bold block text-sm uppercase tracking-widest mb-2">No Matching Weaves Found</span>
            <p className="text-xs text-text-muted">Adjust your filter options or query keywords above.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
