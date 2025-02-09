import { GameData } from "../../interfaces/game-data.interface";
import { CollisionDetector } from "../collision-detector";
import { CharacterData } from "../../interfaces/character-data.interface";

export class EnemyCollisionDetector extends CollisionDetector {
  static detectEnemyCollision(gameData: GameData, enemy: CharacterData) {
    let { playerShots } = gameData;
    this.detectCollision(playerShots, enemy, gameData.currentExplosions, () => {
      gameData.killsCount++;
      if (!enemy.type.scorePrice) return;
      gameData.score = gameData.score + enemy.type.scorePrice * 0.00001;
    });
  }
}
