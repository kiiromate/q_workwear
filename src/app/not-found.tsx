"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname, getSiteCopy, localizeHref } from '@/content/i18n';

export default function NotFound() {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPathname(pathname);
  const copy = getSiteCopy(locale).notFound;
  return (
    <div className="container not-found">
      <h1 className="display">{copy.title}</h1>
      <p className="lead">{copy.lead}</p>
      <Link href={localizeHref('/products', locale)} className="button button-primary">
        {copy.cta}
      </Link>
    </div>
  );
}

