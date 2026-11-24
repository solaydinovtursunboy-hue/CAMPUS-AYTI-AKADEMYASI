import { useState } from 'react';
import { Check, Copy, MapPin, Phone, Send, Clock } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export function LocationCard() {
  const [copiedField, setCopiedField] = useState<'phone' | 'coords' | null>(null);

  const handleCopy = async (text: string, field: 'phone' | 'coords') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback for clipboard restrictions
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <div className="glass-surface flex flex-col justify-between overflow-hidden rounded-2xl">
      {/* Styled Dark-Mode Vector Map Preview of Oltinko'l */}
      <div className="relative h-60 w-full overflow-hidden border-b border-slate-800/80 bg-[#080E20]">
        {/* Architectural Street Grid SVG */}
        <svg
          viewBox="0 0 600 260"
          className="h-full w-full opacity-75"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="oltinkol-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="rgba(59, 130, 246, 0.14)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="600" height="260" fill="url(#oltinkol-grid)" />
          {/* Main District Roads */}
          <path
            d="M 0 145 Q 220 130 340 135 T 600 115"
            fill="none"
            stroke="rgba(0, 245, 212, 0.35)"
            strokeWidth="3"
          />
          <path
            d="M 290 0 L 310 260"
            fill="none"
            stroke="rgba(148, 163, 184, 0.25)"
            strokeWidth="2"
          />
          <path
            d="M 110 30 L 490 220"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1.5"
          />
          {/* Katta Pochta landmark outline */}
          <rect
            x="245"
            y="88"
            width="44"
            height="30"
            rx="4"
            fill="rgba(59, 130, 246, 0.16)"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Central Academy Pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#00F5D4] bg-[#070B19]/95 text-[#00F5D4] shadow-[0_0_24px_rgba(0,245,212,0.5)]">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="mt-2 rounded-lg border border-slate-700/80 bg-[#070B19]/90 px-3 py-1 text-center backdrop-blur-md">
            <div className="text-xs font-bold text-white whitespace-nowrap">
              {ACADEMY_INFO.name}
            </div>
            <div className="text-[11px] text-[#00F5D4] whitespace-nowrap">
              Katta pochta binosi yonida
            </div>
          </div>
        </div>

        {/* Postal Code Corner Label */}
        <div className="absolute right-3 top-3 rounded-lg border border-slate-800 bg-[#070B19]/90 px-2.5 py-1 font-mono text-xs tabular-nums text-slate-300">
          Oltinkoʻl · {ACADEMY_INFO.postalCode}
        </div>
      </div>

      {/* Contact & One-Click Copy Controls */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div className="space-y-4">
          <div>
            <div className="text-xs font-medium text-slate-400">Manzil</div>
            <p className="mt-1 text-base font-semibold text-white">
              {ACADEMY_INFO.address} ({ACADEMY_INFO.postalCode})
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Clickable + Copyable Phone */}
            <div className="rounded-xl border border-slate-800 bg-[#070B19]/80 p-3.5">
              <div className="text-xs text-slate-400">Telefon raqam</div>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <a
                  href={ACADEMY_INFO.phoneHref}
                  className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold tabular-nums text-white hover:text-[#00F5D4]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#00F5D4]" />
                  {ACADEMY_INFO.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(ACADEMY_INFO.phoneDisplay, 'phone')}
                  aria-label="Telefon raqamini nusxalash"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-700 px-2 py-1 text-[11px] font-medium text-slate-300 hover:border-[#00F5D4] hover:text-[#00F5D4] cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3 w-3 text-[#00F5D4]" />
                      Nusxalandi
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Nusxa
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Telegram Direct */}
            <div className="rounded-xl border border-slate-800 bg-[#070B19]/80 p-3.5">
              <div className="text-xs text-slate-400">Telegram admin</div>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <a
                  href={ACADEMY_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00F5D4] hover:underline"
                >
                  <Send className="h-3.5 w-3.5" />
                  {ACADEMY_INFO.telegramHandle}
                </a>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock className="h-3 w-3" />
                  Tez javob
                </span>
              </div>
            </div>
          </div>

          {/* Copyable Coordinates / Full Address */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-[#070B19]/60 px-4 py-3">
            <div className="font-mono text-xs tabular-nums text-slate-300">
              {ACADEMY_INFO.coordinates} · Indeks {ACADEMY_INFO.postalCode}
            </div>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  `${ACADEMY_INFO.address} (${ACADEMY_INFO.postalCode}) — ${ACADEMY_INFO.coordinates}`,
                  'coords'
                )
              }
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B82F6] hover:text-[#00F5D4] cursor-pointer"
            >
              {copiedField === 'coords' ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#00F5D4]" />
                  Manzil nusxalandi
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Manzil va koordinatani nusxalash
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
          Ish vaqti: {ACADEMY_INFO.workingHours}
        </div>
      </div>
    </div>
  );
}
