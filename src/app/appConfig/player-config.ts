import { constants } from "../constants/constants";
import { CharacterConfig } from "../interfaces/character-config.interface";

export const playerConfig: CharacterConfig = {
    size: {
        x: 50,
        y: 50,
    },
    frameStep: {
        x: 2,
        y: 0
    },
    imgs: constants.PLAYER_IMGS,
    lives: 3,

}



