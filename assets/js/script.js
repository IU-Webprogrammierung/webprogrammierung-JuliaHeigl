const toggle = document.querySelector('.nav-mobil');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    toggle.classList.toggle('is-open');
});

