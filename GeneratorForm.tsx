import { useState, type FormEvent } from 'react';
import { Sparkles } from 'lucide-react';
import type { GeneratorInput } from '../../types/venture';

const fields: { key: keyof GeneratorInput; label: string; placeholder: string; type: 'input' | 'textarea' }[] = [
  { key: 'idea', label: 'Startup Idea', placeholder: 'An AI copilot for freelance designers...', type: 'textarea' },
  { key: 'industry', label: 'Industry', placeholder: 'Creative tools, SaaS...', type: 'input' },
  { key: 'targetAudience', label: 'Target Audience', placeholder: 'Freelance designers, agencies...', type: 'input' },
  { key: 'budget', label: 'Budget', placeholder: 'Bootstrapped, $10k, pre-seed...', type: 'input' },
  { key: 'timeline', label: 'Timeline', placeholder: '3 months to MVP...', type: 'input' },
  { key: 'goals', label: 'Goals', placeholder: 'Validate demand, launch on Product Hunt...', type: 'input' },
];

interface Props {
  initialIdea?: string;
  onSubmit: (input: GeneratorInput) => void;
  loading: boolean;
}

export default function GeneratorForm({ initialIdea = '', onSubmit, loading }: Props) {
  const [values, setValues] = useState<GeneratorInput>({
    idea: initialIdea,
    industry: '',
    targetAudience: '',
    budget: '',
    timeline: '',
    goals: '',
  });

  const handleChange = (key: keyof GeneratorInput, value: string) => setValues((v) => ({ ...v, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!values.idea.trim()) return;
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-xl2 p-6 md:p-8">
      {fields.map((f) => (
        <div key={f.key} className="flex flex-col gap-2">
          <label htmlFor={f.key} className="text-sm font-medium text-text-secondary">{f.label}</label>
          {f.type === 'textarea' ? (
            <textarea
              id={f.key}
              required={f.key === 'idea'}
              rows={3}
              value={values[f.key]}
              onChange={(e) => handleChange(f.key, e.target.value)}
              placeholder={f.placeholder}
              className="rounded-xl border border-border bg-bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
            />
          ) : (
            <input
              id={f.key}
              value={values[f.key]}
              onChange={(e) => handleChange(f.key, e.target.value)}
              placeholder={f.placeholder}
              className="rounded-xl border border-border bg-bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
            />
          )}
        </div>
      ))}

      <button type="submit" disabled={loading} className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60">
        <Sparkles size={16} />
        {loading ? 'Forging blueprint...' : 'Generate blueprint'}
      </button>
    </form>
  );
}
