'use client';

import React, { useState, useEffect } from 'react';
import { categories, products } from '@/content/catalog';
import { CategorySlug } from '@/types';
import { CategoryFilter } from '@/components/catalog/CategoryFilter';
import { ProductCard } from '@/components/catalog/ProductCard';
import { Badge } from '@/components/common/Badge';
import { CTASection } from '@/components/home/CTASection';
import { Ruler, Sparkles, Scissors, Layers } from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug | 'all'>('all');

  // Synchronize category from URL query parameters on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category') as CategorySlug;
      if (cat && ['corporate', 'hospitality', 'industrial', 'branded'].includes(cat)) {
        setActiveCategory(cat);
      }
    }
  }, []);

  const handleSelectCategory = (cat: CategorySlug | 'all') => {
    setActiveCategory(cat);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (cat === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', cat);
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  const activeCategoryObj = categories.find((c) => c.id === activeCategory);

  return (
    <div className="bg-[#12100E] min-h-screen text-stone-200 pb-20">
      
      {/* Tape Measure Accent across top */}
      <div className="h-1.5 tape-ruler-amber opacity-90" />

      {/* Page Header */}
      <div className="bg-[#161412] border-b border-stone-800 pt-14 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
              <Scissors className="w-3.5 h-3.5 text-[#E0483A]" />
              <span>KIGALI ATELIER CATALOGUE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Workwear & Uniform Collections
            </h1>
            <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
              Explore our category-led uniform collections tailored specifically for Rwandan enterprises. Every garment can be customized with your brand embroidery, custom colors, and tailored staff sizing.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="mt-10 pt-6 border-t border-stone-800">
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        {/* Active Category Header Note */}
        {activeCategoryObj && (
          <div className="mb-10 p-6 sm:p-7 bg-[#1A1816] rounded-3xl border border-stone-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#E0483A] uppercase tracking-wider block mb-1">
                  CATEGORY SPECIFICATION // {activeCategoryObj.fabricBadge}
                </span>
                <h2 className="text-2xl font-bold text-white">
                  {activeCategoryObj.name}
                </h2>
                <p className="text-sm text-stone-400 mt-1 max-w-2xl font-light leading-relaxed">
                  {activeCategoryObj.description}
                </p>
              </div>
              <span className="self-start sm:self-center px-3 py-1 text-xs font-mono bg-stone-800 text-stone-300 rounded border border-stone-700">
                {filteredProducts.length} Garment Styles
              </span>
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bespoke Pattern Drafting Callout */}
        <div className="mt-16 bg-[#1A1816] rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block px-3 py-1 rounded bg-[#E0483A]/15 text-[#E0483A] text-xs font-mono font-bold">
                BESPOKE PATTERN CUTTING
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need a Custom Cut or Fabric Blend Not Shown Above?
              </h3>
              <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                We develop bespoke uniform designs from scratch. Bring us your reference sketches, existing staff uniforms to replicate, or company brand guidelines. We will source appropriate fabrics and create custom prototype samples for your team.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-end font-mono text-xs text-stone-300">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900 border border-stone-800">
                <Ruler className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>On-Site Measurements in Kigali</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900 border border-stone-800">
                <Sparkles className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>Sample Logo Embroidery Digitization</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
