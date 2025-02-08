import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { ApplicationStatus } from "../constants/application-status.enum";
import { UiActions } from "./ui-actions";

export class GameplayActions extends UiActions{
  gameConfig: Config;
  gameData: GameplayData;

  constructor(gameConfig: Config, gameData: GameplayData) {
    super()
    this.gameConfig = gameConfig;
    this.gameData = gameData;
  }

  isWin() {
    if (this.gameConfig.enemiesConfig.enemiesCount === this.gameData.killsCount) {
      this.gameData.gameStatus = ApplicationStatus.GameWin
    } else if(this.gameData.player.lives < 1) {
      this.gameData.gameStatus = ApplicationStatus.GameLoose
    }
    if (this.gameData.gameStatus === ApplicationStatus.GameLoose || this.gameData.gameStatus === ApplicationStatus.GameWin) {
      this.gameData.endgameTime++
    }
  }

}
