import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemData {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="glass rounded-xl2 overflow-hidden">
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown size={18} className={`shrink-0 text-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden px-6 pb-4 text-sm text-text-secondary">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
