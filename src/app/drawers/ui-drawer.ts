import { EnemyDeclaration } from "../interfaces/enemy-declaration.interface";
import { UIElementInterface } from "../interfaces/ui-config.interface";
import { Drawer } from "./base-drawer";
import { AnimationSequencer } from "./animation-sequencer";
import { SpriteData } from "../interfaces/sprite-data.interface";
import { GameData } from "../interfaces/game-data.interface";
import { SpriteConfig } from "../interfaces/sprite-config.interface";

export class UIDrawer extends Drawer {
  drawScore(score: number, scoreConfig: UIElementInterface) {
    this.drawText(`Score: ${score.toFixed(5).substring(2)}`, scoreConfig.coordinates, scoreConfig.fontConfig, scoreConfig.fontStyle);
  }

  drawPlayerLives(livesData: number, livesStyleConfig: UIElementInterface) {
    this.drawText(`Lives: `, livesStyleConfig.coordinates, livesStyleConfig.fontConfig, livesStyleConfig.fontStyle);
    for (let i = 0; i < livesData; i++) {
      let baseImage = new Image();
      baseImage.src = livesStyleConfig.icon;
      this.canvasContext.drawImage(
        baseImage,
        livesStyleConfig.coordinates.x + i * livesStyleConfig.iconSize.x + 70,
        livesStyleConfig.coordinates.y - livesStyleConfig.iconSize.y - 1,
        livesStyleConfig.iconSize.x,
        livesStyleConfig.iconSize.y
      );
    }
  }

  drawStartScreenTextElement(UIElement: UIElementInterface, message?: string) {
    const { text, coordinates, fontConfig, fontStyle } = UIElement;
    this.drawCenteredText(text, coordinates, fontConfig, fontStyle);
  }

  drawScoreAdvancesTable(enemiesList: EnemyDeclaration[], UIElement: UIElementInterface) {
    const { coordinates, fontConfig, fontStyle } = UIElement;
    const padding = 10;
    for (let i = 0; i < enemiesList.length; i++) {
      const text = ` = ${enemiesList[i].type.scorePrice} PTS`;
      let textCoordinates = {
        x: coordinates.x + enemiesList[i].type.size.x / 2,
        y: coordinates.y - (i - 1) * (enemiesList[i].type.size.y + padding) + enemiesList[i].type.size.y - padding / 2,
      };
      this.drawCenteredText(text, textCoordinates, fontConfig, fontStyle);
      let textWidth = this.canvasContext.measureText(text).width;
      let iconCoordinates = {
        x: coordinates.x - textWidth / 2 - enemiesList[i].type.size.x / 2,
        y: coordinates.y - (i - 1) * (enemiesList[i].type.size.y + padding),
      };

      this.drawElement({ coordinates: iconCoordinates, type: enemiesList[i].type });
    }
  }

  drawSprites(spritesArray: SpriteData[], spritesTypesArray: SpriteConfig[], gameData: GameData) {
    for (let i = 0; i < spritesArray.length; i++) {
      this.drawElement(spritesArray[i]);
    }

    if (gameData.currentFrameIndex % spritesTypesArray[0].frameSkip === 0) {
      for (let i = 0; i < spritesTypesArray.length; i++) {
        AnimationSequencer.changeDisplayedImg(spritesTypesArray[i]);
      }
    }
  }
}
