import { useReveal } from './hooks.js'

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow-sm">{eyebrow}</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
