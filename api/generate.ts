import type { VercelRequest, VercelResponse } from '@vercel/node';

const FIREWORKS_URL = 'https://api.fireworks.ai/inference/v1/chat/completions';
const MODEL = 'accounts/fireworks/models/llama-v3p1-70b-instruct';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt } = req.body ?? {};
  if (!prompt || typeof prompt !== 'string') {
    res.status(400).json({ error: 'Missing "prompt" string in request body' });
    return;
  }

  const apiKey = process.env.FIREWORKS_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is missing FIREWORKS_API_KEY' });
    return;
  }

  try {
    const response = await fetch(FIREWORKS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1500,
        temperature: 0.7,
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      res.status(response.status).json({ error: `Fireworks API error: ${errText}` });
      return;
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content ?? '';
    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : 'Unknown server error' });
  }
}
