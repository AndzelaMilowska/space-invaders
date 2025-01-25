import { Coordinates2D } from "./coordinates-2D.interface";
import { SpriteConfig } from "./sprite-config.interface";

export interface SpriteData {
    coordinates: Coordinates2D,
    type: SpriteConfig,
    animationFrame?: number
}