import { html, LitElement } from 'lit';
import { GFT_BUTTON_STYLE } from './gft-button-styles.js';

export class GftButton extends LitElement {
  static get styles() {
    return GFT_BUTTON_STYLE;
  }

  static properties = {
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <button @click=${this._onClick} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }

  _onClick() {
    this.dispatchEvent(
      new CustomEvent('gft-button-click', { bubbles: true, composed: true })
    );
  }
}

customElements.define('gft-button', GftButton);
