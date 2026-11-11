import type { RouteRecord } from 'vite-react-ssg';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ServicePage from './pages/ServicePage';
import NotFound from './pages/NotFound';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/ac-repair-mumbai',
    element: <ServicePage slugOverride="ac-repair-mumbai" />,
  },
  {
    path: '/refrigerator-repair-mumbai',
    element: <ServicePage slugOverride="refrigerator-repair-mumbai" />,
  },
  {
    path: '/washing-machine-repair-mumbai',
    element: <ServicePage slugOverride="washing-machine-repair-mumbai" />,
  },
  {
    path: '/microwave-repair-mumbai',
    element: <ServicePage slugOverride="microwave-repair-mumbai" />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

