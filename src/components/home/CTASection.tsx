import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';

interface CTASectionProps {
  locale?: Locale;
}

export function CTASection({ locale = 'en' }: CTASectionProps) {
  const copy = getSiteCopy(locale).ctaSection;
  return (
    <section className="quote-section section" aria-labelledby="quote-title">
      <div className="container quote-inner">
        <h2 id="quote-title" className="section-title">
          {copy.title}
        </h2>
        <Link className="button" href={localizeHref('/contact', locale)}>
          {copy.button} <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

