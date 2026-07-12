import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { Sparkles } from 'lucide-react';

export default function Dashboard() {
  const [active, setActive] = useState('Latest Blueprint');

  return (
    <div className="container-page flex gap-8 py-16">
      <Sidebar active={active} onSelect={setActive} />

      <div className="flex-1">
        <h1 className="mb-8 font-display text-3xl font-semibold">Dashboard</h1>

        <div className="glass flex flex-col items-center gap-4 rounded-xl2 p-16 text-center">
          <Sparkles size={28} className="text-electric" />
          <p className="text-text-secondary">
            Blueprints generate in-session for this hackathon demo. Head to the generator to create one — it'll show up here next.
          </p>
          <Link to="/generator" className="btn-primary">Go to Generator</Link>
        </div>
      </div>
    </div>
  );
}
