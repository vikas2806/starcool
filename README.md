# Star Cool Appliance Repairs (starcool)

Production-ready, ultra-fast, mobile-first website for **Star Cool Appliance Repairs** in Mumbai, India.

---

## 🛠 Tech Stack

- **React 18** + **Vite** + **TypeScript**
- **React Router v6** for client-side routing & code-splitting
- **Tailwind CSS** with custom theme tokens (`navy`, `orange`, `whatsapp`, `bg-light`)
- **react-helmet-async** for per-page SEO titles, meta descriptions, and JSON-LD LocalBusiness schema
- **lucide-react** for lightweight icons
- **Zero backend, zero database, zero tracking**

---

## 🔒 Security & Privacy by Design

- **Zero cookies, zero storage**: The website never uses `document.cookie`, `localStorage`, `sessionStorage`, or `IndexedDB`.
- **No external third-party trackers**: No analytics scripts, tracking pixels, or chat widgets.
- **Strict Content Security Policy (CSP)** and complete HTTP security headers configured for Vercel and Netlify (`HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy`, `COOP`).
- **No client secrets**: All source maps disabled for production builds.

---

## 📞 Changing Phone & WhatsApp Information

All contact details are centralized in a single file:
👉 [`src/config/contact.ts`](./src/config/contact.ts)

```typescript
export const PHONE_DISPLAY = '+91 77388 07317';
export const WHATSAPP_NUMBER = '917738807317'; // Country code + digits, no plus or spaces
export const PHONE_TEL = '+917738807317';
export const SITE_URL = 'https://starcool.example'; // Update with purchased domain
```

---

## 🛠 Editing Services & Problems

All 4 services are powered by the data structure in:
👉 [`src/data/services.ts`](./src/data/services.ts)

Each service definition includes:
- `slug` (`ac-repair`, `microwave-repair`, `washing-machine-repair`, `refrigerator-repair`)
- `title`, `badgeText`, `heading`, `subtitle`
- `problems` (list of 5 common issues)
- `seoTitle`, `seoDescription`
- `whatsappMessage` (pre-filled message tailored to that appliance)

---

## ⭐ Editing Customer Reviews

Reviews are configured in:
👉 [`src/data/reviews.ts`](./src/data/reviews.ts)

- If the `reviews` array is empty (`[]`), the website renders a clean placeholder invitation inviting customers to share feedback via WhatsApp.
- To display real customer testimonials, add items to the array:
```typescript
{
  name: "Customer Name",
  service: "AC Repair",
  rating: 5,
  text: "Prompt and professional technician visit. Fixed cooling issue within an hour.",
  date: "October 2024"
}
```

---

## 🖼 Replacing Images

Images are stored in [`src/assets/images/`](./src/assets/images/). Simply replace the corresponding files with optimized photos while keeping the filenames:
- Hero images: `hero-ac.jpg`, `hero-microwave.jpg`, `hero-washing-machine.jpg`, `hero-refrigerator.jpg`
- Problem images: `problems-ac.jpg`, `problems-microwave.jpg`, `problems-washing-machine.jpg`, `problems-refrigerator.jpg`
- CTA images: `cta-ac.jpg`, `cta-microwave.jpg`, `cta-washing-machine.jpg`, `cta-refrigerator.jpg`

---

## 🌐 Connecting Your Domain

1. Deploy the site repository to **Vercel** or **Netlify** (both configs provided: `vercel.json` and `netlify.toml`).
2. Add your custom domain (e.g. `starcoolappliancerepairs.com`) in the hosting provider dashboard.
3. Configure the DNS records at your registrar:
   - For Apex domain (`@`): A Record pointing to the provider IP.
   - For Subdomain (`www`): CNAME pointing to your project alias.
4. SSL certificate will automatically be provisioned via Let's Encrypt.
5. In [`src/config/contact.ts`](./src/config/contact.ts), update `SITE_URL`:
   ```typescript
   export const SITE_URL = 'https://yourdomain.com';
   ```
6. Update [`public/robots.txt`](./public/robots.txt) and [`public/sitemap.xml`](./public/sitemap.xml) with the production domain.

---

## 💻 Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Production build & type-checking
npm run build

# Preview production build locally
npm run preview
```

