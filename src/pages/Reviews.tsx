import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import { SITE_NAME, WHATSAPP_MESSAGES, PHONE_TEL, PHONE_DISPLAY } from '../config/contact';
import { reviews } from '../data/reviews';
import { Phone, Star } from 'lucide-react';

export default function Reviews() {
  return (
    <>
      <SEOHead
        title={`Customer Reviews | ${SITE_NAME}`}
        description="See what our customers say about Star Cool Appliance Repairs in Mumbai. Real reviews from satisfied customers across the city."
        canonical="/reviews"
      />
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Hero */}
        <section
          className="py-16 text-center"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-labelledby="reviews-heading"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1 id="reviews-heading" className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Customer <span style={{ color: '#F97316' }}>Reviews</span>
            </h1>
            <p className="text-white/80 text-lg">
              Hear from our happy customers across Mumbai.
            </p>
          </div>
        </section>

        {/* Reviews grid or placeholder */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {reviews.length === 0 ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#FFF3E8' }}
              >
                <Star size={32} style={{ color: '#F97316' }} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ color: '#0B1F3F' }}>
                Reviews Coming Soon
              </h2>
              <p className="text-gray-500 max-w-sm mx-auto">
                We're collecting reviews from our satisfied customers. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                  aria-label={`Review by ${review.name}`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? '#F97316' : 'transparent'}
                        style={{ color: i < review.rating ? '#F97316' : '#d1d5db' }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-semibold text-sm" style={{ color: '#0B1F3F' }}>{review.name}</p>
                    <p className="text-xs text-gray-400">{review.service} · {review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section
          className="mx-4 lg:mx-8 rounded-2xl p-10 text-center shadow"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-label="Book a repair"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a repair? Contact us now!
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full text-sm transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ backgroundColor: '#F97316' }}
            >
              <Phone size={18} />
              Call Now {PHONE_DISPLAY}
            </a>
            <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="primary" label="WhatsApp Us" />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="floating" />
      <MobileStickyBar />
    </>
  );
}
