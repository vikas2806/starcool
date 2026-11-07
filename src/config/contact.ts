/** Single source of truth for all contact information */

export const PHONE_DISPLAY = '+91 77388 07317';
export const WHATSAPP_NUMBER = '917738807317'; // country code, no +, no spaces
export const PHONE_TEL = '+917738807317';
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string) || 'https://starcoolmumbai.online';
export const SITE_NAME = 'Star Cool Appliance Repairs';
export const OG_SITE_NAME = 'Star Cool Appliance Repairs';

/** Build a WhatsApp URL with a prefilled message */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  generic: 'Hi Star Cool, I need appliance repair in Mumbai.',
  ac: 'Hi Star Cool, I need AC repair in Mumbai.',
  microwave: 'Hi Star Cool, I need microwave repair in Mumbai.',
  washingMachine: 'Hi Star Cool, I need washing machine repair in Mumbai.',
  refrigerator: 'Hi Star Cool, I need refrigerator repair in Mumbai.',
} as const;
