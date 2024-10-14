
import { Drawer } from "./drawers/drawerBase";
import { Canvas } from "./canvas";
import { Coordinates2D } from "./interfaces/coordinates2DInterface";
import { Player } from "./playerActions";
import {GameInitialization} from './gameInitialization'

//should rename to game builder? and make renderer responsible only for interval stuff?
//yup but later, first just render ball xDD
export class Renderer extends Canvas {
  interval: NodeJS.Timeout;
  config: any;
  player: Player;
  drawer: Drawer;
  gameInit: GameInitialization
//NOW ADD BALL
  constructor(canvasId: string, configObject: any, player: Player, drawer: Drawer, gameInit: GameInitialization) {
    super(canvasId, configObject.canvasConfig);
    this.config = configObject;
    this.player = player;
    this.drawer = drawer;
    this.gameInit = gameInit;
  }

  renderGame() {
    this.gameInit.initGameData()
    this.player.detectMovement();
    this.player.playerAttack(this.config.gameConfig)
    this.interval = setInterval(() => {
      //clear canvas --> 
      this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
      //add player movement --> can it be moved to the player renderer?
      this.player.movePlayer(this.config);


      //draw player -> reusable draw element
      this.drawer.drawElement(this.config.gameConfig.playerData);

      //draw enemies  ---> convert to take two args (config, canvasContext)
      this.drawer.drawEnemies(this.config);

      this.drawer.drawPlayerShoots(this.config.gameConfig.playerBulletsConfig)

      /*
                    
        canvasContext: CanvasRenderingContext2D,
        xCoordinate: number,
        yCoordinate: number,
        elementWidth: number,
        elementHeight: number

         */
      //   Renderer.playerMovement(isRightPressed, isLeftPressed);
      //   Renderer.renderCanvas(canvasContext, this.gameData);
      //  Renderer.detectEnemiesCollision(this.enemiesSetup, this.gameData);
      //  Renderer.renderPlayerLives(this.canvasContext, this.gameData)
      //  Renderer.renderScore( this.canvasContext, this.gameData)
    }, 10);
  }

  renderElement() {}

}
