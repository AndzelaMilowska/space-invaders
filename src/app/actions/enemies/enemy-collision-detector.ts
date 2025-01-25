import { GameData } from "../../interfaces/game-data.interface";
import { CollisionDetector } from "../collision-detector";
import { CharacterData } from "../../interfaces/character-data.interface";

export class EnemyCollisionDetector extends CollisionDetector {
  static detectEnemyCollision(gameData: GameData, enemy: CharacterData) {
    let { playerShots} = gameData;
    this.detectCollision(playerShots, enemy, gameData.currentExplosions, () => {
      gameData.score = enemy.type.scorePrice ? gameData.score + enemy.type.scorePrice : gameData.score;
      gameData.killsCount++;
      
    });
  }
}
