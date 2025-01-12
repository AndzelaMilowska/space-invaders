import { Config } from "../appConfig/game-config";
import { Drawer } from "../drawers/base-drawer";
import { Player } from "../actions/player/player-actions";
import { GameplayData } from "../appConfig/game-data";
import { AttackDrawer } from "../drawers/attack-drawer";
import {CollisionDetector} from '../actions/collision-detector'

export class PlayerRenderer {
    drawer: Drawer;
    player: Player;
    config: Config;
    gameData: GameplayData;
    attacksDrawer: AttackDrawer;
    collisionDetector: CollisionDetector
  
    constructor(drawer: Drawer, player: Player, config: Config, gameData: GameplayData, attacksDrawer: AttackDrawer, collisionDetector: CollisionDetector) {
      this.drawer = drawer;
      this.player = player;
      this.config = config;
      this.gameData = gameData;
      this.attacksDrawer = attacksDrawer;
      this.collisionDetector = collisionDetector

    }

  renderPlayer() {
    const { enemyShots, player, playerShots } = this.gameData;
    const { playerConfig } = this.config;
    this.player.movePlayer(this.config, this.gameData);
    this.drawer.drawElement(player, playerConfig);
    this.attacksDrawer.drawShots(this.config.bulletsConfig_01, playerShots); // move to player
    this.collisionDetector.detectCollision(enemyShots, player, playerConfig)
  }
}
