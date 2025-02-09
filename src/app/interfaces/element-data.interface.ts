import { ElementConfig } from "./element-config.interface";
import { SpriteData } from "./sprite-data.interface";
export interface ElementData extends SpriteData {
  type: ElementConfig;
}
