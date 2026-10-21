
import SiteFooter from './components/SiteFooter';

const HEALTHCARE_ASSETS = '/assets/case-study-vidal';
const INTERVENTION_ASSETS = `${HEALTHCARE_ASSETS}/interventions`;

const HEALTHCARE_USABILITY_ISSUES = [
  {
    title: 'Complex Service Discovery',
    description: 'Users struggled to quickly find relevant healthcare services.',
  },
  {
    title: 'Fragmented User Journeys',
    description: 'Key healthcare tasks were spread across disconnected experiences.',
    compact: true,
  },
  {
    title: 'Low Preventive Care Engagement',
    description: 'Wellness programs and health screenings lacked visibility.',
  },
  {
    title: 'Information Overload',
    description: 'Too many options made decision-making difficult.',
  },
  {
    title: 'Lack of Visual Guidance',
    description: 'Important actions and next steps were not clearly highlighted.',
  },
  {
    title: 'Performance & Stability Issues',
    description: 'App crashes and slow response times affected usability.',
  },
  {
    title: 'Policy Visibility Issues',
    description: 'Policy information was missing for some users.',
  },
  {
    title: 'E-Card Access Problems',
    description: 'Users faced difficulties downloading e-cards.',
  },
  {
    title: 'Poor Claim Continuity',
    description: 'Claim forms reset, forcing users to start over.',
  },
];

const HEALTHCARE_CHALLENGES = [
  'The challenge was to organise insurance claims, network hospitals, health checks, doctor consultations and others without overwhelming users.',
  'The interface needed to reduce cognitive load because users may open the app during emergencies unlike entertainment or shopping apps.',
  'Important tasks like e-card access, cashless intimation, hospital search, and claim tracking needed stronger visibility.',
  'User complaints around crashes, missing policy details, failed e-card downloads, and claim form resets pointed to a trust problem.',
  'The challenge was to use gamification carefully through wellness progress, health check discovery, and engagement nudges.',
];

const HEALTHCARE_DESIGN_PROCESS = [
  {
    title: 'Strategy',
    description:
      'Mapped the app’s feature ecosystem and identified the highest-value journeys: e-card access, cashless intimation, claim tracking, hospital search, health checks, and wellness engagement.',
  },
  {
    title: 'Research',
    description:
      'Analysed user complaints, app pain points, existing service categories, and Vidal Health’s public-facing value proposition.',
  },
  {
    title: 'User Pain-Point Definition',
    description:
      'Grouped user complaints into themes: performance issues, claim submission friction, missing policy visibility, e-card download failure, repeated data entry, and lack of document correction controls.',
  },
  {
    title: 'Information Architecture',
    description:
      'Reorganised services into clearer user goals: My Health Card, Claims, Cashless Intimation, Hospitals Near Me, Book Health Checks, and Wellness.',
  },
  {
    title: 'UX Redesign',
    description:
      'Created redesigned flows for key tasks, including a faster cashless intimation flow, health card access, nearby hospital search, health check booking, and wellness-oriented service cards.',
  },
  {
    title: 'UI Direction',
    description:
      'Developed a fresh visual direction with cleaner cards, softer healthcare-focused visuals, clearer hierarchy, and more intuitive mobile layouts.',
  },
];

const HEALTHCARE_EXPERIENCE_STRATEGY = [
  {
    title: 'Saved Context',
    description:
      'Reduce repeated data entry by making member, patient, and policy information reusable across journeys.',
  },
  {
    title: 'Guided Claims',
    description:
      'Break claim and cashless workflows into smaller steps with clear progress, saved states, and recovery options.',
  },
  {
    title: 'Wellness as Engagement',
    description:
      'Use wellness, health checks, blogs, and women’s health services to increase app value beyond claims and emergencies.',
  },
];

