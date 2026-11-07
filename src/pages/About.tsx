import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileStickyBar from '../components/MobileStickyBar';
import { WHATSAPP_MESSAGES, PHONE_TEL, PHONE_DISPLAY } from '../config/contact';
import { Phone, Wrench, Clock, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us | Star Cool Appliance Repairs Mumbai"
        description="Learn about Star Cool Appliance Repairs in Mumbai. Experienced local technicians delivering transparent, reliable doorstep appliance repairs across the city."
        canonical="/about"
      />
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Hero */}
        <section
          className="py-16 text-center"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-labelledby="about-heading"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1
              id="about-heading"
              className="text-2xl sm:text-4xl font-bold text-white mb-4"
            >
              About Star Cool Appliance Repairs in Mumbai
            </h1>
            <p className="text-white/80 text-lg">
              Professional appliance repair specialists in Mumbai — fast, affordable, and reliable.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#0B1F3F' }}>
              Who We Are
            </h2>
            <div className="w-14 h-1 rounded-full mb-6" style={{ backgroundColor: '#F97316' }} />
            <div className="text-gray-600 space-y-4 leading-relaxed text-base">
              <p>
                Star Cool Appliance Repairs is a Mumbai-based home appliance repair service dedicated to getting
                your appliances back to peak performance — quickly and affordably. We service all major brands
                of air conditioners, microwave ovens, washing machines, and refrigerators.
              </p>
              <p>
                Our team of experienced technicians visits your home at a time that suits you, diagnoses the
                problem accurately, and fixes it using genuine spare parts. We believe in transparent pricing
                — no hidden charges, ever.
              </p>
              <p>
                Whether it's a minor tune-up or a complex repair, we treat every job with the same care and
                professionalism. Customer satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-2xl lg:text-3xl font-bold text-center mb-2" style={{ color: '#0B1F3F' }}>
            Why Choose Us?
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mb-10" style={{ backgroundColor: '#F97316' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: 'Expert Technicians',
                desc: 'Skilled professionals with years of hands-on appliance repair experience.',
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                desc: 'Same-day or next-day service available for most repairs in Mumbai.',
              },
              {
                icon: ShieldCheck,
                title: 'Genuine Parts',
                desc: 'We use only authentic spare parts to ensure lasting repairs and warranty.',
              },
              {
                icon: Star,
                title: 'Honest Pricing',
                desc: 'Transparent quotes with no hidden fees. You know the cost before we start.',
              },
              {
                icon: Phone,
                title: 'Easy Booking',
                desc: 'Simply call or WhatsApp us — no complicated online forms required.',
              },
              {
                icon: ShieldCheck,
                title: 'Service Guarantee',
                desc: 'All repairs come with a service guarantee for your peace of mind.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#FFF3E8' }}
                  >
                    <Icon size={24} style={{ color: '#F97316' }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#0B1F3F' }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="mx-4 lg:mx-8 rounded-2xl p-10 text-center shadow"
          style={{ backgroundColor: '#0B1F3F' }}
          aria-label="Contact call to action"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to get your appliance fixed?
          </h2>
          <p className="text-white/70 mb-6">
            Contact us now — fast, friendly service across Mumbai.
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
