import { LitElement, html, css } from "lit";
import { Router } from "@lit-labs/router";

import "./pages/home/home-page.js";
import "./pages/game/topo-game.js";

class AppLoader extends LitElement {
  static get properties() {
    return { router: { type: Array } };
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;
    }
    footer {
      position: fixed;
      bottom: 0;
      margin-bottom: 3%;
    }
  `;

  constructor() {
    super();
    this.router = this._getRoutes();
    console.log(this.routes);
  }

  _getRoutes() {
    return new Router(this, [
      { path: "/game", render: () => html`<topo-game></topo-game>` },
      { path: "*", render: () => html`<home-page></home-page>` },
    ]);
  }

  render() {
    return html`
      <header>Toca al Topo</header>
      <main>${this.router.outlet()}</main>
      <footer>by adrián martínez fernández</footer>
    `;
  }
}

customElements.define("app-loader", AppLoader);
