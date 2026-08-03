# Speaker notes (removed)

The deck used to ship a speaker-notes feature. It was taken out so the deck is just
slides. Nothing here is loaded by the site; this folder is an archive.

## What the feature did

- A drawer at the bottom of the deck, toggled with the notes button or `N` / `S`.
- A separate presenter tab at `?view=notes`, opened with the button or `P`, kept in
  sync with the deck through a `BroadcastChannel`.
- Editing in place, saved per slide to `localStorage` under the `tfsf-note:` prefix,
  with a "Herstel origineel" button and cross-tab sync via the `storage` event.
- A print stylesheet that turned the deck into a handout with the notes below each
  slide.

## Files

| File | What it is |
| :-- | :-- |
| `notes.md` | The note text per slide, the part worth keeping |
| `markup.html` | The HTML that was removed from `slides.html` |
| `styles.css` | The CSS that was removed from `slides.css` |
| `script.js` | `slides.js` as it was, including the notes code |

## Putting it back

Restoring by hand means re-adding all four pieces, and the slide numbers in
`notes.md` will not match a deck that has changed since. Going back through git is
easier: find the commit that removed the feature and revert the parts you want.