const HEALTHCARE_INTERVENTIONS = [
  {
    slug: 'health-card',
    title: 'Health Card / E-Card Access',
    problem:
      'Users reported issues downloading e-cards. In a healthcare insurance context, this is a critical failure because the e-card may be needed at hospitals for cashless admission or identity verification.',
    solution:
      'Designed a dedicated “All your e-cards at one place” section with clear member details, enrolment number, employee number, relationship, corporate name, validity, download, and share actions.',
    result:
      'Made e-card access more visible, predictable, and usable during hospital visits or insurance verification.',
    screens: ['health-card-home.png'],
    placard: 'All your e-cards at one place',
    cardHeight: '1106.731px',
  },
  {
    slug: 'cashless',
    title: 'Cashless Intimation Flow',
    problem:
      'Cashless intimation is a high-priority task, but users needed a simpler way to raise and track requests without going through confusing insurance steps.',
    solution:
      'Designed a quick cashless intimation flow that could be completed in three clear steps. Added a dedicated tracking area so users could monitor all cashless intimations in one place.',
    result:
      'Reduced the perceived complexity of raising a cashless request and gave users more confidence after submission.',
    screens: ['cashless-add.png', 'cashless-track.png'],
    placard: 'A quick way to add your cashless intimations',
    callouts: [
      'User can now add their cashless intimation in just 3 steps',
      'Keep a track of all your cashless intimation at one place',
    ],
    cardHeight: '1106.731px',
  },
  {
    slug: 'claims',
    title: 'Claims Submission & Tracking',
    problem:
      'User complaints mentioned claim forms resetting, incorrect document uploads, and lack of a delete option for wrong documents.',
    solution:
      'Recommended a guided claim flow with autosave, progress visibility, document preview, delete/replace controls, and clear claim status updates.',
    result:
      'Improved trust and reduced confusion by making claim progress visible and giving users more control over uploaded documents.',
    screens: [
      'claim-reimbursement.png',
      'claim-details.png',
      'claim-intimation.png',
      'claim-ongoing.png',
    ],
    labels: [
      'Reimbursement',
      'Details - reimbursement',
      'Claim tracking - intimation',
      'Claim tracking - ongoing',
    ],
    placard: 'Claim submission and tracking',
    cardHeight: '1939.205px',
  },
  {
    slug: 'policy',
    title: 'Policy Visibility',
    problem:
      'Some users reported that the app showed “no policy associated” with their account, preventing them from accessing benefits and claim services.',
    solution:
      'Created a stronger policy/member dashboard where policy status, linked members, active benefits, and next actions are visible immediately after login.',
    result:
      'Improved user confidence by making insurance eligibility and available services easier to confirm.',
    screens: ['policy-visibility.png'],
    placard: 'A more optimised and smart way to track your policies',
    callouts: [
      'User can now view all the policies of the covered members in one place',
      'Important details are highlighted upfront like sum insured, balance sum insured etc.',
    ],
    cardHeight: '1826.558px',
  },
  {
    slug: 'hospitals',
    title: 'Network Hospital Search',
    problem:
      'Finding the right network hospital is one of the most important tasks in a TPA app, especially for cashless treatment.',
    solution:
      'Designed a “quickly search for nearby hospitals” flow with location-based discovery, hospital cards, filters, and direct access to hospital details.',
    result: 'Made hospital discovery faster and more action-oriented for users looking for care.',
    screens: ['hospital-search.png', 'hospital-results.png'],
    placard: 'Quickly search for nearby hospitals',
    cardHeight: '1081.176px',
  },
  {
    slug: 'health-checks',
    title: 'Health Check Booking',
    problem:
      'Preventive care and health check services were present but needed a clearer booking journey.',
    solution:
      'Designed a four-step booking flow: select a health check, select a hospital, add patients, and confirm booking.',
    result:
      'Turned health check booking into a guided, linear flow that users could understand quickly.',
    screens: [
      'check-select.png',
      'check-hospital.png',
      'check-patients.png',
      'check-confirmation.png',
    ],
    labels: [
      'Select a health check',
      'Select a hospital',
      'Add patients',
      'Booking confirmation',
    ],
    placard: 'Book health checks',
    cardHeight: '1914.205px',
  },
  {
    slug: 'wellness',
    title: 'Wellness & Gamified Engagement',
    problem:
      'The app needed better retention beyond claims and insurance. Users may only return during emergencies unless the app gives them ongoing health value.',
    solution:
      'Created wellness-led service cards such as Vidal Fitness Core, Vidal Health Core, packages for professionals, women’s health services, health blogs, health risk assessment, body fat calculator, baby bump tracker, and health logs.',
    result:
      'Expanded the app’s role from problem-solving during claims to everyday health engagement.',
    screens: [
      'wellness-baby.png',
      'wellness-height.png',
      'wellness-fat.png',
      'wellness-blogs.png',
    ],
    labels: ['Baby Bump Tracker', 'Height Predictor', 'Body Fat Calculator', 'Blogs'],
    placard: 'A better gamified experience',
    cardHeight: '1991.205px',
  },
];

