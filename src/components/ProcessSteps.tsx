import { Phone, CalendarDays, HardHat, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { icon: Phone, label: '1. Call or\nWhatsApp Us' },
  { icon: CalendarDays, label: '2. Discuss\nthe Issue' },
  { icon: HardHat, label: '3. Technician\nVisit & Inspection' },
  { icon: CheckCircle, label: '4. Repair &\nGet It Running' },
];

interface ProcessStepsProps {
  serviceTitle: string;
}

export default function ProcessSteps({ serviceTitle }: ProcessStepsProps) {
  return (
    <section
      className="py-12 lg:py-16 rounded-3xl mx-4 my-8 lg:mx-8"
      style={{ backgroundColor: '#0B1F3F' }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            id="process-heading"
            className="text-2xl lg:text-3xl font-bold italic text-white mb-2"
          >
            Our {serviceTitle} Repair Process
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#F97316' }} />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center gap-4 lg:gap-2">
                <div className="flex flex-col items-center gap-2 w-24 lg:w-28">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: '#F97316' }}
                  >
                    <Icon size={30} color="white" />
                  </div>
                  <p className="text-white text-xs font-medium text-center whitespace-pre-line leading-tight">
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight size={24} style={{ color: '#F97316' }} className="flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
