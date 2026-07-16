# Hosten op GitHub Pages (privé repo)

Deze site is statisch (HTML/CSS/JS, geen build). Pages serveert de bestanden
rechtstreeks. `serve.py` is alleen voor lokaal draaien en niet nodig op Pages.

- One-pager: `index.html`
- Pitch-deck: `slides.html` (ook bereikbaar via de knop rechtsboven op de one-pager)

## Belangrijk om te weten

- Pages publiceren **vanuit een privé repo** kan alleen met **GitHub Pro** (betaald).
  Op een gratis account moet de repo public zijn.
- Ook met een privé repo is de **gepubliceerde site openbaar**: iedereen met de
  URL kan hem openen. Alleen je broncode blijft verborgen. Moet de inhoud écht
  dicht? Gebruik dan Cloudflare Pages + Access (gratis, met login) i.p.v. Pages.
- De speaker notes worden per browser opgeslagen (localStorage). Ze reizen dus
  niet mee met de repo; iedere kijker heeft z'n eigen aanpassingen.

## Stappen

De map is lokaal al een git-repo met een eerste commit. Je hoeft alleen nog een
repo op GitHub te maken en te pushen.

### Optie A — met de GitHub CLI (`gh`), snelst

```bash
cd "Triage-model"
gh repo create triage-model --private --source=. --remote=origin --push
```

### Optie B — via github.com

1. Maak op github.com een **nieuwe privé repo** aan (zonder README/.gitignore,
   die staan er al). Bijvoorbeeld naam: `triage-model`.
2. Koppel en push:

```bash
cd "Triage-model"
git remote add origin https://github.com/<jouw-gebruikersnaam>/triage-model.git
git push -u origin main
```

### Pages aanzetten

1. Repo op github.com → **Settings → Pages**.
2. **Source**: "Deploy from a branch".
3. **Branch**: `main`, map `/ (root)` → **Save**.
4. Na ~1 minuut staat de site op:
   - one-pager: `https://<jouw-gebruikersnaam>.github.io/triage-model/`
   - deck: `https://<jouw-gebruikersnaam>.github.io/triage-model/slides.html`

## Bijwerken

```bash
git add -A
git commit -m "Tekst bijgewerkt"
git push
```

Pages ververst daarna automatisch (~1 minuut).
