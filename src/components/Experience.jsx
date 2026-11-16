import Section, { Reveal } from './Section.jsx'
import { Icon } from './Icons.jsx'
import { experience as x } from '../data/content.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Experience" title="Professional journey">
      <div className="timeline">
        <Reveal className="tl-item">
          <span className="tl-dot"><Icon name="briefcase" size={18} /></span>
          <div className="glass card tl-card">
            <div className="tl-head">
              <div>
                <h3>{x.role}</h3>
                <p className="org">{x.org}</p>
              </div>
              <span className="pill">Internship</span>
            </div>
            <ul className="check">
              {x.points.map((p) => <li key={p}><Icon name="check" size={16} />{p}</li>)}
            </ul>
            <ul className="tags">
              {x.tech.map((t) => <li key={t} className="tag accent">{t}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
