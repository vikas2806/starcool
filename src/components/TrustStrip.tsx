import { Zap, ShieldCheck, Wrench, MapPin } from 'lucide-react';

const items = [
  { icon: Zap, label: 'Quick Service' },
  { icon: ShieldCheck, label: 'Experienced Technicians' },
  { icon: Wrench, label: 'Genuine Spare Parts' },
  { icon: MapPin, label: 'Service Across Mumbai' },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-6 border-b border-gray-100" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 py-4 px-4 ${
                  index < items.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''
                } ${index === 1 ? 'border-b lg:border-b-0' : ''}`}
              >
                <div className="flex-shrink-0">
                  <Icon size={32} style={{ color: '#F97316' }} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-bold text-center sm:text-left" style={{ color: '#0B1F3F' }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
