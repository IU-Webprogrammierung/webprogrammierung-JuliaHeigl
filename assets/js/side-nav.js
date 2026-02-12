const button = document.querySelector('.button-side-nav');
const sideNav = document.querySelector('.side-nav');
const closeBtn = document.querySelector('.button-side-nav-close');

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

