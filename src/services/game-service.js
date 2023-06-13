class GameService {
  static savePlayerName(playerName) {
    localStorage.setItem("playerName", playerName);
  }

  static getPlayerName() {
    return localStorage.getItem("playerName");
  }
}

export default GameService;
