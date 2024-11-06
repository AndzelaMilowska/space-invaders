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
    icon: "https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png",
    iconSize: {
        x: 30,
        y: 30
    }
  },
};
