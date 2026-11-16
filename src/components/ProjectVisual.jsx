// Abstract, resume-neutral illustrations (no fake UI metrics or numbers).

function Health() {
  return (
    <svg viewBox="0 0 480 300" className="pv" aria-hidden="true">
      <defs>
        <linearGradient id="hg" x1="0" x2="1"><stop offset="0" stopColor="#f472b6" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient>
        <radialGradient id="hb" cx=".5" cy=".5"><stop offset="0" stopColor="#f472b6" stopOpacity=".35" /><stop offset="1" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="240" cy="150" r="130" fill="url(#hb)" />
      {/* heartbeat line */}
      <path className="pulse" d="M20 150h110l22-58 34 120 28-90 18 28h60l20-40 22 40h126" fill="none" stroke="url(#hg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* SHAP-like bars */}
      {[['Feature A', 120, 1], ['Feature B', 84, 2], ['Feature C', 52, 3], ['Feature D', 30, 4]].map(([l, w, i]) => (
        <g key={l} transform={`translate(30 ${190 + i * 22 - 22})`}>
          <rect width="150" height="9" rx="4.5" fill="#fff" opacity=".06" />
          <rect className="bar" style={{ animationDelay: `${i * .15}s`, '--w': w }} height="9" rx="4.5" fill="url(#hg)" width={w} />
        </g>
      ))}
      {/* Bayesian network */}
      {[[360, 190], [420, 215], [340, 250], [400, 265]].map(([x, y], i, a) => (
        <g key={i}>
          {i > 0 && <line x1={a[0][0]} y1={a[0][1]} x2={x} y2={y} stroke="#a78bfa" strokeOpacity=".6" />}
          <circle cx={x} cy={y} r="8" fill="#0b1026" stroke="#f472b6" strokeWidth="2" />
        </g>
      ))}
      <line x1="420" y1="215" x2="400" y2="265" stroke="#a78bfa" strokeOpacity=".6" />
      <line x1="340" y1="250" x2="400" y2="265" stroke="#a78bfa" strokeOpacity=".6" />
    </svg>
  )
}

function Cloud() {
  return (
    <svg viewBox="0 0 480 300" className="pv" aria-hidden="true">
      <defs>
        <linearGradient id="cg" x1="0" x2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient>
        <radialGradient id="cb" cx=".5" cy=".4"><stop offset="0" stopColor="#22d3ee" stopOpacity=".3" /><stop offset="1" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="240" cy="110" r="120" fill="url(#cb)" />
      <path className="float" d="M170 105a38 38 0 0 1 72-14 32 32 0 0 1 58 14 28 28 0 0 1-6 56H176a28 28 0 0 1-6-56z" fill="none" stroke="url(#cg)" strokeWidth="2.5" />
      {/* sync lines */}
      {[130, 240, 350].map((x, i) => (
        <path key={x} className="sync" style={{ animationDelay: `${i * .4}s` }} d={`M${x} 205 V170`} stroke="url(#cg)" strokeWidth="2" strokeDasharray="4 5" />
      ))}
      {/* documents / users */}
      {[[60, '#22d3ee', 'User 1'], [170, '#8b5cf6', 'User 2'], [280, '#f472b6', 'User 3']].map(([x, c, r], i) => (
        <g key={r} transform={`translate(${x} 205)`}>
          <rect width="120" height="80" rx="10" fill="#0b1026" stroke={c} strokeOpacity=".7" />
          <rect x="12" y="14" width="70" height="5" rx="2.5" fill="#fff" opacity=".25" />
          <rect x="12" y="28" width="94" height="5" rx="2.5" fill="#fff" opacity=".12" />
          <rect x="12" y="42" width="58" height="5" rx="2.5" fill="#fff" opacity=".12" />
          <rect className="caret-b" style={{ animationDelay: `${i * .3}s` }} x={72 + i * 8} y="40" width="2" height="9" fill={c} />
          <text x="12" y="68" fontSize="10" fill={c} fontFamily="Inter, sans-serif">{r}</text>
        </g>
      ))}
    </svg>
  )
}

export default function ProjectVisual({ kind }) {
  return <div className={`pv-wrap ${kind}`}>{kind === 'health' ? <Health /> : <Cloud />}</div>
}
