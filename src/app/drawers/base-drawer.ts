import { ElementConfig } from "../interfaces/element-config.interface";
import { Canvas } from "../canvas";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { CharacterData } from "../interfaces/character-data.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { ElementData } from "../interfaces/element-data.interface";

export class Drawer extends Canvas {
  drawElement(characterData: CharacterData | ElementData) {
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

  drawText (textData: string, coordinates: Coordinates2D, fontConfig: string, fontStyle: string) {
    this.canvasContext.font = fontConfig;
    this.canvasContext.fillStyle = fontStyle;
    this.canvasContext.fillText(textData, coordinates.x, coordinates.y);
  }

}
