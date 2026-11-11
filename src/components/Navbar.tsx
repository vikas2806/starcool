import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { PHONE_DISPLAY, PHONE_TEL } from '../config/contact';

const serviceLinks = [
  { to: '/ac-repair-mumbai', label: 'AC Repair' },
  { to: '/microwave-repair-mumbai', label: 'Microwave Repair' },
  { to: '/washing-machine-repair-mumbai', label: 'Washing Machine Repair' },
  { to: '/refrigerator-repair-mumbai', label: 'Refrigerator Repair' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Add scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded ${isActive ? 'text-orange-400' : 'text-white'}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}
      style={{ backgroundColor: '#0B1F3F' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" aria-label="Star Cool Appliance Repairs - Home">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(v => !v)}
              onKeyDown={e => e.key === 'Escape' && setDropdownOpen(false)}
              className="flex items-center gap-1 text-sm font-medium text-white hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-2 z-50">
                {serviceLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-sm hover:bg-orange-50 transition-colors"
                    style={{ color: '#0B1F3F' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Call Now button */}
        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden lg:flex items-center gap-2 text-white font-semibold px-5 py-2 rounded-full transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px]"
          style={{ backgroundColor: '#F97316' }}
        >
          <Phone size={16} />
          <div className="text-left leading-tight">
            <div className="text-xs font-medium">Call Now</div>
            <div className="text-sm font-bold">{PHONE_DISPLAY}</div>
          </div>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 pb-4" style={{ backgroundColor: '#0B1F3F' }}>
          <div className="flex flex-col gap-4 pt-4">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* Services dropdown for mobile */}
            <div>
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center gap-1 text-sm font-medium text-white w-full"
              >
                Services <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {serviceLinks.map(link => (
                    <NavLink key={link.to} to={link.to} className={navLinkClass}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-2 text-white font-semibold px-5 py-3 rounded-full text-sm min-h-[44px]"
              style={{ backgroundColor: '#F97316' }}
            >
              <Phone size={16} /> Call Now {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
