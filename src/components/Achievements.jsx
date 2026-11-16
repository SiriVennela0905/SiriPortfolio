import Section, { Reveal } from './Section.jsx'
import { Icon } from './Icons.jsx'
import { achievements, certifications } from '../data/content.js'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 — Achievements" title="Recognition & certifications">
      {achievements.map((a) => (
        <Reveal key={a.event} className="trophy-card">
          <div className="trophy" aria-hidden="true">
            <span className="rays" />
            <Icon name="trophy" size={64} />
          </div>
          <div>
            <span className="eyebrow-sm">🏆 Winner</span>
            <h3><span className="grad">{a.title}</span> — {a.event}</h3>
            <p>{a.note}</p>
          </div>
        </Reveal>
      ))}
      <h3 className="sub-title">Certifications</h3>
      <div className="certs">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="glass card cert">
            <span className="icon-box"><Icon name="badge" /></span>
            <p>{c.title}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
