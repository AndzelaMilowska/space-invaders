import { UIElementInterface } from "../interfaces/ui-config.interface";
import { Drawer } from "./base-drawer";
export class UIDrawer extends Drawer {
  drawScore(score: number, scoreConfig: UIElementInterface) {
    this.drawText(`Score: ${score}`, scoreConfig.coordinates, scoreConfig.fontConfig, scoreConfig.fontStyle);
  }

  drawPlayerLives(livesData: number, livesStyleConfig: UIElementInterface) {
    this.drawText(`Lives: `, livesStyleConfig.coordinates, livesStyleConfig.fontConfig, livesStyleConfig.fontStyle);
    for (let i=0; i<livesData; i++) {
        let baseImage = new Image();
        baseImage.src = livesStyleConfig.icon;
        this.canvasContext.drawImage(
            baseImage,
            livesStyleConfig.coordinates.x + i * livesStyleConfig.iconSize.x + 70,
            livesStyleConfig.coordinates.y - (livesStyleConfig.iconSize.y ) -1,
            livesStyleConfig.iconSize.x,
            livesStyleConfig.iconSize.y
        )
    }
  }

}
