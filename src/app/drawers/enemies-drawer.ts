import { Config } from "../appConfig/game-config";
import { GameData } from "../interfaces/game-data.interface";
import { Drawer } from "./base-drawer";

export class EnemiesDrawer extends Drawer {

    drawEnemies(config: Config, gameData: GameData) {
     const {enemiesConfig, enemyConfig} = config
        const {enemies, enemiesTable} = gameData
        for (let c = 0; c < enemiesConfig.columnsCount; c++) {
          for (let r = 0; r < enemiesConfig.rowsCount; r++) {
            if (enemies[c][r].lives >= 1) {
              const enemyX = (c * (enemyConfig.size.x + enemiesConfig.padding) + enemiesConfig.offsetLeft) + enemiesTable.coordinates.x;
              const enemyY = (r * (enemyConfig.size.x + enemiesConfig.padding) + enemiesConfig.offsetTop) - enemiesTable.coordinates.y;
              enemies[c][r].coordinates.x = enemyX;
              enemies[c][r].coordinates.y = enemyY;
              this.drawElement(enemies[c][r], enemyConfig);
            }
          }
        }
      }
}