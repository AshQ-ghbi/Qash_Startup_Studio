import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="container-page py-24">
      <div className="glass relative overflow-hidden rounded-xl3 px-8 py-16 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-forge-gradient" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Your next startup is one prompt away.</h2>
          <p className="mx-auto mt-4 max-w-md text-text-secondary">Stop staring at a blank doc. Let VentureForge AI draft the blueprint.</p>
          <Link to="/generator" className="btn-primary mt-8 inline-flex">
            Start building <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
