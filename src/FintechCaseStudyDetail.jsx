import SiteFooter from './components/SiteFooter';

const FINTECH_ASSETS = '/assets/case-study-fintech';

const CORE_USABILITY_ISSUES = [
  {
    title: 'Technical terminology',
    description: 'Users struggle to understand what actions or data meant.',
  },
  {
    title: 'Information overload',
    description: 'Then stables made it hard to spot priority issues.',
  },
  {
    title: 'Poor error resolution',
    description: 'Fail uploads and mismatches did not provide clear next steps.',
  },
  {
    title: 'Weak navigation',
    description: 'Users had difficulty finding specific tools and workflows.',
  },
  {
    title: 'Lack of visual hierarchy',
    description: 'Primary actions were hidden among secondary functions.',
  },
];

const PROJECT_CHALLENGES = [
  'Reconciliation workflows, financial terminology, and hospitality operations were completely new to us. This created a steep learning curve',
  'Stakeholders wanted a completely reimagined interface not an iteration. Since our understanding was shaped by the current product, rethinking from scratch felt overwhelming',
  'We experimented with Figma AI to explore layout options but the tool was\ntoo early-stage to generate usable results for such a domain-specific\nproblem',
  'The platform assumed technical literacy. We needed to make it accessible to finance managers and outlet owners without technical backgrounds',
];

const DESIGN_PROCESS_STEPS = [
  {
    title: 'Research and Analysis',
    description:
      'With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.',
  },
  {
    title: 'Wireframing and Prototyping',
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
  },
  {
    title: 'Design Creation',
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    title: 'Development and Testing',
    description:
      'In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.',
  },
];

const EXPERIENCE_STRATEGY = [
  {
    title: 'Plain-language workflows',
    description:
      'Replace technical system language with terms finance teams already understand',
  },
  {
    title: 'Task-first hierarchy',
    description: 'Prioritise what needs action instead of showing all data equally',
  },
  {
    title: 'Guided resolution',
    description: 'Help users identify, understand, and fix issues without external support',
  },
];

const UX_INTERVENTIONS = [
  {
    title: 'Reports Overview',
    problem:
      'Report management was list-heavy and required users to manually scan for missing uploads, failures, or reconciliation issues',
    solution:
      'Introduced a calendar-driven, status-aware workspace where users could view reconciliation health by date, filter reports, search high-volume uploads, and identify failures quickly.',
    result: (
      <>
        Reduced daily reconciliation checks from <strong>20+ minutes</strong> to{' '}
        <strong>under 6 minutes</strong>.
      </>
    ),
    images: [
      {
        src: `${FINTECH_ASSETS}/intervention-reports-overview.png`,
        alt: 'EcoBillz reports overview with a monthly status calendar and report table',
      },
    ],
  },
  {
    title: 'Report Detail Screen',
    problem:
      'Users had to interpret raw technical data and unclear status messages to understand whether a report had uploaded, failed, or needed action.',
    solution:
      'Redesigned the report detail view with clearer metadata, status-driven visual language, contextual CTAs, and clickable error indicators.',
    result:
      'Finance teams could identify upload issues faster and act without relying on support escalation.',
    images: [
      {
        src: `${FINTECH_ASSETS}/intervention-report-detail.png`,
        alt: 'EcoBillz monthly report detail showing upload statuses, errors, and actions',
      },
    ],
  },
  {
    title: 'Reconciliation Dashboard',
    problem:
      'Comparing reports across sources such as OLO and Zomato required manual switching and interpretation.',
    solution:
      'Created a unified dashboard with source comparison cards, reconciliation KPIs, discrepancy breakdowns, trend lines, timestamps, and drill-down CTAs.',
    result:
      'Turned reconciliation from a manual report-checking task into a proactive monitoring workflow.',
    images: [
      {
        src: `${FINTECH_ASSETS}/intervention-reconciliation-dashboard.png`,
        alt: 'EcoBillz reconciliation dashboard comparing OLO and Zomato data',
      },
    ],
  },
  {
    title: 'Standard Report Setup',
    problem:
      'Creating recurring report workflows was configuration-heavy and difficult for non-technical users.',
    solution:
      'Designed a clearer setup flow for configuring report types, schedules, and automated reconciliation needs.',
    result:
      'Helped teams set up repeatable workflows with less dependency on technical support.',
    images: Array.from({ length: 6 }, (_, index) => ({
      src: `${FINTECH_ASSETS}/intervention-standard-setup-0${index + 1}.png`,
      alt: `EcoBillz standard report setup flow, step ${index + 1}`,
    })),
  },
];

