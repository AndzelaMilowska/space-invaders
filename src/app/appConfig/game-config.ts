import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { canvasConfig } from "./canvas-config-data";
import { playerConfig } from "./player-config";
import { enemiesConfig } from "./enemies-table-config";
import { enemyConfig01 } from "./enemy01-config";
import { CharacterConfig } from "../interfaces/character-config.interface";
import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";
import { UIConfigInterface } from "../interfaces/ui-config.interface";
import { uiConfig } from "./ui-config";

export class Config {
  countEnemiesLeftOffset(): number {
    return (this.canvasConfig.x - this.enemiesConfig.columnsCount * (enemyConfig01.size.x + enemyConfig01.padding)) / 2;
  }

  enemiesConfig: EnemiesTable2D = enemiesConfig;

  canvasConfig: Coordinates2D = canvasConfig;

  playerConfig: CharacterConfig = playerConfig;

  uiConfig: UIConfigInterface = uiConfig;
}
