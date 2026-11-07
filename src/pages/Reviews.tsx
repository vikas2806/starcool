import { MessageSquare, HeartHandshake, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import { PHONE_DISPLAY, PHONE_TEL, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/contact';

export default function Reviews() {
  return (
    <>
      <SEOHead
        title="Customer Reviews | Star Cool Appliance Repairs Mumbai"
        description="Read feedback from customers of Star Cool Appliance Repairs in Mumbai. We provide trusted doorstep repair for ACs, fridges, washers, and microwave ovens."
        canonical="/reviews"
      />
      <Navbar />
      <main className="pt-20 pb-16 min-h-[70vh] bg-gray-50">
        {/* Hero Section */}
        <section
          className="py-16 text-center"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-labelledby="reviews-heading"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1
              id="reviews-heading"
              className="text-2xl sm:text-4xl font-bold text-white mb-3"
            >
              Customer Reviews - Appliance Repair in Mumbai
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Real feedback from homeowners across Mumbai who trust Star Cool for their appliance repair needs.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FFF3E8]">
                <HeartHandshake size={24} className="text-[#F97316]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3F]">
                  Our Commitment to Quality Service
                </h2>
                <p className="text-sm text-gray-500">Honest technicians, genuine spare parts, and reliable repairs</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              At Star Cool Appliance Repairs, we pride ourselves on punctuality, fair diagnostics, and transparent service across Mumbai. We value every customer interaction and collect direct feedback after every doorstep service visit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <ShieldCheck size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-[#0B1F3F] mb-1">Verified Technicians</h3>
                  <p className="text-xs text-gray-500">Trained specialists for AC, refrigerator, washing machine, and microwave repairs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <MessageSquare size={20} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-[#0B1F3F] mb-1">Direct Feedback</h3>
                  <p className="text-xs text-gray-500">Every customer is invited to share their experience directly with our support team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Feedback Callout */}
          <div className="bg-gradient-to-r from-[#0B1F3F] to-[#142A4F] text-white rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6 shadow-sm">
            <div className="mb-6 sm:mb-0">
              <h2 className="text-lg sm:text-xl font-bold mb-2">Recently had an appliance repaired?</h2>
              <p className="text-sm text-white/80 max-w-md">
                We would love to hear your feedback. Send us a message on WhatsApp to share your experience or request further assistance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={buildWhatsAppUrl('Hi Star Cool, I would like to share feedback regarding my recent appliance repair service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white font-bold text-sm min-h-[46px] shadow transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={18} fill="white" color="white" />
                <span>Share Feedback</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white font-bold text-sm min-h-[46px] shadow transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#F97316' }}
              >
                <Phone size={16} />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="floating" />
      <MobileStickyBar whatsappMessage={WHATSAPP_MESSAGES.generic} />
    </>
  );
}

