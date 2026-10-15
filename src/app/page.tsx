import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ValuePillars } from '@/components/home/ValuePillars';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <CategoryShowcase />
      <FeaturedWork />
      <ProcessSection />
      <CTASection />
    </>
  );
}
