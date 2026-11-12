import SiteFooter from './components/SiteFooter';

const FITNESS_ASSETS = '/assets/case-study-nfc';

const CORE_USABILITY_ISSUES = [
  {
    className: 'poor-access',
    title: 'Poor Workout Access',
    description: 'Users reported difficulty opening the content they wanted to use during workout.',
  },
  {
    className: 'manual-setup',
    title: 'Manual Workout Setup',
    description: 'Users found it frustrating to open the app and manually set up their time at the court.',
  },
  {
    className: 'weak-progress',
    title: 'Weak Progress Tracking',
    description: 'Users wanted a straightforward way to input stats and monitor progress while using the app.',
  },
  {
    className: 'personalisation',
    title: 'Lack of Personalisation',
    description: 'Users wanted the app to adapt to their preferences, fitness level, and progress.',
  },
  {
    className: 'outdated-visuals',
    title: 'Outdated Visual Experience',
    description: 'Users felt the app looked old, which affected trust and motivation.',
  },
  {
    className: 'low-motivation',
    title: 'Low Motivation',
    description: 'The app did not provide enough reason for users to return or stay consistent.',
  },
];

const FITNESS_CHALLENGES = [
  'Ensure the app complements the on-site Fitness Court experience with fast access to workouts and trainers.',
  'Create a more engaging experience that encourages users to return and stay consistent.',
  'Help users easily find and start workouts across the 7 Fitness Court training zones.',
  'Provide personalised workout recommendations based on fitness level and goals.',
  'Reduce setup friction through location-based check-ins and automated workout prompts.',
];

const FITNESS_DESIGN_PROCESS = [
  {
    title: 'Strategy',
    description:
      'Defined the app’s role within the larger NFC ecosystem: helping users move from awareness to court discovery, workout participation, progress tracking, and repeat engagement.',
  },
  {
    title: 'Research',
    description:
      'Analysed user complaints from the existing app experience. Feedback showed that users wanted faster workout access, better progress tracking, personalisation, automation, and a more modern interface.',
  },
  {
    title: 'User Pain-Point Definition',
    description:
      'Grouped complaints into key themes: outdated UI, low motivation, poor workout access, weak personalisation, manual setup friction, and unreliable video experience.',
  },
  {
    title: 'Journey Redesign',
    description:
      'Restructured the app around core journeys: onboarding, home Fitness Court selection, workout discovery, trainer-led sessions, check-in, Apple Health connection, and progress updates.',
  },
  {
    title: 'Gamification Direction',
    description:
      'Introduced engagement mechanics such as workout challenges, progress visibility, court check-ins, trainer recommendations, and goal-based workout discovery.',
  },
  {
    title: 'Prototyping',
    description:
      'Created redesigned mobile screens for onboarding, workout selection, fitness court setup, Apple Health connection, geofenced check-in, and trainer-led workout sessions. The uploaded NFC case study page visually shows onboarding screens, workout screens, trainer cards, Apple Health integration, and geofencing-based workout prompts.',
  },
];

const FITNESS_INTERVENTION_ASSETS = `${FITNESS_ASSETS}/detail-interventions`;

