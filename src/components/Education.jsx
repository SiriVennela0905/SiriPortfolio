import Section, { Reveal } from './Section.jsx'
import { Icon } from './Icons.jsx'
import { education } from '../data/content.js'

export default function Education() {
  const [main, ...rest] = education
  return (
    <Section id="education" eyebrow="05 — Education" title="Academic background">
      <div className="edu-grid">
        <Reveal className="glass edu-main">
          <span className="icon-box lg"><Icon name="cap" size={28} /></span>
          <span className="pill">{main.years}</span>
          <h3>{main.level}</h3>
          <p className="org">{main.school}</p>
          <div className="score"><b className="grad">{main.score}</b><span>{main.scoreLabel}</span></div>
        </Reveal>
        <div className="edu-side">
          {rest.map((e, i) => (
            <Reveal key={e.level} delay={(i + 1) * 100} className="glass card edu-card">
              <div>
                <span className="pill">{e.years}</span>
                <h3>{e.level}</h3>
                <p className="org">{e.school}</p>
              </div>
              <div className="score sm"><b>{e.score}</b><span>{e.scoreLabel}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
