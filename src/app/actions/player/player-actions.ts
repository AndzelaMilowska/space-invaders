import { Config } from "../../appConfig/game-config";
import { throttle } from "../../decorators/throttle";
import { GameData } from "../../interfaces/game-data.interface";
import { AttackActions } from "../attack-actions";
export class PlayerActions extends AttackActions{
  isRightKeyPressed: boolean;
  isLeftKeyPressed: boolean;

  constructor() {
    super()
    this.isRightKeyPressed = false;
    this.isLeftKeyPressed = false;
  }

  detectMovement() {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
          this.isRightKeyPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          this.isLeftKeyPressed = true;
        }
      },
      false
    );
    document.addEventListener(
      "keyup",
      (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
          this.isRightKeyPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          this.isLeftKeyPressed = false;
        }
      },
      false
    );
  }

  movePlayer(configObject: Config, gameData: GameData) {
    let playerData = gameData.player;
    let playerConfig = configObject.playerConfig;
    if (this.isRightKeyPressed) {
      //what are those random numbers?
      playerData.coordinates.x = Math.min(playerData.coordinates.x + 7, configObject.canvasConfig.x - playerConfig.size.x);
    } else if (this.isLeftKeyPressed) {
      playerData.coordinates.x = Math.max(playerData.coordinates.x - 7, 0);
    }
  }

  playerAttack(gameData: GameData) {
    document.addEventListener(
      "keydown", (e: KeyboardEvent) => {
        if (e.key === "x") {
          this.spawnBullet(gameData.player, gameData.playerShots)
        }
      }
    );
  }

}
