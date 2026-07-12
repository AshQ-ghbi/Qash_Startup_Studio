import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [idea, setIdea] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/generator', { state: { idea } });
  };

  return (
    <section className="relative overflow-hidden bg-forge-gradient pb-24 pt-20 md:pt-28">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-ember/20 blur-[120px] animate-spark-pulse" />

      <div className="container-page relative flex flex-col items-center text-center">
        <span className="eyebrow mb-6 flex items-center gap-2 rounded-full glass px-4 py-1.5">
          <Sparkles size={14} className="text-ember" />
          Built on Fireworks AI
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
          From idea to startup,
          <br />
          <span className="bg-ember-electric bg-clip-text text-transparent">forged by AI.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-text-secondary">
          Drop in a business idea. Get a complete blueprint — market validation, tech stack, roadmap, and investor pitch — in minutes, not weeks.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="An AI-powered meal planner for busy parents..."
            className="glass w-full rounded-full px-6 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
            aria-label="Describe your startup idea"
          />
          <button onClick={handleSubmit} className="btn-primary shrink-0">
            Forge it <ArrowRight size={16} />
          </button>
        </div>

        <p className="mt-4 text-xs text-text-muted">No signup required · Free during the hackathon demo</p>
      </div>
    </section>
  );
}
