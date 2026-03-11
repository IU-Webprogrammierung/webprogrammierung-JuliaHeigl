## Projektbeschreibung
Ziel dieses Projekts ist die Erstellung einer statischen Website mit HTML und CSS, die mindestens vier verlinkte Seiten umfasst. Der Fokus liegt auf einer responsiven Gestaltung, die auf Geräten mit unterschiedlichen Bildschirmgrößen sinnvoll nutzbar ist. Darüber hinaus werden grundlegende Anforderungen an Barrierefreiheit unter Berücksichtigung der WCAG-Richtlinien und WAI-ARIA beachtet.

Unter dem Motto „System in die Sache bringen“ wurde eine blogartige Website mit persönlichen Inhalten entwickelt. Neben allgemeinen Seiten wie Impressum, Kontakt und einer 404-Fehlerseite umfasst der Webauftritt mehrere Themenseiten, die unterschiedliche Interessensgebiete abbilden (Wandern, Radfahren, Garten, Gaming online, Gaming offline). 

## Projektstruktur
Die Projektstruktur gliedert sich wie folgt:
````
webprogrammierung-JuliaHeigl/
│
├── assets/
│ ├── css/
│ │ ├── basics.css
│ │ └── themes.css
│ ├── images/
│ ├── js/
│ └── components/
│
├── 404.html
├── gaming-offline.html
├── gaming-online.html
├── garten.html
├── impressum.html
├── index.html
├── kontakt.html
├── quiz.html
├── radfahren.html
└── wandern.html
````
### Ordner
- **assets/css/**
  - `basics.css`: Globales CSS für alle Seiten (Farbschema, Header, Footer, Navigation, globale Komponenten)
  - `themes.css`: Seitenabhängige Styles
- **assets/images/**
  - Bilder, organisiert in Unterordnern je Themenseite
- **assets/js/**
  - JavaScript-Dateien, organisiert in einzelne Dateien je Funktion bzw. Themenseite
- **assets/components/**
  - Header und Footer als Web Components

### Seiten

- **index.html** – Startseite mit Kachelübersicht zu allen Themenseiten  
- **wandern.html** – Wanderberichte zu Gipfeln rund um Bodenmais (`article`)  
- **radfahren.html** – Platzhalterseite (bewusst noch nicht umgesetzt)  
- **garten.html** – Steckbriefe zu Gemüsesorten (`article`, `dl`)  
- **gaming-online.html** – Waffenempfehlungen für Charaktere in Genshin Impact (`table`)  
- **gaming-offline.html** – Tier-List für Konzenre in Terraforming Mars (`fieldset`, `table`)  
- **quiz.html** – Quiz zur Ermittlung einer passenden Themenseite (`form`)
- **impressum.html** – Impressum und rechtliche Hinweise  
- **kontakt.html** – Kontaktformular (`form`)
- **404.html** – Fehlerseite

## Technische Umsetzung

### Verwendete Technologien
- **HTML** für die Seitenstruktur
- **CSS** für Layout und Gestaltung
- **Javascript** für interaktive Funktionen
- **Web Components** für wiederverwendbare Seitenelemente

### Struktur der Website
Die Website besteht aus mehreren Themenseiten, die über die Startseite und Hauptnavigation erreichbar sind.

Der Header enthält die Hauptnavigation und wird zusammen mit dem Footer über Web Components in jede Seite eingebunden.

Eine zusätzliche Seitennavigation wird auf Seiten mit mehreren Abschnitten verwendet (Wandern, Garten, Gaming online).

Der Footer enthält Links zum Impressum und zum Kontaktformular.

### Seitenlayout
Die grundlegende Seitenstruktur wird mithilfe von Flexbox umgesetzt, bei einzelnen Komponenten wird außerdem ein CSS-Grid verwendet.

Die Website bietet ein dunkles Farbschema, dass sich dan den Dark-Mode-Einstellungen des Betriebssystems orientiert.

### Refactoring mit CSS-Framework Tailwind und DaisyUI
Neuer Branch in GitHub für Refactoring mit Tailwind am 11.03.2026 erstellt

## Responsives Konzept
Für die responsive Darstellung werden zwei Breakpoints bei 768 Pixel und 1024 Pixel definiert. Daraus ergeben sich folgende Ansichten:
- **Mobil**: 360px bis 767px Breite
- **Tablet**: 768px bis 1023px Breite
- **Desktop**: 1024px bis 1920px Breite

Die Breakpoints beeinflussen unter anderem die Darstellung der Navigation, die Anzahl der Spalten im Gridlayout sowie die Anordnung einzelner Seitenelemente.

## Barrierefreiheit
Barrierefreiheit nach WCAG-Richtlinien und WAI-ARIA min. auf Level AA
### Wahrnehmbarkeit
- ausreichender Farbkontrast (min. 4.5:1 für normalen Text; Hauptbereich: Standard 16.29:1, Dark Mode 19.03:1)
- Alternativtexte für alle Bilder
- skalierbarer Text (auch bei Zoom auf 200 % noch bedienbar)
- keine reine Farbkodierung von Inhalten

### Bedienbarkeit
- Bedienbarkeit über Tastatur möglich (z. B. Skip-Link, Fokusnavigation)
- einheitliche Navigation auf allen Seiten
- sichtbarer Fokus für interaktive Elemente
- Website auch bei kleinen Bildschirmgrößen sinnvoll nutzbar

### Verständlichkeit
- klare Beschriftung von Links, Buttons und Formularfeldern
- logische Struktur durch semantische HTML-Elemente und Überschriftenhierarchie

### Robustheit
- valides HTML
- kompatibel mit aktuellen Browsern
- korrekter Einsatz von WAI-ARIA-Attributen

## Websiteinhalte
### Header
#### Beschreibung
Header mit Websitetitel
#### Layout
- als Webcomponent auf jeder Seite eingebunden
- zusätzlich Skip-Link, Anzeige nur bei Fokus
#### Responsives Verhalten
- **Desktop:** Logo im Header
- **Tablet und Mobil:** kein Logo

### Hauptnavigation
Hauptnavigation mit Links zu Themenseiten
#### Layout
- *sticky* auf jeder Seite im Header eingebunden
- als `ul` mit `li`/`a` für jeden Link
#### Responsives Verhalten
- **Desktop und Tablet:** als Menübar unterhalb des Headers
- **Mobil:** als aufklappbares Hamburger-Menü rechts oben im Header
#### Interaktive Elemente
- aktuelle Seite hervorgehoben
- ARIA-Attribut `aria-expanded` für geöffnetes/geschlossenes Hamburger-Menü

### Seitennavigation
Seitennavigation für Seiten mit mehreren Abschnitten (Wandern, Garten, Gaming online)
#### Layout
- `ul` mit Links zu den einzelnen Abschnitten
#### Responsives Verhalten
- **Desktop:** Anzeige *sticky* links des Inhaltsbereichs
- **Tablet und Mobil:** als Button oberhalb des Inhaltsbereichs
#### Interaktive Elemente
- Anzeige und Verbergen der Seitennavigation
- ARIA-Attribut `aria-expanded` für geöffnete/geschlossene Seitennavigation

### index.html
#### Beschreibung
Startseite mit Links als Kacheln zu den einzelnen Themenseiten
#### Layout
Jede Kachel als `a`, bestehend aus
- `img`: Bild zur Themenseite, erstellt mit Sketchbook
- Text mit kurzer Beschreibung zur Themenseite
#### Responsives Verhalten
- **Desktop:** Kacheln als dreispaltiges Grid, Beschreibung zur Themenseite wird erst bei Hover/Fokus angezeigt
- **Tablet:** Kacheln als zweispaltives Grid, Beschreibung zur Themenseite wird immer angezeigt
- **Mobil:** Kacheln als einspaltives Grid, Beschreibung zur Themenseite wird immer angezeigt

### wandern.html
#### Beschreibung
Themenseite Wandern mit Wanderberichte zu den Seven Summits von Bodenmais
#### Layout
Jeder Wanderbericht als `article`, bestehend aus
  - `img`:  Foto des Gipfels, Standard 300px, für High-DPI mit `srcset` 600px
  - `p`: Wanderbericht
#### Responsives Verhalten
- **Desktop:** `img` abwechselnd links und rechts neben dem `p`
- **Tablet:** `img` immer links
- **Mobil:** `p` unterhalb des `img`

### radfahren.html
#### Beschreibung
Themenseite Radfahren, Platzhalterseite für zukünftige Inhalte

### garten.html
#### Beschreibung
Themenseite Garten mit Steckbriefe zu verschiedenen Gemüsesorten
#### Layout
Jede Gemüsesorte als `article`, bestehend aus
  - `img`:  erstellt mit Sketchbook
  - `dl`: mit Informationen zur Gemüsesorte
#### Responsives Verhalten
- **Desktop:** `img` abwechselnd links und rechts neben der `dl`
- **Tablet:** `img` immer links
- **Mobil:** `dl` unterhalb des `img`

### gaming-online.html
#### Beschreibung
Themenseite Genshin Impact mit Tabelle mit passenden Charakteren zu Waffen
#### Layout
Für jede Waffenart eine `table`.
#### Responsives Verhalten
- **Desktop und Tablet:** Standard-`table`
- **Mobil:** `table` als gestapelte Tabelle
#### Interaktive Elemente
- Highlighting passender Waffen über `data`-Attribute
- EventListener für Hover, Fokus und Klick
- dynamische Klassenänderung für Hervorhebung

### gaming-offline.html
#### Beschreibung
Themenseite Terraforming Mars mit Tier List zu Konzernen
#### Layout
- `fieldset` mit Filter für Tierlist (3 Filteroptionen)
- `table` mit Auflistung aller Konzerne (5 Spalten)
#### Responsives Verhalten
- **Desktop und Tablet:** Filter nebeneinander angeordnet
- **Mobil:** Filter untereinander, `table` als gestapelte Tabelle
#### Interaktive Elemente
- Filter (für Spalten Rating, Erweiterungen und Schwierigkeitsgrad): als Checkboxen 
- Sortierung `table`(nur für Desktop und Tablet): mit Klick auf Spaltenkopf, sortiert nach Alphabet bzw. Ranking mit `sort()`

### quiz.html
#### Beschreibung
Quiz, um eine passende Themenseite herauszufinden
#### Layout
- `form` für Fragenbereich
- `fieldset` für jede einzelne Frage mit Radiobuttons für Antwortoptionen
- `ul` für Anzeige passender Themen als Kacheln analog Startseite
#### Responsives Verhalten
- **Desktop und Tablet:** Ergebnisbereich mit Bild links und Text rechts
- **Mobil:** Ergebnisbereich mit Text unterhalb des Bildes
#### Interaktive Elemente
- abhängig von den Antworten im Quiz wird das hidden-Attribut einzelner Themenvorschläge deaktiviert
- Anzeige im Ergebnisbereich unterhalb des Quizzes nach Absenden des Formulars
- negative Ergebnisanzeige, falls keine passende Themenseite gefunden wird

### impressum.html
#### Beschreibung
Impressum und rechtliche Hinweise

### kontakt.html
#### Beschreibung
Kontaktformular, aktuell kein tatsächliches Absenden der Kontaktanfrage
#### Layout
- `form` mit `fieldset` mit vier Input-Feldern für Kontaktanfrage
#### Responsives Verhalten 
- **Desktop und Tablet:** Input rechts von Label
- **Mobil:** Input unterhalb Label
#### Interaktive Elemente
- beim Absenden des Formulars wird eine Bestätigungsmeldung angezeigt, sofern die Validierung erfolgreich ist

### 404.html
#### Beschreibung
Fehlerseite für fehlerhaften Seitenaufruf

### Footer
#### Beschreibung
Footer mit Links zu Impressum und Kontakt
#### Layout
- als Webcomponent auf jeder Seite eingebunden

## Qualitätssicherung (Lighthouse, Screenreader, etc.)
- **verwendeter Browser**: Entwicklung und grundlegende Tests mit Firefox; zusätzliche finale Tests mit Microsoft, um die Kompatibilität mit der Blink-Engine sicherzustellen 
- **Lighthouse**: In den Bereichen *Accessability* und *Best Practices* ergab eine Überprüfung der Website jeweils 100 %.
- **Screenreader**: 

