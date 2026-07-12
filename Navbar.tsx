import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Flame, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/generator', label: 'Generator' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-primary/70 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Flame size={20} className="text-ember" />
          VentureForge <span className="text-electric">AI</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/generator" className="btn-primary hidden !py-2 !px-5 text-sm md:inline-flex">
          Build my startup
        </Link>

        <button
          className="text-text-primary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mb-4 flex flex-col gap-4 rounded-xl2 p-6 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium text-text-secondary hover:text-text-primary">
              {l.label}
            </NavLink>
          ))}
          <Link to="/generator" onClick={() => setOpen(false)} className="btn-primary !py-2 text-sm justify-center">
            Build my startup
          </Link>
        </div>
      )}
    </header>
  );
}
