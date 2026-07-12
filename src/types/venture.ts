export interface GeneratorInput {
  idea: string;
  industry: string;
  targetAudience: string;
  budget: string;
  timeline: string;
  goals: string;
}

export interface StrategyBlock {
  problemStatement: string;
  marketValidation: string;
  customerPersona: string;
  uniqueValueProposition: string;
  competitorAnalysis: string;
  revenueModel: string;
  pricingStrategy: string;
  businessModelCanvas: {
    keyPartners: string;
    keyActivities: string;
    valuePropositions: string;
    customerRelationships: string;
    customerSegments: string;
    keyResources: string;
    channels: string;
    costStructure: string;
    revenueStreams: string;
  };
  risks: string[];
  futureRoadmap: string;
}

export interface TechnicalBlock {
  mvpPlanning: string;
  featureList: string[];
  technicalArchitecture: string;
  recommendedTechStack: string[];
  apiSuggestions: string[];
  databaseRecommendation: string;
  folderStructure: string;
  developmentRoadmap: string[];
  uiSuggestions: string;
}

export interface GrowthBlock {
  marketingStrategy: string;
  launchChecklist: string[];
  investorPitchOutline: string[];
  fundingSuggestions: string;
}

export interface VentureBlueprint {
  input: GeneratorInput;
  strategy: StrategyBlock;
  technical: TechnicalBlock;
  growth: GrowthBlock;
  generatedAt: string;
}

export type BlockKey = 'strategy' | 'technical' | 'growth';

export interface GenerationProgress {
  strategy: 'idle' | 'loading' | 'done' | 'error';
  technical: 'idle' | 'loading' | 'done' | 'error';
  growth: 'idle' | 'loading' | 'done' | 'error';
}
