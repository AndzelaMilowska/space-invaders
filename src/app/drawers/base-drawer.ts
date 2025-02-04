import { Canvas } from "../canvas";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { SpriteData } from "../interfaces/sprite-data.interface";

export class Drawer extends Canvas {
  drawElement(characterData: SpriteData) {
    let baseImage = new Image();
    let elementConfig = characterData.type;
    elementConfig.currentBaseAnimationFrame = elementConfig.baseAnimationFrames[elementConfig.indexOfCurrentFrame];
    baseImage.src = elementConfig.currentBaseAnimationFrame;

    this.canvasContext.imageSmoothingEnabled = false;

    this.canvasContext.drawImage(
      baseImage,
      characterData.coordinates.x,
      characterData.coordinates.y,
      elementConfig.size.x,
      elementConfig.size.y
    );
  }

  drawText(textData: string, coordinates: Coordinates2D, fontConfig: string, fontStyle: string) {
    this.canvasContext.font = fontConfig;
    this.canvasContext.fillStyle = fontStyle;
    this.canvasContext.fillText(textData, coordinates.x, coordinates.y);
  }

  drawCenteredText(textData: string, coordinates: Coordinates2D, fontConfig: string, fontStyle: string) {
    this.canvasContext.font = fontConfig;
    let textWidth = this.canvasContext.measureText(textData).width;
    let centeredCoordinates = { x: coordinates.x - textWidth / 2, y: coordinates.y };
    this.drawText(textData, centeredCoordinates, fontConfig, fontStyle)
  }
}
