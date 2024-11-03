import { Config } from "../appConfig/game-config";
import { Drawer } from "../drawers/base-drawer";
import { Player } from "../actions/player/player-actions";
import { GameplayData } from "../appConfig/game-data";

export class PlayerRenderer {
    drawer: Drawer;
    player: Player;
    config: Config;
    gameData: GameplayData;
  
    constructor(drawer: Drawer, player: Player, config: Config, gameData: GameplayData) {
      this.drawer = drawer;
      this.player = player;
      this.config = config;
      this.gameData = gameData;
    }

  renderPlayer() {
    this.player.movePlayer(this.config, this.gameData);
    this.drawer.drawElement(this.gameData.player, this.config.playerConfig);
    //and here add collisions stuff
  }
}
