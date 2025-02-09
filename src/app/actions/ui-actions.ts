import { SpriteData } from "../interfaces/sprite-data.interface";
import { UIElementInterface } from "../interfaces/ui-config.interface";

export class UiActions {
  endGameMenuSprites: SpriteData[];

  initiateGameEndSprites(sprite01: SpriteData, sprite02: SpriteData, parentElement: UIElementInterface, numberOfEachSprite: number) {
    let spritesArray: SpriteData[] = [];
    for (let i = 0; i < numberOfEachSprite; i++) {
      spritesArray.push({ ...sprite01 });
      spritesArray.push({ ...sprite02 });
    }

    const spritesPadding = 10;
    const totalSpritesWidth =
      sprite01.type.size.x * numberOfEachSprite + sprite02.type.size.x * numberOfEachSprite + (numberOfEachSprite - 1) * spritesPadding;
    const xStart = parentElement.coordinates.x - totalSpritesWidth / 2 - sprite01.type.size.x / 4;
    const y = parentElement.coordinates.y + sprite01.type.size.y;
    spritesArray[0].coordinates = { x: xStart, y: y };

    for (let i = 1; i < spritesArray.length; i++) {
      spritesArray[i].coordinates = { x: spritesArray[i - 1].coordinates.x + spritesPadding + sprite02.type.size.x, y: y };
    }
    this.endGameMenuSprites = spritesArray;
  }

  listenForAnyKeyClick(callback: Function) {
    function onKeyDown(e: KeyboardEvent) {
      document.removeEventListener("keydown", onKeyDown);
      callback();
    }

    document.addEventListener("keydown", onKeyDown);
  }
}
