import { GameplayData } from "../appConfig/game-data";
import { AttackActions } from "../actions/attack-actions";
import { ElementData } from "../interfaces/element-data.interface";
import { Drawer } from "../drawers/base-drawer";
import { AnimationSequencer } from "../drawers/animation-sequencer";

export class AttacksRenderer extends AttackActions {
  drawer: Drawer;

  constructor(drawer: Drawer) {
    super();
    this.drawer = drawer;
  }

  renderBullets(shootsArray: ElementData[], gameData: GameplayData) {
    for (let i = 0; i < shootsArray.length; i++) {
      this.drawer.drawElement(shootsArray[i]);
      this.moveBullet(shootsArray[i]);
      if (gameData.currentFrameIndex % shootsArray[i].type.frameSkip === 0) {
        AnimationSequencer.changeDisplayedImg(shootsArray[i].type);
      }
    }
  }
}
