import { UIDrawer } from "../drawers/ui-drawer";
import { GameData } from "../interfaces/game-data.interface";
import { UIConfigInterface } from "../interfaces/ui-config.interface";

export class UIRenderer {
    uiDrawer: UIDrawer;
    gameData: GameData;
    uiConfig: UIConfigInterface
    constructor(uiDrawer: UIDrawer, gameData: GameData, uiConfig: UIConfigInterface) {
        this.uiDrawer = uiDrawer
        this.gameData = gameData
        this.uiConfig = uiConfig
    }

  renderUI() {
    this.uiDrawer.drawScore(this.gameData.score, this.uiConfig.scoreConfig)
    this.uiDrawer.drawPlayerLives(this.gameData.player.lives, this.uiConfig.playerLives)
  }
}
