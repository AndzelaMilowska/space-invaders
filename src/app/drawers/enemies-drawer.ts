import { Config } from "../appConfig/game-config";
import { GameData } from "../interfaces/game-data.interface";
import { Drawer } from "./base-drawer";

export class EnemiesDrawer extends Drawer {

    drawEnemies(config: Config, gameData: GameData) {
        const enemiesConfig = config.enemiesConfig;
        const enemyConfig = config.enemyConfig
        let enemiesContainer = gameData.enemies;
        for (let c = 0; c < enemiesConfig.columnsCount; c++) {
          for (let r = 0; r < enemiesConfig.rowsCount; r++) {
            if (enemiesContainer[c][r].lives >= 1) {
              const enemyX = c * (enemyConfig.size.x + enemiesConfig.padding) + enemiesConfig.offsetLeft;
              const enemyY = r * (enemyConfig.size.x + enemiesConfig.padding) + enemiesConfig.offsetTop;
              enemiesContainer[c][r].coordinates.x = enemyX;
              enemiesContainer[c][r].coordinates.y = enemyY;
              this.drawElement(enemiesContainer[c][r], enemyConfig);
            }
          }
        }
      }
}