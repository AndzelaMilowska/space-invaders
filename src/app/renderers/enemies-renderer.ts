import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { AttackDrawer } from "../drawers/attack-drawer";
import { Drawer } from "../drawers/base-drawer";
import { EnemiesDrawer } from "../drawers/enemies-drawer";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { GameData } from "../interfaces/game-data.interface";
import { Table2D } from "../interfaces/table-2D.interface";
import { Player } from "../player-actions";

export class EnemiesRenderer {
  enemiesDrawer: EnemiesDrawer;
  attacksDrawer: AttackDrawer;
  drawer: Drawer;
  player: Player;
  config: Config;
  gameData: GameplayData;

  constructor(
    drawer: Drawer,
    player: Player,
    config: Config,
    gameData: GameplayData,
    enemiesDrawer: EnemiesDrawer,
    attacksDrawer: AttackDrawer
  ) {
    this.drawer = drawer;
    this.player = player;
    this.config = config;
    this.gameData = gameData;
    this.enemiesDrawer = enemiesDrawer;
    this.attacksDrawer = attacksDrawer;
  }

  renderEnemies() {
    this.enemiesDrawer.drawEnemies(this.config, this.gameData);
    this.detectEnemiesCollision(this.gameData, this.config.enemiesConfig, this.config.enemyConfig);
    this.attacksDrawer.drawShots(this.config.bulletsConfig_01, this.gameData.playerShots);
  }

  detectEnemiesCollision(gameData: GameData, enemiesConfig: Table2D, enemyConfig: CharacterConfig): void {
    let playerShots: Coordinates2D[] = gameData.playerShots;
    for (let i = 0; i < playerShots.length; i++) {
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
            playerShots.splice(i, 1); //
            gameData.score++;
            gameData.killsCount++;
            return;
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
