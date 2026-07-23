# Think First, Ship Fast

*Ons werkmodel voor productontwikkeling met AI. Deel 1 beschrijft de triage. Deel 2 bevat het UX-strategiesjabloon dat de triage onderbouwt en AI van de juiste context voorziet.*

## Waarom dit model

AI wordt vooral ingezet om sneller te bouwen. Veel uitvoerend ontwikkelwerk is voorspelbaar en toetsbaar, bijvoorbeeld op consistentie, toegankelijkheid, robuustheid, snelheid en wet- en regelgeving. Daar kan AI goed bij helpen. In een gecontroleerd experiment van GitHub schreven ontwikkelaars met Copilot een taak 55 procent sneller af, en McKinsey meet voor het schrijven van code een tijdwinst van 35 tot 45 procent.

Maar productontwikkeling begint vóór het bouwen. Eerst bepalen we welk probleem we oplossen, voor wie we dat doen en welke richting daarbij past. Dat werk draait om onzekerheid, onvolledige informatie en botsende belangen. Het vraagt om menselijk oordeel.

Hier ontstaat veel van de productwaarde. AI kan opties verkennen en patronen aanwijzen. Mensen kiezen de richting en blijven verantwoordelijk voor de gevolgen.

Dat geldt voor design én development. Voordat er code ligt, zijn keuzes nodig over architectuur, techniek, schaalbaarheid, beveiliging en onderhoud. Ook die keuzes vragen om goed oordeel.

Goed werk vooraf bepaalt of we het juiste probleem oplossen en een passende richting kiezen:

* het probleem achter de oorspronkelijke vraag vinden
* het probleem opnieuw formuleren en helder uitleggen
* begrijpen hoe gebruikers denken en wat een oplossing met hen doet
* scherpe keuzes maken en een toekomstbeeld neerzetten
* bepalen wat we bewust niet bouwen
* herkennen wat gebruikers accepteren en wat we daarom niet veranderen
* kansen vinden die gebruikers niet zelf benoemen, maar wel waarderen

Dit werk vraagt om:

* originaliteit, smaak en merkgevoel
* begrip van mensen, markt, cultuur en context
* oordeel, timing en terughoudendheid
* aandacht voor uitzonderingen en kwetsbare situaties
* echte betrokkenheid bij de gebruiker

Kwaliteit is lastig te vatten en het is meer dan een mooi scherm. Katie Dill, hoofd design bij Stripe, laat zien dat vakmanschap en afwerking directe businesswaarde hebben.

Zonder duidelijke richting valt AI terug op veelvoorkomende patronen. Het resultaat oogt degelijk, maar is vaak voorspelbaar en inwisselbaar. Het gevaar is niet dat AI alles slecht maakt, maar dat het middelmaat sneller en overtuigender maakt. Onderzoek in Science Advances (Doshi en Hauser, 2024) laat dit zien. Teksten met AI-hulp worden als creatiever beoordeeld, maar gaan onderling steeds meer op elkaar lijken.

Daarom bepalen we per project hoeveel denkwerk nodig is voordat we bouwen. Veel onzekerheid, grote gevolgen of een duidelijke kans op onderscheid vragen om Discovery. Bij weinig onzekerheid en een duidelijke oplossing volstaat Delivery.

AI versnelt de uitvoering. Wij zetten ons oordeel in waar het verschil maakt. Dat is Think First, Ship Fast.

## Deel 1: het triage-model

*De triage stuurt elk project naar Discovery of Delivery. Het is een doorontwikkeling van onze triple diamond, geen vervanging.*

### Kernprincipe

AI verkort de uitvoering, maar neemt geen verantwoordelijkheid over. Wij bepalen het probleem, kiezen de richting en bewaken de kwaliteit.

AI ondersteunt ons bij onderzoek, alternatieven, prototypes en uitvoering. De productbeslissing blijft van ons.

Daarom krijgt niet elk project hetzelfde proces. Een triage aan het begin bepaalt hoeveel Discovery nodig is en wanneer we naar Delivery gaan. De triple diamond blijft onze gedeelde kaart. De route erdoorheen verschilt per project.

