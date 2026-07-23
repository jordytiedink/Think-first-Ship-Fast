(function(){
  'use strict';
  var $ = function(id){ return document.getElementById(id); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- toast / feedback ---------- */
  var toastEl = $('toast'), toastTimer;
  function toast(msg){
    if(!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toastEl.classList.remove('show'); }, 1800);
  }
  function copyText(text, msg){
    function fb(){
      var ta=document.createElement('textarea');
      ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      try{ document.execCommand('copy'); toast(msg||'gekopieerd ✓'); }catch(_){}
      ta.remove();
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){ toast(msg||'gekopieerd ✓'); }, fb);
    } else { fb(); }
  }
  function downloadFile(text, filename, type){
    try{
      var blob=new Blob([text],{type:(type||'text/plain')+';charset=utf-8'}),
          url=URL.createObjectURL(blob), a=document.createElement('a');
      a.href=url; a.download=filename; document.body.appendChild(a); a.click();
      setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 120);
      toast('download gestart ✓');
    }catch(_){ copyText(text); }
  }

  /* ================= DIAGRAM: zoom / pan ================= */
  (function(){
    var dia=$('dia'), wrap=$('zoomWrap'), panel=$('diaPanel'), ctrl=$('zoomCtrl'), hint=$('zoomHint');
    if(!dia||!wrap||!ctrl) return;
    var scale=1, tx=0, ty=0, drag=false, lx=0, ly=0, MIN=1, MAX=6;
    var pointers=new Map(), pinchDist=0, pinchScale=1;

    function clamp(){
      var w=wrap.clientWidth, h=wrap.clientHeight, dh=dia.clientHeight||h, sw=w*scale, sh=dh*scale;
      if(sw<=w) tx=(w-sw)/2; else tx=Math.max(w-sw, Math.min(0, tx));
      if(sh<=h) ty=(h-sh)/2; else ty=Math.max(h-sh, Math.min(0, ty));
    }
    function apply(){ dia.style.transform='translate('+tx+'px,'+ty+'px) scale('+scale+')'; }
    function zoomAt(cx,cy,f){
      var ns=Math.max(MIN, Math.min(MAX, scale*f)); if(ns===scale) return;
      var ix=(cx-tx)/scale, iy=(cy-ty)/scale;
      scale=ns; tx=cx-ix*scale; ty=cy-iy*scale; clamp(); apply();
    }
    function reset(){ scale=1; tx=0; ty=0; clamp(); apply(); }
    function center(){ return { x:wrap.clientWidth/2, y:wrap.clientHeight/2 }; }

    var hintShown=false;
    function showHint(){
      if(hintShown||!hint) return; hintShown=true;
      hint.classList.add('show');
      setTimeout(function(){ hint.classList.remove('show'); }, 3200);
    }

    /* knoppen */
    ctrl.addEventListener('click', function(e){
      var b=e.target.closest('button'); if(!b) return;
      var z=b.getAttribute('data-z'), c=center();
      if(z==='in') zoomAt(c.x,c.y,1.3);
      else if(z==='out') zoomAt(c.x,c.y,1/1.3);
      else if(z==='reset') reset();
      else if(z==='download') downloadDiagram();
      else if(z==='full'){
        var on=panel.classList.toggle('full');
        b.textContent = on ? 'sluit' : 'vergroot';
        requestAnimationFrame(reset);
      }
    });

    /* wheel-zoom */
    wrap.addEventListener('wheel', function(e){
      e.preventDefault();
      var r=wrap.getBoundingClientRect();
      zoomAt(e.clientX-r.left, e.clientY-r.top, e.deltaY<0 ? 1.12 : 1/1.12);
      showHint();
    }, {passive:false});

    /* pointers: 1 = pan, 2 = pinch */
    wrap.addEventListener('pointerdown', function(e){
      wrap.setPointerCapture && tryCapture(e.pointerId);
      pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
      if(pointers.size===1){
        drag=true; lx=e.clientX; ly=e.clientY; wrap.classList.add('dragging');
      } else if(pointers.size===2){
        drag=false; wrap.classList.remove('dragging');
        var p=pointArr(); pinchDist=dist(p[0],p[1]); pinchScale=scale;
      }
      showHint();
    });
    function tryCapture(id){ try{ wrap.setPointerCapture(id); }catch(_){} }
    function pointArr(){ var a=[]; pointers.forEach(function(v){ a.push(v); }); return a; }
    function dist(a,b){ var dx=a.x-b.x, dy=a.y-b.y; return Math.sqrt(dx*dx+dy*dy); }
    function mid(a,b){ return { x:(a.x+b.x)/2, y:(a.y+b.y)/2 }; }

    wrap.addEventListener('pointermove', function(e){
      if(!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
      if(pointers.size>=2){
        var p=pointArr(), r=wrap.getBoundingClientRect(),
            nd=dist(p[0],p[1]); if(pinchDist<=0) return;
        var target=Math.max(MIN, Math.min(MAX, pinchScale*(nd/pinchDist))),
            m=mid(p[0],p[1]), cx=m.x-r.left, cy=m.y-r.top;
        var ix=(cx-tx)/scale, iy=(cy-ty)/scale;
        scale=target; tx=cx-ix*scale; ty=cy-iy*scale; clamp(); apply();
      } else if(drag){
        tx += e.clientX-lx; ty += e.clientY-ly; lx=e.clientX; ly=e.clientY; clamp(); apply();
      }
    });
    function endPointer(e){
      pointers.delete(e.pointerId);
      if(pointers.size<2){
        pinchDist=0;
        if(pointers.size===1){ var p=pointArr()[0]; drag=true; lx=p.x; ly=p.y; }
        else { drag=false; wrap.classList.remove('dragging'); }
      }
    }
    wrap.addEventListener('pointerup', endPointer);
    wrap.addEventListener('pointercancel', endPointer);

    /* dubbelklik: toggle zoom */
    wrap.addEventListener('dblclick', function(e){
      var r=wrap.getBoundingClientRect();
      if(scale>1) reset(); else zoomAt(e.clientX-r.left, e.clientY-r.top, 2.2);
    });

    /* toetsenbord-zoom als het diagram focus heeft */
    wrap.addEventListener('keydown', function(e){
      var c=center(), step=40;
      if(e.key==='+'||e.key==='='){ zoomAt(c.x,c.y,1.3); e.preventDefault(); }
      else if(e.key==='-'||e.key==='_'){ zoomAt(c.x,c.y,1/1.3); e.preventDefault(); }
      else if(e.key==='0'){ reset(); e.preventDefault(); }
      else if(e.key==='ArrowLeft'){ tx+=step; clamp(); apply(); e.preventDefault(); }
      else if(e.key==='ArrowRight'){ tx-=step; clamp(); apply(); e.preventDefault(); }
      else if(e.key==='ArrowUp'){ ty+=step; clamp(); apply(); e.preventDefault(); }
      else if(e.key==='ArrowDown'){ ty-=step; clamp(); apply(); e.preventDefault(); }
    });

    /* download diagram als .svg */
    function downloadDiagram(){
      var clone=dia.cloneNode(true);
      clone.removeAttribute('style');
      clone.setAttribute('xmlns','http://www.w3.org/2000/svg');
      var src='<?xml version="1.0" encoding="UTF-8"?>\n'+new XMLSerializer().serializeToString(clone);
      downloadFile(src, 'triage-model-diagram.svg', 'image/svg+xml');
    }
    var diaDlB=$('diaDownloadB');
    diaDlB&&diaDlB.addEventListener('click', downloadDiagram);

    /* hint zichtbaar maken op aanraakapparaten of bij eerste hover */
    if(window.matchMedia && window.matchMedia('(hover: none)').matches){ showHint(); }
    wrap.addEventListener('pointerenter', showHint);

    window.addEventListener('resize', function(){ clamp(); apply(); });

    /* Esc sluit fullscreen */
    document.addEventListener('keydown', function(e){
      if(e.key!=='Escape' || !panel.classList.contains('full')) return;
      panel.classList.remove('full');
      var fb=ctrl.querySelector('[data-z=full]'); if(fb) fb.textContent='vergroot';
      requestAnimationFrame(reset);
    });

    apply();
  })();

  /* ================= DRAWER: UX-strategie ================= */
  (function(){
    var drawer=$('stratPanel'), bd=$('stratBackdrop'), closeBtn=$('stratClose');
    if(!drawer) return;
    var lastFocus=null;
    function focusables(){
      return drawer.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])');
    }
    function openD(){
      lastFocus=document.activeElement;
      drawer.classList.add('open'); bd&&bd.classList.add('open');
      drawer.setAttribute('aria-hidden','false');
      var f=focusables(); if(f.length) f[0].focus();
    }
    function closeD(){
      drawer.classList.remove('open'); bd&&bd.classList.remove('open');
      drawer.setAttribute('aria-hidden','true');
      if(lastFocus && lastFocus.focus) lastFocus.focus();
    }
    Array.prototype.forEach.call(document.querySelectorAll('.slink,[data-open=strategy]'), function(el){
      el.addEventListener('click', openD);
      el.addEventListener('keydown', function(e){
        if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openD(); }
      });
    });
    bd&&bd.addEventListener('click', closeD);
    closeBtn&&closeBtn.addEventListener('click', closeD);

    /* focus-trap + Esc binnen de drawer */
    document.addEventListener('keydown', function(e){
      if(!drawer.classList.contains('open')) return;
      if(e.key==='Escape'){ closeD(); return; }
      if(e.key==='Tab'){
        var f=focusables(); if(!f.length) return;
        var first=f[0], last=f[f.length-1];
        if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
      }
    });

    /* markdown-export strategie-template */
    var MD = [
'# UX-strategiesjabloon','',
'De UX-strategie is de meetlat voor de triage. Ze helpt kiezen tussen Discovery en Delivery en geeft AI de context om passende voorstellen te doen. Vul ieder onderdeel in en verwijder daarna de cursieve uitleg. Houd de strategie kort, bij voorkeur één tot twee A4\'s. Het schrijven ervan is zelf Discovery-werk, geen formulier dat je even invult. Jij bepaalt de richting, AI kan helpen bij het ordenen en aanscherpen, maar schrijft de strategie niet zelfstandig, anders ontstaat al snel precies de generieke richting die dit model moet voorkomen.','',
'## Visie',
'_Beschrijf in twee of drie zinnen wat een goede ervaring voor de gebruiker betekent en welke richting je kiest. Vermijd vage doelen zoals "een betere UX". Formuleer een standpunt dat over een jaar nog steeds bruikbaar is._','',
'[Vul de visie in]','',
'## Principes (duurzaam, gelden over projecten heen)',
'_Formuleer drie tot vijf duurzame vuistregels die over projecten heen gelden. Ieder principe moet helpen bij een concrete beslissing. Beschrijf gewenst gedrag, geen functies. Drie scherpe principes zijn beter dan vijf vage._','',
'- [Principe]. [Eén zin die uitlegt wat het betekent.]',
'- [Principe]. [...]',
'- [Principe]. [...]','',
'## Gebruikersdoelen',
'_Beschrijf kort wie de gebruiker is, wat die wil bereiken en waar die nu vastloopt. Beperk dit tot maximaal een halve pagina. Benoem welke bronnen je gebruikt en wat nog onzeker is. Belangrijke aannames moeten herleidbaar zijn naar een bron of gesprek._','',
'[Vul de gebruikersschets in]','',
'## Drie belangrijkste Jobs-to-be-Done',
'_Beschrijf de drie belangrijkste taken in deze vorm: als [rol] wil ik [taak], zodat [reden]. Kies alleen taken die bepalend zijn voor het initiatief._','',
'- Als [rol] wil ik [taak], zodat [reden].',
'- Als [rol] wil ik [taak], zodat [reden].',
'- Als [rol] wil ik [taak], zodat [reden].','',
'## Huidige werkwijze',
'_Beschrijf hoe de gebruiker de taak nu uitvoert. Benoem waar mensen afhaken, fouten maken of extra hulp nodig hebben._','',
'- [Huidige werkwijze].','',
'## Problem statement',
'_Beschrijf het kernprobleem in één alinea. Wie ervaart welk probleem, waardoor ontstaat het, en wat gebeurt er als we niets doen? Beschrijf het probleem, nog niet de oplossing._','',
'[Vul het kernprobleem in]','',
'## Obstakels en randvoorwaarden',
'_Beschrijf wat de aanpak beïnvloedt of begrenst: technische beperkingen, wettelijke eisen, gevoeligheden en uitzonderlijke situaties. Wees concreet over wat lastig is._','',
'- [Obstakel of randvoorwaarde].','',
'## Strategische prioriteiten',
'_Bepaal 1 tot 3 thema\'s waarop dit initiatief inzet. Deze prioriteiten gelden voor dit initiatief, los van de duurzame principes hierboven. Geef iedere prioriteit een duidelijke titel, een korte onderbouwing, een UX-outcome, succescriteria en concrete initiatieven._','',
'### [Titel van de prioriteit]',
'[Leg in één of twee zinnen uit waarom dit een prioriteit is.]','',
'**UX-outcome:** wat de gebruiker straks ervaart en anders kan doen. Bijvoorbeeld "De beheerder twijfelt niet bij het instellen van ...".','',
'**Succescriteria:** waaraan je ziet dat het probleem beter wordt opgelost. Gebruik waar mogelijk observeerbaar gedrag, feedback of andere concrete signalen.','',
'**Initiatieven:**',
'- [Concrete actie of oplossing die bijdraagt aan deze prioriteit.]','',
'## Hoe kunnen we?',
'_Zet de kernproblemen om in open vragen die ruimte geven aan verschillende oplossingen. Begin iedere vraag met "Hoe kunnen we ...". Maak de vraag breed genoeg om alternatieven te verkennen en scherp genoeg om richting te geven._','',
'- Hoe kunnen we [kans]?',''
    ].join('\n');

    function bindStrat(copyBtn, dlBtn){
      copyBtn&&copyBtn.addEventListener('click', function(){ copyText(MD, 'strategie gekopieerd ✓'); });
      dlBtn&&dlBtn.addEventListener('click', function(){ downloadFile(MD, 'ux-strategie-template.md', 'text/markdown'); });
    }
    bindStrat($('stratCopy'), $('stratDownload'));
    bindStrat($('stratCopyB'), $('stratDownloadB'));
  })();

  /* ============ DEFINITION OF DONE: gegenereerd uit de DOM ============ */
  (function(){
    var grid=$('critGrid'), dcb=$('dodCopy'), ddb=$('dodDownload');
    if(!grid) return;
    function buildMd(){
      var head = [
'# Definition of done in Delivery','',
'In Delivery helpt AI bij het maken. Wij bewaken de kwaliteit en nemen het besluit. Elke oplevering doorloopt dezelfde checklist voordat die naar development of productie gaat. Gebruik de checklist al bij de eerste versie, zodat de kwaliteitseisen vanaf het begin onderdeel zijn van de opdracht aan AI.','',
'Een oplevering is pas klaar als alle punten zijn afgevinkt:',''
      ];
      var items=[];
      Array.prototype.forEach.call(grid.querySelectorAll('.crit'), function(c){
        var b=c.querySelector('b'), s=c.querySelector('span');
        if(b&&s) items.push('- [ ] **'+b.textContent.trim()+'.** '+s.textContent.trim());
      });
      var foot = ['',
'Mensen blijven verantwoordelijk voor het besluit en de gevolgen. Menselijke controle is daarom geen laatste vinkje, maar onderdeel van het hele proces. UX beoordeelt de gebruikerservaring en productkwaliteit, development blijft verantwoordelijk voor de juistheid, veiligheid en onderhoudbaarheid van de code, en AI draagt zelf geen verantwoordelijkheid.','',
'Werk dat niet aan de kwaliteitslat voldoet, gaat terug, of we leggen de afwijking duidelijk vast. We houden ook bij waar AI steeds tekortschiet, en verwerken die patronen in de instructies, context en het design system, zodat de kwaliteit van volgende opleveringen toeneemt.',''
      ];
      return head.concat(items).concat(foot).join('\n');
    }
    var dcb2=$('dodCopyB'), ddb2=$('dodDownloadB');
    function bindDod(copyBtn, dlBtn){
      copyBtn&&copyBtn.addEventListener('click', function(){ copyText(buildMd(), 'DoD gekopieerd ✓'); });
      dlBtn&&dlBtn.addEventListener('click', function(){ downloadFile(buildMd(), 'definition-of-done.md', 'text/markdown'); });
    }
    bindDod(dcb, ddb);
    bindDod(dcb2, ddb2);
  })();

  /* ============ SECTIENAV + VOORTGANG ============ */
  (function(){
    var bar=$('progBar'),
        links=Array.prototype.slice.call(document.querySelectorAll('.secnav a'));
    var map={};
    links.forEach(function(a){ map[a.getAttribute('data-target')]=a; });

    /* voortgangsbalk */
    function updateBar(){
      if(!bar) return;
      var h=document.documentElement, max=h.scrollHeight-h.clientHeight;
      bar.style.width=(max>0 ? (h.scrollTop/max)*100 : 0)+'%';
    }
    window.addEventListener('scroll', updateBar, {passive:true});
    window.addEventListener('resize', updateBar);
    updateBar();

    /* actieve sectie via IntersectionObserver */
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){
            links.forEach(function(l){ l.classList.remove('active'); });
            var a=map[en.target.id]; if(a) a.classList.add('active');
          }
        });
      }, {rootMargin:'-45% 0px -45% 0px', threshold:0});
      Object.keys(map).forEach(function(id){ var el=$(id); if(el) io.observe(el); });
    }
  })();

  /* ============ SCROLL-REVEAL ============ */
  (function(){
    var els=Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if(reduceMotion || !('IntersectionObserver' in window)){
      els.forEach(function(el){ el.classList.add('in'); });
      return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, {rootMargin:'0px 0px -10% 0px', threshold:0.08});
    els.forEach(function(el){ io.observe(el); });
  })();

  /* ============ DRIJVENDE ACTIES: top / print / delen ============ */
  (function(){
    var toTop=$('toTop'), printBtn=$('printBtn'), shareBtn=$('shareBtn');
    var fabs=[printBtn, shareBtn, toTop];
    function onScroll(){
      var show = window.scrollY>700; /* pas voorbij hero + diagram, zodat ze de figure niet overlappen */
      fabs.forEach(function(b){ if(b) b.classList.toggle('show', show); });
    }
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
    toTop&&toTop.addEventListener('click', function(){
      window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    printBtn&&printBtn.addEventListener('click', function(){ window.print(); });
    shareBtn&&shareBtn.addEventListener('click', function(){
      var url=location.href;
      if(navigator.share){
        navigator.share({ title:document.title, url:url }).catch(function(){ copyText(url,'link gekopieerd ✓'); });
      } else {
        copyText(url, 'link gekopieerd ✓');
      }
    });
  })();

  /* ============ MINI-MODEL: huidige fase, sticky strip, klikbare diagram-knopen ============ */
  (function(){
    var PHASE = {s00:['challenge'],s01:['challenge'],s02:['triage'],s03:['discovery','delivery'],
      s04:['discovery'],s05:['delivery'],s06:[],s07:['outcome'],
      s08:[],s09:[],s10:[],s11:[],srecap:[],s12:[]};
    var nodes = Array.prototype.slice.call(document.querySelectorAll('.minimodel [data-phase]'));
    function setActive(phases){
      nodes.forEach(function(n){ n.classList.toggle('active', phases.indexOf(n.getAttribute('data-phase'))>-1); });
    }
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(en){ if(en.isIntersecting) setActive(PHASE[en.target.id] || []); });
      }, {rootMargin:'-45% 0px -45% 0px', threshold:0});
      Object.keys(PHASE).forEach(function(id){ var el=document.getElementById(id); if(el) io.observe(el); });
    }
    var sticky=document.getElementById('miniSticky');
    function onScroll(){ if(sticky) sticky.classList.toggle('show', window.scrollY>720); }
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Array.prototype.forEach.call(document.querySelectorAll('#dia .dnode'), function(el){
      el.addEventListener('click', function(){
        var t=el.getAttribute('data-target'), sec=t&&document.getElementById(t);
        if(sec) sec.scrollIntoView({behavior: reduce?'auto':'smooth', block:'start'});
      });
    });
  })();

})();
