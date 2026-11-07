import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Search,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  WHATSAPP_MESSAGES,
  buildWhatsAppUrl,
} from '../config/contact';

// Real enhanced high-res images (WebP)
import heroLandingImg from '../assets/images/hero-landing.webp';
import acApplianceImg from '../assets/images/appliance-ac.webp';
import fridgeApplianceImg from '../assets/images/appliance-refrigerator.webp';
import washerApplianceImg from '../assets/images/appliance-washing-machine.webp';
import microwaveApplianceImg from '../assets/images/appliance-microwave.webp';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  telephone: PHONE_TEL,
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
  },
  url: 'https://starcoolmumbai.online/',
  description:
    'Fast, reliable and affordable appliance repair services at your doorstep in Mumbai. AC, refrigerator, washing machine and microwave repair.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair in Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refrigerator Repair in Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Washing Machine Repair in Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microwave Repair in Mumbai' } },
    ],
  },
};

const servicesList = [
  {
    title: 'AC Repair & Service',
    slug: 'ac-repair-mumbai',
    image: acApplianceImg,
    alt: 'Air conditioner unit repair service in Mumbai',
  },
  {
    title: 'Refrigerator Repair',
    slug: 'refrigerator-repair-mumbai',
    image: fridgeApplianceImg,
    alt: 'Refrigerator repair service in Mumbai',
  },
  {
    title: 'Washing Machine Repair',
    slug: 'washing-machine-repair-mumbai',
    image: washerApplianceImg,
    alt: 'Washing machine repair service in Mumbai',
  },
  {
    title: 'Microwave Repair',
    slug: 'microwave-repair-mumbai',
    image: microwaveApplianceImg,
    alt: 'Microwave oven repair service in Mumbai',
  },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Appliance Repair in Mumbai | Doorstep Service | Star Cool"
        description="Top-rated appliance repair in Mumbai. Star Cool provides fast doorstep repair for ACs, refrigerators, washing machines, and microwaves. Call +91 77388 07317."
        canonical="/"
        preloadImage={heroLandingImg}
        jsonLd={homeJsonLd}
      />
      <Navbar />

      <main className="pb-16 lg:pb-0">
        {/* ===================== HERO SECTION ===================== */}
        <section
          className="relative pt-20 sm:pt-24 pb-10 sm:pb-14 overflow-hidden"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-label="Hero"
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
              src={heroLandingImg}
              alt="Star Cool expert technician servicing appliances in Mumbai"
              className="w-full h-full object-cover object-left-top"
              loading="eager"
              width="1200"
              height="815"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Left Content Column (aligned with image in same viewport) */}
            <div className="w-[58%] sm:w-[52%] lg:w-[52%] py-3 sm:py-6">
              <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-2 sm:mb-4">
                Fast &amp; Reliable<br />
                Appliance Repair<br />
                <span className="text-white">in Mumbai at Your Doorstep</span>
              </h1>

              {/* Serving Across Mumbai Pill */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-sm mb-4 sm:mb-6"
                style={{ backgroundColor: '#F97316' }}
              >
                <span>Serving Across Mumbai</span>
                <span>🏙️</span>
              </div>
            </div>

            {/* Buttons Row with solid green WhatsApp and generous gap below */}
            <div className="flex flex-row items-center gap-3 pt-2 pb-2 max-w-lg sm:max-w-xl">
              {/* Call Now Button (Orange) */}
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95 text-xs sm:text-sm min-h-[46px]"
                style={{ backgroundColor: '#F97316' }}
              >
                <Phone size={16} />
                <span>Call Now {PHONE_DISPLAY}</span>
              </a>

              {/* WhatsApp Us Button (Solid Green with white text) */}
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95 text-xs sm:text-sm min-h-[46px]"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={18} fill="white" color="white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== APPLIANCE REPAIR SERVICES WE OFFER ===================== */}
        <section className="bg-white py-10 sm:py-14" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                style={{ backgroundColor: '#FFF3E8', color: '#F97316' }}
              >
                Our Services
              </span>
              <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3F]">
                Appliance Repair Services We Offer
              </h2>
            </div>

            {/* 2x2 Service Cards with real crisp appliance images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {servicesList.map((service) => (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
                >
                  {/* Left: Real appliance image + Title */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-16 h-14 sm:w-20 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center p-1 border border-gray-100">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                        loading="lazy"
                        width="80"
                        height="64"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#0B1F3F] group-hover:text-orange-500 transition-colors leading-tight">
                      {service.title}
                    </span>
                  </div>

                  {/* Right: Orange circular arrow button */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform ml-2"
                    style={{ backgroundColor: '#F97316' }}
                  >
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== WHY CHOOSE STAR COOL? ===================== */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" aria-labelledby="why-heading">
          <div
            className="rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-sm"
            style={{ backgroundColor: '#FFF9F4' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Heading */}
              <div className="md:col-span-5 text-left">
                <h3
                  id="why-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3F] leading-tight mb-2"
                >
                  Why Choose<br />Star Cool?
                </h3>
                <div className="w-16 h-1 rounded-full mb-3" style={{ backgroundColor: '#F97316' }} />
              </div>

              {/* Right Checklist */}
              <div className="md:col-span-7 space-y-2.5">
                {[
                  'Professional & Dependable Service',
                  'Skilled & Verified Technicians',
                  'Doorstep Service Across Mumbai',
                  'Fair & Transparent Pricing',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0"
                      style={{ color: '#F97316' }}
                      fill="#F97316"
                      color="white"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== OUR SIMPLE REPAIR PROCESS ===================== */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" aria-labelledby="process-heading">
          <div
            className="rounded-3xl p-6 sm:p-8 text-white shadow-md"
            style={{ backgroundColor: '#0B1F3F' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Heading */}
              <div className="md:col-span-4 text-left">
                <h3 id="process-heading" className="text-xl sm:text-2xl font-bold leading-tight">
                  Our Simple<br />Repair Process
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-orange-400">
                  (Quick &amp; Hassle-Free)
                </span>
              </div>

              {/* 3 Step pipeline */}
              <div className="md:col-span-8 flex items-center justify-between gap-1 sm:gap-3">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm mb-1.5">
                    <Calendar size={22} style={{ color: '#F97316' }} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                    1. Book a<br />Service
                  </span>
                </div>

                <span className="text-orange-400 font-bold text-sm sm:text-base -mt-4">&#8594;</span>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm mb-1.5">
                    <Search size={22} style={{ color: '#F97316' }} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                    2. Inspection<br />
                    <span className="text-[10px] text-white/70">(Issue Check)</span>
                  </span>
                </div>

                <span className="text-orange-400 font-bold text-sm sm:text-base -mt-4">&#8594;</span>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm mb-1.5">
                    <Wrench size={22} style={{ color: '#F97316' }} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                    3. Repair &amp; Test<br />
                    <span className="text-[10px] text-white/70">(Fixed &amp; Ready)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating circular WhatsApp Button (Desktop & Mobile) */}
      <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="floating" />

      {/* Sticky Bottom Bar on Mobile with Call Now and WhatsApp Us */}
      <MobileStickyBar whatsappMessage={WHATSAPP_MESSAGES.generic} />
    </>
  );
}
