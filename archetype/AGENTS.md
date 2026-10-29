# Github Test — brand rules

The Github Test design system lives in `archetype/`. It is generated from
Archetype (last export: 2026-10-29) and is the source of truth for
anything visual or written in this repository.

## Always

- **Use the tokens.** `archetype/tokens.css` defines 23 colours, 5 text styles, 10 spacing steps, 6 radii, 4 shadows
  as CSS custom properties. Import it once, globally, and reference every value
  as `var(--color-…)`, `var(--radius-…)`, `var(--spacing-…)`, `var(--shadow-…)`,
  `var(--font-…)`. Tailwind 4 projects should import `tailwind.css` instead and
  use the generated utilities (`bg-…`, `rounded-…`, `text-…`).
- **Check for an existing component** in `archetype/components/index.md` before
  building any UI element. If one is listed there, copy its markup and CSS.
- **Read `archetype/brand.md` before writing user-facing copy.** It carries the
  voice, tone, and messaging rules, plus how the logo may and may not be used.

## Never

- **Never write a raw value silently.** No `#2179ef`, no `rgb(…)`, no `12px`
  radius, no hand-rolled `box-shadow` — reference a token. If the tokens don't
  cover what you need, use the closest one that exists and **report the gap in
  your output**: what was missing, what you used instead, and where. Don't stall
  on it, and don't paper over it. A reported gap is a fix to the brand; an
  unreported one is drift.
- **Never redraw, recolour, or restyle the logo.** Use the supplied artwork.
- **Never invent a component variant** that isn't in the kit.
- **Never rebuild something the brand already has from its description.**
  `archetype/brand.md` inventories artifacts and templates by handle; the item
  itself comes from the Archetype MCP server — `get_brand` with the
  `artifacts` or `templates` domain and that handle. An entry names a thing, it
  doesn't define it — fetch it
  and use it as it is. If you can't reuse it where you're building, port it from
  the real source and say so in your output.

## Keeping this current

`archetype/` is generated — editing it by hand puts the repo and the brand out
of step, and your changes are lost on the next export. Change the brand in
Archetype and re-export instead (see `README.md` in this folder).
