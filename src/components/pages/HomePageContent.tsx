import { Hero } from '@/components/home/Hero';
import { GarmentExplorer } from '@/components/garments/GarmentExplorer';
import { ValuePillars } from '@/components/home/ValuePillars';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';
import { Locale } from '@/content/i18n';

export function HomePageContent({ locale = 'en' }: { locale?: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <GarmentExplorer locale={locale} />
      <ValuePillars locale={locale} />
      <ProcessSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
