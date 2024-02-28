export default class HomePage extends HTMLElement {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });

      const styles = document.createElement("style");
      styles.textContent = ``
      this.root.appendChild(styles);

      const template = document.getElementById("home-page-template");
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    }

    connectedCallback() {
    }
}

customElements.define("home-page", HomePage);
