import { constants } from "../constants/constants";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { bulletsConfig_01 } from "./bullets-config-01";
import { explosionConfig_01 } from "./explosion-config-01";

export const playerConfig: CharacterConfig = {

  size: {
    x: 16 * 3,
    y: 8 * 3,
  },

  frameStep: {
    x: 5,
    y: 0,
  },

  baseAnimationFrames: constants.PLAYER_IMGS,

  currentBaseAnimationFrame: constants.PLAYER_IMGS[0],

  indexOfCurrentFrame: 0,

  lives: 3,

  fireType: bulletsConfig_01,

  fireFrequency: {
    min: 50,
    max: 55,
  },

  frameSkip: 1000,

  deathAnimationConfig: explosionConfig_01,
  
  timeToRespawn: 200
};