### De triage

Elk project begint met een intake. Dat is geen volledige Discovery, maar een lichte eerste stap. We brengen de Challenge scherp in beeld, kijken naar wat we al weten, en doen bijvoorbeeld een expert review en een korte blik op de markt. Het team legt vast:

* hoe de Challenge nu is beschreven
* voor wie het probleem bestaat
* wat de gebruiker of organisatie wil bereiken
* wat we al weten en wat nog onzeker is
* welke risico’s, beperkingen en voorwaarden belangrijk zijn
* welke uitkomst we willen bereiken

Zo staat er altijd een basis voordat we kiezen. De intake doen we bij elk project, ook bij het snelste werk.

De triage vindt direct na de Challenge plaats. UX, PO en development doen dit samen. Het team legt de gekozen route en de onderbouwing vast.

Daarna bepaalt de triage de route. De vraag is niet óf we nadenken, want de intake doen we altijd. De vraag is hoeveel Discovery er bovenop moet.

**Hoeveel Discovery hebben we nodig voordat we bouwen?**

Zie het als een schuif, niet als twee deuren. De schuif kan helemaal naar links staan, maar nooit op nul. Bij veel zekerheid blijft het bij de intake en kunnen we snel bouwen. Bij veel onzekerheid of grote impact gaan we de volledige Discovery in. Delivery betekent nooit dat we nadenken overslaan, maar dat de intake genoeg was om te bouwen.

Een project kan later opnieuw door de triage gaan. Dat gebeurt zodra nieuwe informatie de onzekerheid, impact of risico’s vergroot.

Voor we een route kiezen, doen we twee korte controles.

* **Is er iets te kiezen?** Soms staat al vast dát we iets moeten doen, bijvoorbeeld door wetgeving of een crisis. De keuze gaat dan vooral over de uitvoering. De kwaliteitseisen blijven hetzelfde.
* **Is het verantwoord?** Kan de oplossing iemand schaden, uitsluiten of verkeerd indelen? Dan kan de uitkomst zijn dat we iets niet bouwen of anders oplossen. Dat is een besluit over verantwoordelijkheid, niet alleen over UX.

De keuze rust vooral op drie signalen:

* **onzekerheid.** Begrijpen we het probleem, de gebruiker en de mogelijke oplossing goed genoeg?
* **impact.** Hoe groot en herstelbaar zijn de gevolgen van een verkeerde keuze?
* **onderscheid.** Kan een goede oplossing ons herkenbaar maken, of voldoet een bestaand patroon?

Discovery ligt voor de hand als:

* het probleem onduidelijk is of de opdracht belangrijke informatie mist
* de gevolgen voor gebruikers groot of moeilijk terug te draaien zijn
* de gebruiker zich in een kwetsbare situatie bevindt, ook als het werk eenvoudig lijkt
* een goede oplossing ons duidelijk kan onderscheiden
* belangrijke bronnen ontbreken of elkaar tegenspreken

Een betaalherinnering voor een gezin met geldzorgen kan bijvoorbeeld eenvoudig lijken. De mogelijke impact maakt toch Discovery nodig.

Delivery ligt voor de hand als:

* het gaat om operationeel werk, zoals instellingen, inloggen of een standaard betaalstap
* er al een passend voorbeeld of bewezen patroon bestaat
* de gevolgen van een verkeerde keuze beperkt en herstelbaar zijn
* de oplossing duidelijk genoeg is om te bouwen
* goed genoeg hier daadwerkelijk goed genoeg is

Deze signalen vormen geen automatische scorekaart. Meerdere signalen versterken de reden voor Discovery. Eén groot veiligheidsrisico of één moeilijk herstelbaar gevolg kan al voldoende zijn.

We onderbouwen de triage met een korte UX-strategie. Die beschrijft wat goed is voor onze gebruikers en bevat principes waaraan we beslissingen toetsen.

Zo gebruikt het hele team dezelfde meetlat. Ook ‘alleen Delivery’ of ‘dit bouwen we niet’ wordt daarmee een uitlegbare keuze.

