import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";

export class GameplayActions {
  gameConfig: Config;
  gameData: GameplayData;

  constructor(gameConfig: Config, gameData: GameplayData) {
    this.gameConfig = gameConfig;
    this.gameData = gameData;
  }

  isWin(interval: NodeJS.Timeout) {
    if (this.gameConfig.enemiesConfig.rowsCount * this.gameConfig.enemiesConfig.columnsCount === this.gameData.killsCount) {
      alert("YOU WIN, CONGRATULATIONS!");
      document.location.reload();
      clearInterval(interval);
    } else if(this.gameData.player.lives < 1) {
      alert("YOU DIED");
      document.location.reload();
      clearInterval(interval);
    }
  }

  runGame() {

  }
}
