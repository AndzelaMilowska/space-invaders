import { Coordinates2D } from "../interfaces/coordinates-2D.interface";
import { canvasConfig } from "./canvas-config-data";
import { playerConfig } from "./player-config";
import {enemiesConfig} from './enemies-table-config'
import { enemyConfig01 } from "./enemy01-config";
//import { GameData } from "../interfaces/game-data.interface";
import { ElementConfig } from "../interfaces/element-config.interface";
import { CharacterConfig } from "../interfaces/character-config.interface";
import {bulletsConfig_01} from './bullets-config-01'
import {bulletsConfig_02} from './bullets-config-02'

import { EnemiesTable2D } from "../interfaces/enemies-table-2D.interface";
import {UIConfigInterface} from "../interfaces/ui-config.interface"
import {uiConfig} from "./ui-config"

export class Config {
  //need to be changed
  countEnemiesLeftOffset(): number {
    return (this.canvasConfig.x - this.enemiesConfig.columnsCount * (enemyConfig01.size.x + enemyConfig01.padding)) / 2;
  }

  enemiesConfig: EnemiesTable2D = enemiesConfig;

 // enemyConfig01: CharacterConfig = enemyConfig01;

  canvasConfig: Coordinates2D = canvasConfig;

  playerConfig: CharacterConfig = playerConfig;

  //bulletsConfig_01: ElementConfig = bulletsConfig_01 --> put bullet config in Character Config

  //bulletsConfig_02: ElementConfig = bulletsConfig_02

  uiConfig: UIConfigInterface = uiConfig

}


