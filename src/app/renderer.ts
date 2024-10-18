import { Drawer } from "./drawers/drawer-base";
import { Canvas } from "./canvas";
import { Coordinates2D } from "./interfaces/coordinates-2D.interface";
import { Player } from "./player-actions";
import { GameInitialization } from "./game-initialization";
import { Config } from "./appConfig/game-config";
import { GameData } from "./interfaces/game-data.interface";
import { CharacterConfig } from "./interfaces/character-config.interface";
import { Table2D } from "./interfaces/table-2D.interface";

//should rename to game builder? and make renderer responsible only for interval stuff?
//yup but later, first make collisions and enemiesfire
//also do something with all configGame and drawer taking this config as args in every function!
export class Renderer extends Canvas {
  interval: NodeJS.Timeout;
  config: Config;
  player: Player;
  drawer: Drawer;
  gameInit: GameInitialization;

  constructor(canvasId: string, configObject: any, player: Player, drawer: Drawer, gameInit: GameInitialization) {
    super(canvasId, configObject.canvasConfig);
    this.config = configObject;
    this.player = player;
    this.drawer = drawer;
    this.gameInit = gameInit;
  }

  renderGame() {
    this.gameInit.initGameData();
    this.player.detectMovement(); //move to gameInit
    this.player.playerAttack(this.config.gameData); //momve to gameInit //rename to detectPlayerAttack or smth

    this.interval = setInterval(() => {
      //clear canvas -->
      this.canvasContext.clearRect(0, 0, this.config.canvasConfig.x, this.config.canvasConfig.y);
      //add player movement --> can it be moved to the player renderer?
      this.player.movePlayer(this.config);

      //make drawer class get config object for instance creation
      //separate into multiple drawer classes for each type of object? player, enemies etc? naaaah idk
      //or separate into player class etc?
      this.drawer.drawElement(this.config.gameData.player, this.config.playerConfig);
      this.drawer.drawEnemies(this.config);
      this.detectEnemiesCollision(this.config.gameData, this.config.enemiesConfig, this.config.enemyConfig)
      this.drawer.drawShots(this.config.bulletsConfig_01, this.config.gameData.playerShots);

      //here detect collisions
    }, 10);
  }

  renderElement() {
    //draw it
    //calculate collision
  }

//put it into separate class   ---> create separate classes for player, enemies, bullets etc
  detectEnemiesCollision(gameData: GameData, enemiesConfig: Table2D, enemyConfig: CharacterConfig): void {
    let playerShots: Coordinates2D[] = gameData.playerShots
    for (let i=0; i< playerShots.length; i++) {
      for (let c = 0; c < enemiesConfig.columnsCount; c++) {
        for (let r = 0; r < enemiesConfig.rowsCount; r++) {
          const b = gameData.enemies[c][r];
          if (
            b.lives === 1 &&
            playerShots[i].x > b.coordinates.x &&
            playerShots[i].x < b.coordinates.x + enemyConfig.size.x &&
            playerShots[i].y > b.coordinates.y &&
            playerShots[i].y < b.coordinates.y + enemyConfig.size.y 
          ) {
            b.lives = 0;
            //convert to slice! dont mutate arrays 
            playerShots.splice(i, 1) //
            gameData.score++;
            gameData.killsCount++;
            return
          }
          // put win condition function into separate class --> gameInit convert?  --> game status? win/ loose/ start screen
          // if (
          //   enemiesTable.enemiesColumnCount * enemiesTable.enemiesRowCount === gameData.killsCount
          // ) {
          //   alert("YOU WIN, CONGRATULATIONS!");
          //   document.location.reload();
          //   // clearInterval(this.interval);
          // }
        }
      }
    }
    
  }


}
