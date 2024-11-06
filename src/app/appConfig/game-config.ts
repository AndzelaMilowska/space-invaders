import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { canvasConfig } from "./canvas-config-data";
import { playerConfig } from "./player-config";
import {enemiesConfig} from './enemies-table-config'
import { enemyConfig } from "./enemy01-config";
import { GameData } from "../interfaces/game-data.interface";
import { ElementConfig } from "../interfaces/element-config.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";
import {bulletsConfig_01} from './bullets-config-01'
import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";
import {UIConfigInterface} from "../interfaces/ui-config.interface"
import {uiConfig} from "./ui-config"

export class Config {
  countEnemiesLeftOffset(): number {
    return (this.canvasConfig.x - this.enemiesConfig.columnsCount * (this.enemyConfig.size.x + this.enemiesConfig.padding)) / 2;
  }

  enemiesConfig: EnemiesTable2D = enemiesConfig;

  enemyConfig: CharacterConfig = enemyConfig;

  canvasConfig: Coordinates2D = canvasConfig;

  playerConfig: CharacterConfig = playerConfig;

  bulletsConfig_01: ElementConfig = bulletsConfig_01

  uiConfig: UIConfigInterface = uiConfig

}


