import { constants } from "../constants/constants";
import { canvasConfig } from "./canvas-config-data";
export const uiConfig = {
  scoreConfig: {
    coordinates: {
      x: 8,
      y: 30,
    },
    fontConfig: "20px pixel",
    fontStyle: "#0095DD",
  },
  playerLives: {
    coordinates: {
      x: canvasConfig.x - 180,
      y: 30,
    },
    fontConfig: "20px pixel",
    fontStyle: "#0095DD",
    icon: constants.PLAYER_IMGS[0],
    iconSize: {
        x: 16*2,
        y: 8*2
    }
  },
};
