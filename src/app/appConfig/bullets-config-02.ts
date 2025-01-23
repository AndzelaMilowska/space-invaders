import { constants } from '../constants/constants'
import { BulletConfig } from '../interfaces/bullet-config.interface'
export const bulletsConfig_02: BulletConfig = {
    frameStep: {
      x: 0,
      y: 3,
    },
    size: {
      x: 7,
      y: 21,
    },
    baseAnimationFrames: constants.FIRE_01_IMGS,
    currentBaseAnimationFrame: '',
    indexOfCurrentFrame: 0,
    damage: 1,
    frameSkip: 15
  }