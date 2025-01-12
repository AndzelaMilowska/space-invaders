import { Config } from "../../appConfig/game-config";
import { GameplayData } from "../../appConfig/game-data";
import { CharacterConfig } from "../../interfaces/character-config.interface";
export class EnemiesActions {
  gameData: GameplayData;
  gameConfig: Config;

  constructor(gameData: GameplayData, gameConfig: Config) {
    this.gameData = gameData;
    this.gameConfig = gameConfig;
  }
//refractor - more descriptive and flexible
//Dont like the implem. each for should be a separate entity represented with class that has methods handling movement.
  moveEnemiesTable() {
    const { enemiesTable } = this.gameData;
    const { enemiesConfig, canvasConfig, enemyConfig } = this.gameConfig;

    if (enemiesTable.skippedFrameCounter === enemiesConfig.frameSkip) {
      this.changeDisplayedImg(enemyConfig)
      if (
        this.findEnemiesTableRightEdge().coordinates.x + enemiesConfig.frameStep.x + enemyConfig.size.x >= canvasConfig.x ||
        this.findEnemiesTableLeftEdge().coordinates.x + enemiesConfig.frameStep.x <= 0
      ) {
        enemiesTable.coordinates.y = enemiesTable.coordinates.y - enemiesConfig.frameStep.y;
        enemiesConfig.frameStep.x = enemiesConfig.frameStep.x * -1;
        enemiesConfig.frameSkip = enemiesConfig.frameSkip <= 10 ? enemiesConfig.frameSkip : enemiesConfig.frameSkip - enemiesConfig.speedProgression;
        enemiesTable.skippedFrameCounter = 0;
      } else {
        enemiesTable.coordinates.x = enemiesTable.coordinates.x + enemiesConfig.frameStep.x;
        enemiesTable.skippedFrameCounter = 0;
      }
    } else {
      enemiesTable.skippedFrameCounter++;
    }
  }

  //change animation to loop 
  //dont use magic numbers like 0, 1, use variable that describes why it is 0 or 1, or add comment
  //it shouldn't be in enemies actions
  changeDisplayedImg(enemyConfig: CharacterConfig) {
    //take element and animation array
    //move into next animation frame (array element) or get back to first
    //set new animation frame to element
    const imgSource = enemyConfig.currentBaseAnimationFrame === enemyConfig.baseAnimationFrames[0] ? enemyConfig.baseAnimationFrames[1] : enemyConfig.baseAnimationFrames[0]
    enemyConfig.currentBaseAnimationFrame = imgSource
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
    } while (enemies[i][j].lives < 1);
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
  //
//What if we introduce different enemy types, which for example fire are faster rate. The behavior of the entity should be descrivbed by it's class not by the class that handles it.
  enemiesAttack() {
    const { enemies, enemyShots } = this.gameData;
    const { enemyConfig } = this.gameConfig;

    const minTime = 0.2
    const maxTime = 3
    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime) * 1000

    setTimeout(() => {
      let randomColumnIndex = Math.floor(Math.random() * enemies.length);
      let randomRowIndex = Math.floor(Math.random() * enemies[randomColumnIndex].length);
      do {
        randomColumnIndex = Math.floor(Math.random() * enemies.length);
        randomRowIndex = Math.floor(Math.random() * enemies[randomColumnIndex].length);
      } while (enemies[randomColumnIndex][randomRowIndex].lives < 1);
      const bulletCoordinates = {
        x: enemies[randomColumnIndex][randomRowIndex].coordinates.x + enemyConfig.size.x / 2,
        y: enemies[randomColumnIndex][randomRowIndex].coordinates.y + enemyConfig.size.y + 3,
      };
      enemyShots.push(bulletCoordinates);
      this.enemiesAttack()
    }, randomTime)
  }
}
