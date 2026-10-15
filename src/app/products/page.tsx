'use client';

import React, { useState, useEffect } from 'react';
import { categories, products } from '@/content/catalog';
import { CategorySlug } from '@/types';
import { CategoryFilter } from '@/components/catalog/CategoryFilter';
import { ProductCard } from '@/components/catalog/ProductCard';
import { Badge } from '@/components/common/Badge';
import { CTASection } from '@/components/home/CTASection';
import { Ruler, Sparkles } from 'lucide-react';

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
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-200/80 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" size="md" className="mb-3">
              Q Workwear Kigali Catalogue
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
              Workwear & Uniform Solutions
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Explore our category-led uniform collections tailored specifically for Rwandan enterprises. Every garment can be customized with your brand embroidery, custom colors, and tailored staff sizing.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Active Category Header Note */}
        {activeCategoryObj && (
          <div className="mb-8 p-5 sm:p-6 bg-white rounded-3xl border border-stone-200/90 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-[#E0483A] uppercase tracking-wider block mb-1">
                  Category Overview
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  {activeCategoryObj.name}
                </h2>
                <p className="text-sm text-zinc-600 mt-1 max-w-2xl leading-relaxed">
                  {activeCategoryObj.description}
                </p>
              </div>
              <Badge variant="neutral" size="sm" className="self-start sm:self-center">
                Showing {filteredProducts.length} styles
              </Badge>
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Customization Callout Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <Badge variant="brand" size="sm">
                Tailored Ordering in Kigali
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                Need a Custom Style or Fabric Blend Not Shown Above?
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                We develop bespoke uniform designs from scratch. Bring us your reference sketches, existing staff uniforms to replicate, or company brand guidelines. We will source appropriate fabrics and create custom prototype samples for your team.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-semibold text-zinc-800">
                <Ruler className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>On-Site Measurements in Kigali</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-semibold text-zinc-800">
                <Sparkles className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>Custom Logo Embroidery Samples</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
