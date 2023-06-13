import { LitElement, html, css } from "lit";
import "../../components/button/gft-button.js";
import GameService from "../../services/game-service.js";

class HomePage extends LitElement {
  static styles = css`
    /* Estilos CSS para home-page */
  `;

  static properties = {
    playerName: { type: String },
    error: { type: String },
  };

  constructor() {
    super();
    this.playerName = "";
    this.error = "";
  }

  handleInputChange(event) {
    this.playerName = event.target.value;
    this.error = "";
  }

  handleStartGame() {
    if (this.isValidPlayerName()) {
      GameService.savePlayerName(this.playerName);
      // Redirigir a la página de juego
      window.location.href = "/game";
    } else {
      this.error = "Por favor, introduce un nombre válido";
    }
  }

  isValidPlayerName() {
    return this.playerName.trim() !== "";
  }

  render() {
    return html`
      <h1>Bienvenido al juego "Toca al Topo"</h1>
      <label for="playerName">Introduce tu nombre:</label>
      <input
        id="playerName"
        type="text"
        .value=${this.playerName}
        @input=${this.handleInputChange}
      /><!--
      <button @click=${this.handleStartGame}>Iniciar juego</button>-->
      <gft-button @click=${this.handleStartGame}>Iniciar juego</gft-button>
      <p>${this.error}</p>
    `;
  }
}

customElements.define("home-page", HomePage);
