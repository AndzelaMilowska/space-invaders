import { CharacterData } from "../interfaces/character-data.interface";
import { ElementData } from "../interfaces/element-data.interface";

export class CollisionDetector {
  //add colliderConfig to data in collidersArray (each collider should have "type" pointing to specific config (size, damage?)) 
  static detectCollision (
    collidersArray: ElementData[],
    elementData: CharacterData,
    callbackTasks?: Function,
  ) {
    const elementConfig = elementData.type
    if(elementData.lives < 1) {return}
    for (let i = 0; i < collidersArray.length; i++) {
      const elementLeftLedge = elementData.coordinates.x;
      const elementRightLedge = elementLeftLedge + elementConfig.size.x;
      const elementTopLedge = elementData.coordinates.y;
      const elementBotLedge = elementTopLedge + elementConfig.size.y;
      if (
        collidersArray[i].coordinates.x >= elementLeftLedge &&
        collidersArray[i].coordinates.x <= elementRightLedge &&
        collidersArray[i].coordinates.y >= elementTopLedge &&
        collidersArray[i].coordinates.y <= elementBotLedge
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
