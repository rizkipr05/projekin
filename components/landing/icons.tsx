interface IconProps {
  className?: string;
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-indigo-600" aria-hidden="true">
      <path d="M5 12.5 9.5 17 19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M4.167 10h11.666m0 0-4.166-4.167M15.833 10l-4.166 4.167" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L2.9 9.4l6.3-.9L12 2.8Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.012 2C6.5 2 2.012 6.488 2.012 12c0 2.12.662 4.088 1.788 5.7L2 22l4.425-1.75A9.94 9.94 0 0 0 12.012 22c5.512 0 10-4.488 10-10s-4.488-10-10-10Zm5.787 14.188c-.237.663-1.375 1.275-1.925 1.338-.512.062-1.175.1-3.388-.8-2.825-1.15-4.625-4.025-4.762-4.213-.138-.187-1.125-1.487-1.125-2.837 0-1.35.7-2.012.95-2.287.25-.275.55-.35.738-.35.187 0 .375 0 .537.012.175.013.413-.062.65.5.237.575.813 1.975.888 2.125.075.15.112.338.012.538-.1.2-.15.325-.3.5-.15.175-.313.387-.45.525-.15.15-.313.312-.138.612.175.3.775 1.275 1.663 2.063 1.137 1.012 2.1 1.325 2.4 1.475.3.15.475.125.65-.075.175-.2.75-.875.95-1.175.2-.3.4-.25.675-.15.275.1.1.75 2.125 1.775 2.438.3.15.5.225.575.35.075.125.075.725-.162 1.388Z" />
    </svg>
  );
}

export function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function DesignIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function DealIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

export function CodeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function RocketIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function PriceIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function RevisionIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

export function DomainIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20z" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function ZapSpeedIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function SupportIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CustomLayoutIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

export function ProjekinHexagonIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="url(#hex-grad-outer)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M14 11V29" stroke="url(#hex-grad-inner)" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 12.5H23C26.5 12.5 28.5 14.5 28.5 18C28.5 21.5 26.5 23.5 23 23.5H14" stroke="url(#hex-grad-inner)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 18L26 24" stroke="url(#hex-grad-glow)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="18" r="2" fill="#06b6d4" />
      <defs>
        <linearGradient id="hex-grad-outer" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="hex-grad-inner" x1="14" y1="11" x2="28.5" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="hex-grad-glow" x1="20" y1="18" x2="26" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProjekinTechIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="url(#tech-logo-grad)" />
      <path d="m2 17 10 5 10-5" stroke="url(#tech-logo-grad)" />
      <path d="m2 12 10 5 10-5" stroke="url(#tech-logo-grad)" />
      <defs>
        <linearGradient id="tech-logo-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e9d5ff" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProjekinBrandLogo({ className = "" }: IconProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.3)] transition duration-300 group-hover:scale-105 group-hover:border-purple-400 group-hover:shadow-[0_0_22px_rgba(192,132,252,0.5)]">
        <ProjekinTechIcon className="h-6 w-6 text-purple-300" />
      </div>
      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition duration-200 group-hover:opacity-90">
        Projek<span className="text-purple-400 font-black">in</span>
      </span>
    </div>
  );
}
