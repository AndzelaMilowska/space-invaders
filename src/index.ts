import "./main.scss";
import { Renderer } from "./app/renderers/renderer";
import { Config } from "./app/appConfig/game-config";
import { Player } from "./app/player-actions";
import { Drawer } from "./app/drawers/base-drawer";
import { GameInitialization } from "./app/game-initialization";
import { GameplayData } from "./app/appConfig/game-data";
import { PlayerRenderer } from "./app/renderers/player-renderer";
import { EnemiesRenderer } from "./app/renderers/enemies-renderer";
import { EnemiesDrawer } from "./app/drawers/enemies-drawer";
import { AttackDrawer } from "./app/drawers/attack-drawer";

const gameConfig = new Config();
const gameData = new GameplayData();
const player = new Player();
const gameInit = new GameInitialization(gameConfig, gameData, player);

const drawer = new Drawer("myCanvas", gameConfig.canvasConfig);
const enemiesDrawer = new EnemiesDrawer("myCanvas", gameConfig.canvasConfig);
const attacksDrawer = new AttackDrawer("myCanvas", gameConfig.canvasConfig);

const playerRenderer = new PlayerRenderer(drawer, player, gameConfig, gameData);
const enemiesRenderer = new EnemiesRenderer(drawer, player, gameConfig, gameData, enemiesDrawer, attacksDrawer);
const game = new Renderer("myCanvas", gameConfig, playerRenderer, gameInit, enemiesRenderer);

game.renderGame();

/* 
    TODO list:
    - draw score
    - enemies fire
    - enemies movement
    - enemies bullets x player collision
    - win condition
    - lose condition

    * animations
*/
