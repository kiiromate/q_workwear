import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-heading">
        <h1 id="hero-title" className="display">Workwear.<br />Made for your team.</h1>
        <div className="hero-content-col">
          <p className="lead">Custom uniforms and protective apparel tailored to your sector in Kigali.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">
              Explore collections <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-outline" href="/contact">
              Request a quote
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-frame hero-reveal">
        <Image
          src="/images/showcase/hero-atelier-table.webp"
          alt="Hands crafting custom uniforms at an atelier table with shears, fabric rolls and Q Workwear specifications"
          fill
          priority
          sizes="(min-width: 1488px) 1344px, 92vw"
        />
      </div>
    </section>
  );
}
