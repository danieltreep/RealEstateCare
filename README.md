# RealEstateCare WebApp voor Mobiel
Een app gemaakt voor RealEstateCare zodat inspecteurs op locatie een rapport kunnen opstellen. Bekijk de site met de resolutie van een mobiel met de browser inspector.

## Hoe werkt de app?
### Inloggen
- Zodra de login pagina wordt geladen wordt er een gebruikersnaam en wachtwoord opgeslagen in de lokale opslag.
- Als de gebruiker inlogt worden deze gegevens vergeleken met de gegevens in de lokale opslag door de check login service. 
- Als de gegevens niet overeen komen komt er een foutmelding.
- Als de gegevens kloppen wordt de gebruiker doorgestuurd naar de hoofdpagina en wordt de login status geupdate in de state.
- De inloggegevens zijn: 
	- Gebruikersnaam: **admin**
	- Wachtwoord: **admin**

### Inspecties toevoegen
- De inspecteur kan per doel kiezen wat er van toepassing is.
- Als een doel wordt aangevinkt komen de rest van de invul velden tevoorschijn.
- Alle invulvelden zijn gelinkt met een v-model naar een lege inspectie object. Bij het invullen wordt dit geupdate.
- Het ID van de inspectie wordt bepaald als de inspectie wordt geladen door naar alle andere inspectie ID's te kijken en 1 bij de hoogste ID op te tellen. Dit zorgt voor een uniek ID.
- Als de inspecteur het rapport opslaat wordt de ingevulde inspectie toegevoegd aan de inspecties in de state.

### Inspecties lezen
- Bij het laden van de app worden de inspecties opgehaald uit de database door de getInspectionService en opgeslagen in state.
- Over de inspecties array wordt geloopt en worden de ID en datum getoond. 
- Daarbij wordt er een functie meegeven die de ID meegeeft als en op geklikt wordt.
- Deze functie haalt de gekozen inspectie op en toont de details.

### Sorteren
- De sorteer functie leest de datum dat de inspectie is toegevoegd.
- De ID's worden gesorteerd op basis van welke value er mee wordt gegeven aan de functie.

### Inspecties aanpassen
- Als er op aanpassen wordt geklikt wordt de ID meegegeven aan de parameters van de URL.
- Op basis van de ID uit parameter wordt er bij het laden van het component een inspectie uit de state gehaald.
- Deze inspectie wordt vervolgens geladen als oud inspectie object.
- De data in dit object is gelinkt d.m.v. v-models met de invulvelden waardoor de data als is ingevuld.
- Bij het opslaan wordt naar de index gezocht van de inspectie in de inspecties array die aangepast moet worden en op deze plek wordt de inspectie vervangen.

## Beperkingen
### Foto's uploaden
Op dit moment worden foto's alleen getoond omdat ze al opgeslagen zijn. Er is een upload button maar de foto's worden niet opgeslagen omdat de app niet verbonden is met een database. 

### Inspectie uploaden
Inspectie worden geüpload naar de state maar niet naar een database. Dit betekent dat ze bij herladen weer verdwijnen.

### Inloggen
Er is een inlog systeem gesimuleerd met lokale opslag dus de gegevens komen niet uit een database.

### PDF
Het is mij niet gelukt PDF's te integreren. Er wordt nu gelinkt naar JPG bestanden van de documenten.

## Veiligheid
- Bij de file upload is het alleen mogelijk om foto's te uploaden. 
- User input wordt door Vue HTML veilig gemaakt om een XSS te voorkomen. 
- De dependencies zijn op het moment van uploaden allemaal up to date waardoor er minder kwetsbaarheden zijn. 
- De foutmelding bij het inloggen is generiek en verklapt niet wat er fout is.

### Wat kan er beter?
De inlog is op dit moment niet veilig omdat de gegevens uit de lokale opslag gelezen kunnen worden. Verder is het wachtwoord niet beveilligd met een hash. 

## Toegankelijkheid
De WCAG richtlijnen met betrekking tot de app:
- De opties zijn te bedienen met het toetsenbord
- Alle foto's / logo hebben een alternatieve tekst
- Icon's zijn ARIA Hidden en de file upload heeft een ARIA beschrijving
- Informatie is gescheiden en daardoor duidelijker
- Links zijn duidelijk weergegeven

### Wat kan er beter?
- De witte tekst op de groene achtergrond wordt door de WAVE tool beschouwt als laag contrast
- Inzoomen lijkt niet mogelijk

## Gebruiksvriendelijkheid
De 10 heuristieken met betrekking tot de app:
- Het taalgebruik is duidelijk en hetzelfde als in de Case
- De gebruiker kan terug met de terug knop
- De zoekbalk is op de vetrouwde plek midden bovenin de pagina
- Er staat niet meer tekst dan nodig

### Wat kan er beter?
- Er zou een lader getoond kunnen worden als er een inspectie wordt geselecteerd 
- Er zouden meer instellingen voor bijvoorbeeld tekstgrootte gemaakt kunnen worden

### Style guide en Best practices
Bij het coderen heb ik zo goed mogelijk gelet op de style guide en best practices van Vue. Denk hierbij aan het benoemen van componenten. Deze heb ik zo duidelijk mogelijk gemaakt en als ze een relatie hadden tot een ander component ben ik met hetzelfde woord begonnen. 
Verder de volgorde van de options API waarmee in het script wordt gewerkt. Dus bijvoorbeeld als eerste de naam van het component en als laatste de methods. Daarnaast heb ik gelet op naming conventions als kebab-case, camelCase en PascalCase en heb props een type gegeven.
