'use client';

import React from 'react';
import { categories } from '@/content/catalog';
import { CategorySlug } from '@/types';
import { cn } from '@/lib/utils';
import { Layers } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: CategorySlug | 'all';
  onSelectCategory: (category: CategorySlug | 'all') => void;
  className?: string;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  className,
}: CategoryFilterProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none',
        className
      )}
      role="tablist"
      aria-label="Filter products by workwear category"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeCategory === 'all'}
        onClick={() => onSelectCategory('all')}
        className={cn(
          'flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]',
          activeCategory === 'all'
            ? 'bg-[#E0483A] text-white shadow-sm'
            : 'bg-stone-100 text-zinc-700 hover:bg-stone-200 border border-stone-200'
        )}
      >
        <Layers className="w-3.5 h-3.5" />
        <span>All Workwear</span>
      </button>

      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              'px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]',
              isActive
                ? 'bg-[#E0483A] text-white shadow-sm'
                : 'bg-stone-100 text-zinc-700 hover:bg-stone-200 border border-stone-200'
            )}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
