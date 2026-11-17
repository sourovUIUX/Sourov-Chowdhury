import React, { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ProjectItem } from './ProjectsSection';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onContactClick,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="w-full max-w-4xl rounded-[32px] sm:rounded-[44px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-8 text-[#D7E2EA] my-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-4xl sm:text-5xl font-black leading-none tabular-nums text-[#D7E2EA]">
                  {project.number}
                </span>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                    {project.category}
                  </span>
                  <h2
                    id="project-modal-title"
                    className="text-xl sm:text-3xl font-medium uppercase text-[#D7E2EA]"
                  >
                    {project.name}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project preview"
                className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base font-light text-[#D7E2EA]/80 leading-relaxed mb-4 max-w-2xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60 mb-6">
              {project.deliverables.map((item, idx) => (
                <React.Fragment key={item}>
                  <span>{item}</span>
                  {idx < project.deliverables.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
              {project.linksLabel && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#BBCCD7]">{project.linksLabel}</span>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <img
                src={project.col2Image}
                alt={`${project.name} primary showcase`}
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-72 object-cover rounded-[28px] bg-[#161616] sm:col-span-2"
              />
              <img
                src={project.col1Images[0]}
                alt={`${project.name} detail view 1`}
                referrerPolicy="no-referrer"
                className="w-full h-44 sm:h-52 object-cover rounded-[24px] bg-[#161616]"
              />
              <img
                src={project.col1Images[1]}
                alt={`${project.name} detail view 2`}
                referrerPolicy="no-referrer"
                className="w-full h-44 sm:h-52 object-cover rounded-[24px] bg-[#161616]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#D7E2EA]/40 px-6 py-2.5 text-xs uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="contact-btn rounded-full px-7 py-2.5 text-xs uppercase tracking-widest text-white inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Start a Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
