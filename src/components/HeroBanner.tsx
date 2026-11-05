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
      className="relative overflow-hidden pt-20"
      style={{ backgroundColor: '#0B1F3F', minHeight: '420px' }}
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 min-h-[400px] lg:min-h-[420px]">
          {/* Left: text */}
          <div className="py-10 lg:py-14 z-10 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-5">
              <CheckCircle2 size={16} style={{ color: '#F97316' }} />
              {badgeText}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-white/80 text-base mb-6 max-w-sm">{subtitle}</p>

            {/* Buttons with generous bottom gap */}
            <div className="flex flex-wrap gap-3 pb-8">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px]"
                style={{ backgroundColor: '#F97316' }}
              >
                <Phone size={18} />
                Call Now {PHONE_DISPLAY}
              </a>
              <WhatsAppButton message={whatsappMessage} variant="outline" />
            </div>
          </div>

          {/* Right: image with orange accent */}
          <div className="relative hidden lg:flex items-end justify-center h-full">
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10"
              style={{
                background: 'radial-gradient(ellipse at left, #F97316 0%, transparent 70%)',
                opacity: 0.6,
              }}
            />
            <img
              src={heroImageSrc}
              alt={heroImageAlt}
              className="relative z-0 h-full max-h-[420px] w-full object-cover object-top rounded-bl-3xl"
              width="560"
              height="420"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Mobile hero image (below text) */}
      <div className="lg:hidden w-full h-56 sm:h-64 mt-0 border-t border-white/10">
        <img
          src={heroImageSrc}
          alt={heroImageAlt}
          className="w-full h-full object-cover object-top"
          width="400"
          height="224"
          loading="eager"
        />
      </div>
    </section>
  );
}
