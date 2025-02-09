import { Config } from "../../appConfig/game-config";
import { GameplayData } from "../../appConfig/game-data";
import { CharacterData } from "../../interfaces/character-data.interface";
import { AnimationSequencer } from "../../drawers/animation-sequencer";
import { AttackActions } from "../attack-actions";
import { ApplicationStatus } from "../../constants/application-status.enum";

export class EnemiesActions extends AttackActions {
  gameData: GameplayData;
  config: Config;

  constructor(gameData: GameplayData, gameConfig: Config) {
    super();
    this.gameData = gameData;
    this.config = gameConfig;
  }

  runEnemiesActions() {
    const { enemiesTable } = this.gameData;
    const { enemiesConfig } = this.config;

    //make action only on desired frame count
    if (this.gameData.currentFrameIndex % enemiesConfig.frameSkip !== 0) {
      return;
    } else {
      AnimationSequencer.changeDisplayedImg(enemiesConfig.enemiesTable[0].type);
      AnimationSequencer.changeDisplayedImg(enemiesConfig.enemiesTable[1].type);

      //if enemies are moving right find rightmost enemy, else enemies are moving left so find leftmost enemy
      let sideMostEnemy;
      let isCanvasTouched: boolean;
      if (enemiesConfig.frameStep.x > 0) {
        sideMostEnemy = this.findRightmostEnemy();
        isCanvasTouched = this.isCanvasTouched(sideMostEnemy, true);
      } else {
        sideMostEnemy = this.findLeftmostEnemy();
        isCanvasTouched = this.isCanvasTouched(sideMostEnemy, false);
      }

      //if canvas is touched run onCanvasWallTouch, else continue enemies movement
      if (isCanvasTouched) {
        this.onCanvasWallTouch();
      } else {
        enemiesTable.coordinates.x = enemiesTable.coordinates.x + enemiesConfig.frameStep.x;
      }
    }
  }

  isCanvasTouched(sideMostEnemy: CharacterData, movingRight: boolean): boolean {
    const { enemiesConfig, canvasConfig } = this.config;
    if (movingRight) {
      return sideMostEnemy.coordinates.x + enemiesConfig.frameStep.x + sideMostEnemy.type.size.x >= canvasConfig.x;
    } else {
      return sideMostEnemy.coordinates.x + enemiesConfig.frameStep.x <= 0;
    }
  }

  onCanvasWallTouch() {
    const { enemiesTable } = this.gameData;
    const { enemiesConfig } = this.config;
    enemiesTable.coordinates.y = enemiesTable.coordinates.y - enemiesConfig.frameStep.y; //move fleet vertically
    enemiesConfig.frameStep.x = enemiesConfig.frameStep.x * -1; //change fleet direction
    enemiesConfig.frameSkip =
      enemiesConfig.frameSkip <= 10 ? enemiesConfig.frameSkip : enemiesConfig.frameSkip - enemiesConfig.speedProgression; //speed up fleet movement
  }

  findLeftmostEnemy() {
    const { enemies } = this.gameData;
    let rowIndex = 0;
    let columnIndex = 0;

    while (enemies[rowIndex][columnIndex].lives < 1) {
      if (rowIndex < enemies.length - 1) {
        rowIndex++;
      } else if (rowIndex === enemies.length - 1 && columnIndex < enemies[0].length - 1) {
        rowIndex = 0;
        columnIndex++;
      } else if (columnIndex === enemies[enemies.length - 1].length - 1) {
        return enemies[enemies.length - 1][enemies[0].length - 1];
      }
    }
    return enemies[rowIndex][columnIndex];
  }

  findRightmostEnemy() {
    const { enemies } = this.gameData;
    let rowIndex = enemies.length - 1;
    let columnIndex = enemies[enemies.length - 1].length - 1;
    while (enemies[rowIndex][columnIndex].lives <= 0) {
      if (rowIndex >= 1) {
        rowIndex--;
      } else if (rowIndex === 0 && columnIndex > 0) {
        columnIndex--;
        rowIndex = enemies.length - 1;
      } else if (columnIndex === 0) {
        return enemies[0][0];
      }
    }

    return enemies[rowIndex][columnIndex];
  }

  iterateEnemies(callbackFn: Function): void {
    for (let row = 0; row < this.gameData.enemies.length; row++) {
      for (let column = 0; column < this.gameData.enemies[row].length; column++) {
        const enemy = this.gameData.enemies[row][column];
        callbackFn(enemy);
      }
    }
  }

  isOnBottom(element: CharacterData) {
    if (element.coordinates.y <= this.config.canvasConfig.y - this.config.canvasConfig.y / 10) {
      return;
    }
    this.gameData.gameStatus = ApplicationStatus.GameLoose;
  }
}
