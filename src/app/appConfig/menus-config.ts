import { stylesConfig } from "./styles-config";
import { canvasConfig } from "./canvas-config-data";
export const menusConfig = {
  startGame: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y - canvasConfig.y / 4,
    },
    fontConfig: `${stylesConfig.primaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: "PRESS ANY KEY TO START",
  },

  howToPlayInfo: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y - canvasConfig.y / 6,
    },
    fontConfig: `${stylesConfig.secondaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: `ATTACK X
        MOVE ← → `,
  },

  scoreAdvancesTable: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y / 2,
    },
    fontConfig: `${stylesConfig.secondaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
  },

  title: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y / 3,
    },
    fontConfig: `${stylesConfig.titleFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: "SPACE INVADERS",
  },

  gameLoose: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y / 2,
    },
    fontConfig: `${stylesConfig.titleFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: "GAME OVER",
  },

  gameWin: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y / 3 + 50,
    },
    fontConfig: `${stylesConfig.titleFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: "YOU WIN",
  },

  backToMenu: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y - canvasConfig.y / 6,
    },
    fontConfig: `${stylesConfig.secondaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: "PRESS ANY KEY", //`RETURN TO MAIN MENU`
  },

  highestScore: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: 30,
    },
    fontConfig: `${stylesConfig.secondaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: `HI-SCORE: `,
  },

  newHighestScore: {
    coordinates: {
      x: canvasConfig.x / 2,
      y: canvasConfig.y / 3 + 100,
    },
    fontConfig: `${stylesConfig.primaryFontSize} ${stylesConfig.primaryFont}`,
    fontStyle: stylesConfig.primaryFontStyle,
    text: `NEW RECORD!`,
  },
};
