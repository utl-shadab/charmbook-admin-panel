class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
                <p>Copyright © 2024 Utl It Solution</p>
            </footer>
    `;
    }
  }
  customElements.define("my-footer", MyFooter);