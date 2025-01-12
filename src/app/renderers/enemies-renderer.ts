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
    this.enemiesActions.moveEnemiesTable();
    this.enemiesDrawer.drawEnemies(this.config, this.gameData);
    this.detectEnemiesCollision(this.gameData, this.config.enemiesConfig, this.config.enemyConfig);
    this.attacksDrawer.drawShots(this.config.bulletsConfig_02, this.gameData.enemyShots);
  }

  detectEnemiesCollision(gameData: GameData, enemiesConfig: Table2D, enemyConfig: CharacterConfig): void {
    let playerShots: Coordinates2D[] = gameData.playerShots;
    for (let c = 0; c < enemiesConfig.columnsCount; c++) {
      for (let r = 0; r < enemiesConfig.rowsCount; r++) {
        const enemy = gameData.enemies[c][r];
        this.collisionDetector.detectCollision(playerShots, enemy, enemyConfig, () => {
          gameData.score = gameData.score + enemyConfig.scorePrice;
          gameData.killsCount++;
        });
      }
    }
  }
}
