import { Drawer } from "../drawers/base-drawer";
import { CharacterData } from "../interfaces/character-data.interface";
import { ElementData } from "../interfaces/element-data.interface";
import { Frequency } from "../interfaces/frequency-interface";

export class AttackActions {
  moveBullet(elementData: ElementData) {
    elementData.coordinates.x += elementData.type.frameStep.x;
    elementData.coordinates.y += elementData.type.frameStep.y;
  }

  spawnBullet(character: CharacterData, shootsArray: ElementData[]) {
    if (character.bulletCountdown > 0) {
      return;
    }
    const newBullet: ElementData = {
      coordinates: {
        x: character.coordinates.x + character.type.size.x / 2,
        y: character.coordinates.y
      },
      type: character.type.fireType,
    };
    shootsArray.push(newBullet);
    character.bulletCountdown = this.calculateBulletCountdown(character.type.fireFrequency);
  }

  calculateBulletCountdown(frequency: Frequency) {
    return Math.floor(Math.random() * (frequency.max - frequency.min + 1) + frequency.min);
  }
}
