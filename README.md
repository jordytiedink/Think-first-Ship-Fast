# Think First, Ship Fast · triagepoort one-pager

Een nagebouwde, verbeterde versie van de oorspronkelijke Claude-artifact, nu opgesplitst in losse bestanden.

## Openen

Twee manieren:

1. **Snel:** dubbelklik `index.html`. Alles werkt op `file://`, er is geen build-stap of server nodig.
2. **Net iets netter (lokale server):** vanuit deze map
   ```sh
   python3 serve.py
   ```
   en open daarna http://127.0.0.1:8765. Aanrader als je clipboard- of deel-knoppen wilt testen (sommige browsers beperken die op `file://`).

## Bestanden

| Bestand            | Wat                                                                 |
| ------------------ | ------------------------------------------------------------------- |
| `index.html`       | Structuur + het inline SVG-diagram                                  |
| `styles.css`       | Alle styling, met design-tokens (type-, spacing- en kleurschaal)    |
| `app.js`           | Diagram-zoom/pan, drawer, sectienav, scroll-reveal, export-knoppen  |
| `assets/diagram.svg` | Het diagram los, als herbruikbaar bestand                         |
| `serve.py`         | Mini statische server voor lokale preview                           |

## Wat is er verbeterd t.o.v. het origineel

**Design & polish**
- Consistente type- en spacing-schaal als CSS-tokens; strakker verticaal ritme.
- Iets opgetild contrast op de zwakste tekstkleuren (leesbaarder op donker).
- Rustigere, soepelere hero-animatie + een subtiele scroll-cue.
- Zachte hover-lift op kaarten en een consistente, zichtbare focus-ring.
- `prefers-reduced-motion` wordt gerespecteerd (animaties en smooth-scroll uit).

**Interactie & features**
- Sticky sectienavigatie (rechts) met voortgang en actieve-sectie-highlight; dunne voortgangsbalk bovenaan.
- Diagram beter op mobiel: fit-to-width, **pinch-to-zoom**, sleep-pan, een hint, toetsenbord-zoom (+ / − / 0 / pijltjes) en **download als SVG**.
- Scroll-reveal van secties.
- Drijvende acties: print / opslaan-als-PDF, kopieer-link, terug-naar-boven.
- Drawer met focus-trap en focus-herstel; sluit met Esc.

**Onder de motorkap**
- CSS en JS uit het HTML-bestand gehaald.
- De Definition-of-Done-markdown wordt nu uit de zichtbare kaarten gegenereerd, zodat de tekst maar op één plek leeft.
- `<html lang="nl">`, `<main>` en een `meta description` toegevoegd.

> **Noot over de Preview-tool in Claude Code:** macOS beschermt `~/Documents`, waardoor de ingebouwde preview-sandbox geen server vanuit deze map kan starten. Draai daarom `python3 serve.py` zelf vanuit de terminal, dat heeft die beperking niet.
