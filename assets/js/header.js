class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('components/header.html');
    const html = await response.text();
    this.innerHTML = html;

    const toggle = this.querySelector('.nav-mobil');
    const nav = this.querySelector('.main-nav');

    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      toggle.classList.toggle('is-open');
    });
  }
}

customElements.define('site-header', SiteHeader);
