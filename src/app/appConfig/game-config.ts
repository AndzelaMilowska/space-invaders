import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { canvasConfig } from "./canvas-config-data";
import { playerConfig } from "./player-config";
import { Table2D } from "../interfaces/table-2D.interface";
import {enemiesConfig} from './enemies-table-config'
import { enemyConfig } from "./enemy01-config";
import { GameData } from "../interfaces/game-data.interface";
import { ElementConfig } from "../interfaces/element-config.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";
import {bulletsConfig_01} from './bullets-config-01'
export class Config {
  //not sure is it right place for this method --> its the only method affecting config but must be invoked in game init //idk
  countEnemiesLeftOffset(): number {
    return (this.canvasConfig.x - this.enemiesConfig.columnsCount * (this.enemyConfig.size.x + this.enemiesConfig.padding)) / 2;
  }

  enemiesConfig: Table2D = enemiesConfig;

  enemyConfig: CharacterConfig = enemyConfig;

  canvasConfig: Coordinates2D = canvasConfig;

  playerConfig: CharacterConfig = playerConfig;

  bulletsConfig_01: ElementConfig = bulletsConfig_01

}


