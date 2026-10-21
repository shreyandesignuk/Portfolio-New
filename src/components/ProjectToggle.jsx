import { useEffect, useRef } from 'react';

export default function ProjectToggle({
  activeView,
  onOverview,
  onDetail,
  overviewHref = '/work/fortune-500-biopharma',
  detailHref = '/work/fortune-500-biopharma/in-detail',
  detailComingSoon = false,
  className = '',
}) {
  const isOverview = activeView === 'overview';
  const comingSoonCursorRef = useRef(null);
  const overviewSoundRef = useRef(null);
  const detailSoundRef = useRef(null);
  const handleOverview = isOverview ? (event) => event.preventDefault() : onOverview;
  const handleDetail = detailComingSoon
    ? (event) => event.preventDefault()
    : isOverview
      ? onDetail
      : (event) => event.preventDefault();

  useEffect(() => {
    const overviewSound = new Audio('/audio/case-study-overview-tab.mp3');
    const detailSound = new Audio('/audio/case-study-tab.mp3');
    overviewSound.preload = 'auto';
    detailSound.preload = 'auto';
    overviewSound.volume = 0.4;
    detailSound.volume = 0.4;
    overviewSoundRef.current = overviewSound;
    detailSoundRef.current = detailSound;

    return () => {
      overviewSound.pause();
      detailSound.pause();
      overviewSoundRef.current = null;
      detailSoundRef.current = null;
    };
  }, []);

  const playTabSound = (soundRef) => {
    const tabSound = soundRef.current;
    if (!tabSound) return;

    tabSound.currentTime = 0;
    tabSound.play().catch(() => {});
  };

  const handleOverviewClick = (event) => {
    playTabSound(overviewSoundRef);
    handleOverview(event);
  };

  const handleDetailClick = (event) => {
    playTabSound(detailSoundRef);
    handleDetail(event);
  };

  const handleDetailPointerMove = (event) => {
    if (!detailComingSoon || !comingSoonCursorRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    comingSoonCursorRef.current.style.setProperty(
      '--toggle-cursor-x',
      `${event.clientX - bounds.left}px`,
    );
    comingSoonCursorRef.current.style.setProperty(
      '--toggle-cursor-y',
      `${event.clientY - bounds.top}px`,
    );
  };

  return (
    <nav
      className={`project-view-toggle is-${activeView} ${className}`}
      aria-label="Case study view"
    >
      <span className="project-view-toggle-indicator" aria-hidden="true" />
      <a
        className={`project-view-toggle-option project-view-toggle-overview${isOverview ? ' is-active' : ''}`}
        href={overviewHref}
        onClick={handleOverviewClick}
        aria-current={isOverview ? 'page' : undefined}
      >
        Overview
      </a>
      <a
        className={`project-view-toggle-option project-view-toggle-detail${isOverview ? '' : ' is-active'}${detailComingSoon ? ' is-coming-soon' : ''}`}
        href={detailHref}
        onClick={handleDetailClick}
        onPointerMove={handleDetailPointerMove}
        aria-current={isOverview ? undefined : 'page'}
        aria-disabled={detailComingSoon || undefined}
      >
        In-detail
        {detailComingSoon && (
          <span
            ref={comingSoonCursorRef}
            className="project-view-toggle-coming-soon"
            aria-hidden="true"
          >
            Coming soon
          </span>
        )}
      </a>
    </nav>
  );
}
