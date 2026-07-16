---
description: Conventies voor het Triage-model (eigen thema, vanilla, geen build)
paths:
  - "**/*.html"
  - "**/*.css"
  - "**/*.js"
---

# Projectconventies — Triage-model

> De gedeelde FortyTwo-regel (`/Claude Code/.claude/rules/fortytwo.md`) cascadeert hierheen,
> maar dit project wijkt daar bewust van af. Onderstaande regels gaan vóór.

## Eigen thema, geen FortyTwo
- Dit is een UX-methodiek-one-pager met een eigen donker thema — **niet** FortyTwo.
- De tokens staan als CSS-variabelen in `styles.css` (`:root`). Gebruik die variabelen; voeg geen losse hardgecodeerde kleuren/spacing/font-sizes toe.

## Techniek
- Vanilla HTML/CSS/JS, **geen build-stap** en geen frameworks. Houd het zo.
- Respecteer `prefers-reduced-motion` (animaties en smooth-scroll uit) — bestaat al, niet breken.
- Behoud de zichtbare focus-ring voor toetsenbordgebruik.
- De Definition-of-Done-markdown wordt uit de zichtbare kaarten gegenereerd: houd die tekst op één plek.
