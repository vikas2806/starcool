import { Link } from 'react-router-dom';
import { Phone, Wind, Microwave, WashingMachine, Refrigerator } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import TrustStrip from '../components/TrustStrip';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, SITE_NAME, WHATSAPP_MESSAGES } from '../config/contact';
import { services } from '../data/services';

const serviceIcons: Record<string, LucideIcon> = {
  'ac-repair': Wind,
  'microwave-repair': Microwave,
  'washing-machine-repair': WashingMachine,
  'refrigerator-repair': Refrigerator,
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  telephone: '+917738807317',
  areaServed: 'Mumbai',
  url: SITE_URL,
  description: 'Fast, reliable and affordable appliance repair services at your doorstep in Mumbai.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Appliance Repair in Mumbai | Star Cool Appliance Repairs"
        description="Fast, reliable and affordable appliance repair services in Mumbai. AC, microwave, washing machine and refrigerator repair at your doorstep. Call or WhatsApp now."
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-20"
          style={{ backgroundColor: '#0B1F3F', minHeight: '380px' }}
          aria-label="Welcome to Star Cool"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div
              className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              ★ Trusted Appliance Repair in Mumbai
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Professional Appliance Repair<br />
              <span style={{ color: '#F97316' }}>at Your Doorstep</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Fast, reliable and affordable repair services across Mumbai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full text-sm transition-opacity hover:opacity-90 min-h-[44px]"
                style={{ backgroundColor: '#F97316' }}
              >
                <Phone size={18} />
                Call Now {PHONE_DISPLAY}
              </a>
              <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="outline" />
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Services Grid */}
        <section className="bg-white py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold mb-2" style={{ color: '#0B1F3F' }}>
                Our Services
              </h2>
              <div className="w-12 h-1 rounded-full mx-auto" style={{ backgroundColor: '#F97316' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = serviceIcons[service.slug] ?? Wind;
                return (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: '#FFF3E8' }}
                    >
                      <Icon size={28} style={{ color: '#F97316' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#0B1F3F' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {service.subtitle}
                    </p>
                    <span
                      className="text-sm font-semibold group-hover:underline"
                      style={{ color: '#F97316' }}
                    >
                      Learn More →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process (generic) */}
        <section
          className="py-14 mx-4 my-8 lg:mx-8 rounded-3xl"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-labelledby="process-home-heading"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 id="process-home-heading" className="text-2xl lg:text-3xl font-bold italic text-white mb-2">
              How It Works
            </h2>
            <div className="w-14 h-1 rounded-full mx-auto mb-10" style={{ backgroundColor: '#F97316' }} />
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { step: '1', label: 'Call or WhatsApp Us' },
                { step: '2', label: 'Discuss the Issue' },
                { step: '3', label: 'Technician Visits' },
                { step: '4', label: 'Repair & Done' },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: '#F97316' }}
                    >
                      {item.step}
                    </div>
                    <span className="text-white text-xs font-medium text-center max-w-[80px]">{item.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-2xl font-bold" style={{ color: '#F97316' }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="mx-4 my-8 lg:mx-8 rounded-2xl bg-gray-100 p-10 text-center shadow"
          aria-label="Final call to action"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#0B1F3F' }}>
            Need Appliance Repair in Mumbai?
          </h2>
          <p className="text-gray-600 mb-6">Get your appliance fixed by experienced professionals today!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full text-sm transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ backgroundColor: '#F97316' }}
            >
              <Phone size={18} />
              Call Now {PHONE_DISPLAY}
            </a>
            <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="outline" />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="floating" />
      <MobileStickyBar />
    </>
  );
}
