import './main.scss'
import {Renderer} from './app/renderer'
import { Config } from './app/appConfig/gameConfig'
import { Player } from './app/playerActions'
import { Drawer } from './app/drawers/drawerBase'
import { GameInitialization } from './app/gameInitialization'



let game = new Renderer('myCanvas', Config, new Player(), new Drawer('myCanvas', Config.canvasConfig), new GameInitialization(Config))
game.renderGame()


//then copy ball but only for collision purposes --> convert into bullets (on click and move in y axis)
//make enemies movement
//covert ball into bullets
