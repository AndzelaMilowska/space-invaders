import { constants } from "../constants/constants";
import { CharacterConfig } from "../interfaces/character-config.interface";

export const enemyConfig: CharacterConfig = {
    size: {
        x: 16*3,
        y: 8*3,
      },
      frameStep: {
        x: 2,
        y: 0,
      },
      lives: 1,
      imgs: constants.ENEMY_01_IMGS,
      currentImg: '',
      scorePrice: 10
  }