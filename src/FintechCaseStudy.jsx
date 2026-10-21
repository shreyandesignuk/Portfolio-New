import SiteFooter from './components/SiteFooter';

const FINTECH_ASSETS = '/assets/case-study-fintech';

export default function FintechCaseStudy({ onDetail }) {
  return (
    <main className="case-page fintech-case-page">
      <section className="fintech-case-hero">
        <div className="fintech-case-hero-background" />
        <h1>
          <span>Redesigning a FinTech Platform</span>
          <span>Processing 2.5M Documents Daily</span>
        </h1>

        <div className="fintech-case-dashboard-area">
          <div className="fintech-case-dashboard-frame">
            <img
              src={`${FINTECH_ASSETS}/overview-dashboard.png`}
              alt="EcoBillz financial reconciliation dashboard"
            />
          </div>
        </div>

        <div className="fintech-case-meta" aria-label="Project details">
          <div className="fintech-case-meta-item fintech-case-meta-role">
            <strong>Role</strong>
            <span>Experience Designer</span>
          </div>
          <img
            className="fintech-case-meta-divider fintech-case-meta-divider-one"
            src={`${FINTECH_ASSETS}/project-meta-divider.svg`}
            alt=""
          />
          <div className="fintech-case-meta-item fintech-case-meta-scope">
            <strong>Scope</strong>
            <span>Product UX · Workflow Redesign· Dashboard UI</span>
          </div>
          <img
            className="fintech-case-meta-divider fintech-case-meta-divider-two"
            src={`${FINTECH_ASSETS}/project-meta-divider.svg`}
            alt=""
          />
          <div className="fintech-case-meta-item fintech-case-meta-scale">
            <strong>Scale</strong>
            <span>2.5M documents/day · 350+ customers</span>
          </div>
        </div>
      </section>

      <section className="fintech-case-challenge" aria-labelledby="fintech-challenge-title">
        <img
          className="fintech-challenge-top-rule"
          src={`${FINTECH_ASSETS}/challenge-top-rule.svg`}
          alt=""
        />
        <p className="fintech-challenge-eyebrow">The challenge</p>
        <h2 id="fintech-challenge-title">A powerful platform with a usability gap</h2>
        <p className="fintech-challenge-summary">
          While Ecobillz was capable of processing large volumes of financial documents,
          non-technical finance teams found it difficult to understand the data, navigate the
          platform, and take meaningful action due to complex terminology, dense tables, and
          unclear states
        </p>

        <div className="fintech-challenge-points">
          <div className="fintech-challenge-point fintech-challenge-terminology">
            <strong>Technical terminology</strong>
            <span>Users struggle to understand what actions or data meant</span>
          </div>
          <img
            className="fintech-challenge-divider fintech-challenge-divider-one"
            src={`${FINTECH_ASSETS}/challenge-divider.svg`}
            alt=""
          />
          <div className="fintech-challenge-point fintech-challenge-overload">
            <strong>Information overload</strong>
            <span>Dense tables made it hard to spot priority issues</span>
          </div>
          <img
            className="fintech-challenge-divider fintech-challenge-divider-two"
            src={`${FINTECH_ASSETS}/challenge-divider.svg`}
            alt=""
          />
          <div className="fintech-challenge-point fintech-challenge-errors">
            <strong>Poor error resolution</strong>
            <span>Failed uploads and mismatches did not provide clear next steps</span>
          </div>
          <img
            className="fintech-challenge-divider fintech-challenge-divider-three"
            src={`${FINTECH_ASSETS}/challenge-divider.svg`}
            alt=""
          />
          <div className="fintech-challenge-point fintech-challenge-navigation">
            <strong>Weak navigation</strong>
            <span>Users had difficulty finding specific tools and workflows</span>
          </div>
        </div>
      </section>

      <section className="fintech-case-solution" aria-labelledby="fintech-solution-title">
        <img
          className="fintech-solution-top-rule"
          src={`${FINTECH_ASSETS}/solution-top-rule.svg`}
          alt=""
        />
        <p className="fintech-solution-eyebrow">The solution</p>
        <h2 id="fintech-solution-title">A clearer and more intuitive experience</h2>
        <p className="fintech-solution-summary">
          I redesigned key areas of the platform to present financial data in a clearer, more
          visual, and user-friendly way, helping users quickly understand their reports, identify
          mismatches, and take action with confidence
        </p>

        <div className="fintech-solution-image fintech-reports-overview-image">
          <img
            src={`${FINTECH_ASSETS}/reports-overview.png`}
            alt="EcoBillz reports overview"
          />
        </div>
        <div className="fintech-solution-caption fintech-reports-overview-caption">
          <strong>Reports Overview</strong>
          <span>
            A clearer calendar-driven view to manage and track all reports, with visible status
            filters and quick access to key actions
          </span>
        </div>

        <div className="fintech-solution-image fintech-report-detail-image">
          <img src={`${FINTECH_ASSETS}/report-detail.png`} alt="EcoBillz report detail" />
        </div>
        <div className="fintech-solution-caption fintech-report-detail-caption">
          <strong>Report Detail</strong>
          <span>
            Clearer information hierarchy, visual status indicators, and contextual actions to
            resolve mismatches faster
          </span>
        </div>

        <div className="fintech-solution-image fintech-reconciliation-image">
          <div className="fintech-reconciliation-image-crop">
            <img
              src={`${FINTECH_ASSETS}/reconciliation-dashboard.png`}
              alt="EcoBillz reconciliation dashboard"
            />
          </div>
        </div>
        <div className="fintech-solution-caption fintech-reconciliation-caption">
          <strong>Reconciliation Dashboard</strong>
          <span>
            A unified view to compare data across sources, track reconciliation status, and
            identify discrepancies at a glance
          </span>
        </div>
      </section>

      <section className="fintech-case-impact" aria-labelledby="fintech-impact-title">
        <img
          className="fintech-impact-top-rule"
          src={`${FINTECH_ASSETS}/impact-top-rule.svg`}
          alt=""
        />
        <p className="fintech-impact-eyebrow">Impact</p>
        <h2 id="fintech-impact-title">A more informed and efficient finance team</h2>

        <div className="fintech-impact-card fintech-impact-reconciliation">
          <h3>Faster reconciliation</h3>
          <strong>20+ mins → &lt; 6 mins</strong>
          <span>for daily checks</span>
        </div>
        <div className="fintech-impact-card fintech-impact-support">
          <h3>Reduce support dependency</h3>
          <strong>15%</strong>
          <span>fewer routine support queries</span>
        </div>
        <div className="fintech-impact-card fintech-impact-usability">
          <h3>Improved usability</h3>
          <strong>4.5/5</strong>
          <span>user satisfaction in testing</span>
        </div>
      </section>

      <section className="fintech-case-process-cta" aria-label="Explore the complete design process">
        <a href="/work/fintech-platform/in-detail" onClick={onDetail}>
          Explore complete design process
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
