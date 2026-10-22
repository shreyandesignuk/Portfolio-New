import TestimonialMarquee from './components/TestimonialMarquee';
import MusicPlayer from './components/MusicPlayer';
import SiteFooter from './components/SiteFooter';

const musicTracks = [
  {
    title: 'Tu Mera',
    artist: 'Shreyan Akash Das x 145 Society · Aanushka Kashyap',
    videoId: '_65jiIp25NA',
    url: 'https://youtu.be/_65jiIp25NA',
    artwork: '/assets/about/music/tu-mera.jpg',
  },
  {
    title: 'Hahakaar',
    artist: 'Shreyan Akash Das x 145 Society ft. Nitul',
    videoId: 'Nr5PV4agBpY',
    url: 'https://youtu.be/Nr5PV4agBpY',
    artwork: '/assets/about/music/hahakaar.jpg',
  },
  {
    title: 'Nixaa',
    artist: 'Shreyan Akash Das x 145 Society',
    videoId: 'T_npqQD3aQQ',
    url: 'https://youtu.be/T_npqQD3aQQ',
    artwork: '/assets/about/music/nixaa.jpg',
  },
];

const testimonials = [
  {
    emphasis: 'Shreyan brought clarity and structure',
    body: ' to complex learning experiences, helping transform content into a more engaging and intuitive digital journey.',
    company: 'Adobe',
    attribution: 'Adobe, Principal Product Marketing Manager',
    logo: '/assets/about/testimonials/adobe.png',
    logoWidth: 29,
  },
  {
    emphasis: 'His cinematography brought Walmart’s corporate stories to life',
    body: ' through clean visuals, thoughtful framing, and a polished production approach.',
    company: 'Walmart',
    attribution: 'Walmart, Corporate communications lead',
    logo: '/assets/about/testimonials/walmart.png',
    logoWidth: 23,
  },
  {
    emphasis: 'He demonstrated strong attention to detail and empathy',
    body: ', helping shape healthcare experiences that were clear, accessible, and user-focused.',
    company: 'Gilead',
    attribution: 'Gilead, Technology Product Director',
    logo: '/assets/about/testimonials/gilead.png',
    logoWidth: 20,
  },
  {
    emphasis: 'He translated brand and customer needs',
    body: ' into seamless digital experiences across multiple restaurant journeys, improving consistency and ease of use.',
    company: 'Darden',
    attribution: 'Darden, Business Process Analyst',
    logo: '/assets/about/testimonials/darden.png',
    logoWidth: 27,
  },
  {
    emphasis: 'His work simplified insurance and healthcare interactions',
    body: ', making critical information easier for users to understand and act on.',
    company: 'Vidal Health',
    attribution: 'Vidal Health, Senior Software Engineer',
    logo: '/assets/about/testimonials/vidal-health.png',
    logoWidth: 26,
  },
  {
    emphasis: 'Shreyan made complex healthcare information more structured, usable, and meaningful',
    body: ' for end users through thoughtful design solutions.',
    company: 'AstraZeneca',
    attribution: 'AstraZeneca, UX Program Lead',
    logo: '/assets/about/testimonials/astrazeneca.png',
    logoWidth: 20,
  },
];

export default function AboutPage() {
  const experience = [
    {
      role: 'Senior Product Designer',
      company: 'NxtSol Energy & Infra',
      dates: 'Sep’25 - Present',
    },
    {
      role: 'Experience Designer & Cinematographer',
      company: 'Pepper Square Inc.',
      dates: 'June’24 - July’25',
    },
    {
      role: 'UX/UI Designer',
      company: 'Pepper Square Inc.',
      dates: 'June’22 - June’24',
    },
    {
      role: 'UX/UI Designer',
      company: 'Pravaig Dynamics',
      dates: 'September’21 - April’22',
    },
    {
      role: 'UX/UI Intern',
      company: 'Bblewrap',
      dates: 'June’21 - September’21',
    },
    {
      role: 'Freelance Designer',
      company: 'Self',
      dates: 'July’20 - March’22',
    },
  ];

  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <h1 id="about-title">About me</h1>

        <p className="about-bio-label">Bio</p>

        <div className="about-bio-copy">
          <p>
            Over the past <strong>6+ years</strong>, <strong>I’ve worked with global brands</strong>,
            helping transform complex challenges into intuitive, meaningful digital experiences
            through <strong>research, strategy, and design.</strong>
          </p>
          <p>
            With a background in <strong>Communication Design</strong> and{' '}
            <strong>User Experience Design</strong>, I combine{' '}
            <strong>systems thinking, human-centred design,</strong> and{' '}
            <strong>visual storytelling</strong> to create experiences that balance user needs
            with business goals.
          </p>
          <p>
            My creative interests in <strong>photography, cinematography,</strong> and{' '}
            <strong>music</strong> bring a multidisciplinary perspective to how I approach
            problems, explore ideas, and craft digital experiences.
          </p>
        </div>

        <div className="about-photo-wrap" aria-hidden="true">
          <div className="about-photo-card">
            <img src="/assets/about/shreyan-photo.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="about-experience" aria-labelledby="about-experience-title">
        <h2 id="about-experience-title">Experience</h2>

        <div className="about-experience-list">
          {experience.map(({ role, company, dates }) => (
            <div className="about-experience-row" key={`${role}-${company}`}>
              <p className="about-experience-position">
                <strong>{role}</strong> <span>({company})</span>
              </p>
              <p className="about-experience-dates">{dates}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-testimonials" aria-label="Client testimonials">
        <TestimonialMarquee testimonials={testimonials} />
      </section>

      <section className="about-music" aria-labelledby="about-music-title">
        <h2 id="about-music-title">Play my music</h2>
        <MusicPlayer tracks={musicTracks} />
      </section>

      <SiteFooter />
    </main>
  );
}
