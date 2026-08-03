/* ============================================================
   Think First, Ship Fast · pitch-deck
   Navigatie en volledig scherm. Vanilla, geen build.
   De speaker notes zijn eruit gehaald; zie archive/speaker-notes/.
   ============================================================ */
(function(){
  'use strict';
  var $ = function(id){ return document.getElementById(id); };

  var slides    = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total     = slides.length;
  var bar       = $('deckBar');
  var count     = $('count');
  var index     = 0;

  /* ---------- navigatie ---------- */
  function render(){
    slides.forEach(function(s, i){ s.classList.toggle('active', i === index); });
    if(count) count.innerHTML = '<b>' + (index + 1) + '</b> / ' + total;
    if(bar)   bar.style.width = ((index + 1) / total * 100) + '%';
    try{ history.replaceState(null, '', '#s' + (index + 1)); }catch(e){}
  }

  function go(i){ index = Math.max(0, Math.min(total - 1, i)); render(); }
  function next(){ if(index < total - 1) go(index + 1); }
  function prev(){ if(index > 0) go(index - 1); }

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
  if((b = $('prevBtn'))) b.addEventListener('click', prev);
  if((b = $('nextBtn'))) b.addEventListener('click', next);
  if((b = $('fsBtn')))   b.addEventListener('click', toggleFs);

  /* toetsenbord */
  document.addEventListener('keydown', function(e){
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
      case 'f': case 'F': toggleFs(); break;
      default: break;
    }
  });

  /* tikken op de linker- of rechterhelft van het scherm */
  document.addEventListener('click', function(e){
    if(e.target.closest('.controls, .deck-back, a, button')) return;
    var half = window.innerWidth / 2;
    if(e.clientX > half) next(); else prev();
  });

  /* startpositie uit de hash (#s3) */
  var m = /^#s(\d+)$/.exec(location.hash || '');
  if(m){ index = Math.max(0, Math.min(total - 1, parseInt(m[1], 10) - 1)); }
  render();
})();
