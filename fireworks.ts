import type { GeneratorInput, StrategyBlock, TechnicalBlock, GrowthBlock } from '../types/venture';
import { STRATEGY_PROMPT, TECHNICAL_PROMPT, GROWTH_PROMPT } from '../constants/prompts';

const ENDPOINT = '/api/generate';

async function callFireworks<T>(prompt: string): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Fireworks request failed (${res.status}): ${body || res.statusText}`);
  }

  const data = await res.json();
  const raw = typeof data.text === 'string' ? data.text : JSON.stringify(data);
  const cleaned = raw.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(cleaned) as T;
  } catch {
    throw new Error('Fireworks returned malformed JSON');
  }
}

export const fireworksService = {
  generateStrategy: (input: GeneratorInput) => callFireworks<StrategyBlock>(STRATEGY_PROMPT(input)),
  generateTechnical: (input: GeneratorInput) => callFireworks<TechnicalBlock>(TECHNICAL_PROMPT(input)),
  generateGrowth: (input: GeneratorInput) => callFireworks<GrowthBlock>(GROWTH_PROMPT(input)),
};
