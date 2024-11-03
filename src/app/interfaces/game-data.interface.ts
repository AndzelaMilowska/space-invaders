import { CharacterData } from "./character-data.interface";
import { Coordinates2D } from "./coordinates-2D.interface";

export interface GameData {
  player: CharacterData;
  enemies: CharacterData[][];
  playerShots: Coordinates2D[];
  enemyShots: Coordinates2D[];
  score: number;
  killsCount: number;
  enemiesTable: {
    skippedFrameCounter: number;
    coordinates: Coordinates2D;
  };
}
