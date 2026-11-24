import { useEffect } from 'react';
import { X } from 'lucide-react';
import { RegistrationFormCard } from './RegistrationFormCard';
import type { CourseId } from '../data/academyData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseId: CourseId;
  onCourseChange: (id: CourseId) => void;
}

export function RegistrationModal({
  isOpen,
  onClose,
  selectedCourseId,
  onCourseChange,
}: RegistrationModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040711]/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="glass-surface relative w-full max-w-lg rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#00F5D4]">Bepul sinov darsi</p>
            <h2 id="modal-title" className="mt-1 text-2xl font-bold text-white">
              Campus Ayti Academyʼga yozilish
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Oynani yopish"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 text-slate-300 transition-colors hover:border-[#00F5D4] hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <RegistrationFormCard
          selectedCourseId={selectedCourseId}
          onCourseChange={onCourseChange}
          compact
        />
      </div>
    </div>
  );
}
