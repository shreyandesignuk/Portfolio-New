import { useEffect, useState } from 'react';
import Hero3D from './Hero3D.jsx';

const DESKTOP_MIN_WIDTH = 1024;
const RESUME_URL =
  'https://drive.google.com/file/d/18nGsit0YjuNnT4FBS768IMdBonezcP9k/view?usp=sharing';

function getViewportWidth() {
  return window.innerWidth;
}

function ResponsiveHoldingPage() {
  return (
    <main className="responsive-holding-page" aria-labelledby="responsive-holding-title">
      <header className="responsive-holding-header">
        <span className="responsive-holding-name">Shreyan Akash Das</span>
      </header>

      <section className="responsive-holding-content">
        <div className="responsive-holding-visual" aria-hidden="true">
          <Hero3D />
        </div>

        <div className="responsive-holding-copy">
          <p className="responsive-holding-eyebrow">A better fit is on the way</p>
          <h1 id="responsive-holding-title">This portfolio is still finding its fit.</h1>
          <p>
            For the best seat in the house, open this portfolio on a laptop and give the work
            a little more room to breathe.
          </p>
          <a
            className="responsive-holding-resume"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="responsive-holding-footer">
        <span>Responsive experience in progress</span>
        <span>The full story needs a little more room</span>
      </footer>
    </main>
  );
}

export default function ResponsiveGate({ children }) {
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(getViewportWidth());

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isScaled = viewportWidth >= DESKTOP_MIN_WIDTH && viewportWidth < 1440;

    root.classList.toggle('is-responsive-scaled', isScaled);
    root.classList.toggle('is-responsive-holding', viewportWidth < DESKTOP_MIN_WIDTH);

    return () => {
      root.classList.remove('is-responsive-scaled', 'is-responsive-holding');
    };
  }, [viewportWidth]);

  if (viewportWidth < DESKTOP_MIN_WIDTH) return <ResponsiveHoldingPage />;

  const portfolioScale = Math.min(1, viewportWidth / 1440);

  return (
    <div
      className={`responsive-portfolio-frame${portfolioScale < 1 ? ' is-scaled' : ''}`}
      style={portfolioScale < 1 ? { zoom: portfolioScale } : undefined}
    >
      {children}
    </div>
  );
}
