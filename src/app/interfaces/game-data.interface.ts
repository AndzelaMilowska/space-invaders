import { CharacterData } from "./character-data.interface";
import { Coordinates2D } from "./coordinates-2D.interface";
import { ElementData } from "./element-data.interface";
import { SpriteData } from "./sprite-data.interface";

export interface GameData {
  gameStatus: string;
  player: CharacterData;
  enemies: CharacterData[][];
  playerShots: ElementData[];
  enemyShots: ElementData[];
  score: number;
  killsCount: number;
  enemiesTable: {
    skippedFrameCounter: number;
    coordinates: Coordinates2D;
  };
  currentFrameIndex: number;
  currentExplosions: SpriteData[];
  highestScore: number;
}
