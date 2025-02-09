import { constants } from "../constants/constants";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { bulletsConfig_02 } from "./bullets-config-02"; 
import { explosionConfig_02 } from "./explosion-config-02";

export const enemyConfig02: CharacterConfig = {
    size: {
        x: 16*3,
        y: 8*3,
      },
      frameStep: {
        x: 2,
        y: 0,
      },
      padding: 10,
      lives: 1,
      baseAnimationFrames: constants.ENEMY_02_IMGS,
      currentBaseAnimationFrame: '',
      indexOfCurrentFrame: 0,
      scorePrice: 10,
      fireType: bulletsConfig_02,
      fireFrequency: {
        min: 400,
        max: 3000
      },
      frameSkip: 50,
        deathAnimationConfig: explosionConfig_02,
  }