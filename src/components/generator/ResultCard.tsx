import { useState, type ReactNode } from 'react';
import { Copy, Check, type LucideIcon } from 'lucide-react';
import { copyToClipboard } from '../../utils/download';

interface Props {
  icon: LucideIcon;
  title: string;
  accent?: 'ember' | 'electric' | 'gold';
  children: ReactNode;
  copyText?: string;
}

const accentMap = {
  ember: 'text-ember bg-ember/10',
  electric: 'text-electric bg-electric/10',
  gold: 'text-gold bg-gold/10',
};

export default function ResultCard({ icon: Icon, title, accent = 'electric', children, copyText }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyText) return;
    await copyToClipboard(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="glass glass-hover flex flex-col rounded-xl2 p-6 animate-fade-up">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`inline-flex rounded-xl p-2.5 ${accentMap[accent]}`}>
            <Icon size={16} />
          </span>
          <h3 className="font-display text-base font-medium">{title}</h3>
        </div>
        {copyText && (
          <button onClick={handleCopy} aria-label={`Copy ${title}`} className="text-text-muted hover:text-text-primary">
            {copied ? <Check size={15} className="text-success" /> : <Copy size={15} />}
          </button>
        )}
      </div>
      <div className="text-sm leading-relaxed text-text-secondary [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </article>
  );
}
