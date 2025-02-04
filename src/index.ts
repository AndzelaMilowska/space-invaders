import "./main.scss";
import { Renderer } from "./app/renderers/renderer";
import { Config } from "./app/appConfig/game-config";
import { PlayerActions } from "./app/actions/player/player-actions";
import { Drawer } from "./app/drawers/base-drawer";
import { GameInitialization } from "./app/game-initialization";
import { GameplayData } from "./app/appConfig/game-data";
import { PlayerRenderer } from "./app/renderers/player-renderer";
import { EnemiesRenderer } from "./app/renderers/enemies-renderer";
import { EnemiesDrawer } from "./app/drawers/enemies-drawer";
import { EnemiesActions } from "./app/actions/enemies/enemies-actions";
import { GameplayActions } from "./app/actions/gameplayActions";
import { UIRenderer } from "./app/renderers/ui-renderer";
import { UIDrawer } from "./app/drawers/ui-drawer";
import {AttacksRenderer} from './app/renderers/attacks-renderer'
import { ExplosionRenderer } from "./app/renderers/explosion-renderer";

const gameConfig = new Config();
const gameData = new GameplayData();

const playerActions = new PlayerActions();
const enemiesActions = new EnemiesActions(gameData, gameConfig)
const gameplayActions = new GameplayActions(gameConfig, gameData)

const gameInit = new GameInitialization(gameConfig, gameData, playerActions, enemiesActions);



const drawer = new Drawer("myCanvas", gameConfig.canvasConfig);
const enemiesDrawer = new EnemiesDrawer("myCanvas", gameConfig.canvasConfig);
const attacksRenderer = new AttacksRenderer(drawer)
const uiDrawer = new UIDrawer("myCanvas", gameConfig.canvasConfig)

const playerRenderer = new PlayerRenderer(drawer, playerActions, gameConfig, gameData, attacksRenderer);
const explosionsRenderer = new ExplosionRenderer(drawer)
const enemiesRenderer = new EnemiesRenderer( gameConfig, gameData, enemiesDrawer, attacksRenderer);
const uiRenderer = new UIRenderer(uiDrawer, gameData, gameConfig.uiConfig)
const game = new Renderer("myCanvas", gameConfig, gameData, playerRenderer, gameInit, enemiesRenderer, gameplayActions, uiRenderer, explosionsRenderer);

game.renderApplication();

/* 
    TODO list:

    - unit tests !!!!!
    

    - loose if enemies reach the bottom of the canvas


    - win/ loose display - game over / you win & score -> return to menu button

    - start screen
    - back to start screen after loose

*/
