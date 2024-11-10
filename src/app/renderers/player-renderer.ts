import { Config } from "../appConfig/game-config";
import { Drawer } from "../drawers/base-drawer";
import { Player } from "../actions/player/player-actions";
import { GameplayData } from "../appConfig/game-data";
import { AttackDrawer } from "../drawers/attack-drawer";

export class PlayerRenderer {
    drawer: Drawer;
    player: Player;
    config: Config;
    gameData: GameplayData;
    attacksDrawer: AttackDrawer;
  
    constructor(drawer: Drawer, player: Player, config: Config, gameData: GameplayData,   attacksDrawer: AttackDrawer) {
      this.drawer = drawer;
      this.player = player;
      this.config = config;
      this.gameData = gameData;
      this.attacksDrawer = attacksDrawer;

    }

  renderPlayer() {
    this.player.movePlayer(this.config, this.gameData);
    this.drawer.drawElement(this.gameData.player, this.config.playerConfig);
    this.attacksDrawer.drawShots(this.config.bulletsConfig_01, this.gameData.playerShots); // move to player
    this.player.detectPlayerCollision(this.gameData, this.config)
  }
}
