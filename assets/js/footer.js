class SiteFooter extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('components/footer.html');
    const html = await response.text();
    this.innerHTML = html;
  }
}

customElements.define('site-footer', SiteFooter);