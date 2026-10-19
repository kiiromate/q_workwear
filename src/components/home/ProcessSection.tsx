import { getSiteCopy, Locale } from '@/content/i18n';

interface ProcessSectionProps {
  locale?: Locale;
}

export function ProcessSection({ locale = 'en' }: ProcessSectionProps) {
  const copy = getSiteCopy(locale).process;
  return (
    <section className="container section process" aria-labelledby="process-title">
      <h2 id="process-title" className="section-title">
        {copy.titleLine1}
        <br />
        {copy.titleLine2}
      </h2>
      <ol className="process-list">
        {copy.steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

