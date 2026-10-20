import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';

export function WorkPageContent({ locale = 'en' }: { locale?: Locale }) {
  const copy = getSiteCopy(locale).lookbookPage;

  return (
    <>
      <div className="container page-intro">
        <span className="section-eyebrow">{copy.eyebrow}</span>
        <h1 className="display">{copy.title}</h1>
        <p className="lead">{copy.lead}</p>
        <p className="lookbook-disclosure-note">{copy.disclosure}</p>
      </div>

      <div className="container lookbook-body">
        <div className="lookbook-grid">
          {copy.items.map((item) => {
            const categoryHref =
              item.categorySlug === 'all'
                ? localizeHref('/products', locale)
                : `${localizeHref('/products', locale)}?category=${item.categorySlug}`;
            const enquiryHref = `${localizeHref('/contact', locale)}?product=${encodeURIComponent(
              item.enquiryProduct,
            )}`;

            return (
              <article key={item.id} className="lookbook-card" aria-labelledby={`card-title-${item.id}`}>
                <div
                  className={`lookbook-card-image-wrap ${
                    item.aspect === 'portrait' ? 'lookbook-aspect-portrait' : 'lookbook-aspect-landscape'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1050px) 46vw, 31vw"
                    className="lookbook-card-img"
                  />
                  <div className="lookbook-card-overlay">
                    <span className="card-concept-pill">{item.sectorTag}</span>
                  </div>
                </div>
                <div className="lookbook-card-content">
                  <h2 id={`card-title-${item.id}`} className="lookbook-card-title">
                    {item.title}
                  </h2>
                  <p className="lookbook-card-desc">{item.description}</p>
                  <div className="lookbook-card-actions">
                    <Link href={categoryHref} className="text-link">
                      <span>{copy.viewCollectionCta}</span>
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </Link>
                    <Link href={enquiryHref} className="button button-outline button-small">
                      {copy.enquireCta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Order Callout */}
        <div className="lookbook-custom-callout">
          <div className="custom-callout-text">
            <h2>{copy.calloutTitle}</h2>
            <p>{copy.calloutBody}</p>
          </div>
          <Link href={localizeHref('/contact', locale)} className="button button-primary">
            <span>{copy.calloutCta}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>

      <CTASection locale={locale} />
    </>
  );
}
