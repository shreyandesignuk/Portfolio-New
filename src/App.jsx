import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Hero3D from './components/Hero3D';
import LogoMarquee from './components/LogoMarquee';
import SiteFooter from './components/SiteFooter';
import ProjectOnboardingOverlay from './components/ProjectOnboardingOverlay';
import ProjectToggle from './components/ProjectToggle';
import GlobalHeader from './components/GlobalHeader';
import CaseStudyScrollProgress from './components/CaseStudyScrollProgress';
import CaseStudy from './CaseStudy';
import CaseStudyDetail from './CaseStudyDetail';
import FintechCaseStudy from './FintechCaseStudy';
import FintechCaseStudyDetail from './FintechCaseStudyDetail';
import HealthcareCaseStudy from './HealthcareCaseStudy';
import HealthcareCaseStudyDetail from './HealthcareCaseStudyDetail';
import OutdoorFitnessCaseStudy from './OutdoorFitnessCaseStudy';

const ASSET_PATH = '/assets';

const clients = [
  { name: 'Adobe', className: 'adobe', src: `${ASSET_PATH}/adobe-logo.png` },
  { name: 'Walmart', className: 'walmart', src: `${ASSET_PATH}/walmart-logo.png` },
  { name: 'AstraZeneca', className: 'astrazeneca', src: `${ASSET_PATH}/astrazeneca-logo.png` },
  { name: 'Darden', className: 'darden', src: `${ASSET_PATH}/darden-logo.png` },
  { name: 'Gilead', className: 'gilead', src: `${ASSET_PATH}/gilead-logo.svg` },
  {
    name: 'Virginia Department of Health',
    className: 'virginia',
    src: `${ASSET_PATH}/virginia-department-logo.png`,
  },
  { name: 'AJIO', className: 'ajio', src: `${ASSET_PATH}/ajio-logo.svg` },
  { name: 'NFC', className: 'nfc', src: `${ASSET_PATH}/nfc-logo.png` },
  { name: 'ISIC', className: 'isic', src: `${ASSET_PATH}/isic-logo.png` },
  { name: 'Miheso', className: 'miheso', src: `${ASSET_PATH}/miheso-logo.png` },
];

const projects = [
  {
    position: 'left-one',
    title: 'FORTUNE 500 biopharma website',
    description: 'Redesigning a global biopharma platform for clarity, accessibility and scale',
    tags: ['Website Redesign', 'Design System', 'Enterprise UX', 'Content Strategy'],
    image: `${ASSET_PATH}/gilead-homepage-tile.png`,
    href: '/work/fortune-500-biopharma',
    transitionColor: '#d7003a',
  },
  {
    position: 'right-one',
    title: 'Redesigning a Fintech Platform',
    description: 'Transforming complex financial reconciliation into a simple, proactive experience',
    tags: ['Product UX', 'Workflow Redesign', 'Dashboard', 'Fintech'],
    image: `${ASSET_PATH}/ecobillz-homepage-tile.png`,
    href: '/work/fintech-platform',
    transitionColor: '#350473',
  },
  {
    position: 'left-two',
    title: 'Transforming a Healthcare Platform',
    description: 'Redesigning a global biopharma platform for clarity, accessibility and scale',
    tags: ['Mobile UX', 'Healthcare', 'Service Design', 'Wellness'],
    image: `${ASSET_PATH}/vd-homepage-tile.png`,
    href: '/work/healthcare-platform',
    transitionColor: '#3e8563',
  },
  {
    position: 'right-two',
    title: 'Reimagining an outdoor fitness app',
    description: 'Transforming complex financial reconciliation into a simple, proactive experience',
    tags: ['Mobile UX', 'Fitness', 'Product Strategy', 'Outdoor Wellness'],
    image: `${ASSET_PATH}/nfc-homepage-tile.png`,
    href: '/work/outdoor-fitness-app',
    transitionColor: '#568ac6',
  },
  {
    position: 'left-three',
    title: 'FORTUNE 500 e-learning platform',
    description: 'Redesigning an enterprise learning experience for simpler navigation, discovery and engagement.',
    tags: ['Mobile UX', 'Healthcare', 'Service Design', 'Wellness'],
    image: `${ASSET_PATH}/project-5-homepage-tile.png`,
    cursorLabel: 'Coming soon',
  },
  {
    position: 'right-three',
    title: 'MULTI-SPECIALTY HOSPITAL website',
    description: 'Redesigning a digital healthcare experience to simplify doctor discovery and appointment booking',
    tags: ['Mobile UX', 'Fitness', 'Product Strategy', 'Outdoor Wellness'],
    image: `${ASSET_PATH}/project-6-homepage-tile.png`,
    cursorLabel: 'Coming soon',
  },
];

