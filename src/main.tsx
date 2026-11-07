import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

export const createRoot = ViteReactSSG(
  {
    routes,
    basename: import.meta.env.BASE_URL,
  },
  ({ router, isClient }) => {
    if (isClient && router) {
      router.subscribe(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
    }
  }
);
