import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

export const metadata = {
  title: 'Lookbook',
  description: 'Explore corporate, hospitality, industrial, and custom branded workwear styles crafted by Q Workwear in Kigali.',
};

interface LookbookItem {
  id: string;
  sectorTag: string;
  title: string;
  description: string;
  image: string;
  categoryLink: string;
  enquiryLink: string;
}

const lookbookItems: LookbookItem[] = [
  {
    id: 'corp-suiting',
    sectorTag: 'Corporate // Front Desk',
    title: 'Executive Suiting & Office Shirts',
    description: 'Tailored blazers with pick-stitched lapels and breathable Oxford shirts crafted for corporate reception and management teams.',
    image: '/images/showcase/cat-corporate-suiting.webp',
    categoryLink: '/products?category=corporate',
    enquiryLink: '/contact?product=Executive%20Suiting',
  },
  {
    id: 'hosp-culinary',
    sectorTag: 'Hospitality // Culinary',
    title: 'Chef Jackets & Duck Canvas Aprons',
    description: 'Double-breasted chef coats with cloth knot fasteners, paired with heavy washed canvas aprons featuring antique brass grommets and bar-tack reinforcements.',
    image: '/images/showcase/cat-hospitality-culinary.webp',
    categoryLink: '/products?category=hospitality',
    enquiryLink: '/contact?product=Chef%20Jackets%20%26%20Aprons',
  },
  {
    id: 'ind-safety',
    sectorTag: 'Industrial // Technical',
    title: 'Heavy-Duty Overalls & High-Vis Apparel',
    description: 'Tough cotton drill workwear with micro-prismatic reflective trim, reinforced seams, and heavy brass zippers for workshops, engineering, and agriculture.',
    image: '/images/showcase/cat-industrial-safety.webp',
    categoryLink: '/products?category=industrial',
    enquiryLink: '/contact?product=Heavy-Duty%20Overalls',
  },
  {
    id: 'brand-apparel',
    sectorTag: 'Branded // Teams & Events',
    title: 'Custom Piqué Polos & Structured Caps',
    description: 'Breathable honeycomb piqué polos with brand-red collar tipping and 6-panel twill caps finished with high-density 3D puff embroidery.',
    image: '/images/showcase/cat-branded-apparel.webp',
    categoryLink: '/products?category=branded',
    enquiryLink: '/contact?product=Custom%20Polos%20%26%20Caps',
  },
  {
    id: 'atelier-craft',
    sectorTag: 'Atelier // Craftsmanship',
    title: 'Bespoke Patternmaking & Cutting',
    description: 'Every uniform project begins with precise material selection, pattern drafting, and custom sizing specifications at our Kigali cutting table.',
    image: '/images/showcase/hero-atelier-table.webp',
    categoryLink: '/products',
    enquiryLink: '/contact?product=Bespoke%20Uniform%20Commission',
  },
  {
    id: 'atelier-swatches',
    sectorTag: 'Atelier // Prototyping',
    title: 'Fabric Swatching & Hardware',
    description: 'Detailed exploration of colorways, twill weaves, mother-of-pearl buttons, and heavy-duty snaps to ensure your team’s uniforms perform on the job.',
    image: '/images/showcase/tailor-craftsmanship.webp',
    categoryLink: '/products',
    enquiryLink: '/contact?product=Custom%20Fabric%20Consultation',
  },
];

export default function WorkPage() {
  return (
    <>
      <div className="container page-intro">
        <span className="section-eyebrow">Lookbook &amp; Inspiration</span>
        <h1 className="display">Workwear in focus.</h1>
        <p className="lead">
          Representative uniform studies from our Kigali atelier. Explore styles across corporate, hospitality, industrial, and branded apparel, or discuss a custom design for your team.
        </p>
      </div>

      <div className="container lookbook-body">
        {/* Visual Lane Notice */}
        <div className="lookbook-lane-badge">
          <Sparkles className="lane-badge-icon" aria-hidden="true" size={16} />
          <span>Curated Uniform Inspirations // Representative Atelier Concepts</span>
        </div>

        <div className="lookbook-grid">
          {lookbookItems.map((item) => (
            <article key={item.id} className="lookbook-card" aria-labelledby={`card-title-${item.id}`}>
              <div className="lookbook-card-image-wrap">
                <Image
                  src={item.image}
                  alt={`${item.title} tailored uniform study`}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1050px) 46vw, 31vw"
                  className="lookbook-card-img"
                />
                <div className="lookbook-card-overlay">
                  <span className="card-concept-pill">{item.sectorTag}</span>
                </div>
              </div>
              <div className="lookbook-card-content">
                <span className="card-provenance-tag">Uniform inspiration</span>
                <h2 id={`card-title-${item.id}`} className="lookbook-card-title">{item.title}</h2>
                <p className="lookbook-card-desc">{item.description}</p>
                <div className="lookbook-card-actions">
                  <Link href={item.categoryLink} className="text-link">
                    <span>View collection</span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                  <Link href={item.enquiryLink} className="button button-outline button-small">
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="lookbook-custom-callout">
          <div className="custom-callout-text">
            <h3>Need a uniform not shown here?</h3>
            <p>
              Q Workwear tailors custom solutions for commercial offices, clinics, security, construction, and hospitality teams across Rwanda. Bring your colorways, functional needs, or existing uniforms.
            </p>
          </div>
          <Link href="/contact" className="button button-primary">
            <span>Discuss your custom order</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>

      <CTASection />
    </>
  );
}
