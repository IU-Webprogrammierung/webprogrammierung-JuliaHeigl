// Zuordnung Fragen zu Themenseiten
const quizZuordnung = {
  // Frage Ernährung
  "moehren": ["garten"],

  // Frage Gaming
  "controller": ["gaming-online"],
  "programmierer": ["gaming-online"],

  // Frage Wandern
  "wegziel": ["wandern"],
  "gewaltmarsch": ["wandern"],

  // Frage Brettspiele
  "komplexe-spielanleitung": ["gaming-offline"],
  "spielefundus": ["gaming-offline"],

  // Frage Sport
  "sportpensum": ["radfahren"]
};

// Auswertung Quiz
const quizForm = document.querySelector(".quiz");
const ergebnisSection = document.querySelector(".quiz-ergebnis");
const ergebnisKacheln = document.querySelectorAll(".ergebnis-grid li");
const keinErgebnisSection = document.querySelector(".quiz-kein-ergebnis");

quizForm.addEventListener("submit", function(e) {

  e.preventDefault();

  // Ergebnisbereich verstecken
  ergebnisSection.hidden = true;
  keinErgebnisSection.hidden = true;

  // Ergebnisanzeige zurücksetzen
  ergebnisKacheln.forEach(kachel => {
    kachel.hidden = true;
    }
  );

  // Alle ausgewählten Antworten sammeln
  const formAntworten = new FormData(quizForm);
  const ausgewaehlt = Array.from(formAntworten.values());

  // Set für passende Themen
  const passendeThemen = new Set();

  ausgewaehlt.forEach(antwort => {
    if (quizZuordnung[antwort]) {
      quizZuordnung[antwort].forEach(thema => passendeThemen.add(thema));
    }
  });

  // Falls kein Thema passt: negative Ergebnis-Meldung ausgeben
  if (passendeThemen.size === 0) {
    keinErgebnisSection.hidden = false;

    // Scroll zum Ergebnis
    keinErgebnisSection.scrollIntoView({ behavior: "smooth" });

  } else {

  // Falls mindestens ein passendes Thema gefunden wurde: Kacheln/Links zu Themenseiten einblenden
    ergebnisSection.hidden = false;

    passendeThemen.forEach(thema => {
      const link = document.querySelector(`.ergebnis-${thema}`);
      if (link) {
        link.hidden = false;
      }
    });

    // Scroll zum Ergebnis
    ergebnisSection.scrollIntoView({ behavior: "smooth" });
  }

});