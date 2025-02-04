import { constants } from "../constants/constants";
import { canvasConfig } from "./canvas-config-data";
import {stylesConfig} from './styles-config'
export const uiConfig = {

  scoreConfig: {
    coordinates: {
      x: 8,
      y: 30,
    },
    fontConfig: `${stylesConfig.secondaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
  },

  playerLives: {
    coordinates: {
      x: canvasConfig.x - 180,
      y: 30,
    },
    fontConfig: `${stylesConfig.secondaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    icon: constants.PLAYER_IMGS[0],
    iconSize: {
        x: 16*2,
        y: 8*2
    }
  },

};
