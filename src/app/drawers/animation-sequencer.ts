import { SpriteConfig } from '../interfaces/sprite-config.interface';

export class AnimationSequencer {
    
    static changeDisplayedImg(elementConfig: SpriteConfig) {
        elementConfig.indexOfCurrentFrame =
          elementConfig.indexOfCurrentFrame === elementConfig.baseAnimationFrames.length - 1 ? 0 : elementConfig.indexOfCurrentFrame + 1;
      }
}