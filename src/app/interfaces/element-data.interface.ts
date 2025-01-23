import { Coordinates2D } from "./coordinates-2D.interface"
import { ElementConfig } from "./element-config.interface"

export interface ElementData {
    coordinates: Coordinates2D,
    type: ElementConfig
}