// Header als web component einbinden
class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('components/header.html');
    const html = await response.text();
    this.innerHTML = html;

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




