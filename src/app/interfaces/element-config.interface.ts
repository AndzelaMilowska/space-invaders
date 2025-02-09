import { Coordinates2D } from "./coordinates-2D.interface";
import { SpriteConfig } from "./sprite-config.interface";
export interface ElementConfig extends SpriteConfig {
  frameStep: Coordinates2D;
  padding?: number;
}
