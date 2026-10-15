import React from 'react';
import { Project } from '@/types';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { Badge } from '@/components/common/Badge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { MapPin, Clock, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const inquiryMessage = `Hello Q Workwear, I saw your capability showcase for "${project.title}" (${project.clientSector}). We are looking for similar custom uniforms for our organization in Kigali. Could we schedule a consultation?`;

  return (
    <article
      className={`group flex flex-col lg:flex-row bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Project Image Container */}
      <div className="lg:w-5/12 p-3 bg-stone-50/50 flex flex-col justify-center">
        <PlaceholderImage
          src={project.image}
          alt={project.title}
          categorySlug={project.categorySlug}
          title={project.title}
          aspectRatio="4/3"
          className="h-full min-h-[240px]"
        />
      </div>

      {/* Project Details */}
      <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="brand" size="sm">
              {project.clientSector}
            </Badge>

            <span className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              {project.location}
            </span>

            {project.isDemonstrationOnly && (
              <Badge variant="draft" size="sm">
                Capability Demonstration
              </Badge>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-[#E0483A] transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Deliverables List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2.5">
              Uniform Scope & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E0483A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs: Fabrics & Turnaround */}
          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 mb-6 space-y-1.5 text-xs text-zinc-600">
            <div className="flex items-start gap-2">
              <Layers className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-800">Fabrics: </span>
                {project.fabricsUsed}
              </div>
            </div>

            {project.turnaroundTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <div>
                  <span className="font-semibold text-zinc-800">Turnaround: </span>
                  {project.turnaroundTime}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-xs text-zinc-500">
            Need similar uniforms for your team?
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
