"use client";

import { getCategoriesForLocale } from '@/content/catalog';
import { getSiteCopy, Locale } from '@/content/i18n';
import type { CategorySlug } from '@/types';

interface CategoryFilterProps {
  activeCategory: CategorySlug | 'all';
  onSelectCategory: (category: CategorySlug | 'all') => void;
  locale?: Locale;
  className?: string;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  locale = 'en',
  className = '',
}: CategoryFilterProps) {
  const copy = getSiteCopy(locale).productsPage;
  const localizedCategories = getCategoriesForLocale(locale);
  const filters = [{ id: 'all' as const, name: copy.allFilter }, ...localizedCategories];
  return (
    <div className={`filter-bar ${className}`} role="group" aria-label={copy.filterAria}>
      {filters.map((category) => (
        <button
          key={category.id}
          type="button"
          className="filter-button"
          aria-pressed={activeCategory === category.id}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

