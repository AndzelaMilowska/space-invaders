import { Canvas } from "../canvas";
import { GameInitialization } from "../game-initialization";
import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { PlayerRenderer } from "./player-renderer";
import { EnemiesRenderer } from "./enemies-renderer";
import { GameplayActions } from "../actions/gameplayActions";
import { UIRenderer } from "./ui-renderer";
import { ApplicationStatus } from "../constants/application-status.enum";
import { ExplosionRenderer } from "./explosion-renderer";
import { menusConfig } from "../appConfig/menus-config";

export class Renderer extends Canvas {
  interval: NodeJS.Timeout;
  config: Config;
  gameInit: GameInitialization;
  gameData: GameplayData;
  gameplayActions: GameplayActions;
  playerRenderer: PlayerRenderer;
  enemiesRenderer: EnemiesRenderer;
  uiRenderer: UIRenderer;
  explosionsRenderer: ExplosionRenderer;

  constructor(
    canvasId: string,
    configObject: Config,
    gameData: GameplayData,
    playerRenderer: PlayerRenderer,
    gameInit: GameInitialization,
    enemiesRenderer: EnemiesRenderer,
    gameplayActions: GameplayActions,
    uiRenderer: UIRenderer,
    explosionsRenderer: ExplosionRenderer
  ) {
    super(canvasId, configObject.canvasConfig);
    this.config = configObject;
    this.gameInit = gameInit;
    this.playerRenderer = playerRenderer;
    this.enemiesRenderer = enemiesRenderer;
    this.gameplayActions = gameplayActions;
    this.uiRenderer = uiRenderer;
    this.gameData = gameData;
    this.explosionsRenderer = explosionsRenderer;
  }

  renderGame() {
    if (this.gameData.gameStatus === ApplicationStatus.InGame) {
      this.gameInit.initializeGame();

      this.interval = setInterval(() => {
        this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
        this.playerRenderer.renderPlayer();
        this.enemiesRenderer.renderEnemies();
        this.explosionsRenderer.renderExplosions(this.gameData.currentExplosions);
        this.uiRenderer.renderUI();
        this.gameplayActions.isWin();
        this.gameData.currentFrameIndex += 1;
        if (this.gameData.endgameTime >= 50) {
          clearInterval(this.interval);
          this.renderApplication();
        }
      }, 10);
    }
  }

  renderStartScreen() {
    this.uiRenderer.listenForAnyKeyClick(() => {
      this.gameData.gameStatus = ApplicationStatus.InGame;
      clearInterval(this.interval);
      this.renderApplication();
    });

    this.interval = setInterval(() => {
      this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
      this.uiRenderer.renderStartScreen();
    }, 10);
  }

  renderEndScreen(endStatus: ApplicationStatus) {
    let message: string = "";

    if (endStatus === ApplicationStatus.GameLoose) {
      message = menusConfig.gameLoose.text;
      this.uiRenderer.initiateGameEndSprites(this.gameData.enemies[0][0], this.gameData.enemies[this.gameData.enemies.length - 1][0], menusConfig.gameLoose, 3);
    } else if (endStatus === ApplicationStatus.GameWin) {
      message = menusConfig.gameWin.text;
    }

    this.uiRenderer.listenForAnyKeyClick(() => {
      this.gameData.gameStatus = ApplicationStatus.StartScreen;
      clearInterval(this.interval);
      document.location.reload();
    });

    this.interval = setInterval(() => {
      this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
      this.uiRenderer.renderEndScreen(this.gameData.gameStatus);
      this.gameData.currentFrameIndex++;
    }, 10);
  }

  renderApplication() {
    this.gameInit.findHighestScore()
    if (this.gameData.gameStatus === ApplicationStatus.StartScreen) {
      this.renderStartScreen();
    }

    if (this.gameData.gameStatus === ApplicationStatus.InGame) {
      this.renderGame();
    }

    if (this.gameData.gameStatus === ApplicationStatus.GameLoose || this.gameData.gameStatus === ApplicationStatus.GameWin) {
      this.renderEndScreen(this.gameData.gameStatus);
    }
  }
}
