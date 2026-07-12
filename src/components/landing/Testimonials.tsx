const quotes = [
  { name: 'Priya S.', role: 'Indie Hacker', quote: 'Went from a napkin idea to a pitch-ready doc before my coffee got cold.' },
  { name: 'Daniel K.', role: 'Hackathon Team Lead', quote: 'The tech architecture output alone saved our team a full planning session.' },
  { name: 'Mei L.', role: 'Product Manager', quote: 'Finally a tool that structures AI output instead of dumping paragraphs on me.' },
];

export default function Testimonials() {
  return (
    <section className="container-page py-20">
      <div className="mb-12 text-center">
        <span className="eyebrow">Early feedback</span>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Builders are shipping faster</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {quotes.map((t) => (
          <figure key={t.name} className="glass rounded-xl2 p-6">
            <blockquote className="text-sm text-text-secondary">"{t.quote}"</blockquote>
            <figcaption className="mt-4 text-sm font-medium">
              {t.name} <span className="text-text-muted font-normal">· {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
