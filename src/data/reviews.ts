/**
 * Customer reviews data.
 * Add real reviews here — each object becomes a review card.
 * Leave the array empty to show the placeholder UI.
 */
export interface Review {
  name: string;
  service: string;
  rating: number; // 1-5
  text: string;
  date: string; // e.g. "October 2024"
}

export const reviews: Review[] = [];
// Example entry (uncomment and fill with real reviews):
// {
//   name: "Rahul M.",
//   service: "AC Repair",
//   rating: 5,
//   text: "Great service, technician arrived on time and fixed the issue quickly.",
//   date: "September 2024",
// },