### Discovery: de volledige double diamond

Discovery volgt de volledige double diamond als de onzekerheid, impact of kans op onderscheid daarom vraagt. We verkennen eerst breed en kiezen daarna bewust een richting.

AI helpt bij:

* het vinden van patronen in bestaande informatie
* het zichtbaar maken van verschillende richtingen
* het opsporen van aannames en tegenargumenten
* het maken van concepten waarop we kunnen reageren
* het ordenen en samenvatten van informatie

Wij bepalen welk probleem centraal staat, welke richting klopt en welke keuzes verantwoord zijn.

Discovery levert geen verzameling schermen op, maar een onderbouwd besluit:

* dit is het echte probleem en dit is het bewijs daarvoor
* dit bouwen we wel en dit bouwen we bewust niet
* deze richting lost het probleem op en daarom kiezen we ervoor
* dit blijft onzeker en controleren we na de bouw

Conclusies uit een AI-synthese blijven herleidbaar naar de oorspronkelijke bronnen. Een patroon dat AI signaleert is een aanwijzing, geen bewijs.

### Onderzoek snel houden

Niet al het werk doorloopt zelf de triage. Doorlopend onderzoek, het design system en lessen uit experimenten leveren juist input voor nieuwe keuzes.

Als Delivery sneller wordt, kan onderzoek de nieuwe vertraging worden. We voorkomen dat niet door ieder onderzoek af te raffelen. We organiseren onderzoek doorlopend, kiezen per vraag de juiste diepgang en gebruiken AI voor het ordenen van informatie.

* **Werk doorlopend.** Bouw één centrale inzichtenbibliotheek die actueel blijft. Leg bij elk inzicht de bron, datum, context en passende tags vast. Zo begint Discovery niet steeds vanaf nul. AI helpt om snel relevante inzichten terug te vinden.
* **Bepaal de diepgang per vraag.** Niet iedere Discovery vraagt om nieuw veldwerk. Begin bij wat er al is, zoals de inzichtenbibliotheek, tickets van de servicedesk, Productboard en gebruiksdata. Plan pas nieuwe interviews als een belangrijke onzekerheid blijft bestaan.
* **Laat AI ordenen.** Groeperen, vergelijken en patronen vinden kost tijd. AI kan dat werk versnellen. Wij controleren de bronnen, letten op uitzonderingen en geven betekenis aan de uitkomst.

Een AI-synthese is een werkhypothese, geen feit. We toetsen belangrijke patronen aan het bronmateriaal en letten bewust op minder voorkomende of tegenstrijdige signalen.

Sneller onderzoek mag nooit betekenen dat we contact met gebruikers vervangen door aannames. Synthetische persona’s, door AI gemaakte gebruikersprofielen, kunnen helpen om onderzoeksvragen aan te scherpen. Ze vervangen echte gebruikers niet.

### Delivery: snel prototypen

Delivery hoeft niet door de volledige double diamond als de richting al duidelijk is. AI helpt om snel iets werkends te maken. Mensen bepalen, controleren en dragen de verantwoordelijkheid.

Maak zo vroeg mogelijk een werkende versie. Daarmee toetsen we gedrag, inhoud en technische haalbaarheid. Gebruik vanaf het begin realistische data en inhoud. Een lay-out die in Figma klopt, kan alsnog breken zodra er echte inhoud in staat.

We controleren daarna:

* uitzonderlijke situaties
* samenhang met bestaande patronen
* toegankelijkheid
* teksten en interacties
* technische en inhoudelijke risico’s
* wijzigingen in patronen die we moeten vastleggen

Prototypen in code hoort bij Delivery, niet bij Discovery. We gebruiken code om een gekozen oplossing te toetsen voordat development die verder uitwerkt.

Het doel is een prototype dat grotendeels bruikbaar is als productiebasis, zodat een developer erop kan voortbouwen. Dat vraagt om op code gebaseerde tooling en aansluiting op de echte productomgeving, niet om losse wegwerp-HTML.