const FINTECH_OUTCOMES = [
  {
    title: 'Faster reconciliation',
    metric: '20+ mins → < 6 mins',
    description: 'for daily checks',
  },
  {
    title: 'Reduce support dependency',
    metric: '15%',
    description: 'fewer routine support queries',
  },
  {
    title: 'Improved usability',
    metric: '4.5/5',
    description: 'user satisfaction in testing',
  },
];

function InterventionNote({ tone, label, children }) {
  return (
    <div className={`fintech-intervention-note fintech-intervention-note-${tone}`}>
      <strong>{label}</strong>
      <p>{children}</p>
    </div>
  );
}

export default function FintechCaseStudyDetail({ onOverview }) {
  return (
    <main className="case-page fintech-detail-page">
      <section className="fintech-detail-hero">
        <div className="fintech-detail-hero-background" />

        <h1>
          <span>Redesigning a FinTech Platform</span>
          <span>Processing 2.5M Documents Daily</span>
        </h1>

        <div className="fintech-detail-dashboard-area">
          <div className="fintech-detail-dashboard-frame">
            <img
              src={`${FINTECH_ASSETS}/detail-dashboard.png`}
              alt="EcoBillz financial reconciliation dashboard"
            />
          </div>
        </div>

        <div className="fintech-detail-meta" aria-label="Project details">
          <div className="fintech-detail-meta-item fintech-detail-meta-role">
            <strong>Role</strong>
            <div>
              <span>Experience Designer</span>
              <p>
                End-to-end UX ownership across domain discovery, workflow redesign, UI
                prototyping, and product delivery
              </p>
            </div>
          </div>

          <img
            className="fintech-detail-meta-divider fintech-detail-meta-divider-one"
            src={`${FINTECH_ASSETS}/detail-meta-divider.svg`}
            alt=""
          />

          <div className="fintech-detail-meta-item fintech-detail-meta-scope">
            <strong>Scope</strong>
            <div>
              <span>Product UX · Workflow Redesign· Dashboard UI</span>
              <p>
                Simplified reconciliation workflows, redesigned key product screens, and
                created task-focused interfaces for non-technical finance teams.
              </p>
            </div>
          </div>

          <img
            className="fintech-detail-meta-divider fintech-detail-meta-divider-two"
            src={`${FINTECH_ASSETS}/detail-meta-divider.svg`}
            alt=""
          />

          <div className="fintech-detail-meta-item fintech-detail-meta-scale">
            <strong>Scale</strong>
            <div>
              <span>2.5M documents/day · 350+ customers</span>
              <p>
                4-month redesign for a high-volume FinTech platform used across hospitality,
                QSR, and retail businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="fintech-detail-text-section fintech-detail-overview"
        aria-labelledby="fintech-detail-overview-title"
      >
        <h2 id="fintech-detail-overview-title">Overview</h2>
        <div className="fintech-detail-overview-copy">
          <p>
            Ecobillz is an AI-powered FinTech platform that helps businesses capture, organise,
            and reconcile bills, invoices, settlement reports, payment data, and operational
            documents in real time.
          </p>
          <p>
            The platform was powerful, but its experience was difficult for non-technical finance
            teams. Complex workflows, developer-led terminology, dense tables, and unclear error
            states made routine reconciliation tasks feel harder than they needed to be.
          </p>
        </div>
      </section>

      <section
        className="fintech-detail-text-section fintech-detail-problem"
        aria-labelledby="fintech-detail-problem-title"
      >
        <h2 id="fintech-detail-problem-title">Problem</h2>
        <div className="fintech-detail-overview-copy">
          <p>The product was not limited by capability. It was limited by usability.</p>
          <p>
            Finance managers, hotel teams, and outlet owners needed to upload reports, identify
            mismatches, and resolve reconciliation issues quickly. However, the interface assumed
            technical understanding and created friction through unclear language, overloaded
            tables, weak hierarchy, and dead-end workflows.
          </p>
        </div>
      </section>

      <section
        className="fintech-detail-design-challenge"
        aria-labelledby="fintech-detail-design-challenge-title"
      >
        <h2 id="fintech-detail-design-challenge-title">Design Challenge</h2>
        <blockquote>
          &quot;Finance managers at 5-star properties,QSR outlet and&nbsp; small business owners
          shouldn&apos;t need training sessions to upload a settlement report or fix a mismatch.
          Our platform is powerful, but our terminology, workflows, and UI assume technical
          literacy our customers don&apos;t have; and shouldn&apos;t need.&quot;
        </blockquote>
        <p>Dr. Ameet Patil and Nitesh Singh Rathore, Co-Founders, Ecobillz</p>
      </section>

      <section
        className="fintech-detail-usability"
        aria-labelledby="fintech-detail-usability-title"
      >
        <h2 id="fintech-detail-usability-title">
          <span>Core Usability</span>
          <span>Issues</span>
        </h2>
        <div className="fintech-detail-usability-grid">
          {CORE_USABILITY_ISSUES.map((issue) => (
            <article className="fintech-detail-usability-card" key={issue.title}>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="fintech-detail-challenges"
        aria-labelledby="fintech-detail-challenges-title"
      >
        <h2 id="fintech-detail-challenges-title">Challenges</h2>
        <div className="fintech-detail-challenges-intro">
          <p>
            Our biggest challenge was unfamiliarity with financial reconciliation; a concept
            central to Ecobillz&apos;s core functionality. This knowledge gap delayed our
            understanding of the product for weeks.
          </p>
          <p>
            Through multiple product walkthroughs and repeated questioning about features,
            interfaces, CTAs, and terminology, we gradually built familiarity with reconciliation
            workflows and the platform&apos;s logic.
          </p>
        </div>

        <div className="fintech-detail-challenges-list">
          {PROJECT_CHALLENGES.map((challenge, index) => (
            <article className="fintech-detail-challenge-item" key={challenge}>
              <strong>{String(index + 1).padStart(2, '0')}.</strong>
              <p>{challenge}</p>
            </article>
          ))}
        </div>

        {[341, 491, 641].map((top) => (
          <img
            className="fintech-detail-challenges-divider"
            src={`${FINTECH_ASSETS}/detail-challenges-divider.svg`}
            alt=""
            style={{ top }}
            key={top}
          />
        ))}
      </section>

      <section
        className="fintech-detail-hmw"
        aria-labelledby="fintech-detail-hmw-title"
      >
        <h2 id="fintech-detail-hmw-title">Design Challenge</h2>
        <p>
          How might we simplify a powerful reconciliation platform so that non-technical finance
          teams can understand, act on, and resolve financial data issues without relying on
          training or support?
        </p>
      </section>

      <section
        className="fintech-detail-process"
        aria-labelledby="fintech-detail-process-title"
      >
        <h2 id="fintech-detail-process-title">Design Process</h2>
        <p className="fintech-detail-process-intro">
          A focused mobile redesign approach across strategy, research, and design.
        </p>
        <div className="fintech-detail-process-list">
          {DESIGN_PROCESS_STEPS.map((step, index) => (
            <article className="fintech-detail-process-card" key={step.title}>
              <h3>{step.title}</h3>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="fintech-detail-strategy"
        aria-labelledby="fintech-detail-strategy-title"
      >
        <h2 id="fintech-detail-strategy-title">
          <span>Experience</span>
          <span>Strategy</span>
        </h2>
        <div className="fintech-detail-strategy-grid">
          {EXPERIENCE_STRATEGY.map((principle) => (
            <article className="fintech-detail-strategy-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="fintech-detail-strategic-shift"
        aria-labelledby="fintech-detail-strategic-shift-title"
      >
        <h2 id="fintech-detail-strategic-shift-title">Strategic Shift</h2>
        <p>
          From a passive <strong>data repository</strong> to a
          <br />
          proactive <strong>intelligence hub</strong> that shows users
          <br />
          what needs attention.
        </p>
      </section>

      <section
        className="fintech-detail-interventions"
        aria-labelledby="fintech-detail-interventions-title"
      >
        <h2 id="fintech-detail-interventions-title">
          <span>Key UX</span>
          <span>Interventions</span>
        </h2>
        <p className="fintech-detail-interventions-intro">
          Alongside IA and design system work, several high-traffic templates required focused
          page-level improvements.
        </p>

        <div className="fintech-interventions-list">
          {UX_INTERVENTIONS.map((intervention, interventionIndex) => (
            <article className="fintech-intervention-card" key={intervention.title}>
              <h3>{intervention.title}</h3>
              <div className="fintech-intervention-notes">
                <InterventionNote tone="problem" label="Problem">
                  {intervention.problem}
                </InterventionNote>
                <InterventionNote tone="solution" label="Solution">
                  {intervention.solution}
                </InterventionNote>
                <InterventionNote tone="result" label="Result">
                  {intervention.result}
                </InterventionNote>
              </div>
              <div className="fintech-intervention-images">
                {intervention.images.map((image, imageIndex) => (
                  <div
                    className={`fintech-intervention-image fintech-intervention-image-${interventionIndex + 1}-${imageIndex + 1}`}
                    key={image.src}
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="fintech-detail-outcomes"
        aria-labelledby="fintech-detail-outcomes-title"
      >
        <h2 id="fintech-detail-outcomes-title">
          A more informed and efficient finance team
        </h2>
        <div className="fintech-detail-outcomes-grid">
          {FINTECH_OUTCOMES.map((outcome) => (
            <article className="fintech-detail-outcome-card" key={outcome.title}>
              <h3>{outcome.title}</h3>
              <strong>{outcome.metric}</strong>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
