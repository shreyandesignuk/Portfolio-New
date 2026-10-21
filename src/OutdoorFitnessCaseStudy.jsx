import SiteFooter from './components/SiteFooter';

const FITNESS_ASSETS = '/assets/case-study-nfc';

const outcomes = [
  ['50%', 'Faster workout start'],
  ['40%', 'Improved discoverability'],
  ['35%', 'Increase in engagement'],
  ['45%', 'Reduction in manual setup'],
];

export default function OutdoorFitnessCaseStudy({ onDetail }) {
  return (
    <main className="case-page fitness-case-page">
      <section className="fitness-case-hero">
        <div className="fitness-case-hero-background" />
        <h1>Redesigning a fitness app for outdoor workout engagement</h1>

        <div className="fitness-case-hero-art" aria-label="Fitness Court mobile app experience">
          <img
            className="fitness-case-hero-image"
            src={`${FITNESS_ASSETS}/hero-banner.png`}
            alt="Athlete exercising beside the Fitness Court app shown on an iPhone"
          />
        </div>

        <div className="fitness-case-meta" aria-label="Project details">
          <div className="fitness-case-meta-item fitness-case-meta-role">
            <strong>Role</strong>
            <span>Experience Designer</span>
          </div>
          <i aria-hidden="true" />
          <div className="fitness-case-meta-item fitness-case-meta-scope">
            <strong>Scope</strong>
            <span>Mobile App UX · Fitness Engagement ·<br />Workout Discovery · Gamified Experience</span>
          </div>
          <i aria-hidden="true" />
          <div className="fitness-case-meta-item fitness-case-meta-scale">
            <strong>Scale</strong>
            <span>5.7M registered users · $126M raised ·<br />143M outdoor minutes · 1.92B calories burned</span>
          </div>
        </div>
      </section>

      <section className="fitness-case-challenge" aria-labelledby="fitness-challenge-title">
        <div className="fitness-section-rule" aria-hidden="true" />
        <p className="fitness-section-eyebrow">The challenge</p>
        <h2 id="fitness-challenge-title">A strong movement, but disconnect experience</h2>
        <p className="fitness-challenge-summary">
          The Fitness Court App was connected to a powerful real-world fitness movement, but the
          digital experience felt outdated, lacked motivation and personalization, and made it
          difficult for users to quickly access workouts and track their progress
        </p>

        <div className="fitness-challenge-points">
          <div className="fitness-challenge-point">
            <strong>Poor workout access</strong>
            <span>Users reported difficulty opening the content they wanted to use during a workout</span>
          </div>
          <i aria-hidden="true" />
          <div className="fitness-challenge-point">
            <strong>Manual workout setup</strong>
            <span>Users found it frustrating to open the app and manually set up workouts</span>
          </div>
          <i aria-hidden="true" />
          <div className="fitness-challenge-point">
            <strong>Weak progress tracking</strong>
            <span>Users wanted a straightforward way to input stats and monitor their fitness journey</span>
          </div>
        </div>
      </section>

      <section className="fitness-case-solution" aria-labelledby="fitness-solution-title">
        <div className="fitness-section-rule" aria-hidden="true" />
        <p className="fitness-section-eyebrow">The solution</p>
        <h2 id="fitness-solution-title">A more engaging, location-aware fitness experience</h2>
        <p className="fitness-solution-summary">
          Redesign key areas of the app to help users find nearby courts, start workouts faster,
          follow trainer-led videos, and track their progress. This created a more personalized and
          motivating outdoor fitness experience
        </p>

        <div className="fitness-solution-grid">
          <article className="fitness-solution-item">
            <div className="fitness-solution-screen">
              <img src={`${FITNESS_ASSETS}/solution-court.png`} alt="Fitness Court app home and check-in experience" />
            </div>
            <h3>Find and check in at nearby courts</h3>
            <p>A location-aware experience to easily discover nearby Fitness Courts and check in with one tap</p>
          </article>
          <article className="fitness-solution-item">
            <div className="fitness-solution-screen">
              <img src={`${FITNESS_ASSETS}/solution-workouts.png`} alt="Trainer-led Fitness Court workouts" />
            </div>
            <h3>Guided, trainer-led workouts</h3>
            <p>Easy access to guided workouts based on the 7 Fitness Court zones, with trainer videos and fitness level options</p>
          </article>
          <article className="fitness-solution-item">
            <div className="fitness-solution-screen">
              <img src={`${FITNESS_ASSETS}/solution-progress.png`} alt="Fitness Court progress and health statistics" />
            </div>
            <h3>Track progress and stay motivated</h3>
            <p>A cleaner way to monitor progress with stats, achievements, and Apple Health integration</p>
          </article>
        </div>
      </section>

      <section className="fitness-case-impact" aria-labelledby="fitness-impact-title">
        <div className="fitness-section-rule" aria-hidden="true" />
        <p className="fitness-section-eyebrow">Impact</p>
        <h2 id="fitness-impact-title">Projected design outcomes</h2>
        <div className="fitness-impact-grid">
          {outcomes.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="fitness-case-process-cta" aria-label="Explore the complete design process">
        <a href="/work/outdoor-fitness-app/in-detail" onClick={onDetail}>
          Explore complete design process
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
