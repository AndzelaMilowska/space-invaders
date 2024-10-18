import { constants } from "../constants";
import { CharacterConfig } from "../interfaces/character-config.interface";

export const enemyConfig: CharacterConfig = {
    size: {
        x: 40,
        y: 40,
      },
      frameStep: {
        x: 0,
        y: 0,
      },
      lives: 1,
      imgs: constants.ENEMY_01_IMGS,
  }