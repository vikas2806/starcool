import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import { PHONE_DISPLAY, PHONE_TEL, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/contact';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us | Star Cool Appliance Repairs Mumbai"
        description="Contact Star Cool Appliance Repairs in Mumbai. Call or WhatsApp us for fast appliance repair service."
        canonical="/contact"
      />
      <Navbar />
      <main className="pt-20 min-h-[60vh] bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 text-[#0B1F3F]">
              Contact Us
            </h1>
            <div className="w-12 h-1 rounded-full mx-auto bg-[#F97316]" />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#FFF3E8]">
                <Phone size={22} className="text-[#F97316]" />
              </div>
              <div>
                <p className="font-bold text-[#0B1F3F] mb-1">Phone</p>
                <a href={`tel:${PHONE_TEL}`} className="text-gray-700 hover:text-[#F97316] text-lg font-semibold transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E8FFF0]">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <div>
                <p className="font-bold mb-1 text-[#0B1F3F]">WhatsApp</p>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg text-[#25D366] transition-colors hover:opacity-80"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#EEF2FF]">
                <MapPin size={22} className="text-[#0B1F3F]" />
              </div>
              <div>
                <p className="font-bold mb-1 text-[#0B1F3F]">Service Area</p>
                <p className="text-gray-600">Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#FFF3E8]">
                <Clock size={22} className="text-[#F97316]" />
              </div>
              <div>
                <p className="font-bold mb-1 text-[#0B1F3F]">Working Hours</p>
                <p className="text-gray-600">Monday – Saturday, 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-6">
              This website does not collect or store your personal data. When you tap WhatsApp, you are taken to WhatsApp.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full text-sm min-h-[44px] bg-[#F97316] hover:opacity-90 transition-opacity"
            >
              <Phone size={18} /> Call Now {PHONE_DISPLAY}
            </a>
            <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="outline" />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="floating" />
      <MobileStickyBar whatsappMessage={WHATSAPP_MESSAGES.generic} />
    </>
  );
}
