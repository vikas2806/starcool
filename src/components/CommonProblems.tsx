import { CheckCircle2 } from 'lucide-react';

interface CommonProblemsProps {
  serviceTitle: string;
  problems: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function CommonProblems({ serviceTitle, problems, imageSrc, imageAlt }: CommonProblemsProps) {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="problems-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
              width="560"
              height="320"
            />
          </div>

          {/* Problems list */}
          <div>
            <h2
              id="problems-heading"
              className="text-2xl lg:text-3xl font-bold mb-2 leading-tight"
              style={{ color: '#0B1F3F' }}
            >
              Common {serviceTitle} Problems We Fix
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
