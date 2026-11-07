import { Head } from 'vite-react-ssg';
import { SITE_URL, OG_SITE_NAME } from '../config/contact';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  preloadImage?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  preloadImage,
  jsonLd,
}: SEOHeadProps) {
  const fullCanonical = `${SITE_URL}${canonical}`;
  const image = ogImage ?? `${SITE_URL}/og-default.jpg`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={OG_SITE_NAME} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
