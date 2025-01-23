import { Config } from "../appConfig/game-config";
import { Drawer } from "../drawers/base-drawer";
import { PlayerActions } from "../actions/player/player-actions";
import { GameplayData } from "../appConfig/game-data";
import {CollisionDetector} from '../actions/collision-detector'
import { AttacksRenderer } from "./attacks-renderer";

export class PlayerRenderer {
    drawer: Drawer;
    player: PlayerActions;
    config: Config;
    gameData: GameplayData;
    attacksRenderer: AttacksRenderer

    constructor(drawer: Drawer, player: PlayerActions, config: Config, gameData: GameplayData,   attacksRenderer: AttacksRenderer) {
      this.drawer = drawer;
      this.player = player;
      this.config = config;
      this.gameData = gameData;
      this.attacksRenderer = attacksRenderer
    }

  renderPlayer() {
    let { enemyShots, player, playerShots } = this.gameData;
    player.bulletCountdown--
    this.player.movePlayer(this.config, this.gameData);
    this.drawer.drawElement(player);
    this.attacksRenderer.renderBullets(playerShots, this.gameData)
    CollisionDetector.detectCollision(enemyShots, player)
  }
}
