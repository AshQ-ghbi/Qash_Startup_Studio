import Accordion from '../ui/Accordion';

const items = [
  { question: 'What AI model powers VentureForge AI?', answer: 'Every blueprint is generated through the Fireworks AI API, orchestrated as three parallel structured-output calls.' },
  { question: 'Is my idea kept private?', answer: 'Nothing is stored server-side. Your idea and generated blueprint stay in your browser session unless you export them.' },
  { question: 'Can I edit the generated blueprint?', answer: 'Yes — copy any section or export the full plan as Markdown to keep editing in your tool of choice.' },
  { question: 'Do I need to sign up?', answer: 'No account is required for the hackathon demo. Just describe your idea and generate.' },
];

export default function FAQ() {
  return (
    <section className="container-page py-20">
      <div className="mb-12 text-center">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Questions, answered</h2>
      </div>
      <div className="mx-auto max-w-2xl">
        <Accordion items={items} />
      </div>
    </section>
  );
}