const HEALTHCARE_OUTCOMES = [
  { value: '45%', description: 'Fewer steps in cashless initimation' },
  { value: '32%', description: 'Faster claim submission' },
  { value: '60%', description: 'Improved service discoverability' },
];

function InterventionPhone({ screen, label, index }) {
  return (
    <figure className="healthcare-intervention-phone">
      <div className="healthcare-intervention-phone-shell">
        <img
          className="healthcare-intervention-screen"
          src={`${INTERVENTION_ASSETS}/${screen}`}
          alt=""
        />
        <img
          className="healthcare-intervention-phone-frame"
          src={`${INTERVENTION_ASSETS}/phone-frame.png`}
          alt=""
        />
      </div>
      {label && (
        <figcaption>
          <span>{index + 1}</span>
          {label}
        </figcaption>
      )}
    </figure>
  );
}

export default function HealthcareCaseStudyDetail({ onOverview }) {
  return (
    <main className="case-page healthcare-detail-page">
      <section className="healthcare-case-hero healthcare-detail-hero">
        <div className="healthcare-case-hero-background" />

        <h1>Transforming a healthcare platform, making preventive care more accessible</h1>

        <div className="healthcare-case-collage-area">
          <img
            src={`${HEALTHCARE_ASSETS}/hero-figma.png`}
            alt="Vidal Health mobile healthcare experience"
          />
        </div>

        <div className="healthcare-detail-meta" aria-label="Project details">
          <div className="healthcare-detail-meta-item healthcare-detail-meta-role">
            <strong>Role</strong>
            <div>
              <span>Experience Designer</span>
              <p>
                Led the end-to-end design process across research, user flows, information
                architecture, visual design, and high-fidelity mobile experiences.
              </p>
            </div>
          </div>

          <i aria-hidden="true" />

          <div className="healthcare-detail-meta-item healthcare-detail-meta-scope">
            <strong>Scope</strong>
            <div>
              <span>Mobile App · Healthcare Experience · Wellness Services</span>
              <p>
                Reimagined the preventive healthcare journey by simplifying appointment booking,
                improving service discovery, enhancing health benefit visibility, and creating a
                more intuitive mobile experience.
              </p>
            </div>
          </div>

          <i aria-hidden="true" />

          <div className="healthcare-detail-meta-item healthcare-detail-meta-scale">
            <strong>Scale</strong>
            <p>
              100M+ lives served
              <br />
              12,000+ network hospitals
              <br />
              800+ cities
            </p>
          </div>
        </div>
      </section>

      <section className="healthcare-detail-overview" aria-labelledby="healthcare-detail-overview-title">
        <h2 id="healthcare-detail-overview-title">Overview</h2>
        <div>
          <p>
            Vidal Health is a digital healthcare platform focused on preventive wellness, helping
            users discover health services, book diagnostic tests, access wellness programs, and
            manage their healthcare needs through a single mobile experience.
          </p>
          <p>
            The platform offered a wide range of healthcare services, but the experience felt
            fragmented and overwhelming. Users struggled to understand available benefits,
            navigate multiple service categories, and complete healthcare-related tasks with
            confidence.
          </p>
        </div>
      </section>

      <section className="healthcare-detail-problem" aria-labelledby="healthcare-detail-problem-title">
        <h2 id="healthcare-detail-problem-title">Problem</h2>
        <div>
          <p>
            The challenge wasn&apos;t a lack of healthcare services. The product was not limited by
            features. It was limited by accessibility.
          </p>
          <p>
            Users came to the app for urgent and practical needs: downloading an e-card,
            submitting a claim, correcting uploaded documents, finding a hospital, or raising a
            cashless intimation. However, user complaints showed that routine tasks often broke
            down due to crashes, repeated form resets, poor response time, missing policy
            information, repeated patient-detail entry, and lack of control over incorrect
            document uploads.
          </p>
        </div>
      </section>

      <section
        className="healthcare-detail-design-challenge"
        aria-labelledby="healthcare-detail-design-challenge-title"
      >
        <h2 id="healthcare-detail-design-challenge-title">Design Challenge</h2>
        <blockquote>
          &quot;Preventive healthcare should feel accessible, not complicated. Users shouldn&apos;t
          have to navigate multiple screens, understand healthcare jargon, or search extensively
          to find the services they need. The experience should guide them naturally from
          awareness to action.&quot;
        </blockquote>
      </section>

      <section
        className="healthcare-detail-usability"
        aria-labelledby="healthcare-detail-usability-title"
      >
        <h2 id="healthcare-detail-usability-title">
          Core Usability
          <br />
          Issues
        </h2>

        <div className="healthcare-detail-usability-grid">
          {HEALTHCARE_USABILITY_ISSUES.map((issue) => (
            <article
              className={`healthcare-detail-usability-card${issue.compact ? ' is-compact' : ''}`}
              key={issue.title}
            >
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="healthcare-detail-challenges"
        aria-labelledby="healthcare-detail-challenges-title"
      >
        <h2 id="healthcare-detail-challenges-title">Challenges</h2>
        <p className="healthcare-detail-challenges-intro">
          The biggest challenge was redesigning a healthcare insurance app where every flow
          carried a different level of urgency. The redesign had to balance trust, speed, and
          clarity.
        </p>

        <ol className="healthcare-detail-challenges-list">
          {HEALTHCARE_CHALLENGES.map((challenge, index) => (
            <li key={challenge}>
              <strong>{String(index + 1).padStart(2, '0')}.</strong>
              <p>{challenge}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="healthcare-detail-question"
        aria-labelledby="healthcare-detail-question-title"
      >
        <h2 id="healthcare-detail-question-title">Design Challenge</h2>
        <p>
          How might we redesign Vidal Health into a clearer, faster, and more trustworthy
          healthcare app so users can access insurance, claims, e-cards, hospitals, and wellness
          services without confusion or support dependency?
        </p>
      </section>

      <section
        className="healthcare-detail-process"
        aria-labelledby="healthcare-detail-process-title"
      >
        <h2 id="healthcare-detail-process-title">Design Process</h2>
        <p className="healthcare-detail-process-intro">
          A focused mobile redesign approach across strategy, research, and design.
        </p>

        <ol className="healthcare-detail-process-list">
          {HEALTHCARE_DESIGN_PROCESS.map((step, index) => (
            <li key={step.title}>
              <header>
                <h3>{step.title}</h3>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </header>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="healthcare-detail-strategy"
        aria-labelledby="healthcare-detail-strategy-title"
      >
        <h2 id="healthcare-detail-strategy-title">
          Experience
          <br />
          Strategy
        </h2>

        <div className="healthcare-detail-strategy-grid">
          {HEALTHCARE_EXPERIENCE_STRATEGY.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="healthcare-detail-strategic-shift"
        aria-labelledby="healthcare-detail-strategic-shift-title"
      >
        <h2 id="healthcare-detail-strategic-shift-title">Strategic Shift</h2>
        <p>
          From a service-heavy insurance app to a guided healthcare companion that helps users
          act quickly, recover from errors, and return for wellness support.
        </p>
      </section>

      <section
        className="healthcare-detail-interventions"
        aria-labelledby="healthcare-detail-interventions-title"
      >
        <h2 id="healthcare-detail-interventions-title">
          Key UX
          <br />
          Interventions
        </h2>

        <div className="healthcare-intervention-list">
          {HEALTHCARE_INTERVENTIONS.map((intervention) => (
            <article
              className={`healthcare-intervention-card is-${intervention.slug}`}
              key={intervention.title}
              style={{ '--intervention-card-height': intervention.cardHeight }}
            >
              <h3>{intervention.title}</h3>

              <div className="healthcare-intervention-notes">
                <div className="is-problem">
                  <strong>Problem</strong>
                  <p>{intervention.problem}</p>
                </div>
                <div className="is-solution">
                  <strong>Solution</strong>
                  <p>{intervention.solution}</p>
                </div>
                <div className="is-result">
                  <strong>Result</strong>
                  <p>{intervention.result}</p>
                </div>
              </div>

              <div className="healthcare-intervention-visual">
                <div className="healthcare-intervention-placard">
                  <h4>{intervention.placard}</h4>
                  {intervention.callouts?.map((callout) => (
                    <p key={callout}>{callout}</p>
                  ))}
                </div>

                <div className="healthcare-intervention-phones">
                  {intervention.screens.map((screen, index) => (
                    <InterventionPhone
                      index={index}
                      key={screen}
                      label={intervention.labels?.[index]}
                      screen={screen}
                    />
                  ))}
                </div>

                {intervention.slug === 'policy' && (
                  <div className="healthcare-intervention-policy-continuation">
                    <img
                      src={`${INTERVENTION_ASSETS}/policy-visibility.png`}
                      alt="Policy dashboard continuing below the mobile device frame"
                    />
                  </div>
                )}

                {intervention.slug === 'health-card' && (
                  <div
                    className="healthcare-intervention-ecard"
                    role="img"
                    aria-label="Digital Vidal Health e-card with member details, download, and share access"
                  >
                    <img
                      className="healthcare-intervention-ecard-background"
                      src={`${INTERVENTION_ASSETS}/card-art-1.svg`}
                      alt=""
                    />
                    <img
                      className="healthcare-intervention-ecard-logo"
                      src={`${INTERVENTION_ASSETS}/card-art-2.svg`}
                      alt=""
                    />
                    <p className="healthcare-intervention-ecard-copy">
                      All your E-cards at one place
                    </p>
                    <img
                      className="healthcare-intervention-ecard-action"
                      src={`${INTERVENTION_ASSETS}/card-art-9.svg`}
                      alt=""
                    />

                    <div className="healthcare-intervention-member-card">
                      <img
                        className="healthcare-intervention-member-card-art"
                        src={`${INTERVENTION_ASSETS}/card-art-6.svg`}
                        alt=""
                      />
                      <strong>Health Card</strong>
                      <img
                        className="healthcare-intervention-member-card-logo"
                        src={`${INTERVENTION_ASSETS}/card-art-7.svg`}
                        alt=""
                      />
                      <img
                        className="healthcare-intervention-member-card-symbol"
                        src={`${INTERVENTION_ASSETS}/card-art-8.svg`}
                        alt=""
                      />
                      <div className="healthcare-intervention-member-card-labels">
                        <span>Name</span>
                        <span>Enrollment no.</span>
                        <span>Employee no.</span>
                        <span>Relationship</span>
                        <span>Corp name</span>
                      </div>
                      <div className="healthcare-intervention-member-card-values">
                        <span>XXXXX</span>
                        <span>XXXXX XXXXXXX XXXXXX</span>
                        <span>XXXX</span>
                        <span>XXXX</span>
                        <span>XXXXX XXXXX XXXX</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="healthcare-detail-outcomes"
        aria-labelledby="healthcare-detail-outcomes-title"
      >
        <h2 id="healthcare-detail-outcomes-title">
          Making healthcare
          <br />
          journeys simpler
        </h2>

        <div className="healthcare-detail-outcome-grid">
          {HEALTHCARE_OUTCOMES.map((outcome) => (
            <article key={outcome.description}>
              <strong>{outcome.value}</strong>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
