import Section, { Reveal } from './Section.jsx'
import { Icon } from './Icons.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Technical toolkit">
      <div className="skills-grid">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 90} className={`glass card skill-card ${g.featured ? 'featured' : ''}`}>
            <div className="skill-head">
              <span className="icon-box"><Icon name={g.icon} /></span>
              <h3>{g.title}</h3>
            </div>
            <ul className="tags">
              {g.items.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
