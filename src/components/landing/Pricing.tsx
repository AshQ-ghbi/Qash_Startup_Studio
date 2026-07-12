import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Founder',
    price: 'Free',
    description: 'For exploring one idea at a time.',
    features: ['3 blueprints / month', 'Markdown export', 'All 22 sections'],
    highlight: false,
  },
  {
    name: 'Studio',
    price: '$29/mo',
    description: 'For teams shipping multiple ventures.',
    features: ['Unlimited blueprints', 'PDF export', 'Team dashboard', 'Priority generation'],
    highlight: true,
  },
  {
    name: 'Accelerator',
    price: 'Custom',
    description: 'For hackathons and incubators.',
    features: ['Bulk idea processing', 'White-label export', 'Dedicated support'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="border-y border-border bg-bg-surface/50 py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <span className="eyebrow">Pricing (demo)</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Simple, for now</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-xl2 p-8 ${t.highlight ? 'glass shadow-glow-ember border-ember/30' : 'glass'}`}>
              {t.highlight && <span className="mb-4 inline-block rounded-full bg-ember/15 px-3 py-1 text-xs font-medium text-ember">Most popular</span>}
              <h3 className="font-display text-xl font-medium">{t.name}</h3>
              <p className="mt-1 text-2xl font-semibold">{t.price}</p>
              <p className="mt-2 text-sm text-text-secondary">{t.description}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check size={14} className="text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/generator" className={`mt-8 block text-center ${t.highlight ? 'btn-primary' : 'btn-secondary'} !py-2.5 text-sm`}>
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
