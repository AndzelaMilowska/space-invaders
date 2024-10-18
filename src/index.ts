import './main.scss'
import {Renderer} from './app/renderer'
import { Config } from './app/appConfig/game-config'
import { Player } from './app/player-actions'
import { Drawer } from './app/drawers/drawer-base'
import { GameInitialization } from './app/game-initialization'


let gameConfig = new Config()
let game = new Renderer('myCanvas', gameConfig, new Player(), new Drawer('myCanvas', gameConfig.canvasConfig), new GameInitialization(gameConfig))
game.renderGame()


//make enemies movement
//covert ball into bullets
//one config interface
//one elementData interface --> then extend it?