/* ============================================================
   Think First, Ship Fast · pitch-deck
   Navigatie, bewerkbare speaker notes, volledig scherm. Vanilla, geen build.
   ============================================================ */
(function(){
  'use strict';
  var $ = function(id){ return document.getElementById(id); };

  var slides    = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total     = slides.length;
  var bar       = $('deckBar');
  var count     = $('count');
  var notes     = $('notes');
  var notesNum  = $('notesNum');
  var notesBtn  = $('notesBtn');
  var notesEdit = $('notesEdit');
  var notesStatus = $('notesStatus');
  var index     = 0;

  /* ---------- speaker notes: opslag ---------- */
  var PREFIX = 'tfsf-note:';

  function slug(slide){
    var h = slide.querySelector('.slide-title') || slide.querySelector('h1');
    var t = h ? h.textContent : slide.getAttribute('aria-label') || '';
    return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'slide';
  }
  var KEYS = slides.map(slug);

  function lsGet(k){ try{ return window.localStorage.getItem(PREFIX + k); }catch(e){ return null; } }
  function lsSet(k, v){ try{ window.localStorage.setItem(PREFIX + k, v); }catch(e){} }
  function lsDel(k){ try{ window.localStorage.removeItem(PREFIX + k); }catch(e){} }

  /* tekst uit de .slide-notes-alinea's van een slide */
  function domText(slide){
    var items = slide.querySelectorAll('.slide-notes li');
    if(!items.length) items = slide.querySelectorAll('.slide-notes p');
    return Array.prototype.map.call(items, function(el){ return el.textContent.trim(); })
      .filter(Boolean).join('\n');
  }
  /* tekst terug naar bullets in de .slide-notes (voor de print-handout); elke regel = een bullet */
  function textToDom(slide, text){
    var box = slide.querySelector('.slide-notes');
    if(!box) return;
    Array.prototype.slice.call(box.querySelectorAll('ul, p')).forEach(function(el){ box.removeChild(el); });
    var lines = text.split(/\n+/).map(function(t){ return t.trim(); }).filter(Boolean);
    if(!lines.length) return;
    var ul = document.createElement('ul');
    lines.forEach(function(t){ var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
    box.appendChild(ul);
  }

  /* originele notities vastleggen vóór we opgeslagen versies toepassen */
  var ORIGINAL = slides.map(domText);
  var edits = {};
  slides.forEach(function(s, i){
    var stored = lsGet(KEYS[i]);
    if(stored != null){ edits[i] = stored; textToDom(s, stored); }
  });

  function noteText(i){ return edits.hasOwnProperty(i) ? edits[i] : ORIGINAL[i]; }
  function isEdited(i){ return noteText(i) !== ORIGINAL[i]; }

  function saveNote(i, text){
    edits[i] = text;
    lsSet(KEYS[i], text);
    textToDom(slides[i], text);
  }
  function resetNote(i){
    delete edits[i];
    lsDel(KEYS[i]);
    textToDom(slides[i], ORIGINAL[i]);
  }

  function setStatus(msg, saved){
    if(!notesStatus) return;
    notesStatus.textContent = msg || '';
    notesStatus.classList.toggle('saved', !!saved);
  }
  function autoGrow(){
    if(!notesEdit) return;
    notesEdit.style.height = 'auto';
    notesEdit.style.height = notesEdit.scrollHeight + 'px';
  }
  function loadEditor(){
    if(!notesEdit) return;
    notesEdit.value = noteText(index);
    autoGrow();
    setStatus(isEdited(index) ? 'bewerkt' : '', false);
  }

  /* opslaan met korte vertraging tijdens typen */
  var saveTimer = null;
  if(notesEdit){
    notesEdit.addEventListener('input', function(){
      autoGrow();
      setStatus('bewerken…', false);
      if(saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(function(){
        saveNote(index, notesEdit.value);
        setStatus('opgeslagen ✓', true);
      }, 300);
    });
  }
  var notesReset = $('notesReset');
  if(notesReset){
    notesReset.addEventListener('click', function(){
      resetNote(index);
      loadEditor();
      setStatus('hersteld', false);
      if(notesEdit) notesEdit.focus();
    });
  }

  /* ---------- navigatie ---------- */
  function render(){
    slides.forEach(function(s, i){ s.classList.toggle('active', i === index); });
    if(count) count.innerHTML = '<b>' + (index + 1) + '</b> / ' + total;
    if(bar)   bar.style.width = ((index + 1) / total * 100) + '%';
    if(notesNum) notesNum.textContent = '· slide ' + (index + 1);
    loadEditor();
    try{ history.replaceState(null, '', '#s' + (index + 1)); }catch(e){}
  }

  function go(i){ index = Math.max(0, Math.min(total - 1, i)); render(); }
  function next(){ if(index < total - 1) go(index + 1); }
  function prev(){ if(index > 0) go(index - 1); }

  function toggleNotes(force){
    var open = (typeof force === 'boolean') ? force : !notes.classList.contains('open');
    notes.classList.toggle('open', open);
    if(notesBtn) notesBtn.setAttribute('aria-pressed', open ? 'true' : 'false');
    if(open) autoGrow();
  }

  function toggleFs(){
    var el = document.documentElement;
    if(!document.fullscreenElement){
      (el.requestFullscreen || el.webkitRequestFullscreen || function(){}).call(el);
    }else{
      (document.exitFullscreen || document.webkitExitFullscreen || function(){}).call(document);
    }
  }

  /* knoppen */
  var b;
  if((b = $('prevBtn')))    b.addEventListener('click', prev);
  if((b = $('nextBtn')))    b.addEventListener('click', next);
  if((b = $('notesBtn')))   b.addEventListener('click', function(){ toggleNotes(); });
  if((b = $('notesClose'))) b.addEventListener('click', function(){ toggleNotes(false); });
  if((b = $('fsBtn')))      b.addEventListener('click', toggleFs);

  function inField(t){
    return t && (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT' || t.isContentEditable);
  }

  /* toetsenbord */
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      if(inField(e.target)) e.target.blur();
      if(notes.classList.contains('open')) toggleNotes(false);
      return;
    }
    /* tijdens typen in de notities: niet navigeren of sneltoetsen afvangen */
    if(inField(e.target)) return;
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    switch(e.key){
      case 'ArrowRight': case 'PageDown': case ' ': case 'Spacebar':
        e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'ArrowDown': e.preventDefault(); next(); break;
      case 'ArrowUp':   e.preventDefault(); prev(); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End':  e.preventDefault(); go(total - 1); break;
      case 'n': case 'N': case 's': case 'S': toggleNotes(); break;
      case 'f': case 'F': toggleFs(); break;
      default: break;
    }
  });

  /* tikken op de linker- of rechterhelft van het scherm */
  document.addEventListener('click', function(e){
    if(e.target.closest('.controls, .notes, .deck-back, a, button')) return;
    var half = window.innerWidth / 2;
    if(e.clientX > half) next(); else prev();
  });

  /* startpositie uit de hash (#s3) */
  var m = /^#s(\d+)$/.exec(location.hash || '');
  if(m){ index = Math.max(0, Math.min(total - 1, parseInt(m[1], 10) - 1)); }
  render();
})();