Delivery levert het volgende op:

* een werkend prototype dat laat zien wat de oplossing doet en hoe die werkt
* een korte overdracht, omdat het prototype de belangrijkste beslissingen al zichtbaar maakt
* vastgelegde wijzigingen in patronen, componenten of richtlijnen

### De kwaliteitslat in Delivery

In Delivery helpt AI bij het maken. Wij bewaken de kwaliteit en nemen het besluit. Elke oplevering doorloopt dezelfde checklist voordat die naar development of productie gaat.

Uit de Stack Overflow-enquête van 2024 blijkt waarom die controle nodig is. 76 procent van de ontwikkelaars gebruikt AI, maar slechts 43 procent vertrouwt op de juistheid ervan, en bijna de helft vindt AI zwak bij complexe taken.

Gebruik de checklist al bij de eerste versie. Zo zijn de kwaliteitseisen vanaf het begin onderdeel van de opdracht aan AI.

Een oplevering is pas klaar als alle punten zijn afgevinkt.

* [ ] **FortyTwo.** De oplossing gebruikt bestaande tokens en componenten. De code bevat geen vaste waarden of eenmalige varianten. Elke afwijking is bewust gekozen en onderbouwd.
* [ ] **Taal.** Alle teksten in de interface zijn geschreven op B1-niveau, neutraal en inclusief. Dit geldt ook voor knoppen, foutmeldingen, lege schermen en hulpuitleg.
* [ ] **Volledigheid.** Alle belangrijke situaties zijn uitgewerkt, zoals leeg, laden, fout, succes en lange of afwijkende inhoud. Bij instelbare schermen zijn ook de standaardkeuzes en onwaarschijnlijke combinaties gecontroleerd. We hoeven niet iedere theoretische situatie uit te werken.
* [ ] **Consistentie.** Gedrag, interactie en woorden sluiten aan op vergelijkbare plekken in het product. De gebruiker hoeft een bekende taak niet opnieuw te leren.
* [ ] **Productcontext.** De oplossing past bij de rol die ze binnen het product en het bredere proces heeft. We wijken alleen af als daar een duidelijke reden voor is.
* [ ] **Goed genoeg.** Het probleem is opgelost en de gebruiker kan de taak uitvoeren. De kwaliteits- en veiligheidsrisico’s zijn aanvaardbaar. De checklist is compleet. Extra verfijning zonder aantoonbare gebruikerswaarde is niet nodig.
* [ ] **Doorlopende controle bij AI-functies.** Gebruikt de gebruiker zelf een AI-functie? Dan is ‘klaar’ geen eenmalig moment. Voor de livegang is duidelijk hoe we veranderingen, fouten en mogelijke schade signaleren. Ook weten we wie ingrijpt en hoe we de functie bijsturen.

Mensen blijven verantwoordelijk voor het besluit en de gevolgen. Menselijke controle is daarom geen laatste vinkje, maar onderdeel van het hele proces.

UX beoordeelt de gebruikerservaring en productkwaliteit. Development blijft verantwoordelijk voor de juistheid, veiligheid en onderhoudbaarheid van de code. AI draagt zelf geen verantwoordelijkheid.

Werk dat niet aan de kwaliteitslat voldoet, gaat terug. Een bewuste afwijking leggen we vast. We houden ook bij waar AI steeds tekortschiet. Die patronen verwerken we in de instructies, context en het design system. Zo neemt de kwaliteit van volgende opleveringen toe.

### Sneller leveren betekent vaker itereren

Sneller leveren mag, maar niet met de belofte dat het in één keer klopt. Wie sneller levert, levert minder volledig. Daarom koppelen we snelheid aan iteratie. We zetten iets neer, meten, en verbeteren in een volgende ronde.

Elke iteratie verhoogt de zekerheid over de kwaliteit. De eerste versie geeft misschien tien procent zekerheid, na een paar rondes zit je een stuk hoger. Zo is snelheid geen risico, maar een manier om sneller te leren.

