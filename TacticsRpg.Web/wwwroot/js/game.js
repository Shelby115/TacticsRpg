import Tile from "./tile.js";
export class Game {

    static generateMap(width, length, tileSize) {
        let map = {};
        for (let x = 0; x < width; x++) {
            map[x] = {};
            for (let y = 0; y < length; y++) {
                map[x][y] = new Tile(x, y, tileSize);
            }
        }
        return map;
    }

    constructor() {
        let game = this;
        console.log("Loading map...");
        game.mapWidth = 8;
        game.mapHeight = 6;
        game.tileSize = 100;
        game.map = Game.generateMap(game.mapWidth, game.mapHeight, game.tileSize);
        console.log("Map generated!");
        game.engine = new Phaser.Game({
            type: Phaser.WEBGL,
            width: 800,
            height: 600,
            scene: {
                preload: function () {
                    Game.loadDependencies(game, this);
                },
                create: function () {
                    Game.renderMap(game, this);
                }
            }
        });

    }

    static loadDependencies(game, loader) {
        loader.load.image("tile", "images/grid.png");
    }

    static renderMap(game, loader) {
        let rt = loader.add.renderTexture(0, 0, 800, 600);
        for (let x = 0; x < game.mapWidth; x++)
            for (let y = 0; y < game.mapHeight; y++) {
                let tile = game.map[x][y];
                let sprite = loader.textures.getFrame("tile");
                rt.draw(sprite, tile.left, tile.top);
                loader.add.text(tile.left, tile.top, "(" + x + "," + y + ")");
            }
    }

}

const game = new Game();