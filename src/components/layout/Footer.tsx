import Link from 'next/link';
import { Logo } from '@/components/common/Logo';
import { siteConfig } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div><Logo /><p>Custom workwear. Kigali, Rwanda.</p></div>
        <nav aria-label="Footer navigation" className="footer-nav">
          {siteConfig.navigation.filter((item) => item.href !== '/').map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Q Workwear</p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
    </footer>
  );
}
