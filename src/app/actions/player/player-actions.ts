import { Config } from "../../appConfig/game-config";
import { throttle } from "../../decorators/throttle";
import { GameData } from "../../interfaces/game-data.interface";
export class Player {
  isRightKeyPressed: boolean;
  isLeftKeyPressed: boolean;

  constructor() {
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
      playerData.coordinates.x = Math.min(playerData.coordinates.x + 7, configObject.canvasConfig.x - playerConfig.size.x);
    } else if (this.isLeftKeyPressed) {
      playerData.coordinates.x = Math.max(playerData.coordinates.x - 7, 0);
    }
  }

  //aaaaaa throttle is on keydown instead of shooting SO IF PLAYER IS MOVING IT ALSO AFFECTS SHOOTING
  //just put throttle in if? <-- nope adjust throttle for keydown event?
  playerAttack(gameData: GameData) {
    document.addEventListener(
      "keydown",
      throttle((e: KeyboardEvent) => {
        if (e.key === "x") {
          gameData.playerShots.push({
            x: gameData.player.coordinates.x,
            y: gameData.player.coordinates.y,
          });
        }
      }, 200)
    );
  }
}
