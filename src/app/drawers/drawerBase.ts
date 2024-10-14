import { config } from "process";
import { ElementData } from "../interfaces/elementDataInterface";
import { Canvas } from "../canvas";
import { Coordinates2D } from "../interfaces/coordinates2DInterface";

export class Drawer extends Canvas {
  drawElement(elementData: ElementData) {
    // canvasContext.beginPath();
    // canvasContext.rect(
    //   elementData.coordinates.x,
    //   elementData.coordinates.y,
    //   elementData.size.x,
    //   elementData.size.y
    // );
    // canvasContext.fillStyle = "#1f1f1f";
    // canvasContext.fill();
    // canvasContext.closePath();

    let baseImage = new Image();
    baseImage.src = elementData.imgs[0];
    // baseImage.onload = () => canvasContext.drawImage()
    this.canvasContext.drawImage(baseImage, elementData.coordinates.x, elementData.coordinates.y, elementData.size.x, elementData.size.y);
  }

  drawEnemies(config: any) {
    let enemiesConfig = config.enemiesConfig;
    let enemiesContainer = config.gameConfig.enemiesData;
    let enemyData = enemiesConfig.enemyData;

    for (let c = 0; c < enemiesConfig.enemiesColumnCount; c++) {
      for (let r = 0; r < enemiesConfig.enemiesRowCount; r++) {
        if (enemiesContainer[c][r].status >= 1) {
          const enemyX = c * (enemiesConfig.enemyData.size.x + enemiesConfig.enemyPadding) + enemiesConfig.enemiesOffsetLeft;
          const enemyY = r * (enemiesConfig.enemyData.size.x + enemiesConfig.enemyPadding) + enemiesConfig.enemiesOffsetTop;
          enemiesContainer[c][r].x = enemyX;
          enemiesContainer[c][r].y = enemyY;
          enemyData.coordinates = {
            x: enemyX,
            y: enemyY,
          };
          this.drawElement(enemyData);
        }
      }
    }
  }

  //dla pocisków enemy wystarczy generate bullet for coordynates of random element of enemiesArray

  //fix any - firingElement is player or random enemy
  //bulletConfig is x and y data
  //you need to store all bullets in separate array
  drawBullet(firingElement: any, bulletsConfig: any) {
    this.canvasContext.beginPath();
    this.canvasContext.rect(firingElement.x, firingElement.y, bulletsConfig.size.x, bulletsConfig.size.y);
    this.canvasContext.fillStyle = "#0095DD";
    this.canvasContext.fill();
    this.canvasContext.closePath();
  }

  drawPlayerShoots(bulletsConfig: any) {
    let shootsArray = bulletsConfig.playerShoots
    for (let i = 0; i < shootsArray.length; i++) {
      this.drawBullet(shootsArray[i], bulletsConfig);
      shootsArray[i].y = shootsArray[i].y -3 
    }
  }
}
