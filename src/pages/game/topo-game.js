import { html, css, LitElement } from "lit";
import "../../components/topo-cell/topo-cell.js";
import GameService from "../../services/game-service.js";

class TopoGame extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
      background-color: #f5f5f5;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      margin-bottom: 10px;
    }

    button {
      font-size: 18px;
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }

    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      margin-top: 20px;
    }
  `;

  static properties = {
    playerName: { type: String },
    gameStarted: { type: Boolean },
    score: { type: Number },
    difficulty: { type: String },
    isPalying: { type: Boolean },
  };

  constructor() {
    super();
    this.playerName = GameService.getPlayerName();
    this.gameStarted = false;
    this.score = 0;
    this.difficulty = "bajo";
    this.cellsCount = 9;
    this.isPlaying = false;
    this.timerId = 0;
  }

  handleNameInputChange(event) {
    this.playerName = event.target.value;
  }

  handleStartGame() {
    /*
    if (this.playerName) {
      this.gameStarted = true;
      this.startMoleTimer();
    }*/
    if (this.isPlaying) return;
    this.isPlaying = true;
    console.log("hola");
    this.score = 0;
    this.updateMaxScore();
    this.startGame();
  }

  startGame() {
    this.startMoleTimer();
    //this.playAnimation();
    /*
    setTimeout(() => {
      this.stopGame();
    }, this.getDifficultyTime());
    */
  }

  stopGame() {
    this.isPlaying = false;
    setTimeout(() => {
      clearInterval(this.timerId);
      this.gameStarted = false;
    });
  }

  updateMaxScore() {
    if (this.score > this.maxScore) {
      GameService.saveMaxScore(this.score);
      this.maxScore = this.score;
    }
  }

  handleCellClick(event) {
    if (event.detail.hasMole) {
      this.score += this.getScoreByDifficulty();
      event.detail.hasMole = false;
    }
  }

  handleDifficultyChange(event) {
    this.difficulty = event.target.value;
  }

  getScoreByDifficulty() {
    switch (this.difficulty) {
      case "bajo":
        return 10;
      case "medio":
        return 20;
      case "alto":
        return 30;
      default:
        return 0;
    }
  }

  startMoleTimer() {
    this.timerId = setInterval(() => {
      const cells = this.shadowRoot.querySelectorAll("topo-cell");
      const randomIndex = Math.floor(Math.random() * cells.length);

      cells.forEach((cell, index) => {
        cell.hasMole = index === randomIndex;
      });
    }, this.getDifficultyTime());
    /*
    setTimeout(() => {
      clearInterval(timer);
      this.gameStarted = false;
    }, 10000);*/
  }

  getDifficultyTime() {
    switch (this.difficulty) {
      case "bajo":
        return 1000;
      case "medio":
        return 750;
      case "alto":
        return 500;
      default:
        return 0;
    }
  }

  render() {
    return html`
      <h1>Bienvenido, ${this.playerName}!</h1>
      <p>Puntuación: ${this.score}</p>
      <!--<p>Puntuación máxima: ${this.maxScore}</p>-->
      <div>
        <label for="difficulty">Nivel de dificultad:</label>
        <select
          id="difficulty"
          @change=${(e) => (this.difficulty = e.target.value)}
        >
          <option value="bajo">Bajo</option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>
      </div>
      <div class="container">
        ${Array.from({ length: this.cellsCount }).map(
          () => html`
            <topo-cell @cell-click=${this.handleCellClick}></topo-cell>
          `
        )}
      </div>
      <button @click=${this.isPlaying ? this.stopGame : this.handleStartGame}>
        ${this.isPlaying ? "Parar" : "Jugar"}
      </button>
    `;
  }
}

customElements.define("topo-game", TopoGame);
