import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Zap,
  ShieldCheck,
  Settings,
  CheckCircle2,
  Calendar,
  Search,
  Wrench,
  ChevronLeft,
  ChevronRight,
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
  SITE_URL,
  SITE_NAME,
  WHATSAPP_MESSAGES,
  buildWhatsAppUrl,
} from '../config/contact';

// Real appliance images extracted from the design
import heroLandingImg from '../assets/images/hero-landing.jpg';
import acApplianceImg from '../assets/images/cta-ac.jpg';
import fridgeApplianceImg from '../assets/images/cta-refrigerator.jpg';
import washerApplianceImg from '../assets/images/cta-washing-machine.jpg';
import microwaveApplianceImg from '../assets/images/cta-microwave.jpg';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  telephone: PHONE_TEL,
  areaServed: 'Mumbai',
  url: SITE_URL,
  description:
    'Fast, reliable and affordable appliance repair services at your doorstep in Mumbai. AC, refrigerator, washing machine and microwave repair.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair & Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refrigerator Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Washing Machine Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microwave Repair' } },
    ],
  },
};

const servicesList = [
  {
    title: 'AC Repair & Service',
    slug: 'ac-repair',
    image: acApplianceImg,
    alt: 'Air conditioner unit repair service in Mumbai',
  },
  {
    title: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    image: fridgeApplianceImg,
    alt: 'Refrigerator repair service in Mumbai',
  },
  {
    title: 'Washing Machine Repair',
    slug: 'washing-machine-repair',
    image: washerApplianceImg,
    alt: 'Washing machine repair service in Mumbai',
  },
  {
    title: 'Microwave Repair',
    slug: 'microwave-repair',
    image: microwaveApplianceImg,
    alt: 'Microwave oven repair service in Mumbai',
  },
];

const testimonials = [
  {
    quote:
      'Very professional and quick service. My AC was fixed on the same day. Highly recommend Star Cool!',
    author: 'Mumbai Customer',
  },
  {
    quote:
      'Technician arrived on time and resolved our refrigerator cooling issue with genuine spare parts. Excellent work!',
    author: 'Andheri Customer',
  },
  {
    quote:
      'Quick response on WhatsApp and same-day washing machine repair at fair transparent pricing.',
    author: 'Bandra Customer',
  },
];

