import { Config } from "../../appConfig/game-config";
import { GameplayData } from "../../appConfig/game-data";
export class EnemiesActions {
  gameData: GameplayData;
  gameConfig: Config;
  constructor(gameData: GameplayData, gameConfig: Config) {
    this.gameData = gameData;
    this.gameConfig = gameConfig;
  }
  moveEnemiesTable() {
    const { enemiesTable, enemies } = this.gameData;
    const { enemiesConfig, canvasConfig, enemyConfig } = this.gameConfig;

    if (enemiesTable.skippedFrameCounter === enemiesConfig.frameSkip) {
      if (
        this.findEnemiesTableRightEdge().coordinates.x + enemiesConfig.frameStep.x + enemyConfig.size.x >= canvasConfig.x ||
        this.findEnemiesTableLeftEdge().coordinates.x + enemiesConfig.frameStep.x <= 0
      ) {
        enemiesTable.coordinates.y = enemiesTable.coordinates.y - enemiesConfig.frameStep.y;
        enemiesConfig.frameStep.x = enemiesConfig.frameStep.x * -1;
        enemiesConfig.frameSkip = enemiesConfig.frameSkip - enemiesConfig.speedProgression;
        enemiesTable.skippedFrameCounter = 0;
      } else {
        enemiesTable.coordinates.x = enemiesTable.coordinates.x + enemiesConfig.frameStep.x;
        enemiesTable.skippedFrameCounter = 0;
      }
    } else {
      enemiesTable.skippedFrameCounter++;
    }
  }

  findEnemiesTableLeftEdge() {
    const { enemies } = this.gameData;

    let i = 0;
    let j = 0;
    do {
      if (j >= enemies[i].length - 1) {
        j = 0;
        i++;
      } else {
        j++;
      }
    } while (enemies[i][j] && enemies[i][j].lives <= 0);
    return enemies[i][j];
  }

  findEnemiesTableRightEdge() {
    const { enemies } = this.gameData;

    let i = enemies.length - 1;
    let j = enemies[enemies.length - 1].length - 1;
    do {
      if (j === 0) {
        i--;
        j = enemies[j].length - 1;
      } else {
        j--;
      }
    } while (enemies[i][j] && enemies[i][j].lives <= 0);
    return enemies[i][j];
  }

  enemiesAttack() {
    const { enemies, enemyShots } = this.gameData;
    const { enemyConfig } = this.gameConfig;

    setInterval(() => {
      let columnIndex = Math.floor(Math.random() * enemies.length);
      let rowIndex = Math.floor(Math.random() * enemies[columnIndex].length);
      do {
        columnIndex = Math.floor(Math.random() * enemies.length);
        rowIndex = Math.floor(Math.random() * enemies[columnIndex].length);
      } while (enemies[columnIndex][rowIndex].lives < 1);
      const bulletCoordinates = {
        x: enemies[columnIndex][rowIndex].coordinates.x + enemyConfig.size.x / 2,
        y: enemies[columnIndex][rowIndex].coordinates.y + enemyConfig.size.y,
      };
      enemyShots.push(bulletCoordinates);
    }, 700);
  }
}
