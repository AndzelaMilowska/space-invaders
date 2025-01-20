import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { AttackDrawer } from "../drawers/attack-drawer";
import { Drawer } from "../drawers/base-drawer";
import { EnemiesDrawer } from "../drawers/enemies-drawer";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { GameData } from "../interfaces/game-data.interface";
import { Table2D } from "../interfaces/table-2D.interface";
import { Player } from "../actions/player/player-actions";
import { EnemiesActions } from "../actions/enemies/enemies-actions";
import { CollisionDetector } from "../actions/collision-detector";
import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";

export class EnemiesRenderer {
  enemiesDrawer: EnemiesDrawer;
  attacksDrawer: AttackDrawer;
  drawer: Drawer;
  player: Player;
  config: Config;
  gameData: GameplayData;
  enemiesActions: EnemiesActions;
  collisionDetector: CollisionDetector;

  constructor(
    drawer: Drawer,
    player: Player,
    config: Config,
    gameData: GameplayData,
    enemiesDrawer: EnemiesDrawer,
    attacksDrawer: AttackDrawer,
    enemiesActions: EnemiesActions,
    collisionDetector: CollisionDetector
  ) {
    this.drawer = drawer;
    this.player = player;
    this.config = config;
    this.gameData = gameData;
    this.enemiesDrawer = enemiesDrawer;
    this.attacksDrawer = attacksDrawer;
    this.enemiesActions = enemiesActions;
    this.collisionDetector = collisionDetector;
  }

  renderEnemies() {
    //temp commented out
    this.enemiesDrawer.drawEnemies(this.gameData, this.config.enemiesConfig);
    this.enemiesActions.runEnemiesActions();
    this.detectEnemiesCollision(this.gameData, this.config.enemiesConfig);
    // this.attacksDrawer.drawShots(this.config.bulletsConfig_02, this.gameData.enemyShots);
  }

  //put in separated class for enemies collision
  detectEnemiesCollision(gameData: GameData, enemiesConfig: EnemiesTable2D): void {
    let playerShots: Coordinates2D[] = gameData.playerShots;
    for (let row = 0; row < gameData.enemies.length; row++) {
      for (let column = 0; column < gameData.enemies[row].length; column++) {
        const enemy = gameData.enemies[row][column];
        this.collisionDetector.detectCollision(playerShots, enemy, () => {
          gameData.score = gameData.score + enemy.type.scorePrice;
          gameData.killsCount++;
        });
      }
    }
  }
}
