import Image from 'next/image';
import { aboutPageContent } from '@/content/pages';
import { CTASection } from '@/components/home/CTASection';

export const metadata = {
  title: 'About',
  description: 'Meet Q Workwear, the Kigali workwear and uniform business led by Quddus and Tinah.',
};

export default function AboutPage() {
  return (
    <>
      <div className="container page-intro">
        <span className="section-eyebrow">Local manufacturing</span>
        <h1 className="display">{aboutPageContent.title}</h1>
        <p className="lead">{aboutPageContent.mission}</p>
      </div>

      <section className="container story-grid about-story" aria-labelledby="about-founders">
        <div className="collection-image">
          <Image
            src="/images/showcase/hero-atelier-table.webp"
            alt="Tailor cutting table at Q Workwear atelier with shears, fabric rolls and order specifications"
            fill
            sizes="(max-width: 640px) 88vw, 44vw"
            priority
          />
        </div>
        <div className="story-copy">
          <h2 id="about-founders" className="section-title">Quddus &amp; Tinah.</h2>
          <p>{aboutPageContent.introduction}</p>
          <p>{aboutPageContent.approach}</p>
        </div>
      </section>

      <section className="container section about-values-section" aria-labelledby="about-values-title">
        <div className="section-header">
          <h2 id="about-values-title" className="section-title">Our core values.</h2>
          <p className="lead section-lead-compact">Principles that guide our workshop and client partnerships across Kigali.</p>
        </div>
        <div className="about-values-grid">
          {aboutPageContent.values.map((val, idx) => (
            <div key={idx} className="value-card">
              <span className="value-number">0{idx + 1}</span>
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
