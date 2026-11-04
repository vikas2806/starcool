interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Star icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 2L23.5 14.5H36.5L26 22.5L29.5 35L20 27.5L10.5 35L14 22.5L3.5 14.5H16.5L20 2Z"
          fill="#F97316"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <div className="text-lg font-bold tracking-wide">
          <span className="text-white">STAR </span>
          <span className="text-cyan-400">COOL</span>
          <span className="text-white text-xs align-super">&reg;</span>
        </div>
        <span className="text-white text-[9px] tracking-widest font-medium opacity-80">
          APPLIANCE REPAIRS
        </span>
      </div>
    </div>
  );
}
