import { SpriteConfig } from "../interfaces/sprite-config.interface";
import { constants } from "../constants/constants";

export let explosionConfig_01: SpriteConfig = {
  size: {
    x: 16 * 3,
    y: 8 * 3,
  },
  baseAnimationFrames: constants.PLAYER_EXPLOSION,
  currentBaseAnimationFrame: "",
  indexOfCurrentFrame: 0,
  frameSkip: 15,
  duration: 44
};
