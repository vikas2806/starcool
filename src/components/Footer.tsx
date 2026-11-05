import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from '../config/contact';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/ac-repair', label: 'AC Repair' },
  { to: '/microwave-repair', label: 'Microwave Repair' },
  { to: '/washing-machine-repair', label: 'Washing Machine Repair' },
  { to: '/refrigerator-repair', label: 'Refrigerator Repair' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white mt-12" style={{ backgroundColor: '#0B1F3F' }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              Fast, reliable appliance repairs at your doorstep across Mumbai.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#F97316' }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
                    className="text-white/70 hover:text-white text-sm transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-400 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#F97316' }}>
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone size={16} style={{ color: '#F97316' }} />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#F97316' }} />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <p className="text-white/50 text-xs mt-4 leading-relaxed">
                This website does not collect or store your personal data. When you tap WhatsApp, you are taken to WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-xs">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
