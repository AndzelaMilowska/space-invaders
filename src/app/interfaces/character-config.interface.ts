import { ElementConfig } from "./element-config.interface";

export interface CharacterConfig extends ElementConfig{
    lives: number,
    scorePrice?: number
}