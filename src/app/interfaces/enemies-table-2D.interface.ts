import { Coordinates2D } from "./coordinates-2D.interface";
import { EnemyDeclaration } from "./enemy-declaration.interface";

export interface EnemiesTable2D {
  totalRowsCount: number;
  enemiesCount: number;
  columnsCount: number;
  offsetTop?: number;
  offsetLeft?: number;
  frameStep: Coordinates2D;
  frameSkip: number;
  speedProgression?: number;
  enemiesTable: EnemyDeclaration[];
}
