import Section, { Reveal } from './Section.jsx'
import { Icon } from './Icons.jsx'
import { aboutPoints, stats } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Engineering intelligence, one build at a time">
      <div className="about-grid">
        <Reveal className="about-text">
          <p className="big">
            I&apos;m a Computer Science Engineering graduate from <strong>GRIET</strong> with a CGPA of <strong>8.68</strong>.
          </p>
          <p>
            My foundation spans Python, Java, Data Structures, Object-Oriented Programming, SQL and software development. Alongside it, I&apos;ve explored Generative AI, Large Language Models and Natural Language Processing through my technical learning and projects.
          </p>
          <p>
            I&apos;m interested in building intelligent applications that combine AI capabilities with practical software engineering.
          </p>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <b className="grad">{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="about-cards">
          {aboutPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="glass card about-card">
              <span className="icon-box"><Icon name={p.icon} /></span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
