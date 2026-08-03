# Speaker notes archive

The pitch deck used to carry speaker notes: a drawer in the deck itself, a
separate presenter tab, editing with `localStorage`, and a print handout. That
feature was removed from `slides.html`, `slides.css` and `slides.js`. This folder
keeps the content and the code so nothing is lost.

The notes below are the text as it stood when the feature was removed. Slide
numbers refer to the deck at that moment (20 slides). Notes are in Dutch because
they are spoken to a Dutch audience.

---

## Slide 1 — Think First, Ship Fast

- Dit is een werkmodel om AI in te zetten zonder ons oordeel weg te geven.

## Slide 2 — Gemaakt met AI, geregisseerd door mij  ·  Verantwoording

- Even open over hoe dit stuk gemaakt is.
- De basis van de teksten heb ik zelf geschreven, dit is mijn eigen denkwerk en mijn eigen ervaring.
- AI heeft daarna aangevuld en aangescherpt, en ik heb elke keuze zelf gemaakt. Dus AI in de lus, mens aan het stuur, precies waar dit model over gaat.
- De cijfers en claims komen uit negen bronnen, die staan met links op de one-pager.

## Slide 3 — Sneller was altijd de agenda  ·  01 · Sneller

- Ik pleit niet voor langzamer werken.
- Designers willen altijd sneller leveren, dat is niks nieuws.
- We leveren voortdurend in op volledigheid en zekerheid, in naam van leren en opleveren.
- Bijna niets van mijn werk in productie ziet eruit zoals ik het bedacht.

## Slide 4 — AI-first denkt alleen aan Delivery  ·  02 · Twee kanten

- Er zijn twee manieren van werk maken, en het AI-first-denken kent er maar één.
- Het AI-first-denken stelt vooral één vraag, hoe bouwen we sneller. En daar levert het echt op, dus dit is geen stroman.
- Maar snelheid is maar één kant, sneller bouwen verschuift de last naar review en QA.
- Wat ik om me heen zie, AI versnelt het ontwikkelwerk en daardoor wordt UX vaker gevraagd voor hand-offs en om de backlog te vullen.
- Discovery gaat over wát er zou moeten bestaan, en daar golden designers vaak als de poortwachters tussen vraag en uitvoering.

## Slide 5 — Per project: hoeveel denkwerk vóór we bouwen?  ·  03 · De kern

- Dit is het hele model in één beeld.
- We doen niet meer elk project volgens hetzelfde proces.
- Veel onzekerheid, impact of kans op onderscheid gaat naar Discovery, de rest naar Delivery.
- De winst, AI versnelt het bouwen en wij zetten ons oordeel in waar het telt.

## Slide 6 — Eén vraag bepaalt de route  ·  04 · De triage

- De triage is het scharnier van het model.
- Het kernteam, UX, PO en dev, legt eerst een korte basis vast: probleem, gebruiker, doel, risico's en uitkomst.
- Dan twee checks. Valt er nog iets te kiezen, want als de oplossing al vaststaat is Discovery verspilling.
- En is dit verantwoord, want bij kwetsbare gebruikers of gevoelige data mag je niet blind bouwen.
- Een project mag later opnieuw door de triage als er iets verandert.

## Slide 7 — Discovery, jij stuurt de AI  ·  05 · Discovery

- In Discovery stuur jij, AI helpt mee met patronen, richtingen en concepten.
- Volledige double diamond, eerst breed verkennen en dan bewust kiezen.
- Jij bepaalt het echte probleem en de verantwoorde keuze.
- Je levert een besluit met een standpunt, geen scherm.
- Een AI-patroon is een aanwijzing, dus blijf herleidbaar naar de bron.

## Slide 8 — Drie signalen wijzen naar Discovery  ·  06 · Signalen

- Drie signalen, en ze tellen op. Hoe meer er tegelijk hoog staan, hoe eerder Discovery.
- Onzekerheid gaat over het probleem, niet over de oplossing. Weten we wat er speelt of leunen we op een aanname?
- Impact is breedte maal ernst. Een klein ongemak voor iedereen kan zwaarder wegen dan een groot ongemak voor drie mensen.
- Onderscheid is de vraag of we hier het verschil kunnen maken, of dat we iets bouwen dat elke concurrent ook heeft.
- Staan alle drie laag, dan is Delivery geen luiheid maar de juiste keuze.

## Slide 9 — Discovery is niet van de designteams  ·  07 · Herkomst

- Discovery is niet van ons alleen.
- De beste organisaties laten ideeën van overal komen, van engineering en support tot leiding, research en de klant.
- Onze rol is niet dat wij als enige bedenken, maar dat wij het denkwerk goed organiseren.
- Het bedenken van wat waardevol is, neemt AI niet over.

## Slide 10 — Delivery, jij bewaakt de AI  ·  08 · Delivery

- Hier draait de rol om: in Discovery stuur je, hier bewaak je.
- AI maakt een werkende versie, jij controleert en neemt het besluit.
- Je bewaakt uitzonderingen, samenhang, toegankelijkheid, teksten en risico's.
- We prototypen in code om een besluit te toetsen voordat het naar dev gaat.
- Voorbeeld, operationeel werk zoals inloggen of een betaalstap gaat bijna direct hierheen.
- Benadruk dat het prototype grotendeels bruikbaar is richting productie, zodat dev erop verder bouwt. Dat vraagt code-gebaseerde tooling, geen wegwerp-HTML.

## Slide 11 — AI maakt, wij bewaken  ·  09 · Kwaliteitslat

