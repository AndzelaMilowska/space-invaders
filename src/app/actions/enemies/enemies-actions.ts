import { Config } from "../../appConfig/game-config";
import { GameplayData } from "../../appConfig/game-data";
import { CharacterConfig } from "../../interfaces/character-config.interface";
import { CharacterData } from "../../interfaces/character-data.interface";
import { EnemiesTable2D } from "../../interfaces/enemies-table-2D.interface";
export class EnemiesActions {
  gameData: GameplayData;
  gameConfig: Config;

  constructor(gameData: GameplayData, gameConfig: Config) {
    this.gameData = gameData;
    this.gameConfig = gameConfig;
  }

  //run enemies actions only on desired frame counts
  runEnemiesActions() {
    const { enemiesTable } = this.gameData;
    const { enemiesConfig } = this.gameConfig;

    //make action only on desired frame count
    if (enemiesTable.skippedFrameCounter !== enemiesConfig.frameSkip) {
      enemiesTable.skippedFrameCounter++;
      return;
    } else {
      this.changeDisplayedImg(enemiesConfig.enemiesTable[0].type);
      this.changeDisplayedImg(enemiesConfig.enemiesTable[1].type);
      enemiesTable.skippedFrameCounter = 0;
      
      const rightmostEnemy = this.findRightmostEnemy();
      const leftmostEnemy = this.findLeftmostEnemy();

      if (this.isCanvasTouched(leftmostEnemy, rightmostEnemy)) {
        this.onCanvasWallTouch();
        enemiesTable.skippedFrameCounter = 0;
      } else {
        enemiesTable.coordinates.x = enemiesTable.coordinates.x + enemiesConfig.frameStep.x;
        enemiesTable.skippedFrameCounter = 0;
      }
    }
  }

  isCanvasTouched(leftmostEnemy: CharacterData, rightmostEnemy: CharacterData): boolean {
    const { enemiesConfig, canvasConfig } = this.gameConfig;
    return (
      rightmostEnemy.coordinates.x + enemiesConfig.frameStep.x + rightmostEnemy.type.size.x >= canvasConfig.x ||
      leftmostEnemy.coordinates.x + enemiesConfig.frameStep.x <= 0
    );
  }

  onCanvasWallTouch() {
    const { enemiesTable } = this.gameData;
    const { enemiesConfig } = this.gameConfig;
    enemiesTable.coordinates.y = enemiesTable.coordinates.y - enemiesConfig.frameStep.y; //move fleet vertically
    enemiesConfig.frameStep.x = enemiesConfig.frameStep.x * -1; //change fleet direction
    enemiesConfig.frameSkip =
      enemiesConfig.frameSkip <= 10 ? enemiesConfig.frameSkip : enemiesConfig.frameSkip - enemiesConfig.speedProgression; //speed up fleet movement
  }

  //it shouldn't be in enemies actions -- class "AnimationHandler"
  changeDisplayedImg(elementConfig: CharacterConfig) {
    elementConfig.indexOfCurrentFrame =
      elementConfig.indexOfCurrentFrame === elementConfig.baseAnimationFrames.length - 1 ? 0 : elementConfig.indexOfCurrentFrame + 1;
  }

  findLeftmostEnemy() {
    const { enemies } = this.gameData;
    let rowIndex = 0; //i
    let columnIndex = 0;
    while (enemies[rowIndex][columnIndex].lives < 1) {
      if (columnIndex >= enemies[rowIndex].length - 1) {
        columnIndex = 0;
        rowIndex++;
      } else {
        columnIndex++;
      }
    }
    return enemies[rowIndex][columnIndex];
  }

  findRightmostEnemy() {
    const { enemies } = this.gameData;
    let rowIndex = enemies.length - 1;
    let columnIndex = enemies[enemies.length - 1].length - 1;
    while (enemies[rowIndex][columnIndex] && enemies[rowIndex][columnIndex].lives <= 0) {
      if (columnIndex === 0) {
        rowIndex--;
        columnIndex = enemies[rowIndex].length - 1;
      } else {
        columnIndex--;
      }
    }
    return enemies[rowIndex][columnIndex];
  }
  //
  //What if we introduce different enemy types, which for example fire are faster rate. The behavior of the entity should be described by it's class not by the class that handles it.
  /* 
  enemiesAttack() {
    const { enemies, enemyShots } = this.gameData;
    const { enemyConfig } = this.gameConfig.enemiesConfig.enemiesTypesList[0];

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
    */
}
//problem? każdy typ przeciwnika powinien mieć osobne strzelanie --> attack jako metoda przyjmująca config
//czy kazdy przeciwnik powinien strzelać?
