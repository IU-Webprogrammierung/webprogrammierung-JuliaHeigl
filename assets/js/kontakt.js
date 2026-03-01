const form = document.querySelector('.kontakt-formular');
const nachrichtGesendet = document.querySelector('.kontakt-form-gesendet');     // Erfolgsnachricht unterhalb Formular

form.addEventListener('submit', (event) => {
    // Neuladen verhindern
    event.preventDefault();

    // Erfolgsmeldung ausblenden
    nachrichtGesendet.hidden = true;

    // Validierung required-Attribute und E-Mail-Adresse
    if (form.checkValidity()) {
        // Erfolgsnachricht anzeigen
        nachrichtGesendet.hidden = false;

        // zur Erfolgsnachricht scrollen
        nachrichtGesendet.scrollIntoView({ behavior: 'smooth' });

        // Formularfelder zurücksetzen
        form.reset();

    }
});
