import Image from 'next/image';
import { CTASection } from '@/components/home/CTASection';
import { getSiteCopy, Locale } from '@/content/i18n';

export function AboutPageContent({ locale = 'en' }: { locale?: Locale }) {
  const copy = getSiteCopy(locale).aboutPage;

  return (
    <>
      <div className="container page-intro">
        <span className="section-eyebrow">{copy.eyebrow}</span>
        <h1 className="display">{copy.title}</h1>
        <p className="lead">{copy.lead}</p>
      </div>

      <section className="container story-grid about-story" aria-labelledby="about-founders">
        <div>
          <div className="collection-image">
            <Image
              src="/images/editorial/hero-uniform-rail.webp"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 640px) 88vw, 44vw"
              priority
            />
          </div>
          <p className="garment-photo-caption">{copy.imageCaption}</p>
        </div>
        <div className="story-copy">
          <h2 id="about-founders" className="section-title">
            {copy.needsHeading}
          </h2>
          <p>{copy.needsBody}</p>
          <h3 className="value-card-title" style={{ marginTop: '1.5rem' }}>
            {copy.planHeading}
          </h3>
          <p>{copy.planBody}</p>
          <p>{copy.leadershipNote}</p>
        </div>
      </section>

      <section className="container section about-values-section" aria-labelledby="about-values-title">
        <div className="section-header">
          <h2 id="about-values-title" className="section-title">
            {copy.valuesTitle}
          </h2>
          <p className="lead section-lead-compact">{copy.valuesLead}</p>
        </div>
        <div className="about-values-grid">
          {copy.values.map((val) => (
            <div key={val.title} className="value-card">
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
