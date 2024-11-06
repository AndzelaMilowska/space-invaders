import {EnemiesTable2D} from '../interfaces/enemies-table-2D.interface'
import { enemyConfig } from './enemy01-config';
export const enemiesConfig: EnemiesTable2D = {
    rowsCount: 3,
    columnsCount: 5,
    padding: 10,
    offsetTop: 50,
    offsetLeft: 200,
    frameStep: {
      x: enemyConfig.size.x / 4,
      y: enemyConfig.size.y / 2,
    },
    frameSkip: 80,
    speedProgression: 10
  };
