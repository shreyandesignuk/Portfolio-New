import { useEffect, useRef, useState } from 'react';
import SiteFooter from './components/SiteFooter';

const CASE_ASSETS = '/assets/case-study';
const WORKSHOP_ASSETS = `${CASE_ASSETS}/workshops`;
const DESIGN_SYSTEM_ASSETS = `${CASE_ASSETS}/design-system`;
const INTERVENTION_ASSETS = `${CASE_ASSETS}/interventions`;

const WORKSHOP_IMAGES = [
  {
    src: `${WORKSHOP_ASSETS}/stakeholder-golden-circle-hi.png`,
    alt: 'Golden Circle stakeholder workshop and synthesis board',
    title: 'Golden Circle Workshop Synthesis',
  },
  {
    src: `${WORKSHOP_ASSETS}/stakeholder-human-connect-hi.png`,
    alt: 'Amplifying Human Connect stakeholder workshop and synthesis board',
    title: 'Amplifying Human Connect Workshop Synthesis',
  },
  {
    src: `${WORKSHOP_ASSETS}/stakeholder-industry-differentiators-hi.png`,
    alt: 'Industry Differentiators stakeholder workshop and synthesis board',
    title: 'Industry Differentiators Workshop Synthesis',
  },
];

const DESIGN_SYSTEM_IMAGES = [
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-primary-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-primary-hi.png`,
    alt: 'Primary colors, tints, and shades in the Gilead design system',
    title: 'Primary Colors',
    className: 'detail-design-system-primary',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-secondary-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-secondary-hi.png`,
    alt: 'Secondary colors in the Gilead design system',
    title: 'Secondary Colors',
    className: 'detail-design-system-secondary',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-neutral-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-neutral-hi.png`,
    alt: 'Neutral colors, gradients, and data visualization colors in the Gilead design system',
    title: 'Neutral Colors, Gradients, and Data Visualization',
    className: 'detail-design-system-neutral',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-supporting-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-supporting-hi.png`,
    alt: 'Supporting background colors, tints, and shades in the Gilead design system',
    title: 'Supporting Background Colors',
    className: 'detail-design-system-supporting',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-typography-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-typography-hi.png`,
    alt: 'Typography scale and usage in the Gilead design system',
    title: 'Typography',
    className: 'detail-design-system-typography',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-iconography-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-iconography-hi.png`,
    alt: 'Iconography sizes, layout, and usage in the Gilead design system',
    title: 'Iconography',
    className: 'detail-design-system-iconography',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-buttons-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-buttons-hi.png`,
    alt: 'Button variants, states, and anatomy in the Gilead design system',
    title: 'Buttons',
    className: 'detail-design-system-buttons',
  },
  {
    thumbnail: `${DESIGN_SYSTEM_ASSETS}/design-system-dropdowns-hi.png`,
    src: `${DESIGN_SYSTEM_ASSETS}/design-system-dropdowns-hi.png`,
    alt: 'Dropdown variants and anatomy in the Gilead design system',
    title: 'Dropdowns',
    className: 'detail-design-system-dropdowns',
  },
];

const IA_CHALLENGES = [
  {
    nodeId: '953:3306',
    title: 'Deep & Fragmented Navigation',
    titleNodeId: '953:3307',
    points: [
      ['ia-buried.svg', 'Critical content was buried multiple levels down'],
      ['ia-exploratory.svg', 'Users were forced into exploratory clicking rather than guided access'],
      ['ia-orientation.svg', 'Orientation became difficult on long journeys'],
    ],
  },
  {
    nodeId: '971:3491',
    title: 'Mental Model Mismatch',
    titleNodeId: '971:3492',
    points: [
      ['ia-org-structure.svg', 'Content groupings reflected internal org structure more than user expectations'],
      ['ia-labels.svg', 'Labels were often generic and not SEO-aligned'],
      ['ia-inconsistent.svg', 'Similar content appeared in inconsistent locations'],
    ],
  },
  {
    nodeId: '971:3547',
    title: 'Orphaned & Weakly Connected Pages',
    titleNodeId: '971:3548',
    points: [
      ['ia-primary-nav.svg', 'Key pages were not surfaced through primary navigation'],
      ['ia-cross-linking.svg', 'Cross-linking between high-value sections was limited'],
      ['ia-dead-ends.svg', 'Users frequently hit dead ends'],
    ],
  },
  {
    nodeId: '971:3573',
    title: 'Labeling & SEO Gaps',
    titleNodeId: '971:3574',
    points: [
      ['ia-patterns.svg', 'Repeated patterns behaved differently across sections'],
      ['ia-discoverability.svg', 'Page naming conventions were not optimized for discoverability'],
      ['ia-visibility.svg', 'Important content had low structural visibility'],
    ],
  },
];

const UX_INTERVENTIONS = [
  {
    nodeId: '971:13093',
    title: 'Homepage',
    height: 1798.574,
    problem: 'Fragmented layout and weak hierarchy made the homepage harder to scan and understand quickly.',
    solution: 'Redesigned the homepage with a cleaner structure, clearer hierarchy, and unified content blocks.',
    result: 'Faster orientation and improved scannability for first-time visitors.',
    before: { type: 'video', src: 'home-before.webm' },
    after: { type: 'video', src: 'home-after.webm' },
  },
  {
    nodeId: '971:13126',
    title: 'Header Navigation',
    height: 1836.855,
    problem: 'Important destinations buried within multi-level menus with weak visual hierarchy.',
    solution: 'Structured mega menu with featured pathways, column-based grouping, and jargon-free labeling.',
    result: 'Faster path selection, reduced cognitive load, better visibility of high-value sections.',
    before: { type: 'image', src: 'header-before.png', className: 'is-header-before' },
    after: { type: 'video', src: 'header-nav-after.webm' },
  },
  {
    nodeId: '971:13157',
    title: 'Search Redesign',
    height: 1596.807,
    tightInsights: true,
    problem: 'Low relevance in results, no meaningful filtering, high effort to locate specific content.',
    solution: 'Predictive search, faceted filters, clearer metadata hierarchy, taxonomy aligned with revised IA.',
    result: 'Faster time-to-content, reduced search abandonment, higher confidence in discoverability.',
    before: { type: 'image', src: 'search-before.png', className: 'is-search-before' },
    after: { type: 'video', src: 'search-after.webm' },
  },
  {
    nodeId: '971:13187',
    title: 'Pipeline Experience',
    height: 1798.574,
    tightInsights: true,
    problem: 'Dense scientific information without clear entry points, high cognitive load for non-experts.',
    solution: '“Pipeline at a Glance” for rapid orientation, structured data tables, contextual phase explanations.',
    result: 'Faster understanding of pipeline status, improved credibility, better mixed-expertise support.',
    before: { type: 'video', src: 'pipeline-before.webm' },
    after: { type: 'video', src: 'pipeline-after.webm', className: 'is-pipeline-after' },
  },
  {
    nodeId: '971:13220',
    title: 'Medicines Pages',
    height: 1757.45,
    compact: true,
    tightInsights: true,
    problem: 'Content-heavy layouts with limited hierarchy, important details buried in long text blocks.',
    solution: 'Modular, scannable content framework with clear section hierarchy and responsive optimizations.',
    result: 'Improved scanability for HCPs and patients, reduced time to key information.',
    before: { type: 'image', src: 'medicines-before.png', className: 'is-medicines-before' },
    after: { type: 'video', src: 'medicines-after.webm' },
  },
  {
    nodeId: '971:13250',
    title: 'Inclusion & Diversity',
    height: 1798.574,
    tightInsights: true,
    problem: 'Strong brand storytelling but lacked data anchoring and visual structure.',
    solution: 'Prominent quantitative highlights, structured storytelling blocks, improved section pacing.',
    result: 'Stronger trust through proof-backed storytelling, better balance between emotion and credibility.',
    before: { type: 'video', src: 'inclusion-diversity-before.webm' },
    after: { type: 'video', src: 'inclusion-diversity-after.webm' },
  },
  {
    nodeId: '971:13281',
    title: 'Stories',
    height: 1798.574,
    tightInsights: true,
    problem: 'Content available but not easily explorable. Weak categorization and scanning patterns.',
    solution: 'Improved card hierarchy, stronger tagging structure, enhanced visual scanning, better content density.',
    result: 'Faster story discovery, improved media usability, better support for repeat visitors.',
    before: { type: 'video', src: 'stories-before.webm' },
    after: { type: 'video', src: 'stories-after.webm' },
  },
];

function InterventionVideo({ src, title, className = '' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  return (
    <button
      type="button"
      className={`detail-intervention-video${className ? ` ${className}` : ''}`}
      onClick={togglePlayback}
      aria-label={`${isPlaying ? 'Pause' : 'Play'} ${title}`}
    >
      <video
        ref={videoRef}
        src={`${INTERVENTION_ASSETS}/${src}`}
        muted
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <img
          className="detail-intervention-play"
          src={`${INTERVENTION_ASSETS}/play-button.svg`}
          alt=""
          aria-hidden="true"
        />
      )}
    </button>
  );
}

export default function CaseStudyDetail({ onOverview }) {
  const [activeWorkshopImage, setActiveWorkshopImage] = useState(null);
  const [activeDesignSystemImage, setActiveDesignSystemImage] = useState(null);

  const showPreviousWorkshopImage = () => {
    setActiveWorkshopImage((current) => (
      current === null ? 0 : (current - 1 + WORKSHOP_IMAGES.length) % WORKSHOP_IMAGES.length
    ));
  };

  const showNextWorkshopImage = () => {
    setActiveWorkshopImage((current) => (
      current === null ? 0 : (current + 1) % WORKSHOP_IMAGES.length
    ));
  };

  const showPreviousDesignSystemImage = () => {
    setActiveDesignSystemImage((current) => (
      current === null ? 0 : (current - 1 + DESIGN_SYSTEM_IMAGES.length) % DESIGN_SYSTEM_IMAGES.length
    ));
  };

  const showNextDesignSystemImage = () => {
    setActiveDesignSystemImage((current) => (
      current === null ? 0 : (current + 1) % DESIGN_SYSTEM_IMAGES.length
    ));
  };

  useEffect(() => {
    if (activeWorkshopImage === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveWorkshopImage(null);
      if (event.key === 'ArrowLeft') showPreviousWorkshopImage();
      if (event.key === 'ArrowRight') showNextWorkshopImage();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeWorkshopImage]);

  useEffect(() => {
    if (activeDesignSystemImage === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveDesignSystemImage(null);
      if (event.key === 'ArrowLeft') showPreviousDesignSystemImage();
      if (event.key === 'ArrowRight') showNextDesignSystemImage();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDesignSystemImage]);

  return (
    <main className="case-detail-page">
      <section className="detail-hero" aria-labelledby="detail-hero-title">
        <div className="detail-hero-red" />

        <h1 id="detail-hero-title">
          Redesigned a Fortune 500 biopharma website into a unified, accessible digital experience
        </h1>

        <div className="detail-hero-image-area">
          <div className="detail-hero-image-frame">
            <img src={`${CASE_ASSETS}/hero-updated.png`} alt="Gilead website redesign homepage" />
          </div>
        </div>

        <div className="detail-project-meta">
          <div className="detail-meta-column detail-meta-role">
            <strong>Role</strong>
            <div>
              <b>Lead UX Designer</b>
              <p>End-to-end UX ownership across IA, design system, and page templates.</p>
            </div>
          </div>

          <img className="detail-meta-divider detail-meta-divider-one" src={`${CASE_ASSETS}/project-meta-divider.svg`} alt="" />

          <div className="detail-meta-column detail-meta-scope">
            <strong>Scope</strong>
            <div>
              <b>IA overhaul · Design system · Redesign</b>
              <p>Restructured the entire information<br />architecture and built a governed design system.</p>
            </div>
          </div>

          <img className="detail-meta-divider detail-meta-divider-two" src={`${CASE_ASSETS}/project-meta-divider.svg`} alt="" />

          <div className="detail-meta-column detail-meta-scale">
            <strong>Scale</strong>
            <div>
              <b>187+ pages · 120+ stakeholders</b>
              <p>13-month program with 1,000+ pieces of feedback incorporated.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-project-overview" aria-labelledby="detail-project-overview-title">
        <h2 id="detail-project-overview-title">Overview</h2>
        <p>
          Gilead’s global website had grown into a large, content-heavy ecosystem. Over time, different sections had evolved independently, creating inconsistent patterns, deep navigation, duplicated components, and friction for users trying to find high-confidence information quickly.
        </p>
      </section>

      <section className="detail-problem" aria-labelledby="detail-problem-title">
        <h2 id="detail-problem-title">Problem</h2>
        <p className="detail-problem-intro">
          The website was not failing because of a single broken page. The real problem was systemic.
        </p>

        <div className="detail-problem-group detail-problem-user">
          <h3>User-Facing Problems</h3>
          <div className="detail-problem-list">
            <article>
              <h4>Navigation Complexity</h4>
              <p>Users faced multi-level menus and struggled to locate content under time pressure.</p>
            </article>
            <article>
              <h4>Cognitive Overload</h4>
              <p>Content-heavy pages lacked scaffolding, eroding trust in complex scientific information.</p>
            </article>
          </div>
        </div>

        <div className="detail-problem-group detail-problem-business">
          <h3>Business &amp; Operational</h3>
          <div className="detail-problem-list">
            <article>
              <h4>Brand Inconsistency</h4>
              <p>Fragmented UI patterns led to inconsistent components and duplicated effort across teams.</p>
            </article>
            <article className="detail-problem-maintenance">
              <h4>High-Maintenance Costs</h4>
              <p>Legacy publishing workflows required design and engineering for routine content updates.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="detail-design-challenge" aria-labelledby="detail-design-challenge-title">
        <h2 id="detail-design-challenge-title">Design Challenge</h2>
        <p>
          How might we redesign a global biopharma website so that complex information becomes easier to find, understand, trust, and maintain at scale?
        </p>
      </section>

      <section className="detail-discovery" aria-labelledby="detail-discovery-title">
        <h2 id="detail-discovery-title">Discovery<br />&amp; Audit</h2>
        <p className="detail-discovery-intro">
          Before redesigning the interface, I worked through a detailed audit of existing pages, navigation patterns, search behaviour, content structures, and component usage.
        </p>

        <h3 className="detail-discovery-strengths-title">Strengths</h3>
        <div className="detail-discovery-card detail-discovery-card-one">
          <h4>Scientific Rigor</h4>
          <p>The integrity of peer-reviewed data and whitepapers remained the strongest pillar of the digital experience.</p>
        </div>
        <div className="detail-discovery-card detail-discovery-card-two">
          <h4>Visual Authenticity</h4>
          <p>Patient photography avoided corporate clichés, effectively conveying empathy and real-world impact.</p>
        </div>
        <div className="detail-discovery-card detail-discovery-card-three">
          <h4>Educational Content</h4>
          <p>The depth of rare disease information was unmatched, though currently difficult for new users to surface.</p>
        </div>

        <h3 className="detail-discovery-weaknesses-title">Weaknesses</h3>
        <div className="detail-discovery-card detail-discovery-card-four">
          <h4>Navigation Depth</h4>
          <p>Users faced a &quot;7-click minimum&quot; to find therapeutic details, leading to massive friction for HCPs seeking clinical data.</p>
        </div>
        <div className="detail-discovery-card detail-discovery-card-five detail-discovery-card-wide-copy">
          <h4>Component Drift</h4>
          <p>Over 15 distinct button styles and 8 different header variations across sub-sites created a fragmented experience.</p>
        </div>
        <div className="detail-discovery-card detail-discovery-card-six">
          <h4>Search Logic</h4>
          <p>Zero metadata filtering resulted in internal search returning outdated PDFs instead of high-priority patient resources.</p>
        </div>
      </section>

      <section className="detail-key-takeaway" aria-labelledby="detail-key-takeaway-title" data-node-id="953:2889">
        <h2 id="detail-key-takeaway-title" data-node-id="953:2891">Key Takeaway</h2>
        <p data-node-id="953:2890">
          The website did not need surface-level visual polishing alone. It needed a clearer structure, stronger design governance, and reusable patterns that could scale without increasing cognitive load.
        </p>
      </section>

      <section className="detail-stakeholder" aria-labelledby="detail-stakeholder-title" data-node-id="953:2935">
        <h2 id="detail-stakeholder-title" data-node-id="953:2936">Stakeholder Alignment</h2>
        <div className="detail-stakeholder-copy" data-node-id="953:2937">
          <p>Because this was a regulated, high-stakes digital ecosystem, the redesign could not be driven by UX best practice alone.</p>
          <p>It needed alignment across brand, medical, investor, content, and engineering stakeholders.</p>
          <p>I facilitated stakeholder workshops and follow-up conversations to understand strategic priorities, audience expectations, publishing workflows, and future content needs.</p>
        </div>

        <div className="detail-stakeholder-gallery">
          {WORKSHOP_IMAGES.map((image, index) => (
            <button
              type="button"
              className="detail-stakeholder-image"
              key={image.src}
              onClick={() => setActiveWorkshopImage(index)}
              aria-label={`Open ${image.title} preview`}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
        <p className="detail-stakeholder-hint" data-node-id="953:2966">Click images to open preview</p>
      </section>

      <section className="detail-stakeholder-takeaways" aria-labelledby="detail-stakeholder-takeaways-title" data-node-id="953:2967">
        <h2 id="detail-stakeholder-takeaways-title" data-node-id="953:2969">Key Takeaways</h2>

        <img className="detail-takeaway-divider detail-takeaway-divider-one" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" />
        <img className="detail-takeaway-divider detail-takeaway-divider-two" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" />
        <img className="detail-takeaway-divider detail-takeaway-divider-three" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" />
        <img className="detail-takeaway-divider detail-takeaway-divider-four" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" />

        <div className="detail-takeaway-row detail-takeaway-row-one">
          <b>01.</b>
          <p>
            The experience needed to feel <span>scientific, credible, and patient-centred</span> without <span>overwhelming users</span>.
          </p>
        </div>
        <div className="detail-takeaway-row detail-takeaway-row-two">
          <b>02.</b>
          <p>
            Patients, HCPs, investors, journalists, and researchers often entered through <span>similar navigation paths</span> but <span>needed different levels of detail</span>.
          </p>
        </div>
        <div className="detail-takeaway-row detail-takeaway-row-three">
          <b>03.</b>
          <p>
            Individual sections had improved over time, but <span>without shared patterns</span>, the overall experience became <span>fragmented</span>.
          </p>
        </div>
        <div className="detail-takeaway-row detail-takeaway-row-four">
          <b>04.</b>
          <p>
            Stakeholders needed the website to be modern, but the priority was <span>fast, trustworthy access</span> to <span>complex information</span>.
          </p>
        </div>
      </section>

      <section className="detail-design-implication" aria-labelledby="detail-design-implication-title" data-node-id="953:2987">
        <h2 id="detail-design-implication-title" data-node-id="953:2989">Design Implication</h2>
        <p data-node-id="953:2988">
          The solution needed to balance user clarity, business scalability, accessibility, and stakeholder governance.
        </p>
      </section>

      <section className="detail-experience-strategy" aria-labelledby="detail-experience-strategy-title" data-node-id="953:3053">
        <h2 id="detail-experience-strategy-title" data-node-id="953:3054">
          Experience<br />Strategy
        </h2>
        <div className="detail-strategy-principles">
          <article className="detail-strategy-principle" data-node-id="953:3071">
            <h3 data-node-id="953:3072">Information-driven</h3>
            <p data-node-id="953:3073">Make complex scientific, medical, and corporate information easier to scan and understand.</p>
          </article>
          <article className="detail-strategy-principle" data-node-id="953:3074">
            <h3 data-node-id="953:3075">People-first</h3>
            <p data-node-id="953:3076">Support different audience needs without forcing users through confusing or duplicated pathways.</p>
          </article>
          <article className="detail-strategy-principle" data-node-id="953:3077">
            <h3 data-node-id="953:3078">Transparency-conscious</h3>
            <p data-node-id="953:3079">Surface critical information clearly, with trust signals, contextual links, and accessible content patterns.</p>
          </article>
        </div>
      </section>

      <section className="detail-strategic-decisions" aria-labelledby="detail-strategic-decisions-title" data-node-id="953:3094">
        <h2 id="detail-strategic-decisions-title" data-node-id="953:3095">Strategic Decisions</h2>

        <img className="detail-decision-divider detail-decision-divider-one" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" data-node-id="953:3096" />
        <img className="detail-decision-divider detail-decision-divider-two" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" data-node-id="953:3097" />
        <img className="detail-decision-divider detail-decision-divider-three" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" data-node-id="953:3098" />
        <img className="detail-decision-divider detail-decision-divider-four" src={`${CASE_ASSETS}/key-takeaway-divider.svg`} alt="" data-node-id="953:3099" />

        <div className="detail-decision-row detail-decision-row-one">
          <b data-node-id="953:3100">01.</b>
          <p data-node-id="953:3104">Trust is built quickly</p>
        </div>
        <div className="detail-decision-row detail-decision-row-two">
          <b data-node-id="953:3101">02.</b>
          <p data-node-id="953:3105">Users need different depths</p>
        </div>
        <div className="detail-decision-row detail-decision-row-three">
          <b data-node-id="953:3102">03.</b>
          <p data-node-id="953:3106">Cognitive load was the real barrier</p>
        </div>
        <div className="detail-decision-row detail-decision-row-four">
          <b data-node-id="953:3103">04.</b>
          <p data-node-id="953:3107">Findability affects trust</p>
        </div>
      </section>

      <section className="detail-information-architecture" aria-labelledby="detail-information-architecture-title" data-node-id="953:3303">
        <h2 id="detail-information-architecture-title" data-node-id="953:3304">
          Information<br />Architecture
        </h2>
        <div className="detail-ia-intro" data-node-id="953:3305">
          <p>The information architecture became the highest-leverage part of the redesign.</p>
          <p>The old structure reflected internal organisational logic more than user intent. Content was deeply nested, similar pages appeared in inconsistent locations, and high-value information was not always visible from primary navigation.</p>
        </div>

        <h3 className="detail-ia-challenge-title" data-node-id="971:3489">IA challenge (Before)</h3>
        <div className="detail-ia-card-grid">
          {IA_CHALLENGES.map((challenge) => (
            <article className="detail-ia-card" data-node-id={challenge.nodeId} key={challenge.title}>
              <h3 data-node-id={challenge.titleNodeId}>{challenge.title}</h3>
              <ul>
                {challenge.points.map(([icon, text]) => (
                  <li key={text}>
                    <img src={`${CASE_ASSETS}/${icon}`} alt="" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-design-approach" aria-labelledby="detail-design-approach-title" data-node-id="971:3679">
        <h2 id="detail-design-approach-title" data-node-id="971:3680">Design Approach</h2>

        <img className="detail-approach-divider detail-approach-divider-one" src={`${CASE_ASSETS}/design-approach-divider.svg`} alt="" data-node-id="971:3681" />
        <img className="detail-approach-divider detail-approach-divider-two" src={`${CASE_ASSETS}/design-approach-divider.svg`} alt="" data-node-id="971:3682" />
        <img className="detail-approach-divider detail-approach-divider-three" src={`${CASE_ASSETS}/design-approach-divider.svg`} alt="" data-node-id="971:3683" />

        <div className="detail-approach-row detail-approach-row-one">
          <b data-node-id="971:3685">01.</b>
          <p data-node-id="971:3689">Remove unnecessary depth for high-priority journeys</p>
        </div>
        <div className="detail-approach-row detail-approach-row-two">
          <b data-node-id="971:3686">02.</b>
          <p data-node-id="971:3690">Organize around how people think, not internal org charts</p>
        </div>
        <div className="detail-approach-row detail-approach-row-three">
          <b data-node-id="971:3687">03.</b>
          <p data-node-id="971:3691">Surface high-value content earlier in the journey</p>
        </div>
      </section>

      <section className="detail-ia-solution" aria-labelledby="detail-ia-solution-title" data-node-id="971:3661">
        <h2 id="detail-ia-solution-title" data-node-id="971:3663">Information Architecture Solution</h2>

        <div className="detail-ia-solution-map" data-node-id="971:3695">
          <img src={`${CASE_ASSETS}/ia-solution-map.png`} alt="Gilead.com information architecture solution map" />
        </div>

        <img className="detail-ia-solution-divider detail-ia-solution-divider-one" src={`${CASE_ASSETS}/ia-solution-divider.svg`} alt="" data-node-id="971:3709" />
        <img className="detail-ia-solution-divider detail-ia-solution-divider-two" src={`${CASE_ASSETS}/ia-solution-divider.svg`} alt="" data-node-id="971:3710" />
        <img className="detail-ia-solution-divider detail-ia-solution-divider-three" src={`${CASE_ASSETS}/ia-solution-divider.svg`} alt="" data-node-id="971:3718" />

        <div className="detail-ia-solution-row detail-ia-solution-row-one">
          <b data-node-id="971:3711">01.</b>
          <p data-node-id="971:3714">Reduce deep nesting and make priority areas such as pipeline, medicines, investors, and newsroom easier to reach</p>
        </div>
        <div className="detail-ia-solution-row detail-ia-solution-row-two">
          <b data-node-id="971:3712">02.</b>
          <p data-node-id="971:3715">Designed a structural mega menu that could support breadth without overwhelming users. It used column grouping, featured destinations, and clear hierarchy</p>
        </div>
        <div className="detail-ia-solution-row detail-ia-solution-row-three">
          <b data-node-id="971:3713">03.</b>
          <p data-node-id="971:3716">Added contextual connections across related sections to reduce dead ends and support lateral discovery</p>
        </div>
        <div className="detail-ia-solution-row detail-ia-solution-row-four">
          <b data-node-id="971:3719">04.</b>
          <p data-node-id="971:3720">Refine navigation page labels to better match user vocabulary and improve discoverability</p>
        </div>
      </section>

      <section className="detail-design-system" aria-labelledby="detail-design-system-title" data-node-id="971:5996">
        <h2 id="detail-design-system-title" data-node-id="971:5997">Design System</h2>
        <div className="detail-design-system-intro" data-node-id="971:5998">
          <p>To support a redesign of this scale, I led the creation of a centralised design system that acted as a shared source of truth for designers, developers, and content teams.</p>
          <p>The system was not just a UI library. It was designed to reduce inconsistency, improve delivery speed, and embed accessibility into reusable patterns.</p>
        </div>

        <div className="detail-design-system-gallery" data-node-id="971:8349">
          {DESIGN_SYSTEM_IMAGES.map((image, index) => (
            <button
              type="button"
              className={`detail-design-system-image ${image.className}`}
              key={image.src}
              onClick={() => setActiveDesignSystemImage(index)}
              aria-label={`Open ${image.title} preview`}
            >
              <img src={image.thumbnail} alt={image.alt} />
            </button>
          ))}
        </div>
      </section>

      <section className="detail-interventions" aria-labelledby="detail-interventions-title" data-node-id="971:10598">
        <h2 id="detail-interventions-title" data-node-id="971:10599">Key UX<br />Interventions</h2>
        <p className="detail-interventions-intro" data-node-id="971:10600">
          Alongside IA and design system work, several high-traffic templates required focused page-level improvements.
        </p>

        <div className="detail-interventions-list" data-node-id="971:13092">
          {UX_INTERVENTIONS.map((intervention) => (
            <article
              className={`detail-intervention-card${intervention.compact ? ' is-compact' : ''}${intervention.tightInsights ? ' has-tight-insights' : ''}`}
              data-node-id={intervention.nodeId}
              key={intervention.nodeId}
              style={{ height: `${intervention.height}px` }}
            >
              <header className="detail-intervention-heading">
                <h3>{intervention.title}</h3>
              </header>

              <div className="detail-intervention-insights">
                {[
                  ['Problem', intervention.problem],
                  ['Solution', intervention.solution],
                  ['Result', intervention.result],
                ].map(([label, copy]) => (
                  <div className={`detail-intervention-insight is-${label.toLowerCase()}`} key={label}>
                    <strong>{label}</strong>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>

              <h4>Before</h4>
              {intervention.before.type === 'video' ? (
                <InterventionVideo src={intervention.before.src} title={`${intervention.title} before`} />
              ) : (
                <div className={`detail-intervention-still ${intervention.before.className || ''}`}>
                  <img
                    src={`${INTERVENTION_ASSETS}/${intervention.before.src}`}
                    alt={`${intervention.title} before redesign`}
                  />
                </div>
              )}

              <h4>After</h4>
              <InterventionVideo
                src={intervention.after.src}
                title={`${intervention.title} after`}
                className={intervention.after.className}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="detail-measurable-change" aria-labelledby="detail-measurable-change-title" data-node-id="971:13398">
        <h2 id="detail-measurable-change-title" data-node-id="971:13400">
          Driving<br />measurable changes
        </h2>

        <div className="detail-measurable-change-cards" data-node-id="998:22446">
          <article className="detail-measurable-change-card is-navigation" data-node-id="998:22447">
            <p className="detail-measurable-change-value" data-node-id="998:22448">33%</p>
            <p className="detail-measurable-change-label" data-node-id="998:22449">
              Reduction in average navigation depth
            </p>
          </article>

          <article className="detail-measurable-change-card is-stakeholders" data-node-id="998:22450">
            <p className="detail-measurable-change-value" data-node-id="998:22451">120+</p>
            <p className="detail-measurable-change-label" data-node-id="998:22452">
              Stakeholders aligned across functions
            </p>
          </article>

          <article className="detail-measurable-change-card is-accessibility" data-node-id="998:22453">
            <div className="detail-measurable-change-wcag">
              <p className="detail-measurable-change-value" data-node-id="998:22454">WCAG</p>
              <p className="detail-measurable-change-level" data-node-id="998:22455">2.1 AA</p>
            </div>
            <p className="detail-measurable-change-label" data-node-id="998:22456">
              Accessibility compliance across the design system
            </p>
          </article>
        </div>
      </section>

      <section className="detail-testimonial" aria-label="Client testimonial" data-node-id="971:13414">
        <img
          className="detail-testimonial-quote-mark"
          src={`${CASE_ASSETS}/testimonial-quote.svg`}
          alt=""
          aria-hidden="true"
          data-node-id="971:13418"
        />
        <blockquote data-node-id="971:13415">
          “This redesign was one of the most complex initiatives<br />
          we’ve undertaken, but the result is a beautiful, modern<br />
          site that better reflects and communicates Gilead’s life-<br />
          changing work. The design system didn't just unify our<br />
          brand; it accelerated our clinical research<br />
          communications by six months. This is the gold standard<br />
          for biotech UX.
        </blockquote>
        <p className="detail-testimonial-attribution" data-node-id="971:13416">
          Senior Leader, Brand Strategic Communications at Gilead
        </p>
      </section>

      <SiteFooter />

      {activeWorkshopImage !== null && (
        <div
          className="workshop-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Stakeholder workshop image preview"
        >
          <button
            type="button"
            className="workshop-lightbox-close"
            onClick={() => setActiveWorkshopImage(null)}
            aria-label="Close image preview"
          >
            <span aria-hidden="true" />
          </button>

          <button
            type="button"
            className="workshop-lightbox-arrow workshop-lightbox-arrow-previous"
            onClick={showPreviousWorkshopImage}
            aria-label="Show previous image"
          >
            <span aria-hidden="true" />
          </button>

          <figure className="workshop-lightbox-figure">
            <div className="workshop-lightbox-stage">
              <img
                src={WORKSHOP_IMAGES[activeWorkshopImage].src}
                alt={WORKSHOP_IMAGES[activeWorkshopImage].alt}
              />
            </div>
            <figcaption>{WORKSHOP_IMAGES[activeWorkshopImage].title}</figcaption>
          </figure>

          <button
            type="button"
            className="workshop-lightbox-arrow workshop-lightbox-arrow-next"
            onClick={showNextWorkshopImage}
            aria-label="Show next image"
          >
            <span aria-hidden="true" />
          </button>

          <div className="workshop-lightbox-thumbnails" aria-label="Choose workshop image">
            {WORKSHOP_IMAGES.map((image, index) => (
              <button
                type="button"
                className={index === activeWorkshopImage ? 'is-selected' : ''}
                key={image.src}
                onClick={() => setActiveWorkshopImage(index)}
                aria-label={`Show ${image.title}`}
                aria-current={index === activeWorkshopImage ? 'true' : undefined}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}

      {activeDesignSystemImage !== null && (
        <div
          className="workshop-lightbox workshop-lightbox--design-system"
          role="dialog"
          aria-modal="true"
          aria-label="Design system image preview"
        >
          <button
            type="button"
            className="workshop-lightbox-close"
            onClick={() => setActiveDesignSystemImage(null)}
            aria-label="Close image preview"
          >
            <span aria-hidden="true" />
          </button>

          <button
            type="button"
            className="workshop-lightbox-arrow workshop-lightbox-arrow-previous"
            onClick={showPreviousDesignSystemImage}
            aria-label="Show previous image"
          >
            <span aria-hidden="true" />
          </button>

          <figure className="workshop-lightbox-figure">
            <div className="workshop-lightbox-stage">
              <img
                src={DESIGN_SYSTEM_IMAGES[activeDesignSystemImage].src}
                alt={DESIGN_SYSTEM_IMAGES[activeDesignSystemImage].alt}
              />
            </div>
            <figcaption>{DESIGN_SYSTEM_IMAGES[activeDesignSystemImage].title}</figcaption>
          </figure>

          <button
            type="button"
            className="workshop-lightbox-arrow workshop-lightbox-arrow-next"
            onClick={showNextDesignSystemImage}
            aria-label="Show next image"
          >
            <span aria-hidden="true" />
          </button>

          <div className="workshop-lightbox-thumbnails" aria-label="Choose design system image">
            {DESIGN_SYSTEM_IMAGES.map((image, index) => (
              <button
                type="button"
                className={index === activeDesignSystemImage ? 'is-selected' : ''}
                key={image.src}
                onClick={() => setActiveDesignSystemImage(index)}
                aria-label={`Show ${image.title}`}
                aria-current={index === activeDesignSystemImage ? 'true' : undefined}
              >
                <img src={image.thumbnail} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
