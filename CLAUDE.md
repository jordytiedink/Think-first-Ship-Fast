# CLAUDE.md · Triage-model

> Projectbrief. De gedeelde root-`CLAUDE.md` (wie ik ben, taal, werkafspraken) laadt automatisch mee.

## Wat is dit
"Think First, Ship Fast", een one-pager die het triagemodel van het UX-team uitlegt (Discovery vs. Delivery), met een interactief diagram. Statische site, geen onderdeel van een ParnasSys-product.

## Status
Afgeronde, verbeterde versie van de oorspronkelijke Claude-artifact. Klikbaar prototype / presentatieklaar.

## Bron van waarheid · synchronisatie
De **canonieke tekst** van dit model staat in:
`/Users/jordytiedink/Documents/Cowork OS/06 UX/Think First, Ship Fast.md`

Die md is leidend voor de *inhoud* van de one-pager. Als Jordy zegt dat de md is **vernieuwd / bijgewerkt** (of vraagt om te synchroniseren), lees dat bestand opnieuw en werk de tekst van de one-pager bij zodat die de md volgt:
- Tekst in `index.html` (alinea's, tells, lijsten, kwaliteitslat-kaarten, drawer-template).
- De markdown-strings in `app.js` (de strategie-template en de Definition of Done) zodat de exports meelopen.

**Behoud de vormgeving:** het diagram, de structuur (poort, sporen, kaarten, drawer) en de interactie blijven. Alleen de tekst volgt de md. De korte, ontworpen koppen (de grote H2's) mogen een ingekorte versie van de md-zin blijven; dat is de presentatielaag.

Andersom geldt ook: tekstuele aanscherpingen die we in de pagina maken, horen terug in de md, zodat die de complete bron blijft.

## Techniek
- Stack: vanilla HTML + CSS + JS, **geen build-stap**, geen frameworks.
- Draaien: dubbelklik `index.html` (werkt op `file://`), of `python3 serve.py` → http://127.0.0.1:8765 (nodig voor clipboard-/deel-knoppen).
- Let op: macOS beschermt `~/Documents`, dus de ingebouwde preview-sandbox kan hier geen server starten, draai `serve.py` zelf vanuit de terminal.

## Design tokens · belangrijk
Dit prototype gebruikt **bewust een eigen donker thema**, geen FortyTwo. De tokens (kleuren, spacing-schaal, type-schaal) staan als CSS-variabelen in `styles.css` (`:root{}`). Gebruik die variabelen; introduceer geen losse hardgecodeerde waarden. Zie `.claude/rules/project-conventions.md`.

## Belangrijke bestanden
- `index.html`: structuur + inline SVG-diagram
- `styles.css`: alle styling + de design-tokens in `:root`
- `app.js`: diagram-zoom/pan, drawer, sectienav, scroll-reveal, export
- `assets/diagram.svg`: het diagram los, herbruikbaar
- `serve.py`: mini statische server (poort 8765)
- `reference/`: context/screenshots (optioneel)

Achtergrond en changelog staan in `README.md`.
