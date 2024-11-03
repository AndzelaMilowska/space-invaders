import { Canvas } from "../canvas";
import { GameInitialization } from "../game-initialization";
import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { PlayerRenderer } from "./player-renderer";
import {EnemiesRenderer} from "./enemies-renderer"
import {GameplayActions} from "../actions/gameplayActions"

export class Renderer extends Canvas {
  interval: NodeJS.Timeout;
  config: Config;
  gameInit: GameInitialization;
  gameData: GameplayData;
  gameplayActions: GameplayActions;
  playerRenderer: PlayerRenderer;
  enemiesRenderer: EnemiesRenderer

  constructor(
    canvasId: string,
    configObject: Config,
    playerRenderer: PlayerRenderer,
    gameInit: GameInitialization,
    enemiesRenderer: EnemiesRenderer,
    gameplayActions: GameplayActions
  ) {
    super(canvasId, configObject.canvasConfig);
    this.config = configObject;
    this.gameInit = gameInit;
    this.playerRenderer = playerRenderer;
    this.enemiesRenderer = enemiesRenderer
    this.gameplayActions = gameplayActions
  }

  renderGame() {
    this.gameInit.initGameData();

    this.interval = setInterval(() => {
      this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
      this.playerRenderer.renderPlayer()
      this.enemiesRenderer.renderEnemies()
      this.gameplayActions.isWin(this.interval)
    }, 10);
  } 
}
