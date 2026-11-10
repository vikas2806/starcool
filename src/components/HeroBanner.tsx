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
      className="relative overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12 bg-[#0B1F3F]"
      aria-label="Hero section"
    >
      {/* Right Technician Photo Block with SVG clip-path and 7px orange stroke */}
      {/* On mobile: upper-right 45% width, bleeding to top & right. On laptop: right 48-50% width, full height */}
      <div className="hidden sm:block absolute right-0 top-0 h-[260px] xs:h-[290px] sm:h-[340px] md:h-full md:bottom-0 w-[45%] md:w-[48%] lg:w-[50%] pointer-events-none overflow-hidden flex items-stretch justify-end">
        <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="hero-curve-clip-service" clipPathUnits="objectBoundingBox">
              <path d="M 0.12 0 C 0.02 0.3, 0.00 0.6, 0.10 1 L 1 1 L 1 0 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="relative w-full h-full"
          style={{ clipPath: 'url(#hero-curve-clip-service)' }}
        >
          <img
            src={heroImageSrc}
            alt={heroImageAlt}
            className="w-full h-full object-cover object-right-top"
            loading="eager"
            width="1200"
            height="815"
          />
        </div>

        {/* 6-8px orange curved border line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 12 0 C 2 30, 0 60, 10 100"
            stroke="#F97316"
            strokeWidth="7"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left: text (55% width on mobile, 50% on laptop) */}
        <div className="w-[55%] md:w-[50%] lg:w-[50%] py-2 sm:py-4 md:py-6">
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

        {/* Mobile only: show hero image stacked under text */}
        <div className="block sm:hidden w-full h-64 md:h-80 relative my-3 overflow-hidden rounded-xl">
          <img
            src={heroImageSrc}
            alt={heroImageAlt}
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="1200"
            height="815"
          />
        </div>

        {/* Buttons row: below text and photo on mobile, full width */}
        <div className="flex flex-row items-center gap-3 pt-3 pb-2 w-full md:max-w-lg">
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
