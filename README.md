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

