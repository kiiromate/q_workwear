import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-heading">
        <h1 id="hero-title" className="display">Workwear.<br />Made for your team.</h1>
        <div>
          <p className="lead">Custom uniforms and branded apparel, tailored in Kigali.</p>
          <Link className="text-link" href="/products">Explore the collections <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="hero-frame">
        <Image src="/images/showcase/hero-atelier-table.webp" alt="Fabric and cutting tools on a tailoring table" fill priority sizes="(min-width: 1488px) 1344px, 92vw" />
      </div>
    </section>
  );
}
