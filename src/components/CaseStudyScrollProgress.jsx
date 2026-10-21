import { useEffect, useState } from 'react';

export default function CaseStudyScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let hideTimerId;

    const updateProgress = () => {
      const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableDistance > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableDistance))
        : 0;

      setProgress(nextProgress);
    };

    const handleScroll = () => {
      setIsVisible(true);
      window.clearTimeout(hideTimerId);
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateProgress);
      hideTimerId = window.setTimeout(() => setIsVisible(false), 2_000);
    };

    const handleResize = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(hideTimerId);
    };
  }, []);

  return (
    <div
      className={`case-study-scroll-progress${isVisible ? ' is-visible' : ''}`}
      role="progressbar"
      aria-label="Case study reading progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={Math.round(progress * 100)}
      aria-hidden={!isVisible}
    >
      <span className="case-study-scroll-progress-track" aria-hidden="true">
        <span
          className="case-study-scroll-progress-fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </span>
    </div>
  );
}
