import { useLocation } from 'react-router-dom';
import {
  Target, TrendingUp, Users, Gem, Swords, DollarSign, Tag, LayoutGrid,
  AlertTriangle, Map, Rocket, ListChecks, Cpu, Server, Database, FolderTree,
  Route, Palette, Megaphone, ClipboardCheck, Presentation, Wallet, Download,
} from 'lucide-react';
import GeneratorForm from '../components/generator/GeneratorForm';
import ResultCard from '../components/generator/ResultCard';
import Loading from '../components/generator/Loading';
import { useGenerate } from '../hooks/useGenerate';
import { useToast } from '../components/ui/Toast';
import { downloadMarkdown, blueprintToMarkdown } from '../utils/download';

export default function Generator() {
  const location = useLocation();
  const initialIdea = (location.state as { idea?: string } | null)?.idea ?? '';
  const { generate, progress, blueprint } = useGenerate();
  const { push } = useToast();

  const loading = progress.strategy === 'loading' || progress.technical === 'loading' || progress.growth === 'loading';
  const hasResults = !!blueprint?.strategy || !!blueprint?.technical || !!blueprint?.growth;

  const handleDownload = () => {
    if (!blueprint) return;
    downloadMarkdown(blueprint);
    push('Blueprint downloaded as Markdown');
  };

  return (
    <div className="container-page py-16">
      <div className="mb-12 text-center">
        <span className="eyebrow">Generator</span>
        <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Describe it. We'll blueprint it.</h1>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[380px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <GeneratorForm initialIdea={initialIdea} onSubmit={generate} loading={loading} />

          {hasResults && (
            <button onClick={handleDownload} className="btn-secondary mt-4 w-full">
              <Download size={16} /> Download Markdown
            </button>
          )}
        </div>

        <div className="flex flex-col gap-10">
          {!hasResults && !loading && (
            <div className="glass flex min-h-[300px] flex-col items-center justify-center rounded-xl2 p-10 text-center text-text-secondary">
              Your blueprint will appear here — fill out the form to get started.
            </div>
          )}

          {loading && !hasResults && (
            <div className="flex min-h-[300px] items-center justify-center">
              <Loading label="Forging your blueprint" />
            </div>
          )}

          {blueprint?.strategy && (
            <section>
              <h2 className="mb-4 font-display text-xl font-medium text-electric">Strategy</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <ResultCard icon={Target} title="Problem Statement" accent="electric" copyText={blueprint.strategy.problemStatement}>{blueprint.strategy.problemStatement}</ResultCard>
                <ResultCard icon={TrendingUp} title="Market Validation" accent="electric" copyText={blueprint.strategy.marketValidation}>{blueprint.strategy.marketValidation}</ResultCard>
                <ResultCard icon={Users} title="Customer Persona" accent="electric" copyText={blueprint.strategy.customerPersona}>{blueprint.strategy.customerPersona}</ResultCard>
                <ResultCard icon={Gem} title="Unique Value Proposition" accent="electric" copyText={blueprint.strategy.uniqueValueProposition}>{blueprint.strategy.uniqueValueProposition}</ResultCard>
                <ResultCard icon={Swords} title="Competitor Analysis" accent="electric" copyText={blueprint.strategy.competitorAnalysis}>{blueprint.strategy.competitorAnalysis}</ResultCard>
                <ResultCard icon={DollarSign} title="Revenue Model" accent="electric" copyText={blueprint.strategy.revenueModel}>{blueprint.strategy.revenueModel}</ResultCard>
                <ResultCard icon={Tag} title="Pricing Strategy" accent="electric" copyText={blueprint.strategy.pricingStrategy}>{blueprint.strategy.pricingStrategy}</ResultCard>
                <ResultCard icon={AlertTriangle} title="Risks" accent="electric" copyText={blueprint.strategy.risks.join('\n')}>
                  <ul>{blueprint.strategy.risks.map((r) => <li key={r}>{r}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Map} title="Future Roadmap" accent="electric" copyText={blueprint.strategy.futureRoadmap}>{blueprint.strategy.futureRoadmap}</ResultCard>
                <ResultCard icon={LayoutGrid} title="Business Model Canvas" accent="electric">
                  <ul>
                    {Object.entries(blueprint.strategy.businessModelCanvas).map(([k, v]) => (
                      <li key={k}><span className="text-text-primary capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span> {v}</li>
                    ))}
                  </ul>
                </ResultCard>
              </div>
            </section>
          )}

          {progress.strategy === 'loading' && <Loading label="Building strategy" />}

          {blueprint?.technical && (
            <section>
              <h2 className="mb-4 font-display text-xl font-medium text-ember">Technical</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <ResultCard icon={Rocket} title="MVP Planning" accent="ember" copyText={blueprint.technical.mvpPlanning}>{blueprint.technical.mvpPlanning}</ResultCard>
                <ResultCard icon={ListChecks} title="Feature List" accent="ember" copyText={blueprint.technical.featureList.join('\n')}>
                  <ul>{blueprint.technical.featureList.map((f) => <li key={f}>{f}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Cpu} title="Technical Architecture" accent="ember" copyText={blueprint.technical.technicalArchitecture}>{blueprint.technical.technicalArchitecture}</ResultCard>
                <ResultCard icon={Server} title="Recommended Tech Stack" accent="ember" copyText={blueprint.technical.recommendedTechStack.join('\n')}>
                  <ul>{blueprint.technical.recommendedTechStack.map((s) => <li key={s}>{s}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Route} title="API Suggestions" accent="ember" copyText={blueprint.technical.apiSuggestions.join('\n')}>
                  <ul>{blueprint.technical.apiSuggestions.map((a) => <li key={a}>{a}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Database} title="Database Recommendation" accent="ember" copyText={blueprint.technical.databaseRecommendation}>{blueprint.technical.databaseRecommendation}</ResultCard>
                <ResultCard icon={FolderTree} title="Folder Structure" accent="ember" copyText={blueprint.technical.folderStructure}>
                  <pre className="whitespace-pre-wrap font-mono text-xs">{blueprint.technical.folderStructure}</pre>
                </ResultCard>
                <ResultCard icon={Map} title="Development Roadmap" accent="ember" copyText={blueprint.technical.developmentRoadmap.join('\n')}>
                  <ul>{blueprint.technical.developmentRoadmap.map((d) => <li key={d}>{d}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Palette} title="UI Suggestions" accent="ember" copyText={blueprint.technical.uiSuggestions}>{blueprint.technical.uiSuggestions}</ResultCard>
              </div>
            </section>
          )}

          {progress.technical === 'loading' && <Loading label="Designing architecture" />}

          {blueprint?.growth && (
            <section>
              <h2 className="mb-4 font-display text-xl font-medium text-gold">Growth</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <ResultCard icon={Megaphone} title="Marketing Strategy" accent="gold" copyText={blueprint.growth.marketingStrategy}>{blueprint.growth.marketingStrategy}</ResultCard>
                <ResultCard icon={ClipboardCheck} title="Launch Checklist" accent="gold" copyText={blueprint.growth.launchChecklist.join('\n')}>
                  <ul>{blueprint.growth.launchChecklist.map((c) => <li key={c}>{c}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Presentation} title="Investor Pitch Outline" accent="gold" copyText={blueprint.growth.investorPitchOutline.join('\n')}>
                  <ul>{blueprint.growth.investorPitchOutline.map((p) => <li key={p}>{p}</li>)}</ul>
                </ResultCard>
                <ResultCard icon={Wallet} title="Funding Suggestions" accent="gold" copyText={blueprint.growth.fundingSuggestions}>{blueprint.growth.fundingSuggestions}</ResultCard>
              </div>
            </section>
          )}

          {progress.growth === 'loading' && <Loading label="Mapping growth plan" />}

          {hasResults && !loading && (
            <button onClick={() => { navigator.clipboard.writeText(blueprintToMarkdown(blueprint!)); push('Full blueprint copied'); }} className="btn-secondary self-start">
              Copy full blueprint
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
