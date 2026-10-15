import React from 'react';
import { projects } from '@/content/projects';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Button } from '@/components/common/Button';
import { ArrowRight } from 'lucide-react';

export function FeaturedWork() {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Recent Tailoring"
          title="Completed Work & Capabilities"
          subtitle="A selection of uniform programs demonstrating our tailoring standards, durable fabric selections, and embroidery execution in Rwanda."
          action={
            <Button
              variant="outline"
              size="md"
              href="/work"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View All Projects
            </Button>
          }
        />

        <div className="space-y-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
