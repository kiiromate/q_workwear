import { siteConfig } from '@/content/site';

/**
 * Builds a valid WhatsApp click-to-chat URL using the official wa.me protocol.
 * If the business phone number is not yet verified by Q and Tinah, this function
 * safely returns a fallback route to `/contact` to avoid dead links or messaging strangers.
 */
export function buildWhatsAppUrl(
  message: string = 'Hello Q Workwear, I would like to request a quotation for custom uniforms.',
  customPhone?: string
): { url: string; isVerified: boolean; message: string } {
  const isVerified = siteConfig.contact.isWhatsappVerified;
  const rawNumber = customPhone || siteConfig.contact.whatsappNumber;

  if (!isVerified || !rawNumber) {
    // Graceful fallback to the contact page with prefilled contextual parameter
    const encodedMessage = encodeURIComponent(message);
    return {
      url: `/contact?intent=quote&draft=${encodedMessage}`,
      isVerified: false,
      message,
    };
  }

  // Strip all non-digit characters for clean E.164 without leading plus
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);

  return {
    url: `https://wa.me/${cleanNumber}?text=${encoded}`,
    isVerified: true,
    message,
  };
}

/**
 * Convenience builder for product-specific quotation requests
 */
export function buildProductInquiryUrl(productTitle: string, categoryName: string): {
  url: string;
  isVerified: boolean;
  message: string;
} {
  const message = `Hello Q Workwear, I am interested in ordering custom "${productTitle}" under your ${categoryName} category. Could you please share quotation details, fabric options, and minimum order requirements?`;
  return buildWhatsAppUrl(message);
}

/**
 * Convenience builder for general category quotation inquiries
 */
export function buildCategoryInquiryUrl(categoryName: string): {
  url: string;
  isVerified: boolean;
  message: string;
} {
  const message = `Hello Q Workwear, I would like to enquire about your custom ${categoryName} uniform offerings for our team in Kigali.`;
  return buildWhatsAppUrl(message);
}