Dat is ook ons verhaal naar de organisatie. We gaan sneller leveren, op voorwaarde dat we meerdere iteraties doen. Honderd procent zekerheid vooraf bestond toch niet, dat was schijnzekerheid. Echte zekerheid komt pas als mensen het gebruiken.

Het DORA-rapport van Google uit 2024 toont de keerzijde van ongecontroleerde snelheid. Bij 25 procent meer AI-gebruik daalde de stabiliteit van releases met ruim 7 procent, terwijl driekwart van de ontwikkelaars zich juist productiever voelde. Fin van Intercom laat zien dat het ook goed kan gaan. Ze verdubbelden hun producttempo en gingen 39 procent sneller van idee naar productie. De codekwaliteit zakte eerst toen AI meer ging schrijven en kroop daarna weer omhoog toen ze er strak op stuurden.

### Valideren door te leveren

Soms lever je bewust met minder zekerheid en doe je de Discovery erna. Je zet iets werkends neer en leert uit echt gebruik of de keuze klopte. Een soort Discovery na Delivery.

Dit doen we alleen onder twee voorwaarden:

* we bedenken vooraf hoe we meten of het goed genoeg is. Welke signalen kijken we na en wanneer grijpen we in. Zonder die meetlat weet je achteraf niets.
* we doen het alleen als het verantwoord is. Raakt het een kwetsbare groep of zijn de gevolgen moeilijk terug te draaien, dan is snel live zetten geen optie.

### Werk komt terug bij de triage

Elke oplevering levert nieuwe informatie op. Gebruiksdata, servicetickets en gedrag voeden de triage voor volgend werk.

Meet wat er voor de gebruiker veranderde. Denk aan een probleem dat sneller wordt opgelost of een taak die vaker lukt. Meet niet hoeveel AI we hebben ingezet.

De Outcome laat ook zien of de gekozen route klopte. Nieuwe informatie kan aantonen dat meer Discovery nodig is. Een terugkerend en duidelijk patroon kan juist betekenen dat een volgende verbetering direct naar Delivery kan.

Werk komt uit twee richtingen. De PO brengt werk in vanuit de backlog. UX brengt kansen in vanuit onderzoek, analyse en eigen observaties. Een goed idee hoeft niet te wachten tot iemand erom vraagt.

Grote vraagstukken die meerdere kanalen of schermen raken, knippen we eerst op in behapbare delen.

Ook stoppen, uitfaseren of verwijderen is werk. Vooral de uitvoering en communicatie vragen dan om een bewuste keuze.

### Vertaling naar de triple diamond

De triple diamond blijft onze gedeelde kaart. De vier mijlpalen blijven staan.

* Challenge
* Problem statement
* Solution
* Outcome

De triage bepaalt de route en de hoeveelheid werk tussen deze mijlpalen.

* de triage vindt direct na de Challenge plaats
* in Discovery gaan we van Challenge naar Problem statement en daarna naar Solution
* in Delivery starten we vanuit een gekozen Solution en werken we toe naar Outcome
* operationeel werk slaat uitgebreide Discovery over en gaat na de Challenge vrijwel direct naar Delivery
* bij nieuwe onzekerheid of grotere impact gaat het project opnieuw door de triage

Challenge, Problem statement, Solution en Outcome blijven de gedeelde taal voor afstemming met PO, development en stakeholders.

### Wat we loslaten en wat we bewaken

**We laten los**

* hi-fi-schermen als belangrijkste resultaat
* zware, statische overdrachten
* het idee dat iedere klus hetzelfde proces nodig heeft
* het idee dat snelheid belangrijker is dan een goede keuze

**We bewaken**

* meerdere oplossingsrichtingen in Discovery
* een vaste kwaliteitslat in Delivery
* besluiten met een heldere onderbouwing
* menselijke verantwoordelijkheid voor richting, kwaliteit en gevolgen
* een eerlijke keuze tussen Discovery en Delivery
* ruimte voor handwerk en originaliteit, ook als dat meer tijd kost

### Wat dit van ons vraagt

