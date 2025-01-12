import {Coordinates2D} from './coordinates-2D.interface'
  
export interface ElementConfig {
  frameStep: Coordinates2D;
  size: Coordinates2D;
  baseAnimationFrames: string[];
  currentBaseAnimationFrame: string
}