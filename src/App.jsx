import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import { useActiveSection } from './components/hooks.js'
import { nav } from './data/content.js'

const ids = nav.map(([id]) => id)

export default function App() {
  const active = useActiveSection(ids)
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
