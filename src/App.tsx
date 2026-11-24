import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { CareerQuiz } from './components/CareerQuiz';
import { BentoBenefits } from './components/BentoBenefits';
import { LocationCard } from './components/LocationCard';
import { RegistrationFormCard } from './components/RegistrationFormCard';
import { RegistrationModal } from './components/RegistrationModal';
import { ACADEMY_INFO, type CourseId } from './data/academyData';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<CourseId>('web-dev');
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenWithCourse = (courseId: CourseId) => {
    setSelectedCourseId(courseId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 circuit-grid-bg">
      <Navbar onOpenRegistration={() => setModalOpen(true)} />

      <main>
        <Hero onOpenRegistration={() => setModalOpen(true)} />

        <CoursesSection onSelectCourse={handleOpenWithCourse} />

        <CareerQuiz onSelectRecommendedCourse={handleOpenWithCourse} />

        <BentoBenefits />

        {/* Location & Inline Registration Split Section */}
        <section
          id="manzil"
          className="border-t border-slate-800/70 bg-[#080D1E]/85 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#00F5D4]">Bogʻlanish va manzil</p>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Oltinkoʻldagi oʻquv markazimizga tashrif buyuring
              </h2>
              <p className="mt-3 text-base text-slate-300">
                Bepul sinov darsiga yoziling yoki toʻgʻridan-toʻgʻri {ACADEMY_INFO.telegramHandle} orqali bogʻlaning.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6 flex flex-col">
                <LocationCard />
              </div>

              <div className="lg:col-span-6 flex flex-col">
                <RegistrationFormCard
                  selectedCourseId={selectedCourseId}
                  onCourseChange={setSelectedCourseId}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-800/80 bg-[#050814] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="text-base font-bold text-white">{ACADEMY_INFO.name}</div>
            <p className="mt-1 text-xs text-slate-400">
              {ACADEMY_INFO.address} · {ACADEMY_INFO.postalCode}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <a href="#kurslar" className="hover:text-[#00F5D4] transition-colors">
              Kurslar
            </a>
            <a href="#yonalish-testi" className="hover:text-[#00F5D4] transition-colors">
              Yoʻnalish testi
            </a>
            <a href="#afzalliklar" className="hover:text-[#00F5D4] transition-colors">
              Afzalliklar
            </a>
            <a
              href={ACADEMY_INFO.phoneHref}
              className="font-mono tabular-nums text-slate-300 hover:text-[#00F5D4] transition-colors"
            >
              {ACADEMY_INFO.phoneDisplay}
            </a>
            <a
              href={ACADEMY_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F5D4] hover:underline"
            >
              {ACADEMY_INFO.telegramHandle}
            </a>
          </div>
        </div>
      </footer>

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCourseId={selectedCourseId}
        onCourseChange={setSelectedCourseId}
      />
    </div>
  );
}

