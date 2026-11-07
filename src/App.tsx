import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import ServicePage from './pages/ServicePage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ac-repair-mumbai" element={<ServicePage slugOverride="ac-repair-mumbai" />} />
          <Route path="/microwave-repair-mumbai" element={<ServicePage slugOverride="microwave-repair-mumbai" />} />
          <Route path="/washing-machine-repair-mumbai" element={<ServicePage slugOverride="washing-machine-repair-mumbai" />} />
          <Route path="/refrigerator-repair-mumbai" element={<ServicePage slugOverride="refrigerator-repair-mumbai" />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
