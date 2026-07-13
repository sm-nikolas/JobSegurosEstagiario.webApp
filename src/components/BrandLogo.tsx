import { useLayoutEffect, useRef } from 'react';
import { siteConfig } from '../config/site';

const BRAND = {
  job: '#1e3a5f',
  seguros: '#f59e0b',
} as const;

const TAGLINE = 'SEGUROS E NEGOCIOS';

const SIZE_VARS = {
  md: {
    '--brand-title': '1.125rem',
    '--brand-title-sm': '1.25rem',
    '--brand-icon': '2.625rem',
    '--brand-icon-sm': '3rem',
  },
  lg: {
    '--brand-title': '1.65rem',
    '--brand-title-sm': '1.85rem',
    '--brand-icon': '3.75rem',
    '--brand-icon-sm': '4.125rem',
  },
} as const;

type BrandSize = keyof typeof SIZE_VARS;

function BrandWordmark({ size = 'md' }: { size?: BrandSize }) {
  const titleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const fitTagline = () => {
      const title = titleRef.current;
      const tagline = taglineRef.current;
      if (!title || !tagline) return;

      const targetWidth = title.offsetWidth;
      tagline.style.width = `${targetWidth}px`;
      tagline.style.letterSpacing = '0px';

      const chars = TAGLINE.length;
      if (chars <= 1) return;

      const overflow = tagline.scrollWidth - targetWidth;
      tagline.style.letterSpacing = `${-overflow / (chars - 1)}px`;
    };

    fitTagline();
    window.addEventListener('resize', fitTagline);
    return () => window.removeEventListener('resize', fitTagline);
  }, [size]);

  return (
    <div
      className="inline-flex w-fit flex-col items-center text-[length:var(--brand-title)] sm:text-[length:var(--brand-title-sm)]"
      style={SIZE_VARS[size] as React.CSSProperties}
    >
      <div
        ref={titleRef}
        className="text-[1em] font-bold leading-none whitespace-nowrap"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <span style={{ color: BRAND.job }}>Job</span>
        <span style={{ color: BRAND.seguros }}>Seguros</span>
      </div>

      <div
        className="mt-[0.04em] h-[0.06em] w-[88%] rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${BRAND.seguros} 18%, ${BRAND.seguros} 82%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      <p
        ref={taglineRef}
        className="mt-[0.16em] text-[0.36em] whitespace-nowrap text-center font-normal uppercase leading-none"
        style={{ fontFamily: "'Sora', sans-serif", color: BRAND.job }}
      >
        {TAGLINE}
      </p>
    </div>
  );
}

function BrandLockup({ size = 'md' }: { size?: BrandSize }) {
  return (
    <div
      className="flex items-center gap-[0.55em] text-[length:var(--brand-title)] sm:text-[length:var(--brand-title-sm)]"
      style={SIZE_VARS[size] as React.CSSProperties}
    >
      <img
        src={siteConfig.logoIcon}
        alt=""
        aria-hidden="true"
        className="h-[var(--brand-icon)] w-auto shrink-0 object-contain sm:h-[var(--brand-icon-sm)]"
      />
      <BrandWordmark size={size} />
    </div>
  );
}

export function NavbarBrand() {
  return <BrandLockup size="md" />;
}

export function FooterBrand() {
  return (
    <div className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm">
      <BrandLockup size="lg" />
    </div>
  );
}
