import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ValuePillars() {
  return (
    <section className="container section craft-section" aria-labelledby="craft-title">
      <div className="craft-statement">
        <h2 id="craft-title" className="section-title">Your people.<br />Your colours.<br />A considered fit.</h2>
        <div>
          <p className="lead">From the office to the workshop, workwear should feel right for the job. Start with your team, your working day and the way you want to be seen. We’ll work through the details with you.</p>
          <Link href="/about" className="text-link">Meet Q Workwear <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
