import Tile from "./tile.js";
export class Game {

    static generateMap(width, length) {
        let map = {};
        for (let x = 0; x < width; x++) {
            map[x] = {};
            for (let y = 0; y < length; y++) {
                map[x][y] = new Tile(x, y);
            }
        }
        return map;
    }



    constructor() {
        console.log("Loading map...");
        this.canvas = document.querySelector("canvas#game");
        this.map = Game.generateMap(10, 10);
        console.log("Map generated!");
        console.log("Game created!");
    }

}

const game = new Game();