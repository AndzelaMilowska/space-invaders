import { Canvas } from "../canvas";
import { GameInitialization } from "../game-initialization";
import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { PlayerRenderer } from "./player-renderer";
import {EnemiesRenderer} from "./enemies-renderer"
import {GameplayActions} from "../actions/gameplayActions"
import {UIRenderer} from "./ui-renderer"
import { ApplicationStatus } from "../constants/application-status.enum";

export class Renderer extends Canvas {
  interval: NodeJS.Timeout;
  config: Config;
  gameInit: GameInitialization;
  gameData: GameplayData;
  gameplayActions: GameplayActions;
  playerRenderer: PlayerRenderer;
  enemiesRenderer: EnemiesRenderer;
  uiRenderer: UIRenderer;

  constructor(
    canvasId: string,
    configObject: Config,
    gameData: GameplayData,
    playerRenderer: PlayerRenderer,
    gameInit: GameInitialization,
    enemiesRenderer: EnemiesRenderer,
    gameplayActions: GameplayActions,
    uiRenderer: UIRenderer,
  ) {
    super(canvasId, configObject.canvasConfig);
    this.config = configObject;
    this.gameInit = gameInit;
    this.playerRenderer = playerRenderer;
    this.enemiesRenderer = enemiesRenderer
    this.gameplayActions = gameplayActions
    this.uiRenderer = uiRenderer
    this.gameData = gameData
  }

  renderGame() {

    if (this.gameData.gameStatus === ApplicationStatus.InGame) {
      this.gameInit.initGameData();

      this.interval = setInterval(() => {
        this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
        this.playerRenderer.renderPlayer()
        this.enemiesRenderer.renderEnemies()
        this.uiRenderer.renderUI()
        this.gameplayActions.isWin(this.interval)
      }, 10);
    }

  } 

  renderApplication() {
    if (this.gameData.gameStatus === ApplicationStatus.StartScreen) {
      this.gameData.gameStatus = ApplicationStatus.InGame
      this.renderGame()

    }
    /*
    if (status === startScreen) {
    interval 
      - render buttons
      - render instruction
      - render points
      - listen for click, on click status change, clear interval, run renderGame --> put in gameActions or smth
    } 
    */
  }
}
