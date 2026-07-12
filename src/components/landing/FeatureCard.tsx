import type { LucideIcon } from 'lucide-react';
import { Target, Cpu, Rocket, LineChart, Layers, Presentation } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Target, title: 'Market Validation', description: 'Instant read on problem fit, customer persona, and competitor landscape.' },
  { icon: Layers, title: 'Business Model Canvas', description: 'A full 9-block canvas generated from a single idea prompt.' },
  { icon: Cpu, title: 'Technical Architecture', description: 'Recommended stack, APIs, folder structure, and MVP scope — engineer-ready.' },
  { icon: LineChart, title: 'Revenue & Pricing', description: 'Monetization models and pricing strategy matched to your market.' },
  { icon: Rocket, title: 'Launch Roadmap', description: 'A development and go-to-market checklist you can start executing today.' },
  { icon: Presentation, title: 'Investor Pitch Outline', description: 'A ready-to-present pitch structure with funding suggestions.' },
];

function Card({ icon: Icon, title, description }: Feature) {
  return (
    <div className="glass glass-hover rounded-xl2 p-6">
      <div className="mb-4 inline-flex rounded-xl bg-white/[0.06] p-3">
        <Icon size={20} className="text-electric" />
      </div>
      <h3 className="mb-2 font-display text-lg font-medium">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="container-page py-20">
      <div className="mb-12 text-center">
        <span className="eyebrow">What you get</span>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Twenty-two sections. One blueprint.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