const FITNESS_INTERVENTIONS = [
  {
    slug: 'onboarding',
    title: 'Personalised Onboarding',
    problem:
      'Users felt the app lacked personalisation and did not adapt to their preferences or workout needs.',
    solution:
      'Introduced onboarding questions after login to understand user preferences, goals, and workout context. After registration, users could search for their home Fitness Court and begin their fitness journey.',
    result:
      'Created a more relevant first-time experience and helped users connect the app to their local Fitness Court from the beginning.',
    image: 'visual-onboarding.png',
    imageAlt:
      'Personalised onboarding, home Fitness Court search, and welcome screens shown across three iPhones',
  },
  {
    slug: 'home-court',
    title: 'Home Fitness Court Setup',
    problem:
      'Users needed a clearer way to connect with their local Fitness Court instead of treating the app as a generic workout library.',
    solution:
      'Added a flow where users could search for and select their home Fitness Court after completing onboarding.',
    result:
      'Made the app feel more local, personal, and connected to the user’s actual outdoor workout space.',
    image: 'visual-home-court.png',
    imageAlt: 'Home Fitness Court map and selection flow shown on an iPhone',
  },
  {
    slug: 'zones',
    title: 'Workout Discovery by Fitness Court Zones',
    problem: 'Users struggled to quickly find the workout content they needed during sessions.',
    solution:
      'Allowed users to select workouts based on the 7 zones of the Fitness Court: Core, Squat, Push, Lunge, Pull, Agility, and Bend. This matched the physical structure of the Fitness Court and made the app easier to use on-site.',
    result:
      'Reduced confusion by aligning the digital workout structure with the real-world court layout.',
    image: 'visual-zones.png',
    imageAlt: 'Fitness Court zone-based workout discovery screen shown on an iPhone',
  },
  {
    slug: 'levels',
    title: 'Workout Discovery by Fitness Level',
    problem:
      'A one-size-fits-all workout experience made the app less useful for users with different abilities and goals.',
    solution:
      'Added level-based workout browsing so users could choose sessions based on their ability, comfort, or training intensity.',
    result:
      'Made the app more inclusive for beginners, regular users, and advanced fitness users.',
    image: 'visual-levels.png',
    imageAlt: 'Fitness level browsing and workout video screens shown across two iPhones',
  },
  {
    slug: 'trainers',
    title: 'Trainer-Led Workout Videos',
    problem:
      'Users complained that workout videos did not always play or were difficult to access, reducing trust in the app.',
    solution:
      'Redesigned the workout screens to highlight different fitness trainers and their recommended training videos.',
    result:
      'Made workout guidance more visible, structured, and motivating for users at the court.',
    image: 'visual-trainers.png',
    imageAlt: 'Trainer-led workout video screen shown on an iPhone',
  },
  {
    slug: 'check-in',
    title: 'One-Tap Check-In',
    problem:
      'Users found it frustrating to manually open the app and set up their time at the court.',
    solution:
      'Introduced a quick check-in interaction so users could begin their session with one tap.',
    result:
      'Reduced setup friction and made the app feel faster during real workout situations.',
    image: 'visual-check-in.png',
    imageAlt: 'Home and one-tap Fitness Court check-in screens shown across two iPhones',
  },
  {
    slug: 'geofence',
    title: 'Geofencing-Based Workout Prompt',
    problem:
      'Users wanted the app to feel more automated and responsive when they arrived at a Fitness Court.',
    solution:
      'Used geofencing so the app could recognise when the user is near a Fitness Court and prompt them to start working out.',
    result:
      'Turned location into a motivational trigger and reduced the effort needed to begin a session.',
    image: 'visual-geofence.png',
    imageAlt: 'Location-aware Fitness Court workout prompt shown on an iPhone lock screen',
  },
  {
    slug: 'apple-health',
    title: 'Apple Health Integration',
    problem:
      'Users wanted to monitor progress and stay connected with their daily fitness updates.',
    solution:
      'Integrated Apple Health so users could view daily updates and connect outdoor Fitness Court activity with their broader fitness data.',
    result:
      'Helped users see the value of Fitness Court workouts as part of their wider health routine.',
    image: 'visual-apple-health.png',
    imageAlt:
      'Apple Health connection screen, an exercising user, and Apple Watch fitness data',
  },
];

const FITNESS_PROJECTED_OUTCOMES = [
  { value: '50%', label: 'Faster workout start' },
  { value: '40%', label: 'Improved discoverability' },
  { value: '35%', label: 'Increase in engagement' },
  { value: '45%', label: 'Reduction in manual setup' },
];