* **Eerlijk kiezen.** Niet ieder project heeft Discovery nodig. Tegelijk mag geen project zonder beoordeling naar Delivery. Dat vraagt om ervaring, een goede afweging en de moed om operationeel werk niet groter te maken dan nodig.
* **Een technische en AI-basis.** Je moet met AI kunnen prototypen en op hoofdlijnen begrijpen wat er in de code gebeurt. Je hoeft geen engineer te worden. Onze kern blijft strategisch, conceptueel en creatief. De één gaat dieper in code, de ander in vakmanschap en strategie.
* **Bewust alternatieven verkennen.** AI levert in seconden een aannemelijke oplossing. Daardoor kiezen we gemakkelijk te vroeg. Verken meerdere richtingen voordat je een besluit neemt.
* **Accepteren dat UX niet de enige maker is.** PO en development kunnen ook schermen en prototypes maken. UX bewaakt daarom de kwaliteit van het geheel. Onze waarde zit niet alleen in pixels.
* **Vlot schakelen.** In Discovery gebruik je AI om te verkennen en uit te dagen. In Delivery gebruik je AI om te maken en controleer je de uitkomst. Je moet herkennen welke houding op welk moment nodig is.
* **Ervaring doorgeven.** Dit model leunt sterk op oordeel. Junioren herkennen nog niet altijd waar een interface wringt of waarom een interactie wel of niet werkt. Koppel junioren aan senioren en geef ze ruimte om breed te verkennen. Zo bouwen ze ervaring en smaak op.

### Voor het UX-team

Twee werkwijzen zijn hierbij belangrijk:

* **Bewijs boven mening.** Probeer je eigen oplossing eerst te weerleggen voordat je die verdedigt. Neem naar reviews en gesprekken met stakeholders een prototype mee dat mensen zelf kunnen verkennen. Gebruik het om samen vragen te beantwoorden en bewijs te verzamelen. Onderbouw ‘dit is niet goed genoeg’ met bewijs, niet met een mening. ‘Vijftig procent van de gebruikers is ontevreden over de vertaling’ is een sterker verhaal dan ‘ik vind als UX’er dat dit niet goed genoeg is’. Met data hoef je niet te hopen dat de product owner je op je woord gelooft.
* **Leg kwaliteit vast in gedeelde tools.** Als PO en development geloofwaardige schermen kunnen maken, is UX niet langer de enige maker. Maak FortyTwo daarom leesbaar voor AI-modellen. Beschrijf componenten, tokens, patronen, richtlijnen en productprincipes in de codetools. Zo begint iedereen vanuit dezelfde kwaliteitsbasis. De modellen zijn slim genoeg. Het schaarse is dat wij ze onze product- en ontwerpcontext voeren. Een leesbaar design system en een heldere strategie zijn daarom veel waard.

Dit werkt alleen als de organisatie meebeweegt. Als we op een nieuwe manier werken maar op oude resultaten worden beoordeeld, blijven losse initiatieven ontstaan. Beoordeel teams daarom op kwaliteit, onderbouwde keuzes, leervermogen en gebruikersresultaten, niet op het aantal schermen of documenten.

## Deel 2: het UX-strategiesjabloon

*De UX-strategie is de meetlat voor de triage. Ze helpt kiezen tussen Discovery en Delivery en geeft AI de context om passende voorstellen te doen.*

Vul ieder onderdeel in en verwijder daarna de cursieve uitleg. Houd de strategie kort, bij voorkeur één tot twee A4’s.

Het schrijven van de strategie is zelf Discovery-werk. Het is geen formulier dat je even invult. Jij bepaalt de richting. AI kan helpen bij het ordenen en aanscherpen, maar schrijft de strategie niet zelfstandig. Dan ontstaat al snel precies de generieke richting die dit model moet voorkomen.

### Visie

*Beschrijf in twee of drie zinnen wat een goede ervaring voor de gebruiker betekent en welke richting je kiest. Vermijd vage doelen zoals ‘een betere UX’. Formuleer een standpunt dat over een jaar nog steeds bruikbaar is.*

...

### Principes

