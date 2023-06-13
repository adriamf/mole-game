import { html, css, LitElement } from "lit";

class TopoCell extends LitElement {
  static styles = css`
    .cell {
      width: 100px;
      height: 100px;
      background-color: #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }

    .mole {
      font-size: 40px;
      animation: moleAnimation 0.3s infinite alternate;
    }

    @keyframes moleAnimation {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
  `;

  static properties = {
    hasMole: { type: Boolean },
  };

  constructor() {
    super();
    this.hasMole = false;
  }

  handleClick() {
    if (this.hasMole) {
      const event = new CustomEvent("cell-click", {
        bubbles: true,
        composed: true,
        detail: {
          hasMole: this.hasMole,
        },
      });
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <div class="cell" @click=${this.handleClick}>
        ${this.hasMole ? html`<div class="mole">🦔</div>` : ""}
      </div>
    `;
  }
}

customElements.define("topo-cell", TopoCell);
