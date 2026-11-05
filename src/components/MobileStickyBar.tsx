import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/contact';

interface MobileStickyBarProps {
  whatsappMessage?: string;
}

export default function MobileStickyBar({ whatsappMessage = WHATSAPP_MESSAGES.generic }: MobileStickyBarProps) {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40 flex items-center gap-2">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-full text-white font-bold text-xs shadow-xl transition-transform active:scale-95 min-h-[46px]"
        style={{ backgroundColor: '#F97316' }}
      >
        <Phone size={16} />
        <span>Call Now {PHONE_DISPLAY}</span>
      </a>
      <a
        href={buildWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-full text-white font-bold text-xs shadow-xl transition-transform active:scale-95 min-h-[46px]"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={16} fill="white" color="white" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
