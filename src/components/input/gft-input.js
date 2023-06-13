import { LitElement, html } from 'lit';
import { GFT_INPUT_STYLE } from './gft-input-styles.js';

class GftInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
    };
  }

  static get styles() {
    return GFT_INPUT_STYLE;
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    const inputChangeEvent = new CustomEvent('gft-input-change', {
      bubbles: true,
      composed: true,
      detail: inputValue,
    });
    this.dispatchEvent(inputChangeEvent);
  }

  render() {
    return html`
      <label>${this.label}</label>
      <input
        type="text"
        placeholder="Add new note"
        .value=${this.value}
        @input=${this.handleInputChange}
      />
    `;
  }
}

customElements.define('gft-input', GftInput);
