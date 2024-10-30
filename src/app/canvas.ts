import { Coordinates2D } from "./interfaces/coordinates-2D.interface";
export class Canvas {
  canvasElement: HTMLCanvasElement;
  canvasContext2D: CanvasRenderingContext2D | null;

  constructor(canvasId: string, canvasConfigObject: Coordinates2D) {
    this.canvasElement = <HTMLCanvasElement>document.getElementById(canvasId);
    this.canvasContext2D = this.canvasElement.getContext("2d");
    this.canvasElement.width = canvasConfigObject.x;
    this.canvasElement.height = canvasConfigObject.y;
  }

  get canvas() {
    return this.canvasElement;
  }

  get canvasContext() {
    return this.canvasContext2D;
  }
}