*Formuleer drie tot vijf duurzame vuistregels die over projecten heen gelden. Ieder principe moet helpen bij een concrete beslissing. Beschrijf gewenst gedrag, geen functies. Drie scherpe principes zijn beter dan vijf vage.*

* **[Principe].** [Leg in één zin uit wat dit principe betekent.]
* **[Principe].** [...]

### Gebruikersdoelen

*Beschrijf kort wie de gebruiker is, wat die wil bereiken en waar die nu vastloopt. Beperk dit tot maximaal een halve pagina. Benoem welke bronnen je gebruikt en wat nog onzeker is. Belangrijke aannames moeten herleidbaar zijn naar een bron of gesprek.*

...

**Drie belangrijkste Jobs-to-be-Done**

*Beschrijf de drie belangrijkste taken in deze vorm: als [rol] wil ik [taak], zodat [reden]. Kies alleen taken die bepalend zijn voor het initiatief.*

* als [rol] wil ik [taak], zodat [reden]

**Huidige werkwijze**

*Beschrijf hoe de gebruiker de taak nu uitvoert. Benoem waar mensen afhaken, fouten maken of extra hulp nodig hebben.*

* [Huidige werkwijze.]

### Problem statement

*Beschrijf het kernprobleem in één alinea. Wie ervaart welk probleem? Waardoor ontstaat het? Wat gebeurt er als we niets doen? Beschrijf het probleem, nog niet de oplossing.*

...

### Obstakels en randvoorwaarden

*Beschrijf wat de aanpak beïnvloedt of begrenst. Denk aan technische beperkingen, wettelijke eisen, gevoeligheden en uitzonderlijke situaties. Wees concreet over wat lastig is.*

* [Obstakel of randvoorwaarde.]

### Strategische prioriteiten

*Bepaal één tot drie thema’s waarop dit initiatief inzet. Deze prioriteiten gelden voor dit initiatief en staan los van de duurzame principes. Geef iedere prioriteit een duidelijke titel, een korte onderbouwing, een UX-outcome, succescriteria en concrete initiatieven.*

#### [Titel van de prioriteit]

[Leg in één of twee zinnen uit waarom dit een prioriteit is.]

**UX-outcome**

*Beschrijf wat de gebruiker straks ervaart en anders kan doen. Bijvoorbeeld ‘De beheerder twijfelt niet bij het instellen van ...’.*

**Succescriteria**

*Beschrijf waaraan je ziet dat het probleem beter wordt opgelost. Gebruik waar mogelijk observeerbaar gedrag, feedback of andere concrete signalen.*

**Initiatieven**

* [Concrete actie of oplossing die bijdraagt aan deze prioriteit.]

### Hoe kunnen we?

*Zet de kernproblemen om in open vragen die ruimte geven aan verschillende oplossingen. Begin iedere vraag met ‘Hoe kunnen we ...’. Maak de vraag breed genoeg om alternatieven te verkennen en scherp genoeg om richting te geven.*

* hoe kunnen we [kans]?

## Bronnen

* GitHub, *The Impact of AI on Developer Productivity: Evidence from GitHub Copilot* (2023). https://arxiv.org/abs/2302.06590
* McKinsey, *Unleashing developer productivity with generative AI* (2023). https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/unleashing-developer-productivity-with-generative-ai
* Doshi en Hauser, *Generative AI enhances individual creativity but reduces the collective diversity of novel content*, Science Advances (2024). https://www.science.org/doi/10.1126/sciadv.adn5290
* Google DORA, *Accelerate State of DevOps Report 2024* (2024). https://dora.dev/research/2024/dora-report/
* Fin (Intercom), *2× – nine months later* (2026). https://ideas.fin.ai/p/2x-nine-months-later
* Stack Overflow, *2024 Developer Survey: AI* (2024). https://survey.stackoverflow.co/2024/ai
* Katie Dill (Stripe), *Craft and beauty: the business value of form in function*, Stripe Sessions (2024). https://stripe.com/sessions/2024/craft-and-beauty-the-business-value-of-form-in-function
