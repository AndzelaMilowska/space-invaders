import { ElementConfig } from "../interfaces/element-config.interface";
import { Canvas } from "../canvas";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { CharacterData } from "../interfaces/character-data.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";

export class Drawer extends Canvas {
  drawElement(characterData: CharacterData, elementConfig: CharacterConfig) {
    let baseImage = new Image();
    baseImage.src = elementConfig.imgs[0];
    // baseImage.onload = () => canvasContext.drawImage()  //idk works fine without this line xD
    this.canvasContext.drawImage(
      baseImage,
      characterData.coordinates.x,
      characterData.coordinates.y,
      elementConfig.size.x,
      elementConfig.size.y
    );
  }

  drawRect(rectData: Coordinates2D, rectConfig: ElementConfig, style: string) {
    this.canvasContext.beginPath();
    this.canvasContext.rect(rectData.x, rectData.y, rectConfig.size.x, rectConfig.size.y);
    //create separate file for styles strings
    this.canvasContext.fillStyle = style;
    this.canvasContext.fill();
    this.canvasContext.closePath();
  }
}
