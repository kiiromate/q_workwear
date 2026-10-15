import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/content/catalog';

export function CategoryShowcase() {
  return (
    <section className="section container" aria-labelledby="collections-title">
      <div className="section-header">
        <h2 className="section-title" id="collections-title">The collections</h2>
        <Link href="/products" className="text-link">View all <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="home-collections">
        {categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.id}`} className="collection-link">
            <div className="collection-image">
              <Image src={category.image} alt={`${category.name} garment collection`} fill sizes="(max-width: 1050px) 44vw, (min-width: 1488px) 318px, 22vw" />
            </div>
            <div className="collection-caption"><h3>{category.name}</h3><ArrowUpRight aria-hidden="true" /></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
