import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { CharacterData } from "../interfaces/character-data.interface";

export class CollisionDetector {
  //add colliderConfig to data in collidersArray (each collider should have "type" pointing to specific config (size, damage?)) 
  detectCollision (
    collidersArray: Coordinates2D[],
    elementData: CharacterData,
    elementConfig: CharacterConfig,
    callbackTasks?: Function,
  ) {
    if(elementData.lives < 1) {return}
    for (let i = 0; i < collidersArray.length; i++) {
      const elementLeftLedge = elementData.coordinates.x;
      const elementRightLedge = elementLeftLedge + elementConfig.size.x;
      const elementTopLedge = elementData.coordinates.y;
      const elementBotLedge = elementTopLedge + elementConfig.size.y;
      if (
        collidersArray[i].x >= elementLeftLedge &&
        collidersArray[i].x <= elementRightLedge &&
        collidersArray[i].y >= elementTopLedge &&
        collidersArray[i].y <= elementBotLedge
      ) {
        collidersArray.splice(i, 1);
        elementData.lives--;
        if (callbackTasks) {
          callbackTasks();
        }
        return;
      }
    }
  }
}
