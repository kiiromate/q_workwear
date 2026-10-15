import Link from 'next/link';

export default function NotFound() {
  return <div className="container not-found"><h1 className="display">Page not found.</h1><p className="lead">This page may have moved. Explore the collections or return home.</p><Link href="/products" className="button button-primary">Explore collections</Link></div>;
}
