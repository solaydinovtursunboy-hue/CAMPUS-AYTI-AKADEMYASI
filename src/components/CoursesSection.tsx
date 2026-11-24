import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Cpu } from 'lucide-react';
import { COURSES, type CourseId, type CourseItem } from '../data/academyData';

interface CoursesSectionProps {
  onSelectCourse: (courseId: CourseId) => void;
}

type FilterType = 'all' | 'kids' | 'teens';

export function CoursesSection({ onSelectCourse }: CoursesSectionProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedCourse, setExpandedCourse] = useState<CourseId | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleCourses = COURSES.filter((course) => {
    if (filter === 'all') return true;
    return course.ageCategory === filter;
  });

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="kurslar" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Segmented Filter */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-800/80 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#00F5D4]">Oʻquv dasturlari</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Yosh va qiziqishga mos 4 ta amaliy yoʻnalish
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Har bir kurs oʻquvchini noldan mustaqil loyiha yaratish darajasigacha olib chiqish uchun bosqichma-bosqich tuzilgan.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Kurs yosh toifalari"
            className="inline-flex self-start rounded-xl border border-slate-800 bg-[#0B1224] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={`whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#00F5D4] text-[#070B19]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Barchasi (4)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'kids'}
              onClick={() => setFilter('kids')}
              className={`whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                filter === 'kids'
                  ? 'bg-[#00F5D4] text-[#070B19]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Bolalar (6–12 yosh)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'teens'}
              onClick={() => setFilter('teens')}
              className={`whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                filter === 'teens'
                  ? 'bg-[#00F5D4] text-[#070B19]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Oʻsmirlar (11+ yosh)
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleCourses.map((course: CourseItem) => {
            const isExpanded = expandedCourse === course.id;
            return (
              <article
                key={course.id}
                className="glass-surface glass-surface-hover flex flex-col overflow-hidden rounded-2xl"
              >
                {/* 4:3 Course Visual */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-800/80 bg-[#0A1022]">
                  {!failedImages[course.id] ? (
                    <img
                      src={course.image}
                      alt={course.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(course.id)}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0E1834] to-[#070B19] p-6 text-center">
                      <Cpu className="mb-2 h-10 w-10 text-[#00F5D4]" />
                      <span className="text-sm font-semibold text-white">{course.title}</span>
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B19]/90 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-xs font-mono text-slate-200">
                    <span>{course.index}. Yoʻnalish</span>
                    <span className="tabular-nums text-[#00F5D4]">{course.ageGroup}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Unboxed typographic metadata */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-400">
                    <span className="text-[#00F5D4] font-mono tabular-nums">{course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.schedule}</span>
                  </div>

                  <h3 className="mt-2.5 text-xl font-bold text-white">{course.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#3B82F6]">{course.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {course.description}
                  </p>

                  {/* Tech Stack as clean unboxed typographic line */}
                  <div className="mt-4 border-t border-slate-800/70 pt-4 font-mono text-xs text-slate-400">
                    {course.techStack.join(' · ')}
                  </div>

                  {/* Expandable Outcomes */}
                  {isExpanded && (
                    <ul className="mt-4 space-y-2 border-t border-slate-800/70 pt-4 text-sm text-slate-300">
                      {course.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00F5D4]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCourse((prev) => (prev === course.id ? null : course.id))
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition-colors hover:text-[#00F5D4] cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          Dasturni yopish <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Nimalar oʻrganiladi? <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectCourse(course.id)}
                      className="inline-flex whitespace-nowrap shrink-0 items-center gap-1.5 rounded-xl bg-[#00F5D4]/15 border border-[#00F5D4]/40 px-4 py-2.5 text-xs font-bold text-[#00F5D4] transition-all duration-150 hover:bg-[#00F5D4] hover:text-[#070B19] cursor-pointer"
                    >
                      Kursga yozilish
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
