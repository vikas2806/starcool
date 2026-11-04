import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Eager-loaded pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Route-based code splitting
const About = lazy(() => import('./pages/About'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Contact = lazy(() => import('./pages/Contact'));
const ServicePage = lazy(() => import('./pages/ServicePage'));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1F3F]">
      <div className="text-white text-lg font-semibold animate-pulse">Loading…</div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            {/* Specific Service routes as requested */}
            <Route path="/ac-repair" element={<ServicePage slugOverride="ac-repair" />} />
            <Route path="/microwave-repair" element={<ServicePage slugOverride="microwave-repair" />} />
            <Route path="/washing-machine-repair" element={<ServicePage slugOverride="washing-machine-repair" />} />
            <Route path="/refrigerator-repair" element={<ServicePage slugOverride="refrigerator-repair" />} />
            {/* Dynamic slug route fallback */}
            <Route path="/:slug" element={<ServicePage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

