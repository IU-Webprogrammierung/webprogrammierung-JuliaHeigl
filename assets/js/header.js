// Header als web component einbinden
class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('components/header.html');
    const html = await response.text();
    this.innerHTML = html;

    /* aktuelle Seite setzen */
    const links = this.querySelectorAll('nav a');
    const aktuelleSeite =
      window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
      if (link.getAttribute('href') === aktuelleSeite) {
        link.setAttribute('aria-current', 'page');
      }
    });

    /* Hamburger-Menü */
    const toggle = this.querySelector('#nav-mobil');
    const nav = this.querySelector('#nav-list');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {

      nav.classList.toggle('hidden');

      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);

      toggle.textContent = expanded ? '☰' : '✕';

    });
  }
}

customElements.define('site-header', SiteHeader);




