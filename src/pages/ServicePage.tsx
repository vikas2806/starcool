import { useParams, Navigate, Link } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/services';
import { SITE_URL, SITE_NAME, PHONE_TEL } from '../config/contact';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import TrustStrip from '../components/TrustStrip';

import ProcessSteps from '../components/ProcessSteps';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import { ArrowRight, Home as HomeIcon } from 'lucide-react';

// WebP image imports
import heroAC from '../assets/images/hero-ac.png';
import heroMicrowave from '../assets/images/hero-microwave.png';
import heroWashing from '../assets/images/hero-washing-machine.png';
import heroFridge from '../assets/images/hero-refrigerator.png';
// 
import ctaAC from '../assets/images/cta-ac.webp';


import ctaFridge from '../assets/images/cta-refrigerator.webp';

const heroImages: Record<string, string> = {
  'ac-repair-mumbai': heroAC,
  'microwave-repair-mumbai': heroMicrowave,
  'washing-machine-repair-mumbai': heroWashing,
  'refrigerator-repair-mumbai': heroFridge,
};

const ctaImages: Record<string, string> = {
  'ac-repair-mumbai': ctaAC,
  'microwave-repair-mumbai': heroMicrowave,
  'washing-machine-repair-mumbai': heroWashing,
  'refrigerator-repair-mumbai': ctaFridge,
};

interface ServicePageProps {
  slugOverride?: string;
}

export default function ServicePage({ slugOverride }: ServicePageProps = {}) {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slugOverride || slug || '';
  const service = getServiceBySlug(activeSlug);

  if (!service) return <Navigate to="/404" replace />;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.heading,
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: PHONE_TEL,
      url: `${SITE_URL}/`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    description: service.seoDescription,
    url: `${SITE_URL}/${service.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: `${SITE_URL}/${service.slug}`,
      },
    ],
  };

  // Other 3 services for cross-linking
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`/${service.slug}`}
        preloadImage={heroImages[service.slug]}
        jsonLd={[serviceJsonLd, breadcrumbJsonLd]}
      />
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <HeroBanner
          badgeText={service.badgeText}
          heading={service.heading}
          subtitle={service.subtitle}
          whatsappMessage={service.whatsappMessage}
          heroImageSrc={heroImages[service.slug]}
          heroImageAlt={service.heroImageAlt}
        />
        <TrustStrip />

        <ProcessSteps serviceTitle={service.title} />
        <CtaBanner
          serviceTitle={service.title}
          ctaSubtext={service.ctaSubtext}
          whatsappMessage={service.whatsappMessage}
          ctaImageSrc={ctaImages[service.slug]}
          ctaImageAlt={service.ctaImageAlt}
        />

        {/* Cross-linking to other 3 services and Home */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100" aria-label="Other appliance repair services">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3F]">
                Other Appliance Repair Services in Mumbai
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Same-day doorstep repair across all Mumbai suburbs
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F97316] hover:underline"
            >
              <HomeIcon size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                to={`/${other.slug}`}
                className="group p-5 rounded-2xl border border-gray-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-sm text-[#0B1F3F] group-hover:text-[#F97316] transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">Doorstep repair in Mumbai</p>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message={service.whatsappMessage} variant="floating" />
      <MobileStickyBar whatsappMessage={service.whatsappMessage} />
    </>
  );
}
