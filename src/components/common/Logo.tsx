import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'mark';
  theme?: 'light' | 'dark' | 'brand';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Logo({ variant = 'full', theme = 'light', className = '', href = '/', onClick }: LogoProps) {
  const image = theme === 'light' ? 'q-mark-red.png' : 'q-mark-white.png';
  const content = <><Image src={`/images/logo/${image}`} alt="" width={40} height={40} />{variant === 'full' && <span className="brand-name">Q Workwear</span>}</>;
  return href ? <Link href={href} onClick={onClick} className={`brand-logo ${className}`} aria-label="Q Workwear home">{content}</Link> : <span className={`brand-logo ${className}`}>{content}</span>;
}
