export function ProcessSection() {
  const steps = [
    { title: 'Tell us what you need', copy: 'Share your garment ideas, team size and preferred delivery date.' },
    { title: 'Work through the details', copy: 'Discuss colours, fabric, fit and branding for your order.' },
    { title: 'Agree your order', copy: 'Confirm the specification, quotation and schedule before production.' },
  ];
  return (
    <section className="container section process" aria-labelledby="process-title">
      <h2 id="process-title" className="section-title">From first idea<br />to team uniform.</h2>
      <ol className="process-list">{steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    </section>
  );
}
