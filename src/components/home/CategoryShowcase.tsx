import React from 'react';
import Link from 'next/link';
import { categories } from '@/content/catalog';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { ArrowRight, Building2, UtensilsCrossed, HardHat, Sparkles } from 'lucide-react';

const iconMap = {
  Building2,
  UtensilsCrossed,
  HardHat,
  Sparkles,
};

export function CategoryShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-stone-50/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Categories"
          title="Workwear Built for Every Sector"
          subtitle="Explore our specialized uniform lines engineered for Rwandan enterprises, culinary venues, and industrial crews."
          action={
            <Button
              variant="outline"
              size="md"
              href="/products"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Full Catalogue
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.iconName];

            return (
              <div
                key={category.id}
                className="group flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-stone-100 text-zinc-900 flex items-center justify-center group-hover:bg-[#E0483A] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="brand" size="sm">
                      {category.badgeText}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#E0483A] transition-colors mb-2">
                    {category.name}
                  </h3>

                  <p className="text-xs font-medium text-[#E0483A] mb-3">
                    {category.tagline}
                  </p>

                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href={`/products?category=${category.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:text-[#E0483A] transition-colors"
                  >
                    <span>Browse {category.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
