import { constants } from "../constants/constants";
import { CharacterConfig } from "../interfaces/character-config.interface";

export const playerConfig: CharacterConfig = {
    size: {
        x: 16*3,
        y: 8*3,
    },
    frameStep: {
        x: 2,
        y: 0
    },
    imgs: constants.PLAYER_IMGS,
    currentImg: constants.PLAYER_IMGS[0],
    lives: 3,

}



