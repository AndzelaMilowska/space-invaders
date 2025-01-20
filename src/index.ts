import "./main.scss";
import { Renderer } from "./app/renderers/renderer";
import { Config } from "./app/appConfig/game-config";
import { Player } from "./app/actions/player/player-actions";
import { Drawer } from "./app/drawers/base-drawer";
import { GameInitialization } from "./app/game-initialization";
import { GameplayData } from "./app/appConfig/game-data";
import { PlayerRenderer } from "./app/renderers/player-renderer";
import { EnemiesRenderer } from "./app/renderers/enemies-renderer";
import { EnemiesDrawer } from "./app/drawers/enemies-drawer";
import { AttackDrawer } from "./app/drawers/attack-drawer";
import { EnemiesActions } from "./app/actions/enemies/enemies-actions";
import { GameplayActions } from "./app/actions/gameplayActions";
import { CollisionDetector } from "./app/actions/collision-detector";
import { UIRenderer } from "./app/renderers/ui-renderer";
import { UIDrawer } from "./app/drawers/ui-drawer";

const gameConfig = new Config();
const gameData = new GameplayData();
const collisionDetector = new CollisionDetector()

const playerActions = new Player();
const enemiesActions = new EnemiesActions(gameData, gameConfig)
const gameplayActions = new GameplayActions(gameConfig, gameData)

const gameInit = new GameInitialization(gameConfig, gameData, playerActions, enemiesActions);



const drawer = new Drawer("myCanvas", gameConfig.canvasConfig);
const enemiesDrawer = new EnemiesDrawer("myCanvas", gameConfig.canvasConfig);
const attacksDrawer = new AttackDrawer("myCanvas", gameConfig.canvasConfig);
const uiDrawer = new UIDrawer("myCanvas", gameConfig.canvasConfig)

const playerRenderer = new PlayerRenderer(drawer, playerActions, gameConfig, gameData, attacksDrawer, collisionDetector);
const enemiesRenderer = new EnemiesRenderer(drawer, playerActions, gameConfig, gameData, enemiesDrawer, attacksDrawer, enemiesActions, collisionDetector);
const uiRenderer = new UIRenderer(uiDrawer, gameData, gameConfig.uiConfig)
const game = new Renderer("myCanvas", gameConfig, gameData, playerRenderer, gameInit, enemiesRenderer, gameplayActions, uiRenderer);

game.renderApplication();

/* 
    TODO list:
    FIX Enemies ATTACK

    - unit tests !!!!!
    
    - freeze player position after death
    - loose if enemies reach the bottom of the canvas


    - win/ loose display - game over / you win & score -> return to menu button

    - start screen
    - back to start screen after loose


    * animations



   add death animations

    Why attack and element has separete drawers? 
    It should not be a concern to drawer what type of entity is being drawn.
    Read about polymorphism more.
*/
