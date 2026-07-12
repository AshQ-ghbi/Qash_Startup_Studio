import { LayoutGrid, Sparkles, Clock } from 'lucide-react';

const sections = [
  { icon: Sparkles, label: 'Latest Blueprint' },
  { icon: Clock, label: 'History' },
  { icon: LayoutGrid, label: 'All Sections' },
];

export default function Sidebar({ active, onSelect }: { active: string; onSelect: (label: string) => void }) {
  return (
    <aside className="glass hidden h-fit w-56 shrink-0 flex-col gap-1 rounded-xl2 p-3 lg:flex">
      {sections.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => onSelect(label)}
          className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-colors ${
            active === label ? 'bg-white/[0.06] text-text-primary' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </aside>
  );
}
