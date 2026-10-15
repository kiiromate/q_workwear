import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl, isWhatsAppAvailable } from '@/lib/whatsapp';

interface WhatsAppButtonProps { message?: string; label?: string; size?: 'sm' | 'md' | 'lg'; className?: string; }

export function WhatsAppButton({ message, label, className = '' }: WhatsAppButtonProps) {
  const available = isWhatsAppAvailable();
  const text = available ? (label || 'Enquire on WhatsApp') : 'Request a quote';
  const content = <>{text}<ArrowUpRight aria-hidden="true" size={18} /></>;
  const href = buildWhatsAppUrl(message);
  return available ? <a className={`button button-primary ${className}`} href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <Link className={`button button-primary ${className}`} href={href}>{content}</Link>;
}