- Dit is onze definition of done, en het antwoord op "gaat de kwaliteit dan niet onderuit".
- Elke oplevering gaat langs dezelfde checklist, al vanaf de eerste versie.
- Op de checklist staan FortyTwo, B1-taal, alle situaties, consistentie, productcontext en goed genoeg.
- Wat niet klopt gaat terug, en terugkerende missers verwerken we in onze instructies en het design system.
- Ontwikkelaars gebruiken AI massaal en vertrouwen de uitkomst maar half, precies daarom is een vaste lat nodig in plaats van per geval kijken.
- De grens is duidelijk: wij beoordelen op UX en kwaliteit, niet op de juistheid van de code. Dat blijft het werk van dev en AI.

## Slide 12 — Bij digitaal inschrijven sloegen we de afweging over  ·  10 · Voorbeeld

- Bij digitaal inschrijven kunnen ouders die de taal niet spreken hun kind aanmelden via het formulier.
- We zetten AI in om de vertalingen te versnellen. Op snelheid was dat een makkelijke keuze.
- Wat we niet deden: expliciet afwegen of dat verantwoord was. Onzekerheid, impact en verantwoordelijkheid zijn nooit tegen elkaar gezet.
- Daar ging het mis. Niet omdat AI het niet kon, maar omdat we de vraag niet hebben gesteld.
- Dit is een misser van ons, en precies daarom moet de triage een vast moment zijn en geen gevoel.

## Slide 13 — Zonder principes is de triage een gevoel  ·  11 · Strategie

- De triage is geen gevoel alleen, we toetsen haar aan een korte UX-strategie.
- Die beschrijft wat goed is voor onze gebruikers, met visie, principes, problem statement en prioriteiten.
- De principes zijn het belangrijkste, scherpe regels die keuzes sturen en ook AI de goede kant op duwen.
- De modellen zijn slim genoeg, het schaarse is dat wij ze onze context voeren, dus juist deze strategie maakt AI waardevol.
- De valkuil: een strategie die AI in vijf minuten maakt wordt gemiddeld, en dat wil de triage juist voorkomen.

## Slide 14 — Een evolutie op de triple diamond  ·  12 · Triple diamond

- We gooien onze gedeelde taal niet weg.
- Challenge, Problem statement, Solution en Outcome blijven de mijlpalen waarmee we afstemmen met PO en dev.
- Dit is geen heel nieuw proces. Het model zit tussen de mijlpalen, niet eroverheen.

## Slide 15 — De triage knipt de route, niet de mijlpalen  ·  13 · De route

- We sturen niet elk project door de volledige double diamond, de triage knipt de route.
- Een project mag opnieuw door de triage als de onzekerheid of impact groter wordt.
- Wat een project oplevert, zoals data en servicetickets, komt terug bij de triage. Het is een lus, geen rechte lijn.
- Werk komt van twee kanten, uit de backlog van de PO en uit kansen die we zelf uit onderzoek zien. Het blijft een wisselwerking.

## Slide 16 — Je moet mee kunnen bouwen  ·  14 · Vaardigheid

- Durf eerlijk te kiezen, niet elk project verdient Discovery en niet alles mag blind naar Delivery.
- Je hebt genoeg AI- en bouwvaardigheid nodig om een geloofwaardige controle te zijn. Anders keur je iets goed wat je niet kunt beoordelen.
- Probeer bewust meerdere richtingen, het eerste AI-idee is de valkuil. Het klinkt redelijk en daarom stop je met zoeken.
- Het is een spectrum: basisbegrip, geen engineer worden. De kern blijft strategisch en creatief.

## Slide 17 — Je bent niet meer de enige maker  ·  15 · Rol

- Laat los dat wij de enige makers zijn. Onze waarde zit in het bewaken van kwaliteit voor het hele team, niet in het zelf tekenen van elk scherm.
- Dat voelt als verlies, maar er komt iets voor terug. Wie het mechanische werk kwijtraakt, krijgt ruimte om bewuster met kwaliteit bezig te zijn.
- Wisselen tussen sturen en bewaken kost energie, plan Discovery en Delivery apart.
- Het oordeel leunt op ervaring, dus koppel senior en junior. Bescherm bij junioren juist het breed proberen, zodat ze smaak opbouwen.

## Slide 18 — We laten het maken los, niet de kwaliteit  ·  16 · Afronding

- Wat we loslaten, hi-fi-schermen als hoofdresultaat, zware overdrachten en één proces voor alles.
- Wat we bewaken, meerdere richtingen, de kwaliteitslat, onderbouwde besluiten en menselijke verantwoordelijkheid.
- De lat gaat niet omlaag, alleen de manier waarop we hem halen verandert.

## Slide 19 — Oordeel wordt de kracht  ·  17 · Oordeel

- Dit is het waarom achter het hele model.
- Nu uitvoering goedkoop wordt, is ons oordeel wat ons onderscheidt.
- Mijn doel is sneller beslissen wat de moeite waard is, en tegelijk de blijvende ideeën beschermen.
- AI versnelt alles wat na die beslissing komt, dus de winst zit vooraan in het proces.
- Aan het begin worden vage problemen gevormd tot ideeën. Daar is nog weinig ingericht en daar valt het meest te halen.

## Slide 20 — De mens beslist, AI versnelt de rest

- Bij de start kiezen we de route, in Discovery stuur je, in Delivery bewaak je, en de mens blijft verantwoordelijk.
- Challenge gaat door de triage naar Discovery of direct naar Delivery, en alles eindigt in Outcome dat de volgende triage voedt.
- Waar ik feedback op wil: klopt de triage als beslismoment, is de kwaliteitslat streng genoeg, en wat mis je.
- Ik voer nu geen discussie. Ik stuur het deck rond en hoor de reacties graag deze week.
