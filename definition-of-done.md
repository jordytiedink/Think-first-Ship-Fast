# Definition of done — delivery

In Delivery leidt AI, wij bewaken. De lat is een vaste definition of done die elke oplevering passeert voordat het naar dev of productie gaat. We passen 'm altijd toe, juist in het begin, want dat geeft een consistent signaal waarmee we de AI zelf verbeteren.

Een oplevering is klaar wanneer alle punten kloppen:

- [ ] **FortyTwo.** Gebruikt bestaande tokens en componenten, geen hardcoded waarden of zelfgemaakte varianten. Een afwijking is bewust en onderbouwd.
- [ ] **Taal.** Alle microcopy is B1, neutraal en inclusief. Ook knoppen, foutmeldingen, empty states en tooltips zijn nagelopen, niet alleen de hoofdtekst.
- [ ] **Volledigheid.** Alle states zijn uitgewerkt: leeg, laden, fout, succes en lange of afwijkende inhoud. Geen scherm dat alleen in de ideale situatie klopt. Kan de gebruiker het scherm zelf instellen, dan gaat de lat over goede standaardkeuzes en gedrag bij rare combinaties, niet over élke mogelijke state.
- [ ] **Consistentie.** Gedrag, interactie en terminologie komen overeen met vergelijkbare plekken in het product. De gebruiker merkt geen breuk met wat hij al kent.
- [ ] **Productcontext.** Past binnen onze productcontext en wijkt daar niet van af, tenzij dat een expliciete keuze is.
- [ ] **Goed genoeg.** Het lost het probleem op en haalt de lat. We polijsten niet verder dan nodig: is het goed genoeg, dan is het goed.
- [ ] **Doorlopend, bij AI-features.** Bouwen we een AI-feature voor de gebruiker zelf, en niet AI als ons gereedschap, dan is "klaar" niet eenmalig. Bij oplevering staat de bewaking al klaar: we weten hoe we drift, fouten en mogelijke schade ná livegang signaleren en bijsturen.

Wie tekent af: wij, als human-in-the-loop. Wat niet klopt gaat terug, of de afwijking wordt expliciet vastgelegd. En we houden bij waar de AI structureel zakt: dat patroon voeden we terug in onze prompts, context en het design system, zodat de volgende opleveringen de lat vaker meteen halen.