const expertise = [
  {
    title: 'Problem Solving',
    body: 'I turn ambiguous problems into clear opportunities, challenging assumptions before jumping into solutions.',
    icon: `${ASSET_PATH}/expertise/problem-solving.svg`,
  },
  {
    title: 'Research & Insight',
    body: 'I use research, behaviour and evidence to understand what people need and turn insights into design decisions.',
    icon: `${ASSET_PATH}/expertise/research-insight.svg`,
  },
  {
    title: 'Interaction & Craft',
    body: 'I translate ideas into intuitive flows, prototypes and polished interfaces where every detail has a purpose.',
    icon: `${ASSET_PATH}/expertise/interaction-craft.svg`,
  },
  {
    title: 'Product Thinking',
    body: 'I balance user needs, business goals and technical constraints to design experiences that create measurable value.',
    icon: `${ASSET_PATH}/expertise/product-thinking.svg`,
  },
  {
    title: 'Systems Thinking',
    body: 'I design beyond individual screens, connecting journeys, information architecture and reusable systems into coherent experiences.',
    icon: `${ASSET_PATH}/expertise/systems-thinking.svg`,
  },
  {
    title: 'Collaboration & Ownership',
    body: 'I work closely with product, engineering and stakeholders, taking ideas from early ambiguity through validation and delivery.',
    icon: `${ASSET_PATH}/expertise/collaboration-ownership.svg`,
  },
];

const londonTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZoneName: 'short',
});

function LondonClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let intervalId;
    const timeoutId = window.setTimeout(() => {
      setNow(new Date());
      intervalId = window.setInterval(() => setNow(new Date()), 60_000);
    }, 60_000 - (Date.now() % 60_000));

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return <time dateTime={now.toISOString()}>{londonTimeFormatter.format(now)}</time>;
}

const heroWords = ['purpose', 'clarity', 'insight', 'impact'];

function DynamicHeroWord({ active, onInitialNearlyTyped }) {
  const [word, setWord] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const onInitialNearlyTypedRef = useRef(onInitialNearlyTyped);
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    onInitialNearlyTypedRef.current = onInitialNearlyTyped;
  }, [onInitialNearlyTyped]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReduceMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!active) {
      setWord('');
      setIsTyping(false);
      return undefined;
    }

    if (reduceMotion) {
      setWord(heroWords[0]);
      setIsTyping(false);
      onInitialNearlyTypedRef.current?.();
      return undefined;
    }

    let cancelled = false;
    let wordIndex = 0;
    let visibleWord = '';
    const timers = new Set();

    const sleep = (duration) => new Promise((resolve) => {
      const timerId = window.setTimeout(() => {
        timers.delete(timerId);
        resolve();
      }, duration);
      timers.add(timerId);
    });

    const typeWord = async (nextWord, onNearlyComplete) => {
      setIsTyping(true);
      for (const [characterIndex, character] of [...nextWord].entries()) {
        if (cancelled) return false;
        visibleWord += character;
        setWord(visibleWord);
        if (characterIndex === nextWord.length - 2) onNearlyComplete?.();
        await sleep(55);
      }
      setIsTyping(false);
      return true;
    };

    const changeWord = async () => {
      if (cancelled) return;
      wordIndex = (wordIndex + 1) % heroWords.length;
      setIsTyping(true);

      while (visibleWord.length > 0 && !cancelled) {
        visibleWord = visibleWord.slice(0, -1);
        setWord(visibleWord);
        await sleep(32);
      }

      await sleep(70);

      await typeWord(heroWords[wordIndex]);
    };

    let cycleTimer;
    const begin = async () => {
      const completed = await typeWord(heroWords[0], () => onInitialNearlyTypedRef.current?.());
      if (!completed || cancelled) return;
      cycleTimer = window.setInterval(changeWord, 3_000);
    };

    begin();

    return () => {
      cancelled = true;
      window.clearInterval(cycleTimer);
      timers.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, [active, reduceMotion]);

  return <em className={`dynamic-hero-word${isTyping ? ' is-typing' : ''}`}>{word}</em>;
}

