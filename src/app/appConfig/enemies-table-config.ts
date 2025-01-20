import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";
import { enemyConfig01 } from "./enemy01-config";
import { enemyConfig02 } from "./enemy02-config";
export const enemiesConfig: EnemiesTable2D = {
  totalRowsCount: 5,
  //enemies count should be in game data
  enemiesCount: 0,
  columnsCount: 11,
  // padding: 10,
  offsetTop: 50,
  offsetLeft: 200,
  frameStep: {
    x: 12,
    y: 12,
  },
  frameSkip: 50,
  speedProgression: 2,
  enemiesTable: [
    {
      type: enemyConfig01,
      rowsCount: 2
    },
    {
      type: enemyConfig02,
      rowsCount: 3,
    },
  ],
};
