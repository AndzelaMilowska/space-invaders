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

const gameConfig = new Config();
const gameData = new GameplayData();
const player = new Player();
const gameInit = new GameInitialization(gameConfig, gameData, player);

const enemiesActions = new EnemiesActions(gameData, gameConfig)
const gameplayActions = new GameplayActions(gameConfig, gameData)

const drawer = new Drawer("myCanvas", gameConfig.canvasConfig);
const enemiesDrawer = new EnemiesDrawer("myCanvas", gameConfig.canvasConfig);
const attacksDrawer = new AttackDrawer("myCanvas", gameConfig.canvasConfig);

const playerRenderer = new PlayerRenderer(drawer, player, gameConfig, gameData);
const enemiesRenderer = new EnemiesRenderer(drawer, player, gameConfig, gameData, enemiesDrawer, attacksDrawer, enemiesActions);
const game = new Renderer("myCanvas", gameConfig, playerRenderer, gameInit, enemiesRenderer, gameplayActions);

game.renderGame();

/* 
    TODO list:
    - draw score
    - draw lives
    - enemies fire
    - enemies movement
        -enemies should move with dynamic time throttle
    - enemies bullets x player collision
    - win condition
    - lose condition

    * animations
*/
