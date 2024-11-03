import { Config } from "./game-config";
import { GameData } from "../interfaces/game-data.interface";
import { CharacterData } from "../interfaces/character-data.interface";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
export class GameplayData extends Config implements GameData {
  player: CharacterData = {
    coordinates: {
      x: (this.canvasConfig.x - this.playerConfig.size.x) / 2,
      y: this.canvasConfig.y - this.playerConfig.size.y - 20,
    },
    lives: this.playerConfig.lives,
  };
  enemies: CharacterData[][] = [];
  playerShots: Coordinates2D[] = [];
  score: number = 0;
  killsCount: number = 0;
  enemyShots: Coordinates2D[] = [];
  enemiesTable = {
    skippedFrameCounter: 0,
    coordinates: {
      x: 0,
      y: 0
    }
  }
}
