import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { Badge } from '@/components/common/Badge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { MapPin, Clock, Layers, CheckCircle2, Scissors } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const inquiryMessage = `Hello Q Workwear, I saw your capability showcase for "${project.title}" (${project.clientSector}). We are looking for similar custom uniforms for our organization in Kigali. Could we schedule a consultation?`;

  const imageSrc = project.image || '/images/showcase/cat-hospitality-culinary.webp';

  return (
    <article
      className={`group flex flex-col lg:flex-row bg-[#1A1816] text-stone-200 rounded-3xl border border-stone-800 shadow-2xl hover:border-stone-600 transition-all duration-300 overflow-hidden relative ${className}`}
    >
      {/* Top Tape Ruler Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 tape-ruler-amber z-10 opacity-70" />

      {/* Project Visual Image Showcase */}
      <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-[380px] bg-stone-900 overflow-hidden">
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-transparent to-black/40" />

        <div className="absolute top-5 left-5 z-10">
          <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase bg-black/80 backdrop-blur-md text-[#E0483A] rounded border border-[#E0483A]/30">
            {project.clientSector}
          </span>
        </div>

        <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between text-xs font-mono text-stone-300 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-stone-800">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#E0483A]" />
            {project.location}
          </span>
          <span className="text-[10px] text-stone-400">
            KIGALI COMMISSION
          </span>
        </div>
      </div>

      {/* Project Details Panel */}
      <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
              COMMISSION CASE STUDY // {project.categorySlug.toUpperCase()}
            </span>
            {project.isDemonstrationOnly && (
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2 py-0.5 rounded">
                Prototype Program
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#E0483A] transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Deliverables List */}
          <div className="mb-6 space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
              Tailored Garment Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-300 font-light">
                  <span className="text-[#E0483A] font-bold font-mono">▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs: Fabrics & Turnaround */}
          <div className="p-4 bg-stone-900/90 rounded-2xl border border-stone-800 space-y-2 text-xs font-mono text-stone-400">
            <div className="flex items-start gap-2">
              <span className="text-[#E0483A] font-bold">FABRICS:</span>
              <span className="text-stone-300">{project.fabricsUsed}</span>
            </div>

            {project.turnaroundTime && (
              <div className="flex items-center gap-2">
                <span className="text-[#E0483A] font-bold">TIMELINE:</span>
                <span className="text-stone-300">{project.turnaroundTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-xs font-mono text-stone-400">
            Ready to commission custom uniforms for your workforce?
          </span>
          <WhatsAppButton
            message={inquiryMessage}
            label="Inquire About Similar Work"
            size="md"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </article>
  );
}
