import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/contact';

interface WhatsAppButtonProps {
  message: string;
  variant?: 'primary' | 'outline' | 'floating';
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  message,
  variant = 'primary',
  label = 'WhatsApp Us',
  className = '',
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed bottom-20 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={28} color="white" fill="white" />
      </a>
    );
  }

  // Solid green WhatsApp button with white text and white icon
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-bold px-5 py-3 rounded-full text-white shadow-lg transition-transform active:scale-95 hover:opacity-95 focus:outline-none focus-visible:ring-2 min-h-[46px] ${className}`}
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle size={18} fill="white" color="white" />
      <span>{label}</span>
    </a>
  );
}
