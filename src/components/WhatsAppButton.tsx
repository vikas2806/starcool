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
  variant = 'outline',
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
        className={`fixed bottom-24 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={28} color="white" fill="white" />
      </a>
    );
  }

  if (variant === 'primary') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 min-h-[44px] ${className}`}
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={20} />
        {label}
      </a>
    );
  }

  // outline (default)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-white border-2 transition-colors hover:bg-green-50 focus:outline-none focus-visible:ring-2 min-h-[44px] ${className}`}
      style={{ borderColor: '#25D366', color: '#25D366' }}
    >
      <MessageCircle size={20} style={{ color: '#25D366' }} />
      {label}
    </a>
  );
}
