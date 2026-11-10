import { CheckCircle2 } from 'lucide-react';

interface CommonProblemsProps {
  serviceTitle: string;
  problems: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function CommonProblems({ serviceTitle, problems, imageSrc, imageAlt }: CommonProblemsProps) {
  // Strip trailing "Repair" or "Service" so we get "Common AC Problems We Fix"
  const applianceName = serviceTitle.replace(/\s*(repair|service|&).*$/i, '').trim();

  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="problems-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Image: left side, rounded corners 16px, ~47% of container on laptop, aspect 16/10, object-fit cover */}
          <div className="w-full lg:w-[47%] flex-shrink-0">
            <div className="rounded-[16px] overflow-hidden shadow-md aspect-[16/10] bg-gray-50">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="500"
              />
            </div>
          </div>

          {/* Problems list */}
          <div className="w-full lg:w-[53%]">
            <h2
              id="problems-heading"
              className="text-2xl lg:text-3xl font-bold mb-2 leading-tight"
              style={{ color: '#0B1F3F' }}
            >
              Common {applianceName} Problems We Fix
            </h2>
            {/* Orange underline accent */}
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#F97316' }} />
            <ul className="space-y-3" role="list">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#F97316' }}
                    fill="#F97316"
                    color="white"
                  />
                  <span className="text-gray-700 font-medium">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