export default function OutdoorFitnessCaseStudyDetail() {
  return (
    <main className="case-page fitness-detail-page">
      <section className="fitness-detail-hero" aria-labelledby="fitness-detail-hero-title">
        <div className="fitness-detail-hero-background" aria-hidden="true" />

        <h1 id="fitness-detail-hero-title">
          Redesigning a fitness app for outdoor workout engagement
        </h1>

        <div className="fitness-detail-hero-art">
          <img
            src={`${FITNESS_ASSETS}/hero-banner.png`}
            alt="Athlete exercising beside the Fitness Court app shown on an iPhone"
          />
        </div>

        <div className="fitness-detail-meta" aria-label="Project details">
          <div className="fitness-detail-meta-item fitness-detail-meta-role">
            <strong>Role</strong>
            <div>
              <span>Experience Designer</span>
              <p>
                Worked across product strategy, user pain-point analysis, onboarding structure,
                workout journey redesign, gamification direction, and high-fidelity mobile app
                screens.
              </p>
            </div>
          </div>

          <img
            className="fitness-detail-meta-divider"
            src="/assets/case-study-fintech/detail-meta-divider.svg"
            alt=""
          />

          <div className="fitness-detail-meta-item fitness-detail-meta-scope">
            <strong>Scope</strong>
            <div>
              <span>
                Mobile App UX · Fitness Engagement · Workout Discovery · Gamified Experience
              </span>
              <p>
                Redesigned key app journeys including onboarding, home Fitness Court setup,
                workout selection, trainer-led video discovery, progress tracking, Apple Health
                connection, and location-based check-in.
              </p>
            </div>
          </div>

          <img
            className="fitness-detail-meta-divider"
            src="/assets/case-study-fintech/detail-meta-divider.svg"
            alt=""
          />

          <div className="fitness-detail-meta-item fitness-detail-meta-scale">
            <strong>Scale</strong>
            <div>
              <span>
                5.7M registered users · $126M raised · 143M outdoor minutes · 1.92B calories
                burned
              </span>
              <p>
                Publicly, National Fitness Campaign describes its mission as building healthy
                communities and funding 5,000 outdoor Fitness Courts across America by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="fitness-detail-overview"
        aria-labelledby="fitness-detail-overview-title"
      >
        <h2 id="fitness-detail-overview-title">Overview</h2>
        <div className="fitness-detail-overview-copy">
          <p>
            National Fitness Campaign is a public-health initiative that brings free outdoor
            fitness spaces to communities through the Fitness Court. The companion app helps users
            discover nearby courts, access guided workouts, track progress, and stay connected to
            their fitness journey.
          </p>
          <p>
            Despite the strong physical experience, the app felt outdated and lacked motivation,
            personalisation, and seamless workout access. The redesign focused on creating a more
            engaging, personalised, and location-aware experience that helps users start workouts
            faster and stay consistent with their fitness goals.
          </p>
        </div>
      </section>

      <section
        className="fitness-detail-problem"
        aria-labelledby="fitness-detail-problem-title"
      >
        <h2 id="fitness-detail-problem-title">Problem</h2>
        <div className="fitness-detail-problem-copy">
          <p>
            The Fitness Court app was connected to a strong real-world fitness movement, but the
            digital experience did not match the energy, accessibility, and motivation of the
            outdoor Fitness Court itself.
          </p>
          <p>
            Users wanted a simple way to input stats, monitor progress, start workouts at the
            court, access videos, and personalise the experience. Instead, they described the app
            as outdated, unreliable, difficult to open during workouts, and not valuable enough to
            return to regularly.
          </p>
          <p>
            This created a gap between the physical infrastructure and the digital product. The
            Fitness Court encouraged movement, but the app did not consistently support users
            before, during, and after their workout.
          </p>
        </div>
      </section>

      <section
        className="fitness-detail-design-challenge"
        aria-labelledby="fitness-detail-design-challenge-title"
      >
        <h2 id="fitness-detail-design-challenge-title">Design Challenge</h2>
        <blockquote>
          &quot;Users should not have to fight with the app before they start a workout. The
          Fitness Court experience is designed to be free, active, and accessible, so the app
          needed to feel just as immediate, motivating, and easy to use.&quot;
        </blockquote>
      </section>

      <section
        className="fitness-detail-usability"
        aria-labelledby="fitness-detail-usability-title"
      >
        <h2 id="fitness-detail-usability-title">
          Core Usability
          <br />
          Issues
        </h2>
        <div className="fitness-detail-usability-grid">
          {CORE_USABILITY_ISSUES.map((issue) => (
            <article
              className={`fitness-detail-usability-card fitness-detail-usability-${issue.className}`}
              key={issue.title}
            >
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="fitness-detail-challenges"
        aria-labelledby="fitness-detail-challenges-title"
      >
        <h2 id="fitness-detail-challenges-title">Challenges</h2>
        <p className="fitness-detail-challenges-summary">
          The challenge was to create a{' '}
          <strong>
            seamless connection between the physical Fitness Court and the digital app experience
          </strong>
          . Users needed quick access to workouts, guidance, and progress tracking without
          disrupting their outdoor workout flow.
        </p>
        <ol className="fitness-detail-challenges-list">
          {FITNESS_CHALLENGES.map((challenge, index) => (
            <li key={challenge}>
              <strong>{String(index + 1).padStart(2, '0')}.</strong>
              <p>{challenge}</p>
              {index < FITNESS_CHALLENGES.length - 1 && (
                <img
                  src="/assets/case-study-fintech/detail-challenges-divider.svg"
                  alt=""
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      <section
        className="fitness-detail-design-question"
        aria-labelledby="fitness-detail-design-question-title"
      >
        <h2 id="fitness-detail-design-question-title">Design Challenge</h2>
        <p>
          How might we redesign the Fitness Court app so users can easily discover courts, start
          workouts, track progress, and stay motivated through a personalised outdoor fitness
          experience?
        </p>
      </section>

      <section
        className="fitness-detail-process"
        aria-labelledby="fitness-detail-process-title"
      >
        <h2 id="fitness-detail-process-title">Design Process</h2>
        <p className="fitness-detail-process-summary">
          A focused mobile redesign approach across strategy, research, and design.
        </p>
        <div className="fitness-detail-process-list">
          {FITNESS_DESIGN_PROCESS.map((step, index) => (
            <article
              className={`fitness-detail-process-card fitness-detail-process-card-${index + 1}`}
              key={step.title}
            >
              <header>
                <h3>{step.title}</h3>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </header>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="fitness-detail-strategic-shift"
        aria-labelledby="fitness-detail-strategic-shift-title"
      >
        <h2 id="fitness-detail-strategic-shift-title">Strategic Shift</h2>
        <p>
          From a static workout app to a location-aware outdoor fitness companion that motivates
          users before, during, and after their Fitness Court session.
        </p>
      </section>

      <section
        className="fitness-detail-interventions"
        aria-labelledby="fitness-detail-interventions-title"
      >
        <h2 id="fitness-detail-interventions-title">
          Key UX
          <br />
          Interventions
        </h2>

        <div className="fitness-detail-interventions-list">
          {FITNESS_INTERVENTIONS.map((intervention) => (
            <article
              className={`fitness-detail-intervention-card fitness-detail-intervention-${intervention.slug}`}
              key={intervention.slug}
            >
              <h3>{intervention.title}</h3>

              <div className="fitness-detail-intervention-summary">
                <div className="fitness-detail-intervention-note fitness-detail-intervention-problem">
                  <strong>Problem</strong>
                  <p>{intervention.problem}</p>
                </div>
                <div className="fitness-detail-intervention-note fitness-detail-intervention-solution">
                  <strong>Solution</strong>
                  <p>{intervention.solution}</p>
                </div>
                <div className="fitness-detail-intervention-note fitness-detail-intervention-result">
                  <strong>Result</strong>
                  <p>{intervention.result}</p>
                </div>
              </div>

              <img
                className="fitness-detail-intervention-visual"
                src={`${FITNESS_INTERVENTION_ASSETS}/${intervention.image}`}
                alt={intervention.imageAlt}
              />
            </article>
          ))}
        </div>
      </section>

      <section
        className="fitness-detail-outcomes"
        aria-labelledby="fitness-detail-outcomes-title"
      >
        <h2 id="fitness-detail-outcomes-title">Projected design outcomes</h2>
        <div className="fitness-detail-outcomes-grid">
          {FITNESS_PROJECTED_OUTCOMES.map((outcome) => (
            <article className="fitness-detail-outcome-card" key={outcome.label}>
              <strong>{outcome.value}</strong>
              <p>{outcome.label}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
