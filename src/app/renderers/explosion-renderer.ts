import { SpriteData } from "../interfaces/sprite-data.interface";
import { AnimationSequencer } from "../drawers/animation-sequencer";
import { Drawer } from "../drawers/base-drawer";
export class ExplosionRenderer {
  drawer: Drawer;

  constructor(drawer: Drawer) {
    this.drawer = drawer;
  }

  renderExplosions(explosionsArray: SpriteData[]) {
    for (let i = 0; i < explosionsArray.length; i++) {
      explosionsArray[i].animationFrame++;
      if (explosionsArray[i].animationFrame >= explosionsArray[i].type.duration) {
        explosionsArray.splice(i, 1);
        return;
      }
      this.drawer.drawElement(explosionsArray[i]);

      if (explosionsArray[i].animationFrame % explosionsArray[i].type.frameSkip === 0) {
        AnimationSequencer.changeDisplayedImg(explosionsArray[i].type);
      }
    }
  }
}
