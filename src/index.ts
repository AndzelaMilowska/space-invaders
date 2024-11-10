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
import { UIRenderer } from "./app/renderers/ui-renderer";
import { UIDrawer } from "./app/drawers/ui-drawer";

const gameConfig = new Config();
const gameData = new GameplayData();

const playerActions = new Player();
const enemiesActions = new EnemiesActions(gameData, gameConfig)
const gameplayActions = new GameplayActions(gameConfig, gameData)

const gameInit = new GameInitialization(gameConfig, gameData, playerActions, enemiesActions);



const drawer = new Drawer("myCanvas", gameConfig.canvasConfig);
const enemiesDrawer = new EnemiesDrawer("myCanvas", gameConfig.canvasConfig);
const attacksDrawer = new AttackDrawer("myCanvas", gameConfig.canvasConfig);
const uiDrawer = new UIDrawer("myCanvas", gameConfig.canvasConfig)

const playerRenderer = new PlayerRenderer(drawer, playerActions, gameConfig, gameData, attacksDrawer);
const enemiesRenderer = new EnemiesRenderer(drawer, playerActions, gameConfig, gameData, enemiesDrawer, attacksDrawer, enemiesActions);
const uiRenderer = new UIRenderer(uiDrawer, gameData, gameConfig.uiConfig)
const game = new Renderer("myCanvas", gameConfig, playerRenderer, gameInit, enemiesRenderer, gameplayActions, uiRenderer);

game.renderGame();

/* 
    TODO list:

    - enemies fire
    - enemies bullets x player collision
    - lose condition
    -better score count

    - start screen
    - back to start screen after loosse


    * animations
*/
