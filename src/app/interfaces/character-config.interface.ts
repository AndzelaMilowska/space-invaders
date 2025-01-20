import { ElementConfig } from "./element-config.interface";
import {BulletConfig} from './bullet-config.interface'
export interface CharacterConfig extends ElementConfig{
    lives: number,
    scorePrice?: number
    fireType: BulletConfig
}