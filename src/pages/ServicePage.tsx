import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import { SITE_URL, SITE_NAME, PHONE_TEL } from '../config/contact';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import TrustStrip from '../components/TrustStrip';
import CommonProblems from '../components/CommonProblems';
import ProcessSteps from '../components/ProcessSteps';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';

// Image imports — Vite handles these
import heroAC from '../assets/images/hero-ac.jpg';
import heroMicrowave from '../assets/images/hero-microwave.jpg';
import heroWashing from '../assets/images/hero-washing-machine.jpg';
import heroFridge from '../assets/images/hero-refrigerator.jpg';
import probAC from '../assets/images/problems-ac.jpg';
import probMicrowave from '../assets/images/problems-microwave.jpg';
import probWashing from '../assets/images/problems-washing-machine.jpg';
import probFridge from '../assets/images/problems-refrigerator.jpg';
import ctaAC from '../assets/images/cta-ac.jpg';
import ctaMicrowave from '../assets/images/cta-microwave.jpg';
import ctaWashing from '../assets/images/cta-washing-machine.jpg';
import ctaFridge from '../assets/images/cta-refrigerator.jpg';

const heroImages: Record<string, string> = {
  'ac-repair': heroAC,
  'microwave-repair': heroMicrowave,
  'washing-machine-repair': heroWashing,
  'refrigerator-repair': heroFridge,
};
const problemImages: Record<string, string> = {
  'ac-repair': probAC,
  'microwave-repair': probMicrowave,
  'washing-machine-repair': probWashing,
  'refrigerator-repair': probFridge,
};
const ctaImages: Record<string, string> = {
  'ac-repair': ctaAC,
  'microwave-repair': ctaMicrowave,
  'washing-machine-repair': ctaWashing,
  'refrigerator-repair': ctaFridge,
};

interface ServicePageProps {
  slugOverride?: string;
}

export default function ServicePage({ slugOverride }: ServicePageProps = {}) {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slugOverride || slug || '';
  const service = getServiceBySlug(activeSlug);

  if (!service) return <Navigate to="/404" replace />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    telephone: PHONE_TEL,
    areaServed: 'Mumbai',
    url: `${SITE_URL}/${service.slug}`,
    description: service.seoDescription,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
    },
  };

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`/${service.slug}`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <HeroBanner
          badgeText={service.badgeText}
          heading={service.heading}
          subtitle={service.subtitle}
          whatsappMessage={service.whatsappMessage}
          heroImageSrc={heroImages[service.slug]}
          heroImageAlt={service.heroImageAlt}
        />
        <TrustStrip />
        <CommonProblems
          serviceTitle={service.title}
          problems={service.problems}
          imageSrc={problemImages[service.slug]}
          imageAlt={service.problemsImageAlt}
        />
        <ProcessSteps serviceTitle={service.title} />
        <CtaBanner
          serviceTitle={service.title}
          ctaSubtext={service.ctaSubtext}
          whatsappMessage={service.whatsappMessage}
          ctaImageSrc={ctaImages[service.slug]}
          ctaImageAlt={service.ctaImageAlt}
        />
      </main>
      <Footer />
      <WhatsAppButton message={service.whatsappMessage} variant="floating" />
      <MobileStickyBar whatsappMessage={service.whatsappMessage} />
    </>
  );
}