function ClientLogos() {
  return (
    <div className="clients">
      <p className="section-label">Teams I have worked with</p>
      <LogoMarquee clients={clients} />
    </div>
  );
}

function Hero({ isReady }) {
  const [wordIsReady, setWordIsReady] = useState(false);
  const [mediaIsReady, setMediaIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      setWordIsReady(false);
      setMediaIsReady(false);
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setWordIsReady(true), reduceMotion ? 0 : 530);
    return () => window.clearTimeout(timer);
  }, [isReady]);

  const handleInitialWordNearlyTyped = useCallback(() => setMediaIsReady(true), []);

  return (
    <header className={`hero${isReady ? ' is-copy-visible' : ''}${mediaIsReady ? ' is-media-visible' : ''}`} id="top">
      <div className="fixed-content hero-content">
        {mediaIsReady && <Hero3D />}
        <div className="hero-banner">
          <div className="intro">
            <div className="metadata" aria-label="Role, location, and local time">
              <span>Senior Product Designer</span>
              <span>London</span>
              <span><LondonClock /></span>
            </div>
            <h1>
              <span>Designing experiences</span>
              <span>driven by empathy,</span>
              <span>
                shaped by{' '}
                <DynamicHeroWord
                  active={wordIsReady}
                  onInitialNearlyTyped={handleInitialWordNearlyTyped}
                />
              </span>
            </h1>
          </div>
          {mediaIsReady && <ClientLogos />}
        </div>
      </div>
    </header>
  );
}

