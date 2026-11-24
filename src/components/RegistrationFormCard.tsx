import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';
import { ACADEMY_INFO, COURSES, type CourseId } from '../data/academyData';

interface RegistrationFormCardProps {
  selectedCourseId: CourseId;
  onCourseChange: (id: CourseId) => void;
  compact?: boolean;
}

const CONFETTI_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 5.2) % 84)}%`,
  delay: `${(i % 5) * 80}ms`,
  color: i % 3 === 0 ? '#00F5D4' : i % 3 === 1 ? '#3B82F6' : '#F8FAFC',
}));

export function RegistrationFormCard({
  selectedCourseId,
  onCourseChange,
  compact = false,
}: RegistrationFormCardProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    courseTitle: string;
  } | null>(null);

  useEffect(() => {
    setError('');
  }, [selectedCourseId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const digitsOnly = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setError('Iltimos, ism va familiyangizni kiriting.');
      return;
    }

    if (digitsOnly.length < 9) {
      setError('Iltimos, toʻgʻri telefon raqamini kiriting (masalan: +998 97 234 03 01).');
      return;
    }

    const courseObj = COURSES.find((c) => c.id === selectedCourseId) ?? COURSES[0];
    setError('');
    setSubmittedData({
      name: trimmedName,
      phone: phone.trim(),
      courseTitle: courseObj.title,
    });
  };

  const buildTelegramHref = () => {
    if (!submittedData) return ACADEMY_INFO.telegramUrl;
    const message = [
      `Assalomu alaykum! Men ${ACADEMY_INFO.name} kursiga yozilmoqchiman.`,
      `Ism: ${submittedData.name}`,
      `Telefon: ${submittedData.phone}`,
      `Tanlangan kurs: ${submittedData.courseTitle}`,
    ].join('\n');
    return `${ACADEMY_INFO.telegramUrl}?text=${encodeURIComponent(message)}`;
  };

  if (submittedData) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-[#00F5D4]/40 bg-[#0B1329] p-6 sm:p-8 text-center">
        {/* Confetti Particles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden">
          {CONFETTI_PARTICLES.map((p) => (
            <span
              key={p.id}
              className="animate-confetti absolute top-0 h-2.5 w-2 rounded-xs"
              style={{
                left: p.left,
                animationDelay: p.delay,
                backgroundColor: p.color,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00F5D4]/15 text-[#00F5D4]">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Arizangiz tayyorlandi!
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-white">{submittedData.name}</span>, siz{' '}
            <span className="font-semibold text-[#00F5D4]">{submittedData.courseTitle}</span> kursi uchun maʼlumotlarni kiritdingiz. Arizani tasdiqlash uchun Telegram orqali yuboring:
          </p>

          <a
            href={buildTelegramHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#070B19] shadow-[0_0_24px_-6px_rgba(0,245,212,0.6)] transition-colors hover:bg-[#33f7dd]"
          >
            <Send className="h-4 w-4" />
            Telegram orqali {ACADEMY_INFO.telegramHandle} ga yuborish
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setFullName('');
              setPhone('+998 ');
            }}
            className="mt-4 text-xs font-medium text-slate-400 underline-offset-4 hover:text-white hover:underline cursor-pointer"
          >
            Yana ariza qoldirish
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={compact ? 'space-y-4' : 'glass-surface rounded-2xl p-6 sm:p-8 space-y-5'}
    >
      {!compact && (
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#00F5D4]">
            <Sparkles className="h-3.5 w-3.5" />
            Bepul sinov darsi
          </div>
          <h3 className="mt-1.5 text-2xl font-bold text-white">Kursga roʻyxatdan oʻtish</h3>
          <p className="mt-1 text-sm text-slate-400">
            Maʼlumotlaringizni kiriting va bir tugma bilan Telegramʼda arizangizni yuboring.
          </p>
        </div>
      )}

      <div>
        <label htmlFor={compact ? 'modal-name' : 'inline-name'} className="block text-xs font-semibold text-slate-300">
          Oʻquvchi yoki ota-ona ismi
        </label>
        <input
          id={compact ? 'modal-name' : 'inline-name'}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Masalan: Azizbek Karimov"
          required
          className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B19]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#00F5D4] focus:outline-none focus:ring-1 focus:ring-[#00F5D4]"
        />
      </div>

      <div>
        <label htmlFor={compact ? 'modal-phone' : 'inline-phone'} className="block text-xs font-semibold text-slate-300">
          Telefon raqamingiz
        </label>
        <input
          id={compact ? 'modal-phone' : 'inline-phone'}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+998 97 234 03 01"
          required
          className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B19]/90 px-4 py-3 font-mono text-sm text-white placeholder:text-slate-500 focus:border-[#00F5D4] focus:outline-none focus:ring-1 focus:ring-[#00F5D4]"
        />
      </div>

      <div>
        <label htmlFor={compact ? 'modal-course' : 'inline-course'} className="block text-xs font-semibold text-slate-300">
          Qiziqtirgan yoʻnalish
        </label>
        <select
          id={compact ? 'modal-course' : 'inline-course'}
          value={selectedCourseId}
          onChange={(e) => onCourseChange(e.target.value as CourseId)}
          className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#070B19]/90 px-4 py-3 text-sm text-white focus:border-[#00F5D4] focus:outline-none focus:ring-1 focus:ring-[#00F5D4]"
        >
          {COURSES.map((course) => (
            <option key={course.id} value={course.id} className="bg-[#0B1224] text-white">
              {course.title} ({course.ageGroup})
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p role="alert" className="text-xs font-medium text-rose-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00F5D4] px-5 py-3.5 text-sm font-bold text-[#070B19] transition-colors hover:bg-[#33f7dd] cursor-pointer"
      >
        Arizani shakllantirish
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
