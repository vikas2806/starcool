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
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-10">
          <h2
            id="process-heading"
            className="text-2xl lg:text-3xl font-bold italic text-white mb-2"
          >
            Our {serviceTitle} Repair Process
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#F97316' }} />
        </div>

        {/* Desktop Layout: 4 steps in a single row */}
        <div className="hidden md:flex items-start justify-center gap-3 lg:gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center gap-3 lg:gap-6 flex-1">
                <div className="flex flex-col items-center text-center w-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-3"
                    style={{ backgroundColor: '#F97316' }}
                  >
                    <Icon size={30} color="white" />
                  </div>
                  <p className="text-white text-xs lg:text-sm font-medium leading-tight whitespace-pre-line">
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight size={24} style={{ color: '#F97316' }} className="flex-shrink-0 -mt-6" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Layout: Perfectly aligned 2x2 grid */}
        <div className="md:hidden flex flex-col gap-8 max-w-xs mx-auto">
          {/* Row 1: Step 1 -> Step 2 */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-center text-center w-28">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-2"
                style={{ backgroundColor: '#F97316' }}
              >
                {(() => {
                  const Icon = steps[0].icon;
                  return <Icon size={30} color="white" />;
                })()}
              </div>
              <p className="text-white text-xs font-medium leading-tight whitespace-pre-line">
                {steps[0].label}
              </p>
            </div>

            <div className="flex items-center justify-center h-16 flex-1">
              <ArrowRight size={24} style={{ color: '#F97316' }} />
            </div>

            <div className="flex flex-col items-center text-center w-28">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-2"
                style={{ backgroundColor: '#F97316' }}
              >
                {(() => {
                  const Icon = steps[1].icon;
                  return <Icon size={30} color="white" />;
                })()}
              </div>
              <p className="text-white text-xs font-medium leading-tight whitespace-pre-line">
                {steps[1].label}
              </p>
            </div>
          </div>

          {/* Row 2: Step 3 -> Step 4 */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-center text-center w-28">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-2"
                style={{ backgroundColor: '#F97316' }}
              >
                {(() => {
                  const Icon = steps[2].icon;
                  return <Icon size={30} color="white" />;
                })()}
              </div>
              <p className="text-white text-xs font-medium leading-tight whitespace-pre-line">
                {steps[2].label}
              </p>
            </div>

            <div className="flex items-center justify-center h-16 flex-1">
              <ArrowRight size={24} style={{ color: '#F97316' }} />
            </div>

            <div className="flex flex-col items-center text-center w-28">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-2"
                style={{ backgroundColor: '#F97316' }}
              >
                {(() => {
                  const Icon = steps[3].icon;
                  return <Icon size={30} color="white" />;
                })()}
              </div>
              <p className="text-white text-xs font-medium leading-tight whitespace-pre-line">
                {steps[3].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
