import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loading from './components/generator/Loading';
import { ToastProvider } from './components/ui/Toast';

const Landing = lazy(() => import('./pages/Landing'));
const Generator = lazy(() => import('./pages/Generator'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <ToastProvider>
      <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><Loading label="Loading page" /></div>}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/generator" element={<Generator />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
