import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface NavbarProps {
  onOpenRegistration: () => void;
}

const NAV_LINKS = [
  { href: '#kurslar', label: 'Kurslar' },
  { href: '#yonalish-testi', label: 'Yoʻnalish testi' },
  { href: '#afzalliklar', label: 'Afzalliklar' },
  { href: '#manzil', label: 'Manzil' },
];

export function Navbar({ onOpenRegistration }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#070B19]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element wordmark */}
        <a
          href="#top"
          className="whitespace-nowrap shrink-0 text-lg font-bold tracking-tight text-white transition-colors hover:text-[#00F5D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5D4] rounded"
        >
          {ACADEMY_INFO.name}
        </a>

        {/* Zone 2: Concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Asosiy navigatsiya">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-300 transition-colors hover:text-[#00F5D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5D4] rounded py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenRegistration}
            className="hidden sm:inline-flex whitespace-nowrap shrink-0 items-center justify-center rounded-lg bg-[#00F5D4] px-4 py-2 text-sm font-semibold text-[#070B19] transition-all duration-150 hover:bg-[#33f7dd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B19] cursor-pointer"
          >
            Kursga yozilish
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-200 hover:border-[#00F5D4]/50 hover:text-[#00F5D4] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-[#070B19]/95 px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobil navigatsiya">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-[#00F5D4]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenRegistration();
              }}
              className="mt-2 w-full rounded-lg bg-[#00F5D4] px-4 py-2.5 text-sm font-semibold text-[#070B19] cursor-pointer"
            >
              Kursga yozilish
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
