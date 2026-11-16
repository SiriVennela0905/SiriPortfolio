import { useEffect, useRef, useState } from 'react'

/** Track which section is currently in view for nav highlighting. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = ids[ids.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

/** Adds the `in` class when the element scrolls into view. */
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/** Typewriter that cycles through phrases. */
export function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(words[0]); return }
    let w = 0, c = 0, del = false, t
    const tick = () => {
      const word = words[w]
      c += del ? -1 : 1
      setText(word.slice(0, c))
      let d = del ? speed / 2 : speed
      if (!del && c === word.length) { del = true; d = pause }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 350 }
      t = setTimeout(tick, d)
    }
    t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [words, speed, pause])
  return text
}
