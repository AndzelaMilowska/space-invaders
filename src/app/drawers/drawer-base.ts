import { config } from "process";
import { ElementConfig } from "../interfaces/element-config.interface";
import { Canvas } from "../canvas";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { Config } from "../appConfig/game-config";
import { CharacterData } from "../interfaces/character-data.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { GameData } from "../interfaces/game-data.interface";

export class Drawer extends Canvas {
    
  drawElement(characterData: CharacterData, elementConfig: CharacterConfig) {
    let baseImage = new Image();
    baseImage.src = elementConfig.imgs[0];
    // baseImage.onload = () => canvasContext.drawImage()  //idk works fine without this line xD 
    this.canvasContext.drawImage(baseImage, characterData.coordinates.x, characterData.coordinates.y, elementConfig.size.x, elementConfig.size.y);
  }

  drawRect(rectData: Coordinates2D, rectConfig: ElementConfig, style: string) {
    this.canvasContext.beginPath();
    this.canvasContext.rect(rectData.x, rectData.y, rectConfig.size.x, rectConfig.size.y);
    //create separate file for styles strings 
    this.canvasContext.fillStyle = style;
    this.canvasContext.fill();
    this.canvasContext.closePath();
  }

  drawEnemies(config: Config) {
    const enemiesConfig = config.enemiesConfig;
    const enemyConfig = config.enemyConfig
    let enemiesContainer = config.gameData.enemies;
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

  //dla pocisków enemy wystarczy generate bullet for coordinates of random element of enemiesArray
  //yes but how often?

  drawBullet(bulletData: Coordinates2D, bulletsConfig: ElementConfig) {
    this.drawRect(bulletData, bulletsConfig, "#0095DD")
  }



  drawShots(bulletsConfig: ElementConfig, shootsArray: Coordinates2D[]) {
    for (let i = 0; i < shootsArray.length; i++) {
      this.drawBullet(shootsArray[i], bulletsConfig);
      shootsArray[i].y = shootsArray[i].y - bulletsConfig.frameStep.y
    }
  }
}
