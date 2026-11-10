# Visual Design Contract

`AGENTS.md` is the canonical statement of the blank-canvas rule — check
`app/routes/_index.tsx` and `app/global.css`, preserve any real UI/brand
already there, and only treat the canvas as blank when those files still show
the starter's placeholder. This file does not restate that rule; it records
**this app's** visual direction. The fields below are the source of truth for
that direction: once filled in, read and preserve them on every build; while
they are still empty, the first substantial UI pass fills them in.

## Non-negotiable: impress by default

When this app is still a blank canvas, every app generated from this template
must look **spectacular on first load**, even when the build prompt gives no
design direction. "Looks like a clean, intentional product" is the floor, not
the goal. When no direction is supplied, you still commit to one — do not
default to safe gray SaaS:

- Commit to one concrete visual world (see the `frontend-design` skill and its
  `references/visual-direction.md`). Do not ship the neutral placeholder theme.
- Choose a product-fitting accent family and set it in the `app/global.css`
  tokens for **both** light and dark. Never leave the 0%-saturation default as
  the shipped palette.
- Establish a clear type hierarchy, a consistent spacing rhythm, and one
  signature detail (a considered empty state, a distinctive header, a crafted
  primary action) that makes the surface feel designed for its domain.
- Get focus, hover, empty, loading, and dark-mode states right — that polish is
  the difference between an AI demo and a product.

Pick a direction and execute it fully; never average toward generic SaaS. Once
a direction is established and recorded below, preserve and extend it rather
than starting over unless otherwise directed to.

## Fill in before building the first surface

Once the fields below are filled in, they describe this app's established
visual direction — read and preserve them on every subsequent build; do not
re-derive a new direction. The first UI pass must fill these fields in as
part of that build, not leave them as an empty template.

- Product mode: `persuade` (personal portfolio for recruiters and engineers)
- Audience and cadence: recruiters, hiring managers and engineers reviewing one candidate; single visit, scan-first
- Visual world (name + the feeling it creates): "Midnight Neural" — a dark, futuristic AI lab feel: deep navy-black canvas, soft violet glow, glass cards, a floating abstract neural orb in the hero
- Palette family + neutral undertone: violet accent (262 83% 58% light, 258 90% 72% dark) on a cool slate-950 near-black base with white/10 glass borders; amber used only for the achievement trophy card
- Type treatment: Inter Variable; large tight-tracked semibold display name, gradient-tinted headline line, uppercase tracked violet eyebrows above every section heading
- Composition: single scrolling page with full-width sections capped at max-w-6xl; hero split into copy and visual; bento-style skill cards; featured projects as wide split cards with expandable details
- Shape language: generous radii (rounded-2xl cards, rounded-full pills), 1px translucent borders, soft violet shadows; motion limited to float, slow spin, fade-up and scroll reveal, all disabled under reduced motion
- Anti-references (defaults this app must not drift toward): generic resume-to-webpage layouts, fake skill percentage bars, stock profile photos, neon cyberpunk overload, light gray SaaS dashboards

## Agent-Native is structural, not visual

This shell already meets the Agent-Native contract: data in SQL, actions as the
single source of truth, application state for navigation/selection, and
real-time sync. **Chat and the agent rail are opt-in, not default.** Build the
product UI first. Add an `AgentSidebar`, a full-page chat route, or
`sendToAgentChat` handoffs only when the user asks for agent interaction — and
when you do, follow `agent-native-toolkit` and `frontend-design` → Agent
Surface And Page Boundaries so the surfaces are wired correctly.

## Guardrails

- Keep semantic token names and shared component seams intact; express the
  direction through token _values_, type, spacing, and composition — not by
  forking the design system.
- Density comes from data, not prose. Subtract explanatory chrome; never
  subtract the visual craft that makes the app impressive.
- Compare against real products in the chosen mode, not against the starter.
