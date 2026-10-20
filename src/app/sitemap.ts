import { MetadataRoute } from 'next';
import { config } from '@/lib/config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.siteUrl;
  const now = new Date();

  const paths = [
    { en: '/', fr: '/fr/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { en: '/products/', fr: '/fr/products/', changeFrequency: 'weekly' as const, priority: 0.9 },
    { en: '/work/', fr: '/fr/work/', changeFrequency: 'monthly' as const, priority: 0.8 },
    { en: '/about/', fr: '/fr/about/', changeFrequency: 'monthly' as const, priority: 0.7 },
    { en: '/contact/', fr: '/fr/contact/', changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  return paths.flatMap((entry) => [
    {
      url: `${baseUrl}${entry.en}`,
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    },
    {
      url: `${baseUrl}${entry.fr}`,
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    },
  ]);
}

