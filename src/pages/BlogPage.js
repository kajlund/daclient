export default class BlogPage extends HTMLElement {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });

      const styles = document.createElement("style");
      styles.textContent = ``
      this.root.appendChild(styles);

      const template = document.getElementById("blog-page-template");
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);
    }

    connectedCallback() {
    }
}

customElements.define("blog-page", BlogPage);
