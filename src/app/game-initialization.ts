import { Config } from "./appConfig/game-config";
import { GameplayData } from "./appConfig/game-data";
import { CharacterConfig } from "./interfaces/character-config.interface";
import { CharacterData } from "./interfaces/character-data.interface";
import { Table2D } from "./interfaces/table-2D.interface";
import { Player } from "./actions/player/player-actions";
import { EnemiesActions } from "./actions/enemies/enemies-actions";
import { EnemiesTable2D } from "./interfaces/enemies-table-2D.interface";
import { EnemyDeclaration } from "./interfaces/enemy-declaration.interface";
//move to actions
export class GameInitialization {
  config: Config;
  gameData: GameplayData;
  player: Player;
  enemiesActions: EnemiesActions;

  constructor(configObject: Config, gameData: GameplayData, player: Player, enemiesActions: EnemiesActions) {
    this.config = configObject;
    this.gameData = gameData;
    this.player = player;
    this.enemiesActions = enemiesActions;
  }

  initGameData(): void {
    this.config.enemiesConfig.offsetLeft = this.config.countEnemiesLeftOffset(); //count left offset start point
    this.gameData.enemies = this.initializeEnemies(this.config.enemiesConfig);
    //console.log(this.gameData.enemies); //create enemies arr
    this.player.detectMovement();
    this.player.playerAttack(this.gameData);
    // this.enemiesActions.enemiesAttack();  //each bullet should contain speed data so movement can be calculated based on bullet object in bullets array (same for damage) so each bullet can have different speed and damage OwO
  }

  calculateTotalEnemiesNumber(enemiesConfig: EnemiesTable2D) {
    let rowsCounter = 0;
    for (let i = 0; i < enemiesConfig.enemiesTable.length; i++) {
      rowsCounter = rowsCounter + enemiesConfig.enemiesTable[i].rowsCount;
    }
    enemiesConfig.totalRowsCount = rowsCounter;
    enemiesConfig.enemiesCount = rowsCounter * enemiesConfig.columnsCount;
  }


  initializeEnemies(enemiesConfig: EnemiesTable2D) {
    const { enemiesTable } = enemiesConfig;
    let enemiesArray: CharacterData[][] = [];
    for (let i = 0; i < enemiesTable.length; i++) {
      const rowsStartIndex = enemiesArray.length;
      const rowsEndIndex = enemiesArray.length + enemiesTable[i].rowsCount;
      for (let row = rowsStartIndex; row < rowsEndIndex; row++) {
        enemiesArray[row] = [];
        for (let column = 0; column < enemiesConfig.columnsCount; column++) {
          enemiesArray[row][column] = {
            //coordinates are set during drawing enemies, initializeEnemies is responsible only for initializing enemies array
            coordinates: { x: 0, y: 0 },
            lives: enemiesTable[i].type.lives,
            type: enemiesTable[i].type,
          };
        }
      }
    }
    return enemiesArray;
  }
 
}
