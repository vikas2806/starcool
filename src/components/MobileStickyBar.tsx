import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/contact';

interface MobileStickyBarProps {
  whatsappMessage?: string;
}

export default function MobileStickyBar({ whatsappMessage = WHATSAPP_MESSAGES.generic }: MobileStickyBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-gray-200 bg-white shadow-lg">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white font-semibold text-sm min-h-[56px] active:opacity-90"
        style={{ backgroundColor: '#F97316' }}
      >
        <Phone size={20} />
        <span className="text-xs">Call Now</span>
      </a>
      <a
        href={buildWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white font-semibold text-sm min-h-[56px] active:opacity-90"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={20} />
        <span className="text-xs">WhatsApp</span>
      </a>
    </div>
  );
}
