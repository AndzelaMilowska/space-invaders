import { Config } from "./appConfig/game-config";
import { GameplayData } from "./appConfig/game-data";
import { CharacterData } from "./interfaces/character-data.interface";
import { PlayerActions } from "./actions/player/player-actions";
import { EnemiesActions } from "./actions/enemies/enemies-actions";
import { EnemiesTable2D } from "./interfaces/enemies-table-2D.interface";

export class GameInitialization {
  config: Config;
  gameData: GameplayData;
  player: PlayerActions;
  enemiesActions: EnemiesActions;

  constructor(configObject: Config, gameData: GameplayData, player: PlayerActions, enemiesActions: EnemiesActions) {
    this.config = configObject;
    this.gameData = gameData;
    this.player = player;
    this.enemiesActions = enemiesActions;
  }

  initializeGame(): void {
    this.config.enemiesConfig.offsetLeft = this.config.countEnemiesLeftOffset(); //count left offset start point
    this.gameData.enemies = this.initializeEnemies(this.config.enemiesConfig);
    this.calculateTotalEnemiesNumber(this.config.enemiesConfig)
    this.player.detectMovement();
    this.player.playerAttack(this.gameData);

  }

  calculateTotalEnemiesNumber(enemiesConfig: EnemiesTable2D) {
    enemiesConfig.enemiesCount = enemiesConfig.columnsCount * enemiesConfig.totalRowsCount
  }

  initializeEnemies(enemiesConfig: EnemiesTable2D) {
    const { enemiesTable } = enemiesConfig;
    let enemiesArray: CharacterData[][] = [];
    for (let i = 0; i < enemiesTable.length; i++) {
      const rowsStartIndex = enemiesArray.length;
      const rowsEndIndex = enemiesArray.length + enemiesTable[i].rowsCount;
      for (let row = rowsStartIndex; row < rowsEndIndex; row++) {
        enemiesConfig.totalRowsCount++
        enemiesArray[row] = [];
        for (let column = 0; column < enemiesConfig.columnsCount; column++) {
          enemiesArray[row][column] = {
            //coordinates are set during drawing enemies, initializeEnemies is responsible only for initializing enemies array
            coordinates: { x: 0, y: 0 },
            lives: enemiesTable[i].type.lives,
            type: enemiesTable[i].type,
            bulletCountdown: this.enemiesActions.calculateBulletCountdown(enemiesTable[i].type.fireFrequency),
          };
        }
      }
    }
    return enemiesArray;
  }
}
