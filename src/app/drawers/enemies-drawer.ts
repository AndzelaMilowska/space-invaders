import { Config } from "../appConfig/game-config";
import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";
import { GameData } from "../interfaces/game-data.interface";
import { Drawer } from "./base-drawer";

export class EnemiesDrawer extends Drawer {

    // drawEnemies0(config: Config, gameData: GameData) {
    //  const {enemiesConfig} = config
    //  const enemyConfig = enemiesConfig.enemyConfig
    //  const {enemies, enemiesTable} = gameData

    //     for (let c = 0; c < enemiesConfig.columnsCount; c++) {
    //       for (let r = 0; r < enemiesConfig.rowsCount; r++) {
    //         if (enemies[c][r].lives >= 1) {
    //           const enemyX = (c * (enemyConfig.size.x + enemiesConfig.padding) + enemiesConfig.offsetLeft) + enemiesTable.coordinates.x;
    //           const enemyY = (r * (enemyConfig.size.x + enemiesConfig.padding) + enemiesConfig.offsetTop) - enemiesTable.coordinates.y;
    //           enemies[c][r].coordinates.x = enemyX;
    //           enemies[c][r].coordinates.y = enemyY;
    //           this.drawElement(enemies[c][r], enemyConfig);
    //         }
    //       }
    //     }
    //   }

      drawEnemies(gameData: GameData, enemiesConfig: EnemiesTable2D) {
        const {enemies, enemiesTable} = gameData
        for (let row = 0; row < enemies.length; row++) {
          for (let column = 0; column < enemies[row].length; column++) {
            let enemy = enemies[row][column]
            //change to 'if lives < 1 go next  
            if (enemy.lives > 0) {
              //change it to use previous position + frame step, not enemiesTable.coord
              const enemyPositionX = (column * (enemy.type.size.x + enemy.type.padding) + enemiesConfig.offsetLeft) + enemiesTable.coordinates.x
              const enemyPositionY = (row * (enemy.type.size.y + enemy.type.padding) + enemiesConfig.offsetTop) - enemiesTable.coordinates.y
              enemy.coordinates = { x: enemyPositionX, y: enemyPositionY}
              this.drawElement(enemy)
            }
          }
         // console.log('finished drawing enemies')
          //console.log(gameData.enemies)
        } 
        // chcesz napisać nowy enemies drawer based on enemies array, not enemies config rows and columns
        // dzięki temu nie będzie undefined jesli usuniesz wyeliminowanych przeciwników z arraya

      }
}