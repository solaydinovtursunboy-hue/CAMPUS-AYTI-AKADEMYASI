import { useState } from 'react';
import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import {
  QUIZ_QUESTIONS,
  recommendCourseFromQuiz,
  type CourseId,
} from '../data/academyData';

interface CareerQuizProps {
  onSelectRecommendedCourse: (courseId: CourseId) => void;
}

export function CareerQuiz({ onSelectRecommendedCourse }: CareerQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isComplete = step >= QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[step];

  const handleChooseOption = (questionId: string, optionId: string) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);
    setStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setAnswers({});
    setStep(0);
  };

  const recommendation = isComplete ? recommendCourseFromQuiz(answers) : null;

  return (
    <section
      id="yonalish-testi"
      className="border-y border-slate-800/70 bg-[#090F22]/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-[#00F5D4]">Interaktiv yordamchi</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Qaysi kurs menga mos?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            3 ta qisqa savolga javob bering — siz yoki farzandingiz uchun Campus Ayti Academyʼdagi eng mos yoʻnalishni darhol aniqlab beramiz.
          </p>
        </div>

        <div className="glass-surface rounded-2xl p-6 sm:p-8 lg:p-10">
          {/* Progress Header */}
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div className="font-mono text-xs font-medium text-slate-300 tabular-nums">
              {isComplete
                ? 'Natija tayyor · 3 / 3 bosqich'
                : `${currentQuestion.stepLabel} · ${step + 1} / ${QUIZ_QUESTIONS.length}`}
            </div>

            <div className="flex items-center gap-2" aria-hidden="true">
              {QUIZ_QUESTIONS.map((q, idx) => (
                <span
                  key={q.id}
                  className={`h-1.5 w-8 rounded-full transition-colors duration-200 ${
                    idx < step
                      ? 'bg-[#00F5D4]'
                      : idx === step && !isComplete
                        ? 'bg-[#3B82F6]'
                        : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {!isComplete && currentQuestion ? (
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {currentQuestion.question}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {currentQuestion.options.map((opt) => {
                  const selected = answers[currentQuestion.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleChooseOption(currentQuestion.id, opt.id)}
                      className={`group flex flex-col justify-between rounded-xl border p-5 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5D4] ${
                        selected
                          ? 'border-[#00F5D4] bg-[#00F5D4]/10'
                          : 'border-slate-800 bg-[#070B19]/75 hover:border-[#00F5D4]/50 hover:bg-[#0D152E]'
                      }`}
                    >
                      <div>
                        <div className="text-base font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                          {opt.label}
                        </div>
                        <div className="mt-1.5 text-sm text-slate-400">{opt.detail}</div>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#00F5D4] opacity-80 group-hover:opacity-100">
                        Tanlash <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <div className="mt-6 flex justify-start">
                  <button
                    type="button"
                    onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
                  >
                    ← Oldingi savolga qaytish
                  </button>
                </div>
              )}
            </div>
          ) : (
            recommendation && (
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00F5D4]">
                    <Check className="h-4 w-4" />
                    Siz uchun eng mos yoʻnalish aniqlandi
                  </div>

                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    {recommendation.course.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    {recommendation.reason}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-400">
                    <span className="text-[#00F5D4]">{recommendation.course.ageGroup}</span>
                    <span aria-hidden="true">·</span>
                    <span>{recommendation.course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{recommendation.course.schedule}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectRecommendedCourse(recommendation.course.id)}
                      className="inline-flex whitespace-nowrap shrink-0 items-center gap-2 rounded-xl bg-[#00F5D4] px-5 py-3 text-sm font-bold text-[#070B19] transition-colors hover:bg-[#33f7dd] cursor-pointer"
                    >
                      Shu kursga yozilish
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex whitespace-nowrap shrink-0 items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white cursor-pointer"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Qayta tekshirish
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#070B19]">
                    <img
                      src={recommendation.course.image}
                      alt={recommendation.course.imageAlt}
                      referrerPolicy="no-referrer"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
