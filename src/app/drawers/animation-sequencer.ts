import { GameplayData } from '../appConfig/game-data';
import {CharacterConfig} from '../interfaces/character-config.interface'
import { ElementConfig } from '../interfaces/element-config.interface';
export class AnimationSequencer {
    static changeDisplayedImg(elementConfig: CharacterConfig | ElementConfig) {
        elementConfig.indexOfCurrentFrame =
          elementConfig.indexOfCurrentFrame === elementConfig.baseAnimationFrames.length - 1 ? 0 : elementConfig.indexOfCurrentFrame + 1;
      }
}