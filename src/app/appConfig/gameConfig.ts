import { Coordinates2D } from "../interfaces/coordinates2DInterface";
import { ElementData } from "../interfaces/elementDataInterface";
import { canvasConfig } from "./canvasConfigData";
import { playerConfig } from "./playerConfig";

export class Config {
  static enemiesConfig = {
    enemiesRowCount: 3,
    enemiesColumnCount: 5,
    enemyPadding: 10,
    enemiesOffsetTop: 30,
    enemiesOffsetLeft: 200,
    enemyData: {
      size: {
        x: 40,
        y: 40,
      },
      frameStep: {
        x: 0,
        y: 0,
      },
      imgs: [
        "https://scontent-waw2-1.xx.fbcdn.net/v/t1.15752-9/434178104_941623703977383_5375076372091801110_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=qGCX3WGBelsQ7kNvgEHUfLC&_nc_ht=scontent-waw2-1.xx&_nc_gid=A9YWReDI3bDP49YhgGb4IcX&oh=03_Q7cD1QG0jwS8jl_C177CKcE-rpRaWkq60u4Eyr9L0LhOaCevTw&oe=672E4DF2",
      ],
      coordinates: {
        x: 0,
        y: 0,
      },
      lives: 1,
    },
  };

  static canvasConfig = canvasConfig;

  static gameConfig = {
    playerData: {
      coordinates: {
        x: (canvasConfig.x - playerConfig.x) / 2,
        y: canvasConfig.y - playerConfig.y - 20,
      },
      frameStep: {
        x: 2,
        y: 0, // is y needed here? player cant move forward
      },
      size: {
        x: playerConfig.x,
        y: playerConfig.y,
      },
      imgs: [
        "https://static.vecteezy.com/system/resources/previews/013/078/569/non_2x/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png",
      ],
      lives: 3,
    },

    playerBulletsConfig: {
      frameStep: {
        x: 0,
        y: 2,
      },
      size: {
        x: 5,
        y: 15
      },
      playerShoots: <Coordinates2D><unknown>[]
    },
    enemiesData: <any>[],
  };

  static countEnemiesLeftOffset(): number {
    return (
      (this.canvasConfig.x -
        this.enemiesConfig.enemiesColumnCount * (this.enemiesConfig.enemyData.size.x + this.enemiesConfig.enemyPadding)) /
      2
    );
  }
}
