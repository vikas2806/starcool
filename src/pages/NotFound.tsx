import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found | Star Cool Appliance Repairs Mumbai"
        description="The page you requested was not found. Star Cool provides fast doorstep appliance repair for ACs, fridges, washing machines, and microwaves in Mumbai."
        canonical="/404"
      />
      <Navbar />
      <main className="pt-20 min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <p className="text-8xl font-bold mb-4 text-[#F97316]">404</p>
          <h1 className="text-2xl font-bold mb-2 text-[#0B1F3F]">Page Not Found</h1>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full text-sm min-h-[44px] bg-[#F97316] hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

