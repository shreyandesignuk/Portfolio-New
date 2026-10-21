import { useEffect, useRef, useState } from 'react';

const INTRO_TEXT = 'Hi! I’m Shreyan Akash Das';
const STAGE_ORDER = ['entering', 'typing', 'greeting-out', 'docking', 'brand', 'links', 'complete'];
const INTRO_TIMING = {
  typing: 400,
  greetingOut: 2_600,
  docking: 2_950,
  brand: 4_160,
  links: 4_490,
  complete: 4_850,
};

export default function GlobalHeader({
  isCaseStudy,
  isScrolled = false,
  isHidden = false,
  introComplete,
  onIntroComplete,
  onNavigate,
}) {
  const [stage, setStage] = useState(() => (introComplete ? 'complete' : 'entering'));
  const [typedText, setTypedText] = useState(() => (introComplete ? INTRO_TEXT : ''));
  const onIntroCompleteRef = useRef(onIntroComplete);

  useEffect(() => {
    onIntroCompleteRef.current = onIntroComplete;
  }, [onIntroComplete]);

  useEffect(() => {
    if (introComplete) {
      setStage('complete');
      setTypedText(INTRO_TEXT);
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setStage('complete');
      setTypedText(INTRO_TEXT);
      onIntroCompleteRef.current();
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const introSound = new Audio('/audio/intro-greeting.mp3');
    introSound.preload = 'auto';
    let introSoundHasStarted = false;
    let isWaitingForSoundPermission = false;
    let characterIndex = 0;
    let typingTimer;
    const timers = [];

    const removeSoundPermissionListeners = () => {
      if (!isWaitingForSoundPermission) return;
      isWaitingForSoundPermission = false;
      document.removeEventListener('pointerdown', retryIntroSound, true);
      document.removeEventListener('keydown', retryIntroSound, true);
      document.removeEventListener('touchstart', retryIntroSound, true);
    };

    const requestSoundPermissionOnInteraction = () => {
      if (isWaitingForSoundPermission) return;
      isWaitingForSoundPermission = true;
      document.addEventListener('pointerdown', retryIntroSound, true);
      document.addEventListener('keydown', retryIntroSound, true);
      document.addEventListener('touchstart', retryIntroSound, true);
    };

    function playIntroSound() {
      if (introSoundHasStarted) return;
      introSound.currentTime = 0;
      introSound.play()
        .then(() => {
          introSoundHasStarted = true;
          removeSoundPermissionListeners();
        })
        .catch((error) => {
          if (error?.name === 'NotAllowedError') requestSoundPermissionOnInteraction();
        });
    }

    function retryIntroSound() {
      removeSoundPermissionListeners();
      playIntroSound();
    }

    timers.push(window.setTimeout(() => {
      setStage('typing');
      playIntroSound();
      typingTimer = window.setInterval(() => {
        characterIndex += 1;
        setTypedText(INTRO_TEXT.slice(0, characterIndex));

        if (characterIndex >= INTRO_TEXT.length) {
          window.clearInterval(typingTimer);
        }
      }, 40);
    }, INTRO_TIMING.typing));

    timers.push(window.setTimeout(() => setStage('greeting-out'), INTRO_TIMING.greetingOut));
    timers.push(window.setTimeout(() => setStage('docking'), INTRO_TIMING.docking));
    timers.push(window.setTimeout(() => setStage('brand'), INTRO_TIMING.brand));
    timers.push(window.setTimeout(() => setStage('links'), INTRO_TIMING.links));
    timers.push(window.setTimeout(() => {
      setStage('complete');
      onIntroCompleteRef.current();
    }, INTRO_TIMING.complete));

    return () => {
      document.body.style.overflow = previousOverflow;
      introSound.pause();
      removeSoundPermissionListeners();
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(typingTimer);
    };
  }, [introComplete]);

  const introIsActive = stage !== 'complete';
  const stageIndex = STAGE_ORDER.indexOf(stage);
  const brandIsVisible = stageIndex >= STAGE_ORDER.indexOf('brand');
  const linksAreVisible = stageIndex >= STAGE_ORDER.indexOf('links');

  return (
    <>
      <nav
        className={`global-header${isCaseStudy ? ' is-case-study' : ''}${isScrolled ? ' is-scrolled' : ''}${isHidden ? ' is-scroll-hidden' : ''}${brandIsVisible ? ' is-brand-visible' : ''}${linksAreVisible ? ' is-links-visible' : ''}${stage === 'complete' ? ' is-complete' : ''}`}
        aria-label="Primary navigation"
        aria-hidden={introIsActive}
      >
        <a
          className="global-header-brand"
          href="/#top"
          onClick={(event) => onNavigate(event, '/#top')}
          tabIndex={introIsActive ? -1 : undefined}
        >
          <img src="/assets/shreyan-portrait.png" alt="" />
          <span>Shreyan Akash Das</span>
        </a>
        <div className="global-header-links">
          <a
            href="/#expertise"
            onClick={(event) => onNavigate(event, '/#expertise')}
            tabIndex={introIsActive ? -1 : undefined}
          >
            About me
          </a>
          <a
            href="https://drive.google.com/file/d/1pecO7rCBcaD-86hpTheF4Od65Td6Hxib/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={introIsActive ? -1 : undefined}
          >
            Resume
          </a>
        </div>
      </nav>

      {introIsActive && (
        <div className={`site-intro is-${stage}`} aria-live="polite">
          <img className="site-intro-portrait" src="/assets/shreyan-portrait.png" alt="Illustration of Shreyan Akash Das" />
          <p className="site-intro-greeting" aria-label={INTRO_TEXT}>
            {typedText}
            <span className="site-intro-caret" aria-hidden="true" />
          </p>
        </div>
      )}
    </>
  );
}
