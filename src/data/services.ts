export interface ServiceData {
  slug: string;
  title: string;           // e.g. "AC Repair"
  badgeText: string;       // e.g. "AC Repair & Service"
  heading: string;         // H1
  subtitle: string;
  heroImageAlt: string;
  problemsImageAlt: string;
  ctaImageAlt: string;
  problems: string[];      // 5 items
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
  ctaSubtext: string;
}

export const services: ServiceData[] = [
  {
    slug: 'ac-repair',
    title: 'AC Repair',
    badgeText: 'AC Repair & Service',
    heading: 'Professional AC Repair Service in Mumbai',
    subtitle: 'Fast, reliable and affordable AC repair at your doorstep.',
    heroImageAlt: 'Star Cool technician repairing an air conditioner in Mumbai',
    problemsImageAlt: 'AC filter being cleaned during repair',
    ctaImageAlt: 'Air conditioner unit ready for repair',
    problems: [
      'AC not cooling properly',
      'Water leakage from AC',
      'Unusual noise from the unit',
      'AC not switching on',
      'Low cooling / performance issues',
    ],
    seoTitle: 'AC Repair in Mumbai | Star Cool Appliance Repairs',
    seoDescription:
      'Fast, reliable AC repair service at your doorstep in Mumbai. Call or WhatsApp Star Cool for same-day AC repair.',
    whatsappMessage: 'Hi Star Cool, I need AC repair in Mumbai.',
    ctaSubtext: 'Get your AC serviced by experienced professionals today!',
  },
  {
    slug: 'microwave-repair',
    title: 'Microwave Repair',
    badgeText: 'Microwave Repair & Service',
    heading: 'Professional Microwave Repair in Mumbai',
    subtitle: 'Fast, reliable and affordable microwave repair at your doorstep.',
    heroImageAlt: 'Star Cool technician repairing a microwave oven in Mumbai',
    problemsImageAlt: 'Open microwave oven ready for repair',
    ctaImageAlt: 'Microwave oven ready for professional repair',
    problems: [
      'Not heating food properly',
      'Microwave not switching on',
      'Turntable not rotating',
      'Unusual noise or spark inside',
      'Control panel not working',
    ],
    seoTitle: 'Microwave Repair in Mumbai | Star Cool Appliance Repairs',
    seoDescription:
      'Expert microwave repair service at your doorstep in Mumbai. Call or WhatsApp Star Cool for fast microwave repair.',
    whatsappMessage: 'Hi Star Cool, I need microwave repair in Mumbai.',
    ctaSubtext: 'Get your microwave fixed by experienced professionals today!',
  },
  {
    slug: 'washing-machine-repair',
    title: 'Washing Machine Repair',
    badgeText: 'Washing Machine Repair & Service',
    heading: 'Professional Washing Machine Repair in Mumbai',
    subtitle: 'Fast, reliable and affordable service at your doorstep.',
    heroImageAlt: 'Star Cool technician repairing a washing machine in Mumbai',
    problemsImageAlt: 'Washing machine with open drum being repaired',
    ctaImageAlt: 'Washing machine ready for professional repair service',
    problems: [
      'Not spinning or draining',
      'Water leakage',
      'Not starting / power issue',
      'Unusual noise or vibration',
      'Washing not cleaning properly',
    ],
    seoTitle: 'Washing Machine Repair in Mumbai | Star Cool Appliance Repairs',
    seoDescription:
      'Reliable washing machine repair service at your doorstep in Mumbai. Call or WhatsApp Star Cool for fast repair.',
    whatsappMessage: 'Hi Star Cool, I need washing machine repair in Mumbai.',
    ctaSubtext: 'Get your washing machine fixed by experienced professionals today!',
  },
  {
    slug: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    badgeText: 'Refrigerator Repair & Service',
    heading: 'Professional Refrigerator Repair in Mumbai',
    subtitle: 'Fast, reliable and affordable refrigerator repair at your doorstep.',
    heroImageAlt: 'Star Cool technician repairing a refrigerator in Mumbai',
    problemsImageAlt: 'Stainless steel refrigerator in a modern kitchen',
    ctaImageAlt: 'Refrigerator open showing fresh food inside',
    problems: [
      'Not cooling properly',
      'Excessive ice formation (frost)',
      'Water leakage',
      'Unusual noise from the fridge',
      'Compressor or power issue',
    ],
    seoTitle: 'Refrigerator Repair in Mumbai | Star Cool Appliance Repairs',
    seoDescription:
      'Fast refrigerator repair service at your doorstep in Mumbai. Call or WhatsApp Star Cool for same-day fridge repair.',
    whatsappMessage: 'Hi Star Cool, I need refrigerator repair in Mumbai.',
    ctaSubtext: 'Get your refrigerator serviced by experienced professionals today!',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
