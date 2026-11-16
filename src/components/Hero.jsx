import { Icon, GithubIcon, LinkedinIcon } from './Icons.jsx'
import { profile } from '../data/content.js'
import { useTypewriter } from './hooks.js'

function PhotoVisual() {
  return (
    <div className="visual">
      <div className="ring r1" aria-hidden="true" />
      <div className="ring r2" aria-hidden="true" />
      <div className="core-glow" aria-hidden="true" />
      <div className="photo-frame">
        <img src="/images/Image.jpeg" alt="Portrait of Sirivennela Akula" width="1465" height="1440" fetchpriority="high" decoding="async" />
      </div>
      <span className="chip c1" aria-hidden="true">LLMs</span>
      <span className="chip c2" aria-hidden="true">NLP</span>
      <span className="chip c3" aria-hidden="true">GenAI</span>
      <span className="chip c4" aria-hidden="true">SHAP</span>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.rotating)
  return (
    <section id="home" className="hero">
      <div className="orb o1" /><div className="orb o2" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i className="dot" /> Open to opportunities · Hyderabad, India</span>
          <h1>
            Hi, I&apos;m <span className="grad">Sirivennela</span>
            <br />Akula
          </h1>
          <p className="typed" aria-label={profile.headline}>
            <span aria-hidden="true">{typed}</span><span className="caret" aria-hidden="true" />
          </p>
          <p className="lead">{profile.intro}</p>
          <div className="cta-row">
            <a className="btn primary" href={profile.resume} download="Sirivennela_Akula_Resume.pdf">
              <Icon name="download" size={18} /> Download Resume
            </a>
            <a className="btn ghost" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Explore My Projects <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="socials">
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>}
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>}
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={22} /></a>
          </div>
        </div>
        <PhotoVisual />
      </div>
      <a className="scroll-hint" href="#about" aria-label="Scroll to About" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <span /></a>
    </section>
  )
}
