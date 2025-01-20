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
    //change enemiesCount to count down into zero so is win if enemiesCount === 0 
    // if (this.gameConfig.enemiesConfig.enemiesCount === this.gameData.killsCount) {
    //   alert("YOU WIN, CONGRATULATIONS!");
    //   document.location.reload();
    //   clearInterval(interval);
    // } else if(this.gameData.player.lives < 1) {
    //   alert("YOU DIED");
    //   document.location.reload();
    //   clearInterval(interval);
    // }
  }

  runGame() {

  }
}
