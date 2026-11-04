import { Phone } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { PHONE_DISPLAY, PHONE_TEL } from '../config/contact';

interface CtaBannerProps {
  serviceTitle: string;
  ctaSubtext: string;
  whatsappMessage: string;
  ctaImageSrc: string;
  ctaImageAlt: string;
}

export default function CtaBanner({ serviceTitle, ctaSubtext, whatsappMessage, ctaImageSrc, ctaImageAlt }: CtaBannerProps) {
  return (
    <section className="mx-4 my-8 lg:mx-8 rounded-2xl overflow-hidden bg-gray-100 shadow" aria-label="Call to action">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Image */}
        <div className="hidden lg:block h-56">
          <img
            src={ctaImageSrc}
            alt={ctaImageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            width="560"
            height="224"
          />
        </div>

        {/* Text */}
        <div className="p-8 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight" style={{ color: '#0B1F3F' }}>
            Need {serviceTitle} Repair in Mumbai?
          </h2>
          <p className="text-gray-600 mb-6">{ctaSubtext}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 min-h-[44px]"
              style={{ backgroundColor: '#F97316' }}
            >
              <Phone size={18} />
              Call Now {PHONE_DISPLAY}
            </a>
            <WhatsAppButton message={whatsappMessage} variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}
