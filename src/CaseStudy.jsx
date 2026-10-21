import SiteFooter from './components/SiteFooter';

const CASE_ASSETS = '/assets/case-study';

export default function CaseStudy({ onDetail }) {
  return (
    <main className="case-page">
      <section className="case-hero">
        <div className="case-hero-red" />
        <h1>Redesigned a Fortune 500 biopharma website into a unified, accessible digital experience</h1>
        <div className="case-hero-image-area">
          <div className="case-hero-image-frame">
            <img src={`${CASE_ASSETS}/hero-updated.png`} alt="Gilead website redesign" />
          </div>
        </div>
        <div className="case-meta">
          <div><strong>Role</strong><span>Lead UX Designer</span></div>
          <i />
          <div><strong>Scope</strong><span>IA overhaul · Design system · Redesign</span></div>
          <i />
          <div><strong>Scale</strong><span>187+ pages · 120+ stakeholders</span></div>
        </div>
      </section>

      <section className="case-challenge case-fixed-section">
        <p className="case-eyebrow">The challenge</p>
        <h2>A complex, content<br />heavy ecosystem</h2>
        <p className="case-summary">Gilead&apos;s website had grown into a large content-heavy ecosystem with inconsistent patterns, deep navigation, and duplicate components, making it hard for users to find high-confidence information quickly.</p>
        <div className="case-challenge-list">
          <div><strong>Navigation complexity</strong><span>Multi-level menus made key content hard to find</span></div>
          <i />
          <div><strong>Cognitive overload</strong><span>Content-heavy pages lacked clear structure</span></div>
          <i />
          <div><strong>Brand inconsistency</strong><span>Fragmented UI patterns and duplicated components</span></div>
        </div>
      </section>

      <section className="case-solution case-fixed-section">
        <p className="case-eyebrow">The solution</p>
        <h2>A unified digital<br />experience</h2>
        <p className="case-summary">I redesigned key areas of the website to make information easier to find, clearer to understand, and scalable across teams</p>

        <div className="solution-image header-navigation-image">
          <img src={`${CASE_ASSETS}/header-navigation.png`} alt="Header navigation redesign" />
        </div>
        <div className="solution-caption header-caption">
          <strong>Header navigation</strong>
          <span>Structured mega menu with clearer pathways and simplified IA</span>
        </div>

        <div className="solution-image search-image">
          <img src={`${CASE_ASSETS}/search-redesign.png`} alt="Search redesign" />
        </div>
        <div className="solution-caption search-caption">
          <strong>Search redesign</strong>
          <span>Predictive search, better filtering, and a revised taxonomy</span>
        </div>

        <div className="solution-image pipeline-image">
          <img src={`${CASE_ASSETS}/pipeline.png`} alt="Pipeline experience" />
        </div>
        <div className="solution-caption pipeline-caption">
          <strong>Pipeline experience</strong>
          <span>Clearer data presentation with contextual phase explanations</span>
        </div>
      </section>

      <section className="case-impact case-fixed-section">
        <p className="case-eyebrow">Impact</p>
        <h2>Driving measurable<br />changes</h2>
        <div className="impact-cards">
          <article className="impact-card compact"><b>33%</b><p>Reduction in average navigation depth</p></article>
          <article className="impact-card medium"><b>120+</b><p>Stakeholders aligned across functions</p></article>
          <article className="impact-card wide"><div><b>WCAG</b><span>2.1 AA</span></div><p>Accessibility compliance across the design system</p></article>
        </div>
      </section>

      <section className="case-detail-cta">
        <span>Explore the complete design process</span>
      </section>

      <SiteFooter />
    </main>
  );
}
