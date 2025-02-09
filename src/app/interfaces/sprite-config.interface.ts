import { Coordinates2D } from "./coordinates-2D.interface";
export interface SpriteConfig {
  size: Coordinates2D;
  baseAnimationFrames: string[];
  currentBaseAnimationFrame: string;
  indexOfCurrentFrame: number;
  frameSkip: number;
  duration?: number;
}
