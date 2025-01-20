import {Coordinates2D} from './coordinates-2D.interface'
  
export interface ElementConfig {
  frameStep: Coordinates2D;
  size: Coordinates2D;
  padding? : number;
  baseAnimationFrames: string[];
  //should currentBaseAnimationFrame be in element data? 
  currentBaseAnimationFrame: string;
  indexOfCurrentFrame: number;
}