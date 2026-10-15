import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContentStatusNotice } from '@/components/common/ContentStatusNotice';
import { siteConfig } from '@/content/site';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: `${siteConfig.name} | Custom Workwear & Uniform Tailoring in Kigali`,
    template: `%s | ${siteConfig.name} Kigali`,
  },
  description: siteConfig.description,
  keywords: config.keywords,
  authors: [{ name: 'Quddus & Tinah' }],
  creator: 'Q Workwear',
  openGraph: {
    type: 'website',
    locale: 'en_RW',
    url: config.siteUrl,
    title: `${siteConfig.name} | Custom Workwear & Uniforms in Kigali`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: config.defaultOgImage,
        width: 640,
        height: 640,
        alt: 'Q Workwear Kigali Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Custom Workwear in Kigali`,
    description: siteConfig.description,
    images: [config.defaultOgImage],
  },
  icons: {
    icon: '/images/logo/q-workwear-original.png',
    apple: '/images/logo/q-workwear-original.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-white text-zinc-900 antialiased">
        <ContentStatusNotice />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
