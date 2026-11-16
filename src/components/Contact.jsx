import Section, { Reveal } from './Section.jsx'
import { Icon, GithubIcon, LinkedinIcon } from './Icons.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  const tel = profile.phone.replace(/[^+\d]/g, '')
  return (
    <Section id="contact" eyebrow="07 — Contact" title="Let's build something intelligent">
      <Reveal className="glass contact">
        <p className="big">
          I&apos;m always open to conversations about AI/ML, software engineering and new opportunities. If you&apos;d like to collaborate or just say hello, my inbox is open.
        </p>
        <ul className="contact-list">
          <li><Icon name="pin" size={20} /><span>{profile.location}</span></li>
          <li><Icon name="mail" size={20} /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><Icon name="phone" size={20} /><a href={`tel:${tel}`}>{profile.phone}</a></li>
        </ul>
        <div className="cta-row center">
          <a className="btn primary" href={`mailto:${profile.email}?subject=Hello%20Sirivennela`}><Icon name="mail" size={18} /> Email Me</a>
          {profile.linkedin && <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} /> LinkedIn</a>}
          {profile.github && <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={18} /> GitHub</a>}
        </div>
      </Reveal>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Designed &amp; built with React.</p>
      </footer>
    </Section>
  )
}
