import { useEffect, useState } from 'react';

const ASSET_PATH = '/assets';
const FOOTER_WORDS = ['design', 'shape', 'elevate'];

function RotatingFooterWord() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReduceMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setActiveIndex(0);
      setPreviousIndex(null);
      return undefined;
    }

    const cycleTimer = window.setTimeout(() => {
      setPreviousIndex(activeIndex);
      setActiveIndex((activeIndex + 1) % FOOTER_WORDS.length);
    }, 2_000);

    return () => window.clearTimeout(cycleTimer);
  }, [activeIndex, reduceMotion]);

  useEffect(() => {
    if (previousIndex === null) return undefined;

    const transitionTimer = window.setTimeout(() => setPreviousIndex(null), 460);
    return () => window.clearTimeout(transitionTimer);
  }, [previousIndex]);

  return (
    <span className="footer-word-rotator" aria-live="polite">
      {FOOTER_WORDS.map((word, index) => {
        let stateClass = '';
        if (index === activeIndex) stateClass = ' is-active';
        else if (index === previousIndex) stateClass = ' is-exiting';

        return (
          <span className={`footer-rotating-word${stateClass}`} key={word}>
            {word}
          </span>
        );
      })}
    </span>
  );
}

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="fixed-content footer-content">
        <p className="contact-statement">
          <span>Let’s <RotatingFooterWord /></span>
          <span>incredible work together</span>
        </p>
        <a className="contact-button" href="mailto:shreyanux@gmail.com">Get in touch</a>
        <div className="social-links">
          <p className="section-label">Explore more</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shreyan-akash-das-a46a251ba/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={`${ASSET_PATH}/footer/linkedin-dark.svg`} alt="" />
            </a>
            <a
              href="https://www.behance.net/shreyandas1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <img src={`${ASSET_PATH}/footer/behance-dark.svg`} alt="" />
            </a>
          </div>
        </div>
        <p className="copyright">© 2026 Shreyan Akash Das. All rights reserved.</p>
        <p className="credit">Designed + coded by me</p>
      </div>
    </footer>
  );
}
