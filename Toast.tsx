import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

interface ToastItem {
  id: number;
  message: string;
  variant: 'success' | 'error';
}

interface ToastContextValue {
  push: (message: string, variant?: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const push = useCallback((message: string, variant: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message, variant }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500);
  }, []);

  const dismiss = (id: number) => setToasts((t) => t.filter((x) => x.id !== id));

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className="glass flex items-center gap-3 rounded-xl2 px-4 py-3 text-sm shadow-glass animate-fade-up">
            {t.variant === 'success' ? <CheckCircle2 size={18} className="text-success" /> : <XCircle size={18} className="text-ember" />}
            <span>{t.message}</span>
            <button onClick={() => dismiss(t.id)} aria-label="Dismiss notification" className="ml-2 text-text-muted hover:text-text-primary">
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
