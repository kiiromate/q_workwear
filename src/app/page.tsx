import { Hero } from '@/components/home/Hero';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { GarmentExplorer } from '@/components/garments/GarmentExplorer';
import { ValuePillars } from '@/components/home/ValuePillars';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <GarmentExplorer />
      <ValuePillars />
      <ProcessSection />
      <CTASection />
    </>
  );
}
