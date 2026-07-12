import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-display text-base font-semibold">
          <Flame size={18} className="text-ember" />
          VentureForge <span className="text-electric">AI</span>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
          <Link to="/" className="hover:text-text-primary">Home</Link>
          <Link to="/generator" className="hover:text-text-primary">Generator</Link>
          <Link to="/about" className="hover:text-text-primary">About</Link>
          <a href="https://fireworks.ai" target="_blank" rel="noreferrer" className="hover:text-text-primary">Powered by Fireworks AI</a>
        </div>

        <p className="text-xs text-text-muted">© {new Date().getFullYear()} VentureForge AI. Built for LabLab AI Hackathon — Unicorn Track.</p>
      </div>
    </footer>
  );
}
