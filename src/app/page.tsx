import { Hero } from '@/components/home/Hero';
import { GarmentExplorer } from '@/components/garments/GarmentExplorer';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { ValuePillars } from '@/components/home/ValuePillars';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <GarmentExplorer />
      <CategoryShowcase />
      <ValuePillars />
      <ProcessSection />
      <CTASection />
    </>
  );
}
