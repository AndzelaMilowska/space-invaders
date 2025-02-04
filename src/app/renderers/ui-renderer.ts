import { UIDrawer } from "../drawers/ui-drawer";
import { GameData } from "../interfaces/game-data.interface";
import { UIConfigInterface } from "../interfaces/ui-config.interface";
import { menusConfig } from "../appConfig/menus-config";
import { enemiesConfig } from "../appConfig/enemies-table-config";
import { SpriteData } from "../interfaces/sprite-data.interface";
import { UiActions } from "../actions/ui-actions";
import { ApplicationStatus } from "../constants/application-status.enum";

export class UIRenderer extends UiActions {
  uiDrawer: UIDrawer;
  gameData: GameData;
  uiConfig: UIConfigInterface;

  constructor(uiDrawer: UIDrawer, gameData: GameData, uiConfig: UIConfigInterface) {
    super();
    this.uiDrawer = uiDrawer;
    this.gameData = gameData;
    this.uiConfig = uiConfig;
  }

  renderUI() {
    this.uiDrawer.drawScore(this.gameData.score, this.uiConfig.scoreConfig);
    this.uiDrawer.drawPlayerLives(this.gameData.player.lives, this.uiConfig.playerLives);
  }

  renderStartScreen() {
    this.uiDrawer.drawStartScreenTextElement(menusConfig.title);
    this.uiDrawer.drawScoreAdvancesTable(enemiesConfig.enemiesTable, menusConfig.scoreAdvancesTable);
    this.uiDrawer.drawStartScreenTextElement(menusConfig.startGame);
    this.uiDrawer.drawStartScreenTextElement(menusConfig.howToPlayInfo);
  }

  renderEndScreen(gameStatus: ApplicationStatus) {
    let status = menusConfig.gameLoose;

    this.uiDrawer.drawStartScreenTextElement(menusConfig.backToMenu);
    if (gameStatus === ApplicationStatus.GameLoose) {
      status = menusConfig.gameLoose;
      this.uiDrawer.drawSprites(
        this.endGameMenuSprites,
        [this.gameData.enemies[1][1].type, this.gameData.enemies[3][3].type],
        this.gameData
      );
    } else if (gameStatus === ApplicationStatus.GameWin) {
      status = menusConfig.gameWin;
    }
    this.uiDrawer.drawStartScreenTextElement(status);
  }
}
