import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/content/catalog';
import { CTASection } from '@/components/home/CTASection';

export const metadata = { title: 'Lookbook', description: 'Explore corporate, hospitality, industrial and branded workwear styles with Q Workwear in Kigali.' };

export default function WorkPage() {
  return <>
    <div className="container page-intro"><h1 className="display">Workwear in focus.</h1><p className="lead">Four collections. Different ways to dress a team.</p></div>
    <div className="container collection-grid lookbook-body">
      {categories.map((category) => <Link key={category.id} className="collection-link" href={`/products?category=${category.id}`}>
        <div className="collection-image"><Image src={category.image} alt={`${category.name} clothing study`} fill sizes="(max-width: 640px) 88vw, 44vw" /></div>
        <div className="collection-caption"><h2>{category.name}</h2><ArrowUpRight aria-hidden="true" /></div><p>{category.description}</p>
      </Link>)}
    </div>
    <CTASection />
  </>;
}
