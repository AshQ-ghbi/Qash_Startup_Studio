import { Flame } from 'lucide-react';

export default function Loading({ label = 'Generating' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-text-secondary" role="status" aria-live="polite">
      <Flame size={28} className="animate-spark-pulse text-ember" />
      <span className="text-sm font-medium">{label}…</span>
    </div>
  );
}
