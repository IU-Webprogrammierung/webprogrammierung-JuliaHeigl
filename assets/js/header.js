// Header als web component einbinden
class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('components/header.html');
    const html = await response.text();
    this.innerHTML = html;

    /* aktuelle Seite setzen */
    const links = this.querySelectorAll('.main-nav a');
    const aktuelleSeite = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
      const linkHref = link.getAttribute('href');

      if (linkHref === aktuelleSeite) {
        link.setAttribute('aria-current', 'page');
      }
    });

    // ARIA-Attribute setzen
    const toggle = this.querySelector('.nav-mobil');
    const nav = this.querySelector('.main-nav');

    if (!toggle || !nav) return;

    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      toggle.classList.toggle('is-open');

      const isOpen = toggle.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
}

customElements.define('site-header', SiteHeader);




