import { Hero } from '@/components/home/Hero';
import { ValuePillars } from '@/components/home/ValuePillars';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return <><Hero /><CategoryShowcase /><ValuePillars /><ProcessSection /><CTASection /></>;
}
