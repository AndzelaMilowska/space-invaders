//import {Table2D} from './table-2D.interface'
import {Coordinates2D} from './coordinates-2D.interface'
import {EnemyDeclaration} from './enemy-declaration.interface'
// export interface EnemiesTable2D extends Table2D {
//     frameStep: Coordinates2D;
//     frameSkip: number,
//     speedProgression?: number
//   }

// clean up later, is offset needed here? 
export interface EnemiesTable2D {
  totalRowsCount: number,
  enemiesCount: number,
  columnsCount: number,
  offsetTop?: number,
  offsetLeft?: number,
  frameStep: Coordinates2D, 
  frameSkip: number,
  speedProgression?: number,
  enemiesTable: EnemyDeclaration[]
}