import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <Flame size={32} className="mb-4 text-ember" />
      <h1 className="font-display text-4xl font-semibold">404</h1>
      <p className="mt-2 text-text-secondary">This page hasn't been forged yet.</p>
      <Link to="/" className="btn-primary mt-6">Back to home</Link>
    </div>
  );
}
