import { Award, Cpu, MapPin, Users } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export function BentoBenefits() {
  return (
    <section id="afzalliklar" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#00F5D4]">Nima uchun Campus Ayti?</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Natijaga yoʻnaltirilgan oʻquv muhiti
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Nazariy maʼruzalar oʻrniga har bir oʻquvchining qoʻlida real texnika va shaxsiy loyihalar boʻlishini taʼminlaymiz.
          </p>
        </div>

        {/* Asymmetric Apple/Linear-style Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Card 1: Wide (col-span-2) */}
          <div className="glass-surface glass-surface-hover flex flex-col justify-between rounded-2xl p-7 md:col-span-2">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#00F5D4]">01. Amaliy metodika</span>
                <Cpu className="h-5 w-5 text-[#00F5D4]" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                80% amaliy darslar va haqiqiy qurilmalar
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Oʻquvchilar faqat ekran koʻrib oʻtirmaydi: Web guruhlarida har darsda haqiqiy veb-sahifa kodlanadi, Robototexnikada esa har bir oʻquvchi Arduino datchiklari va LEGO mexanizmlarini oʻz qoʻli bilan yigʻadi.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-5">
              <div>
                <div className="font-mono text-xl font-bold tabular-nums text-white">80%</div>
                <div className="mt-0.5 text-xs text-slate-400">Amaliyot ulushi</div>
              </div>
              <div>
                <div className="font-mono text-xl font-bold tabular-nums text-[#00F5D4]">1:1</div>
                <div className="mt-0.5 text-xs text-slate-400">Shaxsiy ish oʻrni</div>
              </div>
              <div>
                <div className="font-mono text-xl font-bold tabular-nums text-white">6+</div>
                <div className="mt-0.5 text-xs text-slate-400">Bitiruv loyihalari</div>
              </div>
            </div>
          </div>

          {/* Card 2: Compact (col-span-1) */}
          <div className="glass-surface glass-surface-hover flex flex-col justify-between rounded-2xl p-7 md:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#3B82F6]">02. Lokatsiya</span>
                <MapPin className="h-5 w-5 text-[#3B82F6]" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Katta pochta yonidagi qulay manzil
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Oltinkoʻl tumani markazida, Katta pochta binosi yonida joylashgani sababli maktab oʻquvchilari uchun qatnov xavfsiz va juda qulay.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-800/80 pt-4 font-mono text-xs text-slate-400">
              {ACADEMY_INFO.address} · {ACADEMY_INFO.postalCode}
            </div>
          </div>

          {/* Card 3: Compact (col-span-1) */}
          <div className="glass-surface glass-surface-hover flex flex-col justify-between rounded-2xl p-7 md:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#00F5D4]">03. Ustozlar</span>
                <Users className="h-5 w-5 text-[#00F5D4]" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Tajribali mentorlar va kichik guruhlar
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Har bir guruhda oʻquvchilar soni cheklangan. Ustozlar murakkab algoritm va sxemalarni sodda, tushunarli tilda oʻrgatib, har bir bolaga alohida eʼtibor qaratadi.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-800/80 pt-4 text-xs font-medium text-slate-400">
              Individual fikr-mulohaza · Ota-onalar bilan doimiy aloqa
            </div>
          </div>

          {/* Card 4: Wide (col-span-2) */}
          <div className="glass-surface glass-surface-hover flex flex-col justify-between rounded-2xl p-7 md:col-span-2">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#3B82F6]">04. Natija va eʼtirof</span>
                <Award className="h-5 w-5 text-[#3B82F6]" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Rasmiy sertifikat va Demo Day taqdimoti
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Kurs yakunida har bir bitiruvchi oʻzining tayyor veb-sayti, oʻyini yoki ishlaydigan robotini ota-onalar hamda mentorlar oldida himoya qiladi va Campus Ayti Academy sertifikatiga ega boʻladi.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-800/80 pt-4 text-xs font-medium text-slate-300">
              <span>Loyiha himoyasi</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Shaxsiy portfolio</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Respublika musobaqalariga tayyorgarlik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
