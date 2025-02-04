import { Config } from "../../appConfig/game-config";
import { GameplayData } from "../../appConfig/game-data";
import { CharacterData } from "../../interfaces/character-data.interface";
import { AnimationSequencer } from "../../drawers/animation-sequencer";
import { AttackActions } from "../attack-actions";

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
      const rightmostEnemy = this.findRightmostEnemy();
      const leftmostEnemy = this.findLeftmostEnemy();

      if (this.isCanvasTouched(leftmostEnemy, rightmostEnemy)) {
        this.onCanvasWallTouch();
      } else {
        enemiesTable.coordinates.x = enemiesTable.coordinates.x + enemiesConfig.frameStep.x;
      }
    }
  }

  isCanvasTouched(leftmostEnemy: CharacterData, rightmostEnemy: CharacterData): boolean {
    const { enemiesConfig, canvasConfig } = this.config;
    return (
      rightmostEnemy.coordinates.x + enemiesConfig.frameStep.x + rightmostEnemy.type.size.x >= canvasConfig.x ||
      leftmostEnemy.coordinates.x + enemiesConfig.frameStep.x <= 0
    );
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
    while (enemies[rowIndex] && enemies[rowIndex][columnIndex] && enemies[rowIndex][columnIndex].lives < 1) {
      if (!rowIndex) {
        return enemies[enemies.length - 1][enemies[enemies.length - 1].length - 1];
      }
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
      if (!rowIndex) {
        return enemies[enemies.length - 1][enemies[enemies.length - 1].length - 1];
      }
      if (columnIndex === 0) {
        rowIndex--;
        columnIndex = enemies[rowIndex].length - 1;
      } else {
        columnIndex--;
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
}
