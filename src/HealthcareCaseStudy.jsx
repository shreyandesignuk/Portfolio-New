import SiteFooter from './components/SiteFooter';

const HEALTHCARE_ASSETS = '/assets/case-study-vidal';

export default function HealthcareCaseStudy({ onDetail }) {
  return (
    <main className="case-page healthcare-case-page">
      <section className="healthcare-case-hero">
        <div className="healthcare-case-hero-background" />

        <h1>Transforming a healthcare platform, making preventive care more accessible</h1>

        <div className="healthcare-case-collage-area">
          <img
            src={`${HEALTHCARE_ASSETS}/hero-figma.png`}
            alt="Vidal Health mobile healthcare experience"
          />
        </div>

        <div className="healthcare-case-meta" aria-label="Project details">
          <div className="healthcare-case-meta-item healthcare-case-meta-role">
            <strong>Role</strong>
            <span>Experience Designer</span>
          </div>
          <i aria-hidden="true" />
          <div className="healthcare-case-meta-item healthcare-case-meta-scope">
            <strong>Scope</strong>
            <span>Mobile App · Healthcare Experience · Wellness Services</span>
          </div>
          <i aria-hidden="true" />
          <div className="healthcare-case-meta-item healthcare-case-meta-scale">
            <strong>Scale</strong>
            <span>100M+ lives served</span>
          </div>
        </div>
      </section>

      <section className="healthcare-case-challenge" aria-labelledby="healthcare-challenge-title">
        <img
          className="healthcare-challenge-top-rule"
          src={`${HEALTHCARE_ASSETS}/challenge-top-rule.svg`}
          alt=""
        />
        <p className="healthcare-challenge-eyebrow">The challenge</p>
        <h2 id="healthcare-challenge-title">A fragmented healthcare experience</h2>
        <p className="healthcare-challenge-summary">
          The platform offered a wide range of services, but users struggled to understand
          available benefits, navigate multiple service categories, and confidently complete
          healthcare-related tasks
        </p>

        <div className="healthcare-challenge-points">
          <div className="healthcare-challenge-point healthcare-challenge-discovery">
            <strong>Complex service discovery</strong>
            <span>Users struggle to quickly find relevant healthcare services</span>
          </div>
          <img src={`${HEALTHCARE_ASSETS}/challenge-divider.svg`} alt="" />
          <div className="healthcare-challenge-point healthcare-challenge-journeys">
            <strong>Fragmented user journeys</strong>
            <span>Key healthcare tasks were spread across disconnected experiences</span>
          </div>
          <img src={`${HEALTHCARE_ASSETS}/challenge-divider.svg`} alt="" />
          <div className="healthcare-challenge-point healthcare-challenge-guidance">
            <strong>Lack of visual guidance</strong>
            <span>Important actions and next steps were not clearly highlighted</span>
          </div>
        </div>
      </section>

      <section className="healthcare-case-solution" aria-labelledby="healthcare-solution-title">
        <img
          className="healthcare-solution-top-rule"
          src={`${HEALTHCARE_ASSETS}/challenge-top-rule.svg`}
          alt=""
        />
        <p className="healthcare-solution-eyebrow">The solution</p>
        <h2 id="healthcare-solution-title">A guided healthcare experience</h2>
        <p className="healthcare-solution-summary">
          I redesigned key areas of the platform to make it easier for users to access their
          health card, raise cashless requests, and book health checkups, creating a more intuitive
          and seamless healthcare experience.
        </p>

        <div className="healthcare-solution-screen healthcare-solution-health-card">
          <div>
            <img
              src={`${HEALTHCARE_ASSETS}/vidal-solution-health-card.png`}
              alt="Vidal Health mobile app home screen with health card access"
            />
          </div>
        </div>
        <div className="healthcare-solution-caption healthcare-solution-caption-one">
          <strong>Health card access</strong>
          <span>
            Made e-card access more visible and predictable with key member details, validity, and
            quick action in one place
          </span>
        </div>

        <div className="healthcare-solution-screen healthcare-solution-cashless">
          <div>
            <img
              src={`${HEALTHCARE_ASSETS}/vidal-solution-cashless.png`}
              alt="Vidal Health cashless request screen"
            />
          </div>
        </div>
        <div className="healthcare-solution-caption healthcare-solution-caption-two">
          <strong>Health card access</strong>
          <span>
            Made e-card access more visible and predictable with key member details, validity, and
            quick action in one place
          </span>
        </div>

        <div className="healthcare-solution-screen healthcare-solution-checkups">
          <div>
            <img
              src={`${HEALTHCARE_ASSETS}/vidal-solution-health-checks.png`}
              alt="Vidal Health checkup booking screen"
            />
          </div>
        </div>
        <div className="healthcare-solution-caption healthcare-solution-caption-three">
          <strong>Health checks booking</strong>
          <span>
            Created a four-step journey to book health checkups: Select package, choose hospital,
            add patients and confirm booking
          </span>
        </div>
      </section>

      <section className="healthcare-case-impact" aria-labelledby="healthcare-impact-title">
        <img
          className="healthcare-impact-top-rule"
          src={`${HEALTHCARE_ASSETS}/challenge-top-rule.svg`}
          alt=""
        />
        <p className="healthcare-impact-eyebrow">Impact</p>
        <h2 id="healthcare-impact-title">Making healthcare journeys simpler</h2>

        <div className="healthcare-impact-card healthcare-impact-cashless">
          <strong>45%</strong>
          <span>Fewer steps in cashless initimation</span>
        </div>
        <div className="healthcare-impact-card healthcare-impact-claims">
          <strong>32%</strong>
          <span>Faster claim submission</span>
        </div>
        <div className="healthcare-impact-card healthcare-impact-discovery">
          <strong>60%</strong>
          <span>Improved service discoverability</span>
        </div>
      </section>

      <section className="healthcare-case-process-cta" aria-label="Explore the complete design process">
        <a
          href="/work/healthcare-platform/in-detail"
          onClick={onDetail}
        >
          Explore complete design process
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
