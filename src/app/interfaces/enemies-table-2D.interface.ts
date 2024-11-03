import {Table2D} from './table-2D.interface'
import {Coordinates2D} from './coordinates-2D.interface'
export interface EnemiesTable2D extends Table2D {
    frameStep: Coordinates2D;
    frameSkip: number,
    speedProgression?: number
  }