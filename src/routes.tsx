import type { RouteRecord } from 'vite-react-ssg';
import { useRouteError, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ServicePage from './pages/ServicePage';
import NotFound from './pages/NotFound';

function RouteErrorBoundary() {
  const error = useRouteError();
  const errorMessage =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
        ? error
        : 'An unexpected error occurred.';

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 p-4 max-w-full overflow-hidden"
      style={{ maxWidth: '100%', overflowWrap: 'anywhere' }}
    >
      <div
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center"
        style={{ maxWidth: '100%', overflowWrap: 'anywhere', wordBreak: 'break-word' }}
      >
        <h2 className="text-xl font-bold text-[#0B1F3F] mb-2">Something went wrong</h2>
        <p className="text-xs text-gray-500 mb-6 [overflow-wrap:anywhere] break-words">
          {errorMessage}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white font-semibold text-sm bg-[#F97316] hover:opacity-90 transition-opacity"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/ac-repair-mumbai',
    element: <ServicePage slugOverride="ac-repair-mumbai" />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/refrigerator-repair-mumbai',
    element: <ServicePage slugOverride="refrigerator-repair-mumbai" />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/washing-machine-repair-mumbai',
    element: <ServicePage slugOverride="washing-machine-repair-mumbai" />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/microwave-repair-mumbai',
    element: <ServicePage slugOverride="microwave-repair-mumbai" />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '/404',
    element: <NotFound />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <RouteErrorBoundary />,
  },
];

