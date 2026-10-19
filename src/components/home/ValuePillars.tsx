import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';

interface ValuePillarsProps {
  locale?: Locale;
}

export function ValuePillars({ locale = 'en' }: ValuePillarsProps) {
  const copy = getSiteCopy(locale).valuePillars;
  return (
    <section className="container section craft-section" aria-labelledby="craft-title">
      <div className="craft-statement">
        <h2 id="craft-title" className="section-title">
          {copy.titleLine1}
          <br />
          {copy.titleLine2}
          <br />
          {copy.titleLine3}
        </h2>
        <div>
          <p className="lead">{copy.lead}</p>
          <Link href={localizeHref('/about', locale)} className="text-link">
            {copy.cta} <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

