import { useEffect, useState, type MouseEvent } from 'react';
import { ArrowRight, Code2, Cpu, Blocks, Gamepad2, PhoneCall } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface HeroProps {
  onOpenRegistration: () => void;
}

const TYPING_WORDS = ['Dasturlash', 'Robototexnika', 'Muhandislik'];

const FLOATING_BADGES = [
  {
    id: 'html',
    label: 'HTML5 & CSS3',
    sub: 'Web',
    icon: Code2,
    position: 'top-5 left-5',
    depth: 18,
    accent: 'text-[#00F5D4] border-[#00F5D4]/30',
  },
  {
    id: 'arduino',
    label: 'Arduino UNO',
    sub: 'Hardware',
    icon: Cpu,
    position: 'top-5 right-5',
    depth: -22,
    accent: 'text-[#3B82F6] border-[#3B82F6]/35',
  },
  {
    id: 'lego',
    label: 'LEGO WeDo',
    sub: '6–11 yosh',
    icon: Blocks,
    position: 'bottom-20 left-5',
    depth: -15,
    accent: 'text-amber-300 border-amber-400/30',
  },
  {
    id: 'scratch',
    label: 'Scratch 3.0',
    sub: '2D Oʻyinlar',
    icon: Gamepad2,
    position: 'bottom-20 right-5',
    depth: 20,
    accent: 'text-sky-300 border-sky-400/30',
  },
];

export function Hero({ onOpenRegistration }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(TYPING_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 48 : 88;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        window.setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        return;
      }

      const nextLength = displayedText.length + (isDeleting ? -1 : 1);
      setDisplayedText(currentWord.slice(0, nextLength));
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: normX, y: normY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800/70 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Ambient radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#00F5D4]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/6 top-20 h-96 w-96 rounded-full bg-[#3B82F6]/12 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="mb-4 text-sm font-medium tracking-wide text-[#00F5D4]">
              Andijon viloyati · Oltinkoʻl tumani · Katta pochta yonida
            </p>

            <h1 className="max-w-2xl text-balance text-[clamp(2.25rem,4.2vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              Oltinkoʻlda kelajak kasblarini oʻrganing:{' '}
              <span className="block mt-2 min-h-[1.2em] text-[#00F5D4]">
                {displayedText}
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-[#00F5D4] animate-pulse"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Campus Ayti Academy — bolalar va oʻsmirlar uchun 80% amaliyotga asoslangan IT hamda robototexnika markazi. Birinchi darsdayoq haqiqiy kod yozing va robot modellarini harakatga keltiring.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenRegistration}
                className="inline-flex whitespace-nowrap shrink-0 items-center gap-2 rounded-xl bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#070B19] shadow-[0_0_24px_-6px_rgba(0,245,212,0.55)] transition-all duration-150 hover:bg-[#33f7dd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5D4] cursor-pointer"
              >
                Bepul sinov darsiga yozilish
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#yonalish-testi"
                className="inline-flex whitespace-nowrap shrink-0 items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-[#3B82F6] hover:text-white"
              >
                Qaysi kurs menga mos?
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <a
                href={ACADEMY_INFO.phoneHref}
                className="inline-flex items-center gap-2 font-mono tabular-nums text-slate-200 transition-colors hover:text-[#00F5D4]"
              >
                <PhoneCall className="h-4 w-4 text-[#00F5D4]" />
                {ACADEMY_INFO.phoneDisplay}
              </a>
              <span aria-hidden="true" className="text-slate-700">
                ·
              </span>
              <a
                href={ACADEMY_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-300 transition-colors hover:text-[#00F5D4]"
              >
                Telegram: {ACADEMY_INFO.telegramHandle}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Visual Stage with 3D-style Mouse Parallax Badges */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex min-h-[340px] items-stretch lg:col-span-6 lg:min-h-[460px]"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0B1224] shadow-2xl">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_robotics_lab_1795530646218.jpg"
                  alt="Campus Ayti Academy zamonaviy IT va robototexnika laboratoriyasi"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out"
                  style={{
                    transform: `scale(1.03) translate3d(${mouseOffset.x * -10}px, ${mouseOffset.y * -10}px, 0)`,
                  }}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0B142C] via-[#070B19] to-[#0E1E3F] p-8 text-center">
                  <Cpu className="mb-3 h-12 w-12 text-[#00F5D4]" />
                  <p className="text-lg font-bold text-white">{ACADEMY_INFO.name}</p>
                  <p className="mt-1 text-sm text-slate-400">IT va Robototexnika Laboratoriyasi</p>
                </div>
              )}

              {/* Scrim for guaranteed legibility */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B19]/90 via-[#070B19]/20 to-[#070B19]/30"
              />

              {/* Interactive Floating 3D-style Tech Badges */}
              {FLOATING_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.id}
                    className={`hidden sm:flex absolute ${badge.position} items-center gap-2.5 rounded-xl border bg-[#070B19]/80 px-3.5 py-2.5 backdrop-blur-md shadow-lg transition-transform duration-200 ease-out ${badge.accent}`}
                    style={{
                      transform: `perspective(800px) translate3d(${mouseOffset.x * badge.depth}px, ${mouseOffset.y * badge.depth}px, 0) rotateX(${mouseOffset.y * -6}deg) rotateY(${mouseOffset.x * 6}deg)`,
                    }}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <div className="leading-tight">
                      <div className="text-xs font-bold text-white whitespace-nowrap">
                        {badge.label}
                      </div>
                      <div className="text-[11px] text-slate-400 whitespace-nowrap">
                        {badge.sub}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bottom caption inside hero media */}
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-700/60 bg-[#070B19]/85 px-4 py-3 backdrop-blur-md">
                <div className="text-xs sm:text-sm font-medium text-slate-200">
                  4 ta asosiy yoʻnalish · Individual kompyuter va robot toʻplamlari
                </div>
                <div className="font-mono text-xs tabular-nums text-[#00F5D4]">
                  Indeks: 171000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Key Facts Strip below Hero Split */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4">
          <div className="space-y-1">
            <div className="font-mono text-2xl font-bold tabular-nums text-white">80%</div>
            <div className="text-sm text-slate-400">Amaliy mashgʻulot va jonli loyihalar</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-2xl font-bold tabular-nums text-[#00F5D4]">4 ta</div>
            <div className="text-sm text-slate-400">Talab yuqori IT va robototexnika kursi</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-2xl font-bold tabular-nums text-white">6–22</div>
            <div className="text-sm text-slate-400">Yosh toifalariga moslashtirilgan guruhlar</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-2xl font-bold tabular-nums text-[#3B82F6]">171000</div>
            <div className="text-sm text-slate-400">Oltinkoʻl markazi, Katta pochta yonida</div>
          </div>
        </div>
      </div>
    </section>
  );
}
