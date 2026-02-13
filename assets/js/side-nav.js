const button = document.querySelector('.button-side-nav');            // Button Inhalt anzeigen
const sideNav = document.querySelector('.side-nav');                  // ganze Seitennavigation
const navLinks = document.querySelectorAll('.side-nav a');            // einzelner Link
const closeBtn = document.querySelector('.button-side-nav-close');    // Button Seitennavigation schließen

// Seitennavigation öffnet sich mit Klick auf Button
button.addEventListener('click', () => {
  const isOpen = sideNav.classList.toggle('is-open');
  button.setAttribute('aria-expanded', isOpen);
});

// Seitennavigation schließt mit Klick auf Bereich außerhalb der Navigation
sideNav.addEventListener('click', (e) => {
  if (e.target === sideNav) {
    sideNav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }
});

// Button zum Schließen der Seitennavigation
closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
});

// Seitennavigation schließt mit einem Klick auf einen Link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideNav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  });
});


