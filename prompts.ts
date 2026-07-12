import type { GeneratorInput } from '../types/venture';

const inputBlock = (i: GeneratorInput) => `
Idea: ${i.idea}
Industry: ${i.industry}
Target Audience: ${i.targetAudience}
Budget: ${i.budget}
Timeline: ${i.timeline}
Goals: ${i.goals}
`.trim();

const jsonOnly = 'Respond with ONLY valid JSON matching the schema below. No markdown fences, no preamble, no commentary.';

export const STRATEGY_PROMPT = (input: GeneratorInput) => `You are a startup strategist. Given this idea, produce a strategy blueprint.

${inputBlock(input)}

${jsonOnly}
Schema:
{
  "problemStatement": string,
  "marketValidation": string,
  "customerPersona": string,
  "uniqueValueProposition": string,
  "competitorAnalysis": string,
  "revenueModel": string,
  "pricingStrategy": string,
  "businessModelCanvas": {
    "keyPartners": string, "keyActivities": string, "valuePropositions": string,
    "customerRelationships": string, "customerSegments": string, "keyResources": string,
    "channels": string, "costStructure": string, "revenueStreams": string
  },
  "risks": string[],
  "futureRoadmap": string
}
Keep each field concise: 2-4 sentences, or 3-5 bullet-worthy items for lists.`;

export const TECHNICAL_PROMPT = (input: GeneratorInput) => `You are a senior system architect. Given this idea, produce a technical plan.

${inputBlock(input)}

${jsonOnly}
Schema:
{
  "mvpPlanning": string,
  "featureList": string[],
  "technicalArchitecture": string,
  "recommendedTechStack": string[],
  "apiSuggestions": string[],
  "databaseRecommendation": string,
  "folderStructure": string,
  "developmentRoadmap": string[],
  "uiSuggestions": string
}
Keep each field concise: 2-4 sentences, or 3-6 bullet-worthy items for lists. databaseRecommendation is advisory only, not an instruction to build one.`;

export const GROWTH_PROMPT = (input: GeneratorInput) => `You are a growth and fundraising advisor. Given this idea, produce a go-to-market and pitch plan.

${inputBlock(input)}

${jsonOnly}
Schema:
{
  "marketingStrategy": string,
  "launchChecklist": string[],
  "investorPitchOutline": string[],
  "fundingSuggestions": string
}
Keep each field concise: 2-4 sentences, or 4-7 bullet-worthy items for lists.`;
