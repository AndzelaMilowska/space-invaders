import { CharacterConfig } from "./character-config.interface";
import {ElementData} from './element-data.interface'

export interface CharacterData extends ElementData {
    lives: number,
    type: CharacterConfig
    bulletCountdown?: number
}