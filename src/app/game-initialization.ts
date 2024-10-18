import { Config } from "./appConfig/game-config";
import { CharacterConfig } from "./interfaces/character-config.interface";
import { CharacterData } from "./interfaces/character-data.interface";
import { Table2D } from "./interfaces/table-2D.interface";

export class GameInitialization {
  config: Config;

  constructor(configObject: Config) {
    this.config = configObject;
  }

  initGameData(): void {
    this.config.enemiesConfig.offsetLeft = this.config.countEnemiesLeftOffset(); //count left offset start point
    this.config.gameData.enemies = this.generateEnemies(this.config.enemiesConfig, this.config.enemyConfig, ); //create enemies arr
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
