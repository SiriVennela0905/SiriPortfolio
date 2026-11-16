import { useEffect, useRef, useState } from 'react'
import Section, { Reveal } from './Section.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import { Icon, GithubIcon } from './Icons.jsx'
import { projects } from '../data/content.js'

function Links({ p }) {
  if (!p.github && !p.demo) return null
  return (
    <div className="cta-row">
      {p.github && <a className="btn ghost sm" href={p.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /> GitHub</a>}
      {p.demo && <a className="btn primary sm" href={p.demo} target="_blank" rel="noopener noreferrer"><Icon name="external" size={16} /> Live Demo</a>}
    </div>
  )
}

function Modal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const f = ref.current.querySelectorAll('button, a[href]')
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    ref.current.querySelector('button')?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={ref}>
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><Icon name="close" /></button>
        <ProjectVisual kind={p.kind} />
        <div className="modal-body">
          <span className="eyebrow-sm">{p.category}</span>
          <h3 id="modal-title">{p.title}</h3>
          <p className="sub">{p.subtitle}</p>
          <p>{p.summary}</p>
          <h4>Technical highlights</h4>
          <ul className="check">{p.highlights.map((h) => <li key={h}><Icon name="check" size={16} />{h}</li>)}</ul>
          <h4>Key features</h4>
          <ul className="tags">{p.features.map((f) => <li key={f} className="tag">{f}</li>)}</ul>
          {p.tech.length > 0 && (<><h4>Technologies &amp; concepts</h4><ul className="tags">{p.tech.map((t) => <li key={t} className="tag accent">{t}</li>)}</ul></>)}
          <Links p={p} />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" eyebrow="03 — Featured Projects" title="Work I'm proud of">
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.id} className={`glass project ${i % 2 ? 'flip' : ''}`}>
            <ProjectVisual kind={p.kind} />
            <div className="project-body">
              <div className="project-meta"><span className="num">{p.index}</span><span className="eyebrow-sm">{p.category}</span></div>
              <h3>{p.title}</h3>
              <p className="sub">{p.subtitle}</p>
              <p>{p.summary}</p>
              <ul className="tags">
                {p.features.slice(0, 4).map((f) => <li key={f} className="tag">{f}</li>)}
                {p.features.length > 4 && <li className="tag more">+{p.features.length - 4} more</li>}
              </ul>
              {p.tech.length > 0 && <ul className="tags">{p.tech.map((t) => <li key={t} className="tag accent">{t}</li>)}</ul>}
              <div className="cta-row">
                <button className="btn primary sm" onClick={() => setOpen(p)}>View Details <Icon name="arrow" size={16} /></button>
                {p.github && <a className="btn ghost sm" href={p.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /> GitHub</a>}
                {p.demo && <a className="btn ghost sm" href={p.demo} target="_blank" rel="noopener noreferrer"><Icon name="external" size={16} /> Live Demo</a>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {open && <Modal p={open} onClose={() => setOpen(null)} />}
    </Section>
  )
}