function ProjectTags({ tags }) {
  return (
    <div className="project-tags" aria-label="Project disciplines">
      {tags.map((tag, index) => (
        <span className="tag-group" key={tag}>
          {index > 0 && <img src={`${ASSET_PATH}/detail-divider.svg`} alt="" />}
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen, isOpening }) {
  const cardRef = useRef(null);
  const hoverCursorRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = null;

    const updateFloat = () => {
      if (reduceMotion.matches) {
        card.style.setProperty('--project-float-y', '0px');
        card.style.setProperty('--project-float-opacity', '1');
        frameId = null;
        return;
      }

      const bounds = card.getBoundingClientRect();
      const appliedTranslateY = Number.parseFloat(
        card.style.getPropertyValue('--project-float-y'),
      ) || 0;
      const untransformedTop = bounds.top - appliedTranslateY;
      const untransformedBottom = bounds.bottom - appliedTranslateY;
      const edgeRange = Math.max(220, window.innerHeight * 0.32);
      const clamp = (value) => Math.min(1, Math.max(0, value));
      const entering = clamp((window.innerHeight - untransformedTop) / edgeRange);
      const leaving = clamp(untransformedBottom / edgeRange);
      const visibility = Math.min(entering, leaving);
      const translateY = ((1 - entering) * 26) - ((1 - leaving) * 26);

      card.style.setProperty('--project-float-y', `${translateY.toFixed(2)}px`);
      card.style.setProperty('--project-float-opacity', (0.84 + (visibility * 0.16)).toFixed(3));
      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateFloat);
    };

    updateFloat();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    reduceMotion.addEventListener('change', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reduceMotion.removeEventListener('change', requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const hoverCursor = hoverCursorRef.current;

    if (!hoverCursor) return;

    hoverCursor.style.setProperty('--project-cursor-x', `${event.clientX - bounds.left}px`);
    hoverCursor.style.setProperty('--project-cursor-y', `${event.clientY - bounds.top}px`);
  };

  const content = (
    <>
      <div className="project-image" aria-hidden="true">
        {project.image && <img src={project.image} alt="" />}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-details">
          <p>{project.description}</p>
          <ProjectTags tags={project.tags} />
        </div>
      </div>
      <span
        ref={hoverCursorRef}
        className={`project-hover-cursor${project.cursorLabel === 'Coming soon' ? ' is-coming-soon' : ''}`}
        aria-hidden="true"
      >
        {project.cursorLabel ?? 'View case study'}
      </span>
    </>
  );

  if (project.href) {
    return (
      <a
        ref={cardRef}
        className={`project-card ${project.position}${isOpening ? ' is-opening' : ''}`}
        href={project.href}
        onClick={(event) => onOpen(event, project)}
        onPointerMove={handlePointerMove}
      >
        {content}
      </a>
    );
  }

  return (
    <article ref={cardRef} className={`project-card ${project.position}`} onPointerMove={handlePointerMove}>
      {content}
    </article>
  );
}

function FeaturedWork({ onOpen, transitionPhase, transitionDestination }) {
  return (
    <section className="work" aria-labelledby="work-title">
      <div className="fixed-content work-content">
        <h2 className="section-label" id="work-title">Featured work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.position}
              project={project}
              onOpen={onOpen}
              isOpening={transitionPhase === 'leaving' && transitionDestination === project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise" id="expertise" aria-labelledby="expertise-title">
      <div className="fixed-content expertise-content">
        <h2 id="expertise-title">
          <span>Expertise built through</span>
          <span><em>6+ years</em> of shipping</span>
          <span>complex products</span>
        </h2>
        <div className="expertise-grid">
          <img className="expertise-rule vertical one" src={`${ASSET_PATH}/grid-divider-vertical.svg`} alt="" />
          <img className="expertise-rule vertical two" src={`${ASSET_PATH}/grid-divider-vertical.svg`} alt="" />
          <img className="expertise-rule horizontal" src={`${ASSET_PATH}/grid-divider-horizontal.svg`} alt="" />
          {expertise.map((item) => (
            <article className="expertise-item" key={item.title}>
              <span className="expertise-icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);
  const [transitionPhase, setTransitionPhase] = useState('idle');
  const [transitionDestination, setTransitionDestination] = useState(null);
  const [transitionColor, setTransitionColor] = useState('#d7003a');
  const [hasDismissedProjectOnboarding, setHasDismissedProjectOnboarding] = useState(false);
  const [navigationIsScrolled, setNavigationIsScrolled] = useState(false);
  const [navigationIsHidden, setNavigationIsHidden] = useState(false);
  const [hasCompletedIntro, setHasCompletedIntro] = useState(
    () => window.location.pathname !== '/',
  );

  const dismissProjectOnboarding = () => {
    setHasDismissedProjectOnboarding(true);
  };

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    resetScroll();

    const frameId = window.requestAnimationFrame(() => {
      resetScroll();
    });
    const timeoutId = window.setTimeout(resetScroll, 0);
    window.addEventListener('pageshow', resetScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('pageshow', resetScroll);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      setTransitionPhase('idle');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let accumulatedDelta = 0;
    let frameId = null;

    const updateNavigation = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const delta = currentScrollY - previousScrollY;
      const isScrolled = currentScrollY > 24;

      if (delta !== 0) {
        if (Math.sign(delta) !== Math.sign(accumulatedDelta)) accumulatedDelta = delta;
        else accumulatedDelta += delta;
      }

      setNavigationIsScrolled(isScrolled);

      if (!isScrolled) {
        setNavigationIsHidden(false);
        accumulatedDelta = 0;
      } else if (accumulatedDelta > 8) {
        setNavigationIsHidden(true);
        accumulatedDelta = 0;
      } else if (accumulatedDelta < -8) {
        setNavigationIsHidden(false);
        accumulatedDelta = 0;
      }

      previousScrollY = currentScrollY;
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateNavigation);
    };

    setNavigationIsScrolled(window.scrollY > 24);
    setNavigationIsHidden(false);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [path]);

  const openCaseStudy = (event, project) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (transitionPhase !== 'idle') return;
    setTransitionDestination(project.href);
    setTransitionColor(project.transitionColor);
    setTransitionPhase('leaving');
    window.setTimeout(() => {
      window.history.pushState({}, '', project.href);
      setPath(project.href);
      setTransitionPhase('revealing');
      window.scrollTo(0, 0);
      window.setTimeout(() => {
        setTransitionPhase('idle');
        setTransitionDestination(null);
      }, 660);
    }, 650);
  };

  const transitionLayer = transitionPhase === 'idle'
    ? null
    : (
      <div
        className={`case-page-transition ${transitionPhase}`}
        style={{ backgroundColor: transitionColor }}
        aria-hidden="true"
      />
    );

  const navigateCaseStudy = (event, destination) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    window.history.replaceState({}, '', destination);
    flushSync(() => setPath(destination));
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const navigateFromGlobalHeader = (event, destination) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (transitionPhase !== 'idle') return;

    const destinationUrl = new URL(destination, window.location.origin);
    const commitNavigation = (nextTransitionPhase = 'idle') => {
      window.history.pushState({}, '', `${destinationUrl.pathname}${destinationUrl.hash}`);
      flushSync(() => {
        setPath(destinationUrl.pathname);
        setTransitionPhase(nextTransitionPhase);
      });

      window.requestAnimationFrame(() => {
        const target = destinationUrl.hash
          ? document.getElementById(destinationUrl.hash.slice(1))
          : null;

        if (target) target.scrollIntoView();
        else if (destinationUrl.hash === '#top') window.scrollTo(0, 0);
      });
    };

    if (path.startsWith('/work/') && destinationUrl.pathname === '/') {
      setTransitionColor(
        path.startsWith('/work/fintech-platform')
          ? '#350473'
          : path.startsWith('/work/healthcare-platform')
            ? '#3e8563'
            : path.startsWith('/work/outdoor-fitness-app')
              ? '#568ac6'
            : '#d7003a',
      );
      setTransitionPhase('leaving');
      window.setTimeout(() => {
        commitNavigation('revealing');
        window.setTimeout(() => setTransitionPhase('idle'), 660);
      }, 650);
      return;
    }

    commitNavigation();
  };

  const isDetail = path === '/work/fortune-500-biopharma/in-detail';
  const isOverview = path === '/work/fortune-500-biopharma';
  const isFintechOverview = path === '/work/fintech-platform';
  const isFintechDetail = path === '/work/fintech-platform/in-detail';
  const isHealthcareOverview = path === '/work/healthcare-platform';
  const isHealthcareDetail = path === '/work/healthcare-platform/in-detail';
  const isOutdoorFitnessOverview = path === '/work/outdoor-fitness-app';
  const isCaseStudy = isOverview
    || isDetail
    || isFintechOverview
    || isFintechDetail
    || isHealthcareOverview
    || isHealthcareDetail
    || isOutdoorFitnessOverview;
  const activeCaseStudyView = isDetail || isFintechDetail || isHealthcareDetail
    ? 'detail'
    : 'overview';
  const activeCaseStudyBase = isFintechOverview || isFintechDetail
    ? '/work/fintech-platform'
    : isHealthcareOverview || isHealthcareDetail
      ? '/work/healthcare-platform'
      : isOutdoorFitnessOverview
        ? '/work/outdoor-fitness-app'
      : '/work/fortune-500-biopharma';

  let pageContent;

  if (isDetail) {
    pageContent = (
      <CaseStudyDetail
        onOverview={(event) => navigateCaseStudy(event, '/work/fortune-500-biopharma')}
      />
    );
  } else if (isOverview) {
    pageContent = (
      <CaseStudy
        onDetail={(event) => navigateCaseStudy(event, '/work/fortune-500-biopharma/in-detail')}
      />
    );
  } else if (isFintechOverview) {
    pageContent = (
      <FintechCaseStudy
        onDetail={(event) => navigateCaseStudy(event, '/work/fintech-platform/in-detail')}
      />
    );
  } else if (isFintechDetail) {
    pageContent = (
      <FintechCaseStudyDetail
        onOverview={(event) => navigateCaseStudy(event, '/work/fintech-platform')}
      />
    );
  } else if (isHealthcareOverview) {
    pageContent = (
      <HealthcareCaseStudy
        onDetail={(event) => navigateCaseStudy(event, '/work/healthcare-platform/in-detail')}
      />
    );
  } else if (isHealthcareDetail) {
    pageContent = (
      <HealthcareCaseStudyDetail
        onOverview={(event) => navigateCaseStudy(event, '/work/healthcare-platform')}
      />
    );
  } else if (isOutdoorFitnessOverview) {
    pageContent = (
      <OutdoorFitnessCaseStudy
        onDetail={(event) => event.preventDefault()}
      />
    );
  } else {
    pageContent = (
      <main className={`page-shell${transitionPhase === 'leaving' ? ' is-leaving' : ''}`}>
        <Hero isReady={hasCompletedIntro} />
        <FeaturedWork
          onOpen={openCaseStudy}
          transitionPhase={transitionPhase}
          transitionDestination={transitionDestination}
        />
        <Expertise />
        <SiteFooter />
      </main>
    );
  }

  return (
    <>
      <div
        className={`global-navigation-backdrop${navigationIsScrolled ? ' is-visible' : ''}${navigationIsHidden ? ' is-hidden' : ''}`}
        aria-hidden="true"
      />
      <GlobalHeader
        isCaseStudy={isCaseStudy}
        isScrolled={navigationIsScrolled}
        isHidden={navigationIsHidden}
        introComplete={hasCompletedIntro}
        onIntroComplete={() => setHasCompletedIntro(true)}
        onNavigate={navigateFromGlobalHeader}
      />
      {isCaseStudy && (
        <ProjectToggle
          activeView={activeCaseStudyView}
          overviewHref={activeCaseStudyBase}
          detailHref={isOutdoorFitnessOverview
            ? activeCaseStudyBase
            : `${activeCaseStudyBase}/in-detail`}
          detailComingSoon={isOutdoorFitnessOverview}
          onOverview={(event) => navigateCaseStudy(event, activeCaseStudyBase)}
          onDetail={(event) => {
            if (isOutdoorFitnessOverview) {
              event.preventDefault();
              return;
            }
            navigateCaseStudy(event, `${activeCaseStudyBase}/in-detail`);
          }}
          className={`case-project-toggle global-case-project-toggle${navigationIsScrolled ? ' is-scrolled' : ''}${navigationIsHidden ? ' is-scroll-hidden' : ''}`}
        />
      )}
      {isCaseStudy && <CaseStudyScrollProgress key={path} />}
      {pageContent}
      {transitionLayer}
      {isCaseStudy
        && hasCompletedIntro
        && transitionPhase === 'idle'
        && !hasDismissedProjectOnboarding && (
        <ProjectOnboardingOverlay
          activeView={activeCaseStudyView}
          onDismiss={dismissProjectOnboarding}
        />
      )}
    </>
  );
}
