import { Config } from "../appConfig/game-config";
import { GameplayData } from "../appConfig/game-data";
import { EnemiesDrawer } from "../drawers/enemies-drawer";
import { EnemiesActions } from "../actions/enemies/enemies-actions";
import { CollisionDetector } from "../actions/collision-detector";
import {EnemyCollisionDetector} from '../actions/enemies/enemy-collision-detector'
import { CharacterData } from "../interfaces/character-data.interface";
import { AttacksRenderer } from "./attacks-renderer";

export class EnemiesRenderer extends EnemiesActions{
  enemiesDrawer: EnemiesDrawer;
  enemiesActions: EnemiesActions;
  collisionDetector: CollisionDetector;
  attacksRenderer: AttacksRenderer

  constructor(
    config: Config,
    gameData: GameplayData,
    enemiesDrawer: EnemiesDrawer,
    attacksRenderer: AttacksRenderer
  ) {
    super(gameData, config)
    this.config = config;
    this.gameData = gameData;
    this.enemiesDrawer = enemiesDrawer;
    this.attacksRenderer = attacksRenderer
  }

  renderEnemies() {
    this.enemiesDrawer.drawEnemies(this.gameData, this.config.enemiesConfig);
    this.runEnemiesActions();
    this.iterateEnemies((enemy:CharacterData) => {
      enemy.bulletCountdown--
      EnemyCollisionDetector.detectEnemyCollision(this.gameData, enemy)
      this.spawnBullet(enemy, this.gameData.enemyShots)
    });
    this.attacksRenderer.renderBullets(this.gameData.enemyShots, this.gameData)
  }



}
