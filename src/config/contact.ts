/** Single source of truth for all contact information */

export const PHONE_DISPLAY = '+91 99300 89870';
export const WHATSAPP_NUMBER = '9199300 89870'; // country code, no +, no spaces
export const PHONE_TEL = '+91 9300 89870';
export const SITE_URL = 'https://starcool.example'; // Replace with real domain once purchased
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
