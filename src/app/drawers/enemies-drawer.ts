import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";
import { GameData } from "../interfaces/game-data.interface";
import { Drawer } from "./base-drawer";

export class EnemiesDrawer extends Drawer {

      drawEnemies(gameData: GameData, enemiesConfig: EnemiesTable2D) {
        const {enemies, enemiesTable} = gameData
        for (let row = 0; row < enemies.length; row++) {
          for (let column = 0; column < enemies[row].length; column++) {
            let enemy = enemies[row][column]
            //change to 'if lives < 1 go next  
            if (enemy.lives > 0) {
              const enemyPositionX = (column * (enemy.type.size.x + enemy.type.padding) + enemiesConfig.offsetLeft) + enemiesTable.coordinates.x
              const enemyPositionY = (row * (enemy.type.size.y + enemy.type.padding) + enemiesConfig.offsetTop) - enemiesTable.coordinates.y
              enemy.coordinates = { x: enemyPositionX, y: enemyPositionY}
              this.drawElement(enemy)
            }
          }
        } 
      }
}