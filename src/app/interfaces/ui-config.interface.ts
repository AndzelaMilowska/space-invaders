import { Coordinates2D } from "./coordinates-2D.interface";

export interface UIConfigInterface {
  scoreConfig: UIElementInterface;
  playerLives: UIElementInterface;
}

export interface UIElementInterface {
  coordinates: Coordinates2D;
  fontConfig: string;
  fontStyle: string;
  icon?: string;
  iconSize?: Coordinates2D
  text?: string
}
