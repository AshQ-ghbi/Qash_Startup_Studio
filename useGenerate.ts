import { useState, useCallback } from 'react';
import { fireworksService } from '../services/fireworks';
import type { GeneratorInput, VentureBlueprint, GenerationProgress } from '../types/venture';

const initialProgress: GenerationProgress = {
  strategy: 'idle',
  technical: 'idle',
  growth: 'idle',
};

export function useGenerate() {
  const [progress, setProgress] = useState<GenerationProgress>(initialProgress);
  const [blueprint, setBlueprint] = useState<Partial<VentureBlueprint> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (input: GeneratorInput) => {
    setError(null);
    setBlueprint({ input, generatedAt: new Date().toISOString() });
    setProgress({ strategy: 'loading', technical: 'loading', growth: 'loading' });

    const tasks = [
      fireworksService.generateStrategy(input).then((strategy) => {
        setBlueprint((b) => ({ ...b, strategy }));
        setProgress((p) => ({ ...p, strategy: 'done' }));
      }).catch(() => setProgress((p) => ({ ...p, strategy: 'error' }))),

      fireworksService.generateTechnical(input).then((technical) => {
        setBlueprint((b) => ({ ...b, technical }));
        setProgress((p) => ({ ...p, technical: 'done' }));
      }).catch(() => setProgress((p) => ({ ...p, technical: 'error' }))),

      fireworksService.generateGrowth(input).then((growth) => {
        setBlueprint((b) => ({ ...b, growth }));
        setProgress((p) => ({ ...p, growth: 'done' }));
      }).catch(() => setProgress((p) => ({ ...p, growth: 'error' }))),
    ];

    await Promise.allSettled(tasks);
  }, []);

  const reset = useCallback(() => {
    setBlueprint(null);
    setProgress(initialProgress);
    setError(null);
  }, []);

  return { generate, reset, progress, blueprint, error };
}
