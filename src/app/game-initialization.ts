import { Config } from "./appConfig/game-config";
import { GameplayData } from "./appConfig/game-data";
import { CharacterConfig } from "./interfaces/character-config.interface";
import { CharacterData } from "./interfaces/character-data.interface";
import { Table2D } from "./interfaces/table-2D.interface";
import { Player } from "./actions/player/player-actions";
import { EnemiesActions } from "./actions/enemies/enemies-actions";

export class GameInitialization {
  config: Config;
  gameData: GameplayData;
  player: Player;
  enemiesActions: EnemiesActions;

  constructor(configObject: Config, gameData: GameplayData, player: Player, enemiesActions: EnemiesActions) {
    this.config = configObject;
    this.gameData = gameData;
    this.player = player;
    this.enemiesActions= enemiesActions
  }

  initGameData(): void {
    this.config.enemiesConfig.offsetLeft = this.config.countEnemiesLeftOffset(); //count left offset start point
    this.gameData.enemies = this.generateEnemies(this.config.enemiesConfig, this.config.enemyConfig); //create enemies arr
    this.player.detectMovement();
    this.player.playerAttack(this.gameData);
    this.enemiesActions.enemiesAttack()
  }

  generateEnemies(enemiesTableConfig: Table2D, enemyConfig: CharacterConfig): CharacterData[][] {
    let enemiesArray: CharacterData[][] = [];
    for (let c = 0; c < enemiesTableConfig.columnsCount; c++) {
      enemiesArray[c] = [];
      for (let r = 0; r < enemiesTableConfig.rowsCount; r++) {
        enemiesArray[c][r] = {
          coordinates: { x: 0, y: 0 },
          lives: enemyConfig.lives,
        };
      }
    }
    return enemiesArray;
  }
}
