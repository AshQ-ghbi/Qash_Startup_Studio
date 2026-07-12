export default function About() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <span className="eyebrow">About</span>
        <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Why VentureForge AI</h1>

        <p className="mt-6 text-text-secondary">
          Most AI chatbots return startup advice as unstructured paragraphs you have to mentally reorganize
          yourself. VentureForge AI does that structuring for you — turning one idea into a complete,
          investor-ready blueprint across strategy, technical architecture, and growth.
        </p>

        <p className="mt-4 text-text-secondary">
          Built for the LabLab AI Hackathon's Unicorn Track, VentureForge AI runs entirely on{' '}
          <span className="text-text-primary">Fireworks AI</span>, which serves open models on AMD GPU
          infrastructure — pairing fast inference with a frontend-only architecture that keeps the product
          simple to demo and simple to extend.
        </p>

        <p className="mt-4 text-text-secondary">
          It's built for entrepreneurs, students, hackathon teams, product managers, and indie hackers who
          need to move from "I have an idea" to "I have a plan" in minutes.
        </p>
      </div>
    </div>
  );
}
