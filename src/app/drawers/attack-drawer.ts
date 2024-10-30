import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { ElementConfig } from "../interfaces/element-config.interface";
import { Drawer } from "./base-drawer";

export class AttackDrawer extends Drawer {
  //dla pocisków enemy wystarczy generate bullet for coordinates of random element of enemiesArray

  drawBullet(bulletData: Coordinates2D, bulletsConfig: ElementConfig) {
    this.drawRect(bulletData, bulletsConfig, "#0095DD");
  }

  drawShots(bulletsConfig: ElementConfig, shootsArray: Coordinates2D[]) {
    for (let i = 0; i < shootsArray.length; i++) {
      this.drawBullet(shootsArray[i], bulletsConfig);
      shootsArray[i].y = shootsArray[i].y - bulletsConfig.frameStep.y;
    }
  }
}
