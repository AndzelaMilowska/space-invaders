import { throttle } from "./decorators/throttle";
export class Player {
  isKeyPressed: any;

  constructor() {
    this.isKeyPressed = {
      right: false,
      left: false,
    };
  }

  detectMovement() {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
          this.isKeyPressed.right = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          this.isKeyPressed.left = true;
        }
      },
      false
    );
    document.addEventListener(
      "keyup",
      (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
          this.isKeyPressed.right = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          this.isKeyPressed.left = false;
        }
      },
      false
    );
  }

  movePlayer(configObject: any) {
    let playerData = configObject.gameConfig.playerData;
    if (this.isKeyPressed.right) {
      playerData.coordinates.x = Math.min(playerData.coordinates.x + 7, configObject.canvasConfig.x - playerData.size.x);
    } else if (this.isKeyPressed.left) {
      playerData.coordinates.x = Math.max(playerData.coordinates.x - 7, 0);
    }
  }

  // playerAttack() {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "x") {
  //       console.log('ixo')
  //     }
  //   })
  // }
  playerAttack(gameConfig: any) {
    document.addEventListener(
      "keydown",
      throttle((e: KeyboardEvent) => {
        if (e.key === "x") {
          gameConfig.playerBulletsConfig.playerShoots.push({ x: gameConfig.playerData.coordinates.x, y: gameConfig.playerData.coordinates.y });
        }
      }, 1000)
    );
  }
}
