import { ElementConfig } from "../interfaces/element-config.interface";
import { Canvas } from "../canvas";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { CharacterData } from "../interfaces/character-data.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";

export class Drawer extends Canvas {
  drawElement(characterData: CharacterData) {
    let baseImage = new Image();
    let elementConfig = characterData.type
    elementConfig.currentBaseAnimationFrame = elementConfig.baseAnimationFrames[elementConfig.indexOfCurrentFrame]
    baseImage.src = elementConfig.currentBaseAnimationFrame

    this.canvasContext.imageSmoothingEnabled = false;

    this.canvasContext.drawImage(
      baseImage,
      characterData.coordinates.x,
      characterData.coordinates.y,
      elementConfig.size.x,
      elementConfig.size.y
    );
  }

  //remove draw rect, add animations for bullets
  drawRect(rectData: Coordinates2D, rectConfig: ElementConfig, style: string) {
    this.canvasContext.beginPath();
    this.canvasContext.rect(rectData.x, rectData.y, rectConfig.size.x, rectConfig.size.y);
    this.canvasContext.fillStyle = style;
    this.canvasContext.fill();
    this.canvasContext.closePath();
  }

  drawText (textData: string, coordinates: Coordinates2D, fontConfig: string, fontStyle: string) {
    this.canvasContext.font = fontConfig;
    this.canvasContext.fillStyle = fontStyle;
    this.canvasContext.fillText(textData, coordinates.x, coordinates.y);
  }

}