export default function Home() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const prevReview = () => {
    setReviewIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setReviewIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEOHead
        title="Appliance Repair in Mumbai | Star Cool Appliance Repairs"
        description="Fast & reliable appliance repair at your doorstep in Mumbai. AC, refrigerator, washing machine & microwave repair by experienced technicians. Call +91 77388 07317 or WhatsApp."
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Navbar />

      <main className="pb-16 lg:pb-0">
        {/* ===================== HERO SECTION ===================== */}
        <section
          className="relative pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-label="Hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-7 z-10">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white/90 bg-white/10 border border-white/20 mb-3">
                  <span className="text-orange-400 font-bold">&#10003;</span>
                  <span>Home Appliance Repair Experts</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3">
                  Fast &amp; Reliable<br />
                  Appliance Repair<br />
                  <span className="text-white">at Your Doorstep</span>
                </h1>

                {/* Serving Across Mumbai Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white mb-3 shadow-sm" style={{ backgroundColor: '#F97316' }}>
                  <span>Serving Across Mumbai</span>
                  <span className="text-xs">&#127970;</span>
                </div>

                {/* Subtitle */}
                <p className="text-white/80 text-xs sm:text-sm font-normal max-w-lg mb-6 leading-relaxed">
                  AC, Refrigerator, Washing Machine &amp; Microwave Repair Services by Experienced Technicians.
                </p>

                {/* 4 Trust Highlights Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-t border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-orange-400 flex-shrink-0" />
                    <span className="text-white text-xs font-medium">Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-orange-400 flex-shrink-0" />
                    <span className="text-white text-xs font-medium">Experienced Technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-orange-400 flex-shrink-0" />
                    <span className="text-white text-xs font-medium">Genuine Parts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold text-sm flex-shrink-0">&#8377;</span>
                    <span className="text-white text-xs font-medium">Transparent Pricing</span>
                  </div>
                </div>

                {/* Two Action Buttons side by side with proper gap below */}
                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 pb-4">
                  {/* Call Now Button */}
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95 hover:opacity-95"
                    style={{ backgroundColor: '#F97316' }}
                  >
                    <Phone size={18} />
                    <div className="text-left leading-tight">
                      <div className="text-[11px] font-normal uppercase opacity-90">Call Now</div>
                      <div className="text-xs sm:text-sm font-extrabold">{PHONE_DISPLAY}</div>
                    </div>
                  </a>

                  {/* WhatsApp Us Button */}
                  <a
                    href={buildWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold bg-white text-gray-900 border-2 shadow-lg transition-transform active:scale-95 hover:bg-green-50"
                    style={{ borderColor: '#25D366' }}
                  >
                    <MessageCircle size={20} style={{ color: '#25D366' }} fill="#25D366" color="white" />
                    <div className="text-left leading-tight">
                      <div className="text-xs sm:text-sm font-extrabold" style={{ color: '#0B1F3F' }}>WhatsApp Us</div>
                      <div className="text-[10px] text-gray-500 font-normal">Get Quick Response</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image with curved orange background */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-sm lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  {/* Curved orange accent overlay */}
                  <div
                    className="absolute -left-12 -top-12 w-36 h-36 rounded-full opacity-60 pointer-events-none"
                    style={{ backgroundColor: '#F97316', filter: 'blur(30px)' }}
                  />
                  <img
                    src={heroLandingImg}
                    alt="Star Cool expert technician servicing home appliances in Mumbai"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover object-top"
                    width="400"
                    height="320"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== APPLIANCE REPAIR SERVICES WE OFFER ===================== */}
        <section className="bg-white py-12 sm:py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2" style={{ backgroundColor: '#FFF3E8', color: '#F97316' }}>
                Our Services
              </span>
              <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3F]">
                Appliance Repair Services We Offer
              </h2>
            </div>

            {/* 2x2 Service Cards with real appliance images */}
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
                <h3 id="why-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3F] leading-tight mb-2">
                  Why Choose<br />Star Cool?
                </h3>
                <div className="w-16 h-1 rounded-full mb-3" style={{ backgroundColor: '#F97316' }} />
              </div>

              {/* Right Checklist */}
              <div className="md:col-span-7 space-y-2.5">
                {[
                  'Trusted & Rated 5.0 on Google',
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
                    2. Inspection<br /><span className="text-[10px] text-white/70">(Issue Check)</span>
                  </span>
                </div>

                <span className="text-orange-400 font-bold text-sm sm:text-base -mt-4">&#8594;</span>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm mb-1.5">
                    <Wrench size={22} style={{ color: '#F97316' }} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-white/95 leading-tight">
                    3. Repair &amp; Test<br /><span className="text-[10px] text-white/70">(Fixed &amp; Ready)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHAT OUR CUSTOMERS SAY ===================== */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" aria-labelledby="reviews-heading">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              {/* Google G Icon */}
              <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-sm text-blue-600 border border-gray-200">
                G
              </div>
              <h3 id="reviews-heading" className="text-base sm:text-lg font-bold text-[#0B1F3F]">
                What Our Customers Say
              </h3>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span className="font-bold text-gray-900">5.0</span>
              <span className="text-yellow-400 font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                (37 Google Reviews)
              </span>
            </div>
          </div>

          {/* Testimonial Box with Carousel Controls */}
          <div className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-center gap-3">
            <button
              type="button"
              onClick={prevReview}
              aria-label="Previous review"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 flex-shrink-0 focus:outline-none"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex-1 text-center sm:text-left px-2">
              <p className="text-xs sm:text-sm text-gray-700 italic mb-2 leading-relaxed">
                &ldquo;{testimonials[reviewIdx].quote}&rdquo;
              </p>
              <p className="text-xs font-bold text-gray-500">
                &mdash; {testimonials[reviewIdx].author}
              </p>
            </div>

            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 flex-shrink-0 focus:outline-none"
            >
              <ChevronRight size={18} />
            </button>
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
