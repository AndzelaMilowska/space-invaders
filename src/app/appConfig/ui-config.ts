import { constants } from "../constants/constants";
import { canvasConfig } from "./canvas-config-data";
export const uiConfig = {
  scoreConfig: {
    coordinates: {
      x: 8,
      y: 30,
    },
    fontConfig: "20px pixel",
    fontStyle: "#ffffff",
  },
  playerLives: {
    coordinates: {
      x: canvasConfig.x - 180,
      y: 30,
    },
    fontConfig: "20px pixel",
    fontStyle: "#ffffff",
    icon: constants.PLAYER_IMGS[0],
    iconSize: {
        x: 16*2,
        y: 8*2
    }
  },
};
