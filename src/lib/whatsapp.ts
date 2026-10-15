import { siteConfig } from '@/content/site';

export const DEFAULT_WHATSAPP_MESSAGE = 'Hello Q Workwear, I would like to discuss uniforms for my team.';

export function normalizePhoneNumber(phone: string): string {
  return phone.trim().replace(/^\+/, '').replace(/[\s()-]/g, '');
}

export function isWhatsAppAvailable(): boolean {
  const phone = normalizePhoneNumber(siteConfig.contact.whatsappNumber);
  return siteConfig.contact.isWhatsappVerified && /^[1-9]\d{7,14}$/.test(phone);
}

export function buildWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  if (!isWhatsAppAvailable()) return `/contact?message=${encodeURIComponent(message)}`;
  return `https://wa.me/${normalizePhoneNumber(siteConfig.contact.whatsappNumber)}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE): string { return buildWhatsAppUrl(message); }
export function getQuoteMessage(productName?: string): string {
  return productName ? `Hello Q Workwear, I would like a quotation for ${productName}.` : DEFAULT_WHATSAPP_MESSAGE;
}
