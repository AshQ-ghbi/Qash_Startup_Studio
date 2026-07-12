const steps = [
  { n: '01', title: 'Describe your idea', description: 'Tell us the idea, industry, audience, budget, timeline, and goals.' },
  { n: '02', title: 'Fireworks AI forges it', description: 'Three parallel model calls generate strategy, tech, and growth plans.' },
  { n: '03', title: 'Ship your blueprint', description: 'Copy, export as Markdown, or present it straight to investors.' },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-border bg-bg-surface/50 py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <span className="eyebrow">Process</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">How it works</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <span className="font-mono text-5xl font-semibold text-white/10">{s.n}</span>
              <h3 className="mt-4 font-display text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{s.description}</p>
              {i < steps.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-border to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
