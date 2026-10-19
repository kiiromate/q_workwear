import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
  imageAlt: string;
  aspect?: 'portrait' | 'landscape';
  categoryLink: string;
  enquiryLink: string;
}

const lookbookItems: LookbookItem[] = [
  {
    id: 'corp-suiting',
    sectorTag: 'Corporate',
    title: 'Executive Blazers & Office Shirts',
    description: 'Structured navy blazers, pressed button-down shirts, and coordinated formal trousers for reception and management teams.',
    image: '/images/showcase/cat-corporate-suiting.webp',
    imageAlt: 'Structured deep-navy blazer with subtle chest crest, light-blue dress shirt, and charcoal formal trousers on studio hangers',
    aspect: 'portrait',
    categoryLink: '/products?category=corporate',
    enquiryLink: '/contact?product=Executive%20Blazers%20%26%20Office%20Shirts',
  },
  {
    id: 'corp-cuff-fit',
    sectorTag: 'Corporate',
    title: 'Tailored Shirt Cuffs & Monogramming',
    description: 'Crisp long-sleeved office shirts with subtle cuff or chest embroidery paired with tailored charcoal suiting.',
    image: '/images/editorial/hero-model-detail.webp',
    imageAlt: 'Close-up of a tailored charcoal suit sleeve and light-blue shirt cuff with an embroidered red Q mark',
    aspect: 'landscape',
    categoryLink: '/products?category=corporate',
    enquiryLink: '/contact?product=Office%20Shirts',
  },
  {
    id: 'hosp-culinary',
    sectorTag: 'Hospitality',
    title: 'Chef Jackets & Canvas Bib Aprons',
    description: 'Double-breasted cotton twill chef jackets with cloth buttons alongside heavy olive canvas bib aprons.',
    image: '/images/showcase/cat-hospitality-culinary.webp',
    imageAlt: 'Ivory double-breasted chef jacket with red Q chest mark beside an olive canvas bib apron with woven straps',
    aspect: 'portrait',
    categoryLink: '/products?category=hospitality',
    enquiryLink: '/contact?product=Chef%20Jackets%20%26%20Aprons',
  },
  {
    id: 'hosp-apron-detail',
    sectorTag: 'Hospitality',
    title: 'Reinforced Apron Pockets & Hardware',
    description: 'Heavy washed canvas aprons finished with brass corner rivets, adjustable webbing straps, and clean pocket branding.',
    image: '/images/editorial/hospitality-apron-detail.webp',
    imageAlt: 'Close-up of an olive heavy canvas apron chest pocket with brass rivets and stitched Q Workwear mark',
    aspect: 'portrait',
    categoryLink: '/products?category=hospitality',
    enquiryLink: '/contact?product=Aprons',
  },
  {
    id: 'ind-work-set',
    sectorTag: 'Industrial',
    title: 'Work Jackets, Trousers & High-Vis Vests',
    description: 'Heavy-duty navy twill work jackets with stitched chest patches, matching utility trousers, and high-visibility reflective vests.',
    image: '/images/showcase/cat-industrial-safety.webp',
    imageAlt: 'Deep-navy cotton twill work jacket with stitched Q Workwear patch, utility trousers, and yellow high-visibility vest',
    aspect: 'portrait',
    categoryLink: '/products?category=industrial',
    enquiryLink: '/contact?product=Work%20Jackets%20%26%20High-Vis%20Vests',
  },
  {
    id: 'ind-coverall',
    sectorTag: 'Industrial',
    title: 'One-Piece Cotton Twill Coveralls',
    description: 'Full-coverage workshop coveralls with snap-flap chest pockets, stitched name/logo patches, and durable double-needle seams.',
    image: '/images/editorial/industrial-coverall.webp',
    imageAlt: 'Deep-navy heavy cotton twill one-piece coverall on a tailor form with stitched Q Workwear chest patch',
    aspect: 'portrait',
    categoryLink: '/products?category=industrial',
    enquiryLink: '/contact?product=Work%20overalls',
  },
  {
    id: 'ind-seam-detail',
    sectorTag: 'Industrial',
    title: 'Bar-Tack Reinforcement & Heavy Zippers',
    description: 'Close-up of reinforced pocket corners, heavy-duty brass zipper closures, and direct twill embroidery for demanding job sites.',
    image: '/images/editorial/industrial-seam-detail.webp',
    imageAlt: 'Macro photograph of navy twill workwear seam with double topstitching, bar-tack reinforcement, brass zipper, and white Q mark',
    aspect: 'landscape',
    categoryLink: '/products?category=industrial',
    enquiryLink: '/contact?product=Industrial%20Workwear',
  },
  {
    id: 'brand-collection',
    sectorTag: 'Branded apparel',
    title: 'Piqué Polos, Crewneck Tees & Caps',
    description: 'Coordinated team kits combining tipped honeycomb piqué polos, folded combed-cotton T-shirts, and embroidered six-panel caps.',
    image: '/images/showcase/cat-branded-apparel.webp',
    imageAlt: 'Navy piqué polo with red collar tipping and chest embroidery beside a folded off-white crewneck T-shirt and navy cap',
    aspect: 'portrait',
    categoryLink: '/products?category=branded',
    enquiryLink: '/contact?product=Polos%2C%20T-shirts%20%26%20Caps',
  },
  {
    id: 'brand-polo-fit',
    sectorTag: 'Branded apparel',
    title: 'Embroidered Team Polo Fit',
    description: 'Breathable charcoal honeycomb piqué polo shirts tailored for everyday staff wear, field coordinators, and events.',
    image: '/images/editorial/branded-polo-fit.webp',
    imageAlt: 'Charcoal honeycomb piqué polo shirt worn on torso with embroidered white Q Workwear mark on the left chest',
    aspect: 'portrait',
    categoryLink: '/products?category=branded',
    enquiryLink: '/contact?product=Polos',
  },
  {
    id: 'brand-cap-detail',
    sectorTag: 'Branded apparel',
    title: 'Structured Six-Panel Caps & Event Tees',
    description: 'Curved-brim cotton twill caps with front-crown embroidery paired with heavyweight crew-neck T-shirts in your team palette.',
    image: '/images/editorial/branded-cap-tee-detail.webp',
    imageAlt: 'Close-up of a navy six-panel twill cap with white Q crown embroidery beside a folded off-white cotton T-shirt',
    aspect: 'landscape',
    categoryLink: '/products?category=branded',
    enquiryLink: '/contact?product=Caps',
  },
  {
    id: 'atelier-rail',
    sectorTag: 'Cross-sector range',
    title: 'Coordinated Multi-Department Uniforms',
    description: 'Align reception suiting, kitchen chefwear, maintenance jackets, and everyday staff polos under one consistent brand program.',
    image: '/images/editorial/hero-uniform-rail.webp',
    imageAlt: 'Studio garment rack displaying a navy blazer, white chef jacket, navy work jacket, and cream polo shirt',
    aspect: 'landscape',
    categoryLink: '/products',
    enquiryLink: '/contact?product=Multi-Department%20Uniform%20Order',
  },
  {
    id: 'atelier-cuff-label',
    sectorTag: 'Craftsmanship',
    title: 'Woven Labels, Swatches & Custom Finishing',
    description: 'From fabric swatch selection to woven garment labels and embroidery placement, every detail is agreed before production.',
    image: '/images/editorial/atelier-cuff-detail.webp',
    imageAlt: 'Artisan hands holding a navy shirt cuff with a stitched Q Workwear woven label beside fabric swatches and shears',
    aspect: 'landscape',
    categoryLink: '/products',
    enquiryLink: '/contact?product=Custom%20Uniform%20Specification',
  },
];

export default function WorkPage() {
  return (
    <>
      <div className="container page-intro">
        <span className="section-eyebrow">Lookbook</span>
        <h1 className="display">Workwear in focus.</h1>
        <p className="lead">
          Explore garment styles, fabric textures, and branding placements across corporate, hospitality, industrial, and team apparel.
        </p>
        <p className="lookbook-disclosure-note">
          Illustrative examples of garment styles, fabrics, and branding placements. Final specifications are agreed per order.
        </p>
      </div>

      <div className="container lookbook-body">
        <div className="lookbook-grid">
          {lookbookItems.map((item) => (
            <article key={item.id} className="lookbook-card" aria-labelledby={`card-title-${item.id}`}>
              <div className={`lookbook-card-image-wrap ${item.aspect === 'portrait' ? 'lookbook-aspect-portrait' : 'lookbook-aspect-landscape'}`}>
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
            <h2>Need a uniform not shown here?</h2>
            <p>
              Q Workwear tailors custom solutions for commercial offices, clinics, security, schools, hospitality, and industrial teams across Rwanda. Bring your colorways, functional needs, or reference garments.
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
