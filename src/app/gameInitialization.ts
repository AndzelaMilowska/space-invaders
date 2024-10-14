import {Config} from './appConfig/gameConfig'
export class GameInitialization {
  config: any;

  constructor(configObject: Config) {
    this.config = configObject;
  }

  initGameData() {
    this.config.enemiesConfig.enemiesOffsetLeft = this.config.countEnemiesLeftOffset();
    this.config.gameConfig.enemiesData = this.generateEnemies(); //create enemies object/arr

  }

  //fix any here
  generateEnemies(): any {
    let enemiesArray: any[] = [];
    for (let c = 0; c < this.config.enemiesConfig.enemiesColumnCount; c++) {
      enemiesArray[c] = [];
      for (let r = 0; r < this.config.enemiesConfig.enemiesRowCount; r++) {
        enemiesArray[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    return enemiesArray;
  }
}
