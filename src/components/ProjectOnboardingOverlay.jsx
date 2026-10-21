import { useEffect, useRef } from 'react';

export default function ProjectOnboardingOverlay({ activeView, onDismiss }) {
  const overlayRef = useRef(null);
  const dismissButtonRef = useRef(null);
  const isOverview = activeView === 'overview';

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlayRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onDismiss();
      if (event.key === 'Tab') {
        event.preventDefault();
        dismissButtonRef.current?.focus({ preventScroll: true });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onDismiss]);

  return (
    <div
      ref={overlayRef}
      className="project-onboarding"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-onboarding-message"
      tabIndex="-1"
    >
      <div className="project-onboarding-spotlight" aria-hidden="true" />

      <img
        className="project-onboarding-arrow"
        src="/assets/case-study/project-onboarding-arrow.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="project-onboarding-card">
        <p id="project-onboarding-message">
          {isOverview
            ? 'Switch to In-detail to explore the complete design process.'
            : 'Use these tabs to move between the project summary and complete design process.'}
        </p>
        <button ref={dismissButtonRef} type="button" onClick={onDismiss}>Got it</button>
      </div>
    </div>
  );
}
