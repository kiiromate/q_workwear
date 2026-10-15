"use client";

import { categories } from '@/content/catalog';
import type { CategorySlug } from '@/types';

interface CategoryFilterProps {
  activeCategory: CategorySlug | 'all';
  onSelectCategory: (category: CategorySlug | 'all') => void;
  className?: string;
}

export function CategoryFilter({ activeCategory, onSelectCategory, className = '' }: CategoryFilterProps) {
  const filters = [{ id: 'all' as const, name: 'All' }, ...categories];
  return <div className={`filter-bar ${className}`} role="group" aria-label="Filter collections">
    {filters.map((category) => <button key={category.id} type="button" className="filter-button" aria-pressed={activeCategory === category.id} onClick={() => onSelectCategory(category.id)}>{category.name}</button>)}
  </div>;
}
