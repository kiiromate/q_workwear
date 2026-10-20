"use client";

import { Suspense } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getCategoriesForLocale, getProductsForLocale } from '@/content/catalog';
import type { CategorySlug } from '@/types';
import { CategoryFilter } from '@/components/catalog/CategoryFilter';
import { ProductCard } from '@/components/catalog/ProductCard';
import { CTASection } from '@/components/home/CTASection';
import { getSiteCopy, Locale } from '@/content/i18n';

function CollectionBrowser({ locale = 'en' }: { locale?: Locale }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const copy = getSiteCopy(locale).productsPage;
  const localizedCategories = getCategoriesForLocale(locale);
  const localizedProducts = getProductsForLocale(locale);

  const queryCategory = params.get('category');
  const searchQuery = (params.get('q') || '').trim().toLowerCase();
  const activeCategory: CategorySlug | 'all' =
    localizedCategories.find((category) => category.id === queryCategory)?.id || 'all';

  const categoryList =
    activeCategory === 'all'
      ? localizedCategories
      : localizedCategories.filter((category) => category.id === activeCategory);

  const visible = categoryList
    .map((category) => {
      const categoryProducts = localizedProducts.filter((product) => {
        if (product.categorySlug !== category.id) return false;
        if (!searchQuery) return true;
        return (
          product.title.toLowerCase().includes(searchQuery) ||
          product.summary.toLowerCase().includes(searchQuery) ||
          category.name.toLowerCase().includes(searchQuery)
        );
      });
      return { category, categoryProducts };
    })
    .filter((entry) => !searchQuery || entry.categoryProducts.length > 0);

  const selectCategory = (category: CategorySlug | 'all') => {
    const next = new URLSearchParams(params.toString());
    if (category === 'all') next.delete('category');
    else next.set('category', category);
    router.push(`${pathname}${next.size ? `?${next.toString()}` : ''}`, { scroll: false });
  };

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={selectCategory}
        locale={locale}
      />
      <p role="status" className="sr-only">
        {visible.length} {copy.collectionsShownSuffix}
      </p>
      <div className="collection-grid">
        {visible.map(({ category, categoryProducts }) => (
          <section key={category.id} aria-labelledby={`collection-${category.id}`}>
            <div className="collection-image catalog-image">
              <Image
                src={category.image}
                alt={category.imageAlt || `${category.name} — ${copy.garmentStylesAltSuffix}`}
                fill
                sizes="(max-width: 640px) 88vw, 44vw"
              />
            </div>
            <div className="collection-caption">
              <h2 id={`collection-${category.id}`}>{category.name}</h2>
            </div>
            <p className="collection-description">{category.description}</p>
            <div className="collection-products">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} locale={locale} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export function ProductsPageContent({ locale = 'en' }: { locale?: Locale }) {
  const copy = getSiteCopy(locale).productsPage;
  return (
    <>
      <div className="container page-intro">
        <h1 className="display">{copy.title}</h1>
        <p className="lead">{copy.lead}</p>
        <p className="lookbook-disclosure-note">{copy.disclosureNote}</p>
      </div>
      <div className="container catalog-body">
        <Suspense
          fallback={
            <p className="lead" role="status">
              {copy.loading}
            </p>
          }
        >
          <CollectionBrowser locale={locale} />
        </Suspense>
      </div>
      <CTASection locale={locale} />
    </>
  );
}
