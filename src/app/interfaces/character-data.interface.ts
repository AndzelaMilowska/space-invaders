import { CharacterConfig } from "./character-config.interface";
import { Coordinates2D } from "./coordinates-2D.interface";

export interface CharacterData {
    coordinates: Coordinates2D,
    lives: number,
    type: CharacterConfig
}