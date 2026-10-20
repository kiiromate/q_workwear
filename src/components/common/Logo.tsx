import Link from 'next/link';
import Image from 'next/image';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';

interface LogoProps {
  variant?: 'full' | 'mark';
  theme?: 'light' | 'dark' | 'brand';
  className?: string;
  href?: string;
  locale?: Locale;
  onClick?: () => void;
}

export function Logo({
  variant = 'full',
  theme = 'light',
  className = '',
  href,
  locale = 'en',
  onClick,
}: LogoProps) {
  const image = theme === 'light' ? 'q-mark-red.png' : 'q-mark-white.png';
  const copy = getSiteCopy(locale);
  const resolvedHref = href !== undefined ? href : localizeHref('/', locale);
  const content = (
    <>
      <Image src={`/images/logo/${image}`} alt="" width={40} height={40} />
      {variant === 'full' && <span className="brand-name">Q Workwear</span>}
    </>
  );
  return resolvedHref ? (
    <Link href={resolvedHref} onClick={onClick} className={`brand-logo ${className}`} aria-label={copy.nav.homeAria}>
      {content}
    </Link>
  ) : (
    <span className={`brand-logo ${className}`}>{content}</span>
  );
}

