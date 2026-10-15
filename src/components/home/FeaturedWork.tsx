import React from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Button } from '@/components/common/Button';
import { ArrowRight, Scissors } from 'lucide-react';

export function FeaturedWork() {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-20 sm:py-28 bg-[#181513] text-white border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
              <Scissors className="w-3.5 h-3.5 text-[#E0483A]" />
              <span>COMMISSION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Work & Uniform Programs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-400 font-light leading-relaxed">
              Review how we deliver comprehensive uniform suites—from front-of-house hospitality waistcoats to heavy logistics boiler suits.
            </p>
          </div>

          <Button
            variant="outline"
            size="md"
            href="/work"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="self-start md:self-end bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800 hover:text-white"
          >
            All Case Studies
          </Button>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-10">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
