import type { VentureBlueprint } from '../types/venture';

function listMd(items?: string[]) {
  return (items ?? []).map((i) => `- ${i}`).join('\n');
}

export function blueprintToMarkdown(bp: Partial<VentureBlueprint>): string {
  const { input, strategy, technical, growth } = bp;
  return `# Startup Blueprint: ${input?.idea ?? 'Untitled'}

Generated ${new Date(bp.generatedAt ?? Date.now()).toLocaleString()}

## Overview
- Industry: ${input?.industry ?? '-'}
- Target Audience: ${input?.targetAudience ?? '-'}
- Budget: ${input?.budget ?? '-'}
- Timeline: ${input?.timeline ?? '-'}
- Goals: ${input?.goals ?? '-'}

## Strategy
**Problem Statement**
${strategy?.problemStatement ?? ''}

**Market Validation**
${strategy?.marketValidation ?? ''}

**Customer Persona**
${strategy?.customerPersona ?? ''}

**Unique Value Proposition**
${strategy?.uniqueValueProposition ?? ''}

**Competitor Analysis**
${strategy?.competitorAnalysis ?? ''}

**Revenue Model**
${strategy?.revenueModel ?? ''}

**Pricing Strategy**
${strategy?.pricingStrategy ?? ''}

**Business Model Canvas**
${strategy ? Object.entries(strategy.businessModelCanvas).map(([k, v]) => `- ${k}: ${v}`).join('\n') : ''}

**Risks**
${listMd(strategy?.risks)}

**Future Roadmap**
${strategy?.futureRoadmap ?? ''}

## Technical
**MVP Planning**
${technical?.mvpPlanning ?? ''}

**Feature List**
${listMd(technical?.featureList)}

**Technical Architecture**
${technical?.technicalArchitecture ?? ''}

**Recommended Tech Stack**
${listMd(technical?.recommendedTechStack)}

**API Suggestions**
${listMd(technical?.apiSuggestions)}

**Database Recommendation**
${technical?.databaseRecommendation ?? ''}

**Folder Structure**
\`\`\`
${technical?.folderStructure ?? ''}
\`\`\`

**Development Roadmap**
${listMd(technical?.developmentRoadmap)}

**UI Suggestions**
${technical?.uiSuggestions ?? ''}

## Growth
**Marketing Strategy**
${growth?.marketingStrategy ?? ''}

**Launch Checklist**
${listMd(growth?.launchChecklist)}

**Investor Pitch Outline**
${listMd(growth?.investorPitchOutline)}

**Funding Suggestions**
${growth?.fundingSuggestions ?? ''}
`;
}

export function downloadMarkdown(bp: Partial<VentureBlueprint>) {
  const md = blueprintToMarkdown(bp);
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${(bp.input?.idea || 'venture-blueprint').slice(0, 40).replace(/\s+/g, '-').toLowerCase()}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}
