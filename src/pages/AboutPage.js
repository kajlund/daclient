export default class AboutPage extends HTMLElement {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });

      const styles = document.createElement("style");
      styles.textContent = `
        .container {
          max-width: 60rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .page {
          opacity: 0;
          transform: scale(0);
          transition: opacity 1s ease-in;
        }
        .page.activated {
          opacity: 1;
          transform: scale(1);
        }
      `
      this.root.appendChild(styles);

      const template = document.getElementById("about-page-template");
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    }

    connectedCallback() {
      const page = this.root.querySelector('.page');
      page.classList.add('activated');

    }
    disconnectedCallback() {
      const page = this.root.querySelector('.page');
      page.classList.remove('activated');
    }
}

customElements.define("about-page", AboutPage);
