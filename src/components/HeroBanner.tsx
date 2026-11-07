import { Phone, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { PHONE_DISPLAY, PHONE_TEL } from '../config/contact';

interface HeroBannerProps {
  badgeText: string;
  heading: string;
  subtitle: string;
  whatsappMessage: string;
  heroImageSrc: string;
  heroImageAlt: string;
}

export default function HeroBanner({
  badgeText,
  heading,
  subtitle,
  whatsappMessage,
  heroImageSrc,
  heroImageAlt,
}: HeroBannerProps) {
  return (
    <section
      className="relative overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-14 bg-[#0B1F3F]"
      aria-label="Hero section"
    >
      {/* Full-Height Right Technician Image (Seamless, spans whole height of blue section) */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] lg:w-[48%] pointer-events-none overflow-hidden flex items-stretch justify-end">
        {/* Soft left gradient fade into #0B1F3F */}
        <div
          className="absolute inset-y-0 left-0 w-16 sm:w-28 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #0B1F3F 0%, transparent 100%)',
          }}
        />
        <img
          src={heroImageSrc}
          alt={heroImageAlt}
          className="w-full h-full object-cover object-left-top"
          loading="eager"
          width="1200"
          height="815"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left: text */}
        <div className="w-[58%] sm:w-[52%] lg:w-[52%] py-3 sm:py-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full mb-2 sm:mb-3">
            <CheckCircle2 size={14} style={{ color: '#F97316' }} />
            <span>{badgeText}</span>
          </div>

          <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-2 sm:mb-3">
            {heading}
          </h1>
          <p className="text-white/80 text-xs sm:text-sm font-normal max-w-sm mb-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Buttons row with solid green WhatsApp */}
        <div className="flex flex-row items-center gap-3 pt-2 pb-2 max-w-lg sm:max-w-xl">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex-1 flex items-center justify-center gap-2 text-white font-bold py-3 px-3 rounded-full text-xs sm:text-sm transition-transform active:scale-95 shadow-lg min-h-[46px]"
            style={{ backgroundColor: '#F97316' }}
          >
            <Phone size={16} />
            <span>Call Now {PHONE_DISPLAY}</span>
          </a>

          <WhatsAppButton
            message={whatsappMessage}
            variant="primary"
            className="flex-1 text-xs sm:text-sm min-h-[46px] justify-center"
          />
        </div>
      </div>
    </section>
  );
}
