import { SpriteConfig } from "../interfaces/sprite-config.interface";
import { constants } from "../constants/constants";

export let explosionConfig_02: SpriteConfig = {
  size: {
    x: 16 * 3,
    y: 8 * 3,
  },
  baseAnimationFrames: constants.ENEMY_01_EXPLOSION,
  currentBaseAnimationFrame: "",
  indexOfCurrentFrame: 0,
  frameSkip: 100,
  duration: 20
};
