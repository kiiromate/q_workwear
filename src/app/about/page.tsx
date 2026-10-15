import Image from 'next/image';
import { aboutPageContent } from '@/content/pages';
import { CTASection } from '@/components/home/CTASection';

export const metadata = { title: 'About', description: 'Meet Q Workwear, the Kigali workwear and uniform business led by Quddus and Tinah.' };

export default function AboutPage() {
  return <>
    <div className="container page-intro"><h1 className="display">{aboutPageContent.title}</h1></div>
    <section className="container story-grid about-story" aria-labelledby="about-founders">
      <div className="collection-image"><Image src="/images/showcase/hero-atelier-table.webp" alt="A close view of fabric and tailoring tools" fill sizes="(max-width: 640px) 88vw, 44vw" priority /></div>
      <div className="story-copy"><h2 id="about-founders" className="section-title">Quddus & Tinah.</h2><p>{aboutPageContent.introduction}</p><p>{aboutPageContent.approach}</p></div>
    </section>
    <CTASection />
  </>;
}
