import { Config } from "./game-config";
import { GameData } from "../interfaces/game-data.interface";
import { CharacterData } from "../interfaces/character-data.interface";
import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import {ApplicationStatus} from '../constants/application-status.enum'
import { ElementData } from "../interfaces/element-data.interface";
import { SpriteData } from "../interfaces/sprite-data.interface";
export class GameplayData extends Config implements GameData {
  currentFrameIndex: number = 0;
  gameStatus = ApplicationStatus.StartScreen;
  player: CharacterData = {
    coordinates: {
      x: (this.canvasConfig.x - this.playerConfig.size.x) / 2,
      y: this.canvasConfig.y - this.playerConfig.size.y - 20,
    },
    lives: this.playerConfig.lives,
    type: this.playerConfig,
    timeToRespawn: 0
  };
  enemies: CharacterData[][] = [];
  playerShots: ElementData[] = [];
  score: number = 0;
  killsCount: number = 0;
  enemyShots: ElementData[] = [];
  enemiesTable = {
    skippedFrameCounter: 50,
    coordinates: {
      x: 0,
      y: 0
    }
  }
  currentExplosions: SpriteData[] = []

}
